/*
  # Fetch Weather Data Function

  1. Purpose
    - Fetches latest METAR and TAF data from NOAA Aviation Weather Center
    - Serves as secure proxy to avoid CORS issues
    - Returns parsed weather data for BKPR station (Pristina Airport)

  2. Data Sources
    - METAR: Current weather observations
    - TAF: Terminal Aerodrome Forecasts
    - Source: NOAA Aviation Weather Center (AWC)

  3. Response Format
    - Returns JSON with METAR and TAF raw strings
    - Includes timestamps and parsing status
*/

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

interface WeatherData {
  metar?: {
    raw: string;
    observation_time: string;
    temp_c?: string;
    wind_dir?: string;
    wind_speed?: string;
    visibility?: string;
    weather?: string;
  };
  taf?: {
    raw: string;
    issue_time: string;
    valid_time: string;
  };
  error?: string;
  timestamp: string;
}

function parseMetar(metarString: string) {
  const parts = metarString.split(' ');
  const parsed: any = { raw: metarString };
  
  // Extract observation time (format: DDHHmmZ)
  const timeMatch = metarString.match(/(\d{6}Z)/);
  if (timeMatch) {
    parsed.observation_time = timeMatch[1];
  }
  
  // Extract temperature (format: M?DD/M?DD or DD/DD)
  const tempMatch = metarString.match(/(M?\d{2})\/(M?\d{2})/);
  if (tempMatch) {
    let temp = tempMatch[1];
    if (temp.startsWith('M')) {
      temp = '-' + temp.substring(1);
    }
    parsed.temp_c = temp;
  }
  
  // Extract wind (format: DDDddKT or DDDddGddKT)
  const windMatch = metarString.match(/(\d{3})(\d{2,3})(?:G(\d{2,3}))?KT/);
  if (windMatch) {
    parsed.wind_dir = windMatch[1];
    parsed.wind_speed = windMatch[2];
    if (windMatch[3]) {
      parsed.wind_gust = windMatch[3];
    }
  }
  
  // Extract visibility
  const visMatch = metarString.match(/(\d{4})\s/);
  if (visMatch) {
    const vis = parseInt(visMatch[1]);
    parsed.visibility = vis >= 9999 ? '10+' : (vis / 1000).toFixed(1);
  }
  
  // Extract weather phenomena
  const weatherCodes = ['RA', 'SN', 'FG', 'BR', 'HZ', 'DZ', 'TS', 'SH'];
  for (const code of weatherCodes) {
    if (metarString.includes(code)) {
      parsed.weather = code;
      break;
    }
  }
  
  return parsed;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const weatherData: WeatherData = {
      timestamp: new Date().toISOString()
    };

    // Fetch METAR data
    try {
      const metarUrl = 'https://www.aviationweather.gov/adds/dataserver_current/httpparam?dataSource=metars&requestType=retrieve&format=xml&stationString=BKPR&hoursBeforeNow=2';
      const metarResponse = await fetch(metarUrl);
      const metarXml = await metarResponse.text();
      
      // Parse XML to extract METAR
      const metarMatch = metarXml.match(/<raw_text>(.*?)<\/raw_text>/);
      if (metarMatch) {
        const rawMetar = metarMatch[1];
        weatherData.metar = parseMetar(rawMetar);
      }
    } catch (error) {
      console.error('Error fetching METAR:', error);
    }

    // Fetch TAF data
    try {
      const tafUrl = 'https://www.aviationweather.gov/adds/dataserver_current/httpparam?dataSource=tafs&requestType=retrieve&format=xml&stationString=BKPR&hoursBeforeNow=6';
      const tafResponse = await fetch(tafUrl);
      const tafXml = await tafResponse.text();
      
      // Parse XML to extract TAF
      const tafMatch = tafXml.match(/<raw_text>(.*?)<\/raw_text>/);
      const issueTimeMatch = tafXml.match(/<issue_time>(.*?)<\/issue_time>/);
      const validTimeMatch = tafXml.match(/<valid_time_from>(.*?)<\/valid_time_from>.*?<valid_time_to>(.*?)<\/valid_time_to>/s);
      
      if (tafMatch) {
        weatherData.taf = {
          raw: tafMatch[1],
          issue_time: issueTimeMatch ? issueTimeMatch[1] : '',
          valid_time: validTimeMatch ? `${validTimeMatch[1]} to ${validTimeMatch[2]}` : ''
        };
      }
    } catch (error) {
      console.error('Error fetching TAF:', error);
    }

    // If no data was fetched, return error
    if (!weatherData.metar && !weatherData.taf) {
      weatherData.error = 'Unable to fetch weather data';
    }

    return new Response(
      JSON.stringify(weatherData),
      {
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      },
    );
  } catch (error) {
    console.error('Weather fetch error:', error);
    
    return new Response(
      JSON.stringify({
        error: 'Failed to fetch weather data',
        timestamp: new Date().toISOString()
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      },
    );
  }
});