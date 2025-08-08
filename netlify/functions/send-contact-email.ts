import { Handler } from '@netlify/functions';
import * as SibApiV3Sdk from '@sendinblue/client';

const handler: Handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  // Handle CORS preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
      body: '',
    };
  }

  try {
    // Parse the request body
    const { name, email, message } = JSON.parse(event.body || '{}');

    // Validate required fields
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
        body: JSON.stringify({ error: 'Invalid email format' }),
      };
    }

    // Initialize Brevo API client
    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    apiInstance.setApiKey(SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey, '4s2wHqxO3RmEASJP');

    // Prepare email data
    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
    sendSmtpEmail.subject = `New Contact Form Message from ${name}`;
    sendSmtpEmail.htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        
        <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Contact Details:</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #2563eb;">${email}</a></p>
        </div>
        
        <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h3 style="color: #374151; margin-top: 0;">Message:</h3>
          <p style="line-height: 1.6; color: #4b5563;">${message.replace(/\n/g, '<br>')}</p>
        </div>
        
        <div style="margin-top: 20px; padding: 15px; background-color: #eff6ff; border-radius: 8px; border-left: 4px solid #2563eb;">
          <p style="margin: 0; color: #1e40af; font-size: 14px;">
            <strong>Note:</strong> This message was sent from the contact form on your portfolio website.
          </p>
        </div>
      </div>
    `;
    sendSmtpEmail.textContent = `
New Contact Form Submission

Name: ${name}
Email: ${email}

Message:
${message}

---
This message was sent from the contact form on your portfolio website.
    `;
    sendSmtpEmail.sender = { 
      name: 'Portfolio Contact Form', 
      email: 'iliri.isufi@gmail.com' 
    };
    sendSmtpEmail.to = [{ 
      email: 'iliri.isufi@gmail.com', 
      name: 'Ilir Isufi' 
    }];
    sendSmtpEmail.replyTo = { 
      email: email, 
      name: name 
    };

    // Send the email
    await apiInstance.sendTransacEmail(sendSmtpEmail);

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({ 
        success: true, 
        message: 'Email sent successfully' 
      }),
    };

  } catch (error) {
    console.error('Error sending email:', error);
    
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({ 
        error: 'Failed to send email',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      }),
    };
  }
};

export { handler };