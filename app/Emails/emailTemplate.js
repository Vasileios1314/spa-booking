const EmailTemplate = ({ name, email, message }) => {
  return (
    <div>
      <h2>New Ticket Submission</h2>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Message:</strong>
      </p>
      <p>{message}</p>
    </div>
  );
};

export default EmailTemplate;
