async function sendWorkOrderEmail(workOrderDetails, recipientEmail) {
    try {
        const response = await fetch('http://localhost:3000/api/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ workOrderDetails, recipientEmail })
        });

        if (!response.ok) {
            throw new Error('Failed to send email');
        }
    } catch (error) {
        console.error('Error sending email:', error);
    }
}
