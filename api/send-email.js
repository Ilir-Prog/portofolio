const { TransactionalEmailsApi, TransactionalEmailsApiApiKeys, SendSmtpEmail } = require('@getbrevo/brevo');

module.exports = async (req, res) => {
  try {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Content-Type', 'application/json');

    // Handle preflight OPTIONS request
    if (req.method === 'OPTIONS') {
      return res.status(200).json({ message: 'OK' });
    }

    // Only allow POST requests
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    // Parse request body safely
    let body;
    try {
      body = req.body || {};
    } catch (parseError) {
      return res.status(400).json({ error: 'Invalid JSON in request body' });
    }

    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing fields' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Check for Brevo API key
    const apiKey = process.env.BREVO_API_KEY;
    if (!apiKey) {
      console.error('BREVO_API_KEY environment variable is not set');
      return res.status(500).json({ error: 'Internal server error' });
    }

    // Initialize Brevo API
    const apiInstance = new TransactionalEmailsApi();
    apiInstance.setApiKey(TransactionalEmailsApiApiKeys.apiKey, apiKey);

    // Create email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #2563eb; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        
        <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Contact Details:</h3>
          
          <div style="margin-bottom: 15px;">
            <strong style="color: #1f2937;">Name:</strong>
            <div style="margin-top: 5px; padding: 8px; background-color: white; border-radius: 4px; border-left: 4px solid #2563eb;">
              ${name}
            </div>
          </div>
          
          <div style="margin-bottom: 15px;">
            <strong style="color: #1f2937;">Email:</strong>
            <div style="margin-top: 5px; padding: 8px; background-color: white; border-radius: 4px; border-left: 4px solid #0d9488;">
              <a href="mailto:${email}" style="color: #0d9488; text-decoration: none;">${email}</a>
            </div>
          </div>
          
          <div style="margin-bottom: 15px;">
            <strong style="color: #1f2937;">Message:</strong>
            <div style="margin-top: 5px; padding: 15px; background-color: white; border-radius: 4px; border-left: 4px solid #6366f1; white-space: pre-wrap; line-height: 1.6;">
              ${message}
            </div>
          </div>
        </div>
        
        <div style="margin-top: 30px; padding: 15px; background-color: #eff6ff; border-radius: 8px; border: 1px solid #dbeafe;">
          <p style="margin: 0; color: #1e40af; font-size: 14px;">
            <strong>📧 Reply directly to this email to respond to ${name}</strong>
          </p>
          <p style="margin: 5px 0 0 0; color: #64748b; font-size: 12px;">
            Sent from ilirisufi.com contact form on ${new Date().toLocaleString()}
          </p>
        </div>
      </div>
    `;

    // Prepare email data
    const sendSmtpEmail = new SendSmtpEmail();
    sendSmtpEmail.sender = { 
      name: 'Ilir Isufi Portfolio', 
      email: 'no-reply@ilirisufi.com' 
    };
    sendSmtpEmail.to = [{ 
      email: 'iliri.isufi@gmail.com', 
      name: 'Ilir Isufi' 
    }];
    sendSmtpEmail.replyTo = { 
      email: email, 
      name: name 
    };
    sendSmtpEmail.subject = `New Form Submission from ${name}`;
    sendSmtpEmail.htmlContent = htmlContent;

    // Send email
    const result = await apiInstance.sendTransacEmail(sendSmtpEmail);
    
    console.log('Email sent successfully:', result.messageId);
    
    return res.status(200).json({ 
      message: 'Email sent successfully'
    });

  } catch (error) {
    console.error('Error in send-email API:', error);
    
    // Ensure we always return a JSON response
    try {
      // Handle specific Brevo API errors
      if (error.response) {
        const status = error.response.status;
        
        if (status === 401) {
          return res.status(500).json({ error: 'Internal server error' });
        } else if (status === 400) {
          return res.status(400).json({ error: 'Invalid email data' });
        }
      }
      
      return res.status(500).json({ error: 'Internal server error' });
    } catch (responseError) {
      // Last resort - ensure we send something
      console.error('Error sending error response:', responseError);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }
};