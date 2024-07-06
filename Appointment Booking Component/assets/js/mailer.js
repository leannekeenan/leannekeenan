const nodemailer = require('nodemailer');

// Create a transporter using SMTP configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'leanne.keenan1@gmail.com',
    pass: 'L!m@M!k3K!10'
  }
});

// Function to send work order email
async function sendWorkOrderEmail(workOrderDetails, mechanicEmail) {
  const mailOptions = {
    from: 'leanne.keenan1@gmail.com',
    to: mechanicEmail,
    subject: 'New Work Order Assigned',
    html: `<p>Hello Japanese Beetle, Inc.,</p><p>You have a new work order:</p><p>${workOrderDetails}</p>`
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
}

// Example usage
const workOrderDetails = 'Appointment details and service information.';
const mechanicEmail = 'leanne.keenan1@outlook.com';

// Call the function to send email
sendWorkOrderEmail(workOrderDetails, mechanicEmail)
  .then(() => {
    console.log('Email sent successfully');
  })
  .catch((error) => {
    console.error('Failed to send email:', error);
  });