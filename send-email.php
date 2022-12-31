<?php
  // Get form data
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // Set up email recipient and subject
  $to = "merryzebro@gmail.com";
  $subject = "New Form Submission";

  // Build the email message
  $email_message = "Name: $name\n";
  $email_message .= "Email: $email\n\n";
  $email_message .= "Message:\n$message\n";

  // Set up email headers
  $headers = "From: $email\n";
  $headers .= "Reply-To: $email";

  // Send
  mail($to, $subject, $email_message, $headers);

  // Redirect user to thank you page
  header("Location: thank-you.html");
  exit;
?>
