import { Content } from '../types';

export const content: Record<'en' | 'sq', Content> = {
  en: {
    hero: {
      title: 'Ilir Isufi',
      subtitle: 'Aviation Weather Forecaster',
      description: 'Delivering critical weather forecasts for safe air navigation at Met Office of Pristina Airport',
      cta: 'Learn More'
    },
    nav: {
      about: 'About',
      experience: 'Experience',
      education: 'Education',
      certifications: 'Certifications',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact'
    },
    about: {
      title: 'About Me',
      description: [
        'Aviation Weather Forecaster at ANSA (Met Office of Pristina Airport) since 2016, specializing in critical weather analysis and forecasting for aviation safety.',
        'With expertise in TAF, LAF, and weather warnings, I ensure compliance with ICAO and WMO standards, contributing to safe air navigation through accurate meteorological services.',
        'My background in physics and extensive training from prestigious institutions like Met Office UK, NASA, and EUROCONTROL enables me to deliver precise weather intelligence for aviation operations.'
      ],
      coreSkills: {
        title: 'Core Competencies',
        skills: [
          'Aviation Weather Forecasting (TAF/LAF)',
          'Weather Warnings & Risk Assessment',
          'ICAO/WMO Standards Compliance',
          'Satellite & Radar Analysis',
          'Aviation Safety Protocols',
          'Meteorological Data Interpretation'
        ]
      }
    },
    experience: {
      title: 'Professional Experience',
      positions: [
        {
          title: 'Aeronautical Weather Forecaster',
          company: 'ANSA - Met Office of Pristina Airport',
          period: '2016 - Present',
          description: [
            'Provide critical weather forecasts and warnings for aviation operations',
            'Maintain ICAO and WMO compliance standards',
            'Analyze meteorological data for safe air navigation',
            'Collaborate with air traffic control and flight operations'
          ]
        },
        {
          title: 'Analyst',
          company: 'KEDS (Kosovo Energy Distribution Services)',
          period: '2015',
          description: [
            'Conducted data analysis for energy distribution systems',
            'Prepared technical reports and recommendations',
            'Supported operational decision-making processes'
          ]
        },
        {
          title: 'Teacher - Physics & Chemistry',
          company: 'Educational Institution',
          period: '2013 - 2014',
          description: [
            'Taught physics and chemistry to high school students',
            'Developed curriculum and educational materials',
            'Mentored students in scientific methodology'
          ]
        }
      ]
    },
    education: {
      title: 'Education & Training',
      items: [
        {
          title: 'Bachelor of Physics',
          institution: 'University of Pristina',
          year: '2013',
          description: 'Specialized in applied physics with focus on atmospheric sciences'
        },
        {
          title: 'Initial Forecasting Course',
          institution: 'Met Office, United Kingdom',
          year: '2016',
          description: 'Comprehensive training in meteorological forecasting techniques'
        },
        {
          title: 'Advanced Meteorological Training',
          institution: 'NASA, EUROCONTROL, WMO',
          year: '2017-2023',
          description: 'Continuous professional development in aviation meteorology'
        }
      ]
    },
    certifications: {
      title: 'Certifications & Professional Development',
      items: [
        {
          title: 'Aviation Weather Forecaster Certification',
          issuer: 'Met Office UK',
          year: '2016',
          description: 'Certified in aviation meteorological services and forecasting'
        },
        {
          title: 'ICAO Standards Compliance',
          issuer: 'International Civil Aviation Organization',
          year: '2017',
          description: 'Specialized training in aviation weather standards'
        },
        {
          title: 'Advanced Satellite Meteorology',
          issuer: 'NASA',
          year: '2018',
          description: 'Advanced training in satellite-based weather analysis'
        },
        {
          title: 'EUROCONTROL Weather Services',
          issuer: 'EUROCONTROL',
          year: '2019',
          description: 'European aviation weather service protocols'
        },
        {
          title: 'WMO Standards & Procedures',
          issuer: 'World Meteorological Organization',
          year: '2020',
          description: 'International meteorological standards and best practices'
        }
      ]
    },
    projects: {
      title: 'Projects & Presentations',
      items: [
        {
          title: 'SDEWES Conference Presentation',
          description: 'Presented research on sustainable aviation weather forecasting',
          year: '2023',
          details: [
            'Delivered technical presentation at SDEWES Conference in Dubrovnik',
            'Focused on sustainable approaches to aviation meteorology',
            'Shared insights on weather forecasting efficiency improvements',
            'Contributed to international meteorological knowledge exchange'
          ]
        },
        {
          title: 'Aviation Safety Enhancement Project',
          description: 'Led initiative to improve weather warning systems',
          year: '2022',
          details: [
            'Developed enhanced weather warning protocols',
            'Improved communication systems between meteorology and air traffic control',
            'Reduced weather-related flight delays by 15%',
            'Implemented new data visualization tools'
          ]
        }
      ]
    },
    skills: {
      title: 'Skills & Expertise',
      technical: {
        title: 'Technical Skills',
        skills: [
          'Weather Forecast Modeling',
          'Satellite Image Analysis',
          'Radar Data Interpretation',
          'Aviation Safety Protocols',
          'Fire Safety & Risk Assessment',
          'Meteorological Instrumentation',
          'Data Analysis & Visualization',
          'ICAO/WMO Standards Implementation'
        ]
      },
      soft: {
        title: 'Professional Skills',
        skills: [
          'Critical Decision Making Under Pressure',
          'Effective Communication',
          'Team Leadership & Collaboration',
          'Problem-Solving & Analysis',
          'Time Management & Prioritization',
          'Continuous Learning & Adaptation',
          'Technical Documentation',
          'Cross-Cultural Communication'
        ]
      },
      languages: {
        title: 'Languages',
        skills: [
          'Albanian (Native)',
          'English (B2 Level)',
          'Technical Aviation English'
        ]
      }
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Let\'s discuss aviation meteorology, collaboration opportunities, or professional inquiries',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        message: 'Message',
        send: 'Send Message'
      },
      info: {
        email: 'iliri.isufi@gmail.com',
        phone: '+383 49 857 171'
      }
    },
    footer: {
      copyright: '© 2024 Ilir Isufi. All rights reserved.'
    }
  },
  sq: {
    hero: {
      title: 'Ilir Isufi',
      subtitle: 'Parashikues Aeronautik Meteorologjik',
      description: 'Ofroj parashikime kritike të motit për navigacion të sigurt ajror në Zyrën Meteorologjike të Aeroportit të Prishtinës',
      cta: 'Mëso Më Shumë'
    },
    nav: {
      about: 'Rreth Meje',
      experience: 'Përvoja',
      education: 'Arsimi',
      certifications: 'Çertifikatat',
      projects: 'Projektet',
      skills: 'Aftësitë',
      contact: 'Kontakti'
    },
    about: {
      title: 'Rreth Meje',
      description: [
        'Parashikues i Motit Ajror në ANSA (Zyra Meteorologjike e Aeroportit të Prishtinës) që nga viti 2016, i specializuar në analizë kritike të motit dhe parashikime për sigurinë e aviacionit.',
        'Me ekspertizë në TAF, LAF, dhe paralajmërime të motit, siguroj përputhshmëri me standardet e ICAO dhe WMO, duke kontribuar në navigacion të sigurt ajror përmes shërbimeve të sakta meteorologjike.',
        'Formimi im në fizikë dhe trajnimi i gjerë nga institucione prestigjioze si Met Office UK, NASA, dhe EUROCONTROL më mundëson të ofroj inteligjencë të saktë të motit për operacionet e aviacionit.'
      ],
      coreSkills: {
        title: 'Kompetencat Kryesore',
        skills: [
          'Parashikimi i Motit Ajror (TAF/LAF)',
          'Paralajmërimet e Motit & Vlerësimi i Rrezikut',
          'Përputhshmëria me Standardet ICAO/WMO',
          'Analizë Satelitore & Radar',
          'Protokollet e Sigurisë së Aviacionit',
          'Interpretimi i të Dhënave Meteorologjike'
        ]
      }
    },
    experience: {
      title: 'Përvoja Profesionale',
      positions: [
        {
          title: 'Parashikues i Motit Aeronautik',
          company: 'ANSA - Zyra Meteorologjike e Aeroportit të Prishtinës',
          period: '2016 - Tash',
          description: [
            'Ofroj parashikime kritike të motit dhe paralajmërime për operacionet e aviacionit',
            'Mirëmbaj standardet e përputhshmërisë së ICAO dhe WMO',
            'Analizoj të dhënat meteorologjike për navigacion të sigurt ajror',
            'Bashkëpunoj me kontrollin e trafikut ajror dhe operacionet e fluturimeve'
          ]
        },
        {
          title: 'Analist',
          company: 'KEDS (Shërbimet e Shpërndarjes së Energjisë së Kosovës)',
          period: '2015',
          description: [
            'Kryeva analizë të të dhënave për sistemet e shpërndarjes së energjisë',
            'Përgatita raporte teknike dhe rekomandime',
            'Mbështeta proceset e vendimmarrjes operacionale'
          ]
        },
        {
          title: 'Mësues - Fizikë & Kimi',
          company: 'Institucioni Arsimor',
          period: '2013 - 2014',
          description: [
            'Kam dhënë mësim fizikë dhe kimi për studentët e shkollës së mesme',
            'Kam zhvilluar kurrikula dhe materiale arsimore',
            'Kam mentoruar studentët në metodologjinë shkencore'
          ]
        }
      ]
    },
    education: {
      title: 'Arsimi & Trajnimi',
      items: [
        {
          title: 'Bachelor në Fizikë',
          institution: 'Universiteti i Prishtinës',
          year: '2013',
          description: 'I specializuar në fizikë të aplikuar me fokus në shkencat atmosferike'
        },
        {
          title: 'Kursi Fillestar i Parashikimit',
          institution: 'Met Office, Mbretëria e Bashkuar',
          year: '2016',
          description: 'Trajnim gjithëpërfshirës në teknikat e parashikimit meteorologjik'
        },
        {
          title: 'Trajnimi i Avancuar Meteorologjik',
          institution: 'NASA, EUROCONTROL, WMO',
          year: '2017-2023',
          description: 'Zhvillim i vazhdueshëm profesional në meteorologji të aviacionit'
        }
      ]
    },
    certifications: {
      title: 'Çertifikatat & Zhvillimi Profesional',
      items: [
        {
          title: 'Çertifikimi i Parashikuesit të Motit të Aviacionit',
          issuer: 'Met Office UK',
          year: '2016',
          description: 'I çertifikuar në shërbimet meteorologjike të aviacionit dhe parashikime'
        },
        {
          title: 'Përputhshmëria me Standardet ICAO',
          issuer: 'Organizata Ndërkombëtare e Aviacionit Civil',
          year: '2017',
          description: 'Trajnim i specializuar në standardet e motit të aviacionit'
        },
        {
          title: 'Meteorologjia e Avancuar Satelitore',
          issuer: 'NASA',
          year: '2018',
          description: 'Trajnim i avancuar në analizë të motit të bazuar në satelit'
        },
        {
          title: 'Shërbimet e Motit EUROCONTROL',
          issuer: 'EUROCONTROL',
          year: '2019',
          description: 'Protokollet e shërbimeve të motit të aviacionit evropian'
        },
        {
          title: 'Standardet & Procedurat WMO',
          issuer: 'Organizata Botërore Meteorologjike',
          year: '2020',
          description: 'Standardet dhe praktikat më të mira meteorologjike ndërkombëtare'
        }
      ]
    },
    projects: {
      title: 'Projektet & Prezantimet',
      items: [
        {
          title: 'Prezantimi në Konferencën SDEWES',
          description: 'Prezantova kërkime mbi parashikimin e qëndrueshëm të motit të aviacionit',
          year: '2023',
          details: [
            'Dhashë prezantim teknik në Konferencën SDEWES në Dubrovnik',
            'U fokusova në qasjet e qëndrueshme të meteorologjisë së aviacionit',
            'Ndava njohuri mbi përmirësimet e efikasitetit të parashikimit të motit',
            'Kontribuova në shkëmbimin ndërkombëtar të njohurive meteorologjike'
          ]
        },
        {
          title: 'Projekti i Përmirësimit të Sigurisë së Aviacionit',
          description: 'Udhëhoqa iniciativën për përmirësimin e sistemeve të paralajmërimit të motit',
          year: '2022',
          details: [
            'Zhvillova protokolle të përmirësuara të paralajmërimit të motit',
            'Përmirësova sistemet e komunikimit midis meteorologjisë dhe kontrollit të trafikut ajror',
            'Reduktova vonesa të fluturimeve të lidhura me motin për 15%',
            'Implementova mjete të reja të vizualizimit të të dhënave'
          ]
        }
      ]
    },
    skills: {
      title: 'Aftësitë & Ekspertiza',
      technical: {
        title: 'Aftësitë Teknike',
        skills: [
          'Modelimi i Parashikimit të Motit',
          'Analizë e Imazheve Satelitore',
          'Interpretimi i të Dhënave Radar',
          'Protokollet e Sigurisë së Aviacionit',
          'Siguria nga Zjarri & Vlerësimi i Rrezikut',
          'Instrumentimi Meteorologjik',
          'Analizë & Vizualizim i të Dhënave',
          'Implementimi i Standardeve ICAO/WMO'
        ]
      },
      soft: {
        title: 'Aftësitë Profesionale',
        skills: [
          'Vendimmarrja Kritike nën Presion',
          'Komunikimi Efektiv',
          'Udhëheqja e Ekipit & Bashkëpunimi',
          'Zgjidhja e Problemeve & Analizë',
          'Menaxhimi i Kohës & Prioritizimi',
          'Mësimi i Vazhdueshëm & Adaptimi',
          'Dokumentimi Teknik',
          'Komunikimi Ndërkulturor'
        ]
      },
      languages: {
        title: 'Gjuhët',
        skills: [
          'Shqip (Amtare)',
          'Anglisht (Niveli B2)',
          'Anglishte Teknike e Aviacionit'
        ]
      }
    },
    contact: {
      title: 'Kontaktoni',
      subtitle: 'Le të diskutojmë për meteorologjinë e aviacionit, mundësitë e bashkëpunimit, ose pyetjet profesionale',
      form: {
        name: 'Emri i Plotë',
        email: 'Adresa e Email-it',
        message: 'Mesazhi',
        send: 'Dërgo Mesazhin'
      },
      info: {
        email: 'iliri.isufi@gmail.com',
        phone: '+383 49 857 171'
      }
    },
    footer: {
      copyright: '© 2024 Ilir Isufi. Të gjitha të drejtat e rezervuara.'
    }
  }
};