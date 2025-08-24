<?php
// Database connection parameters
$servername = "localhost"; // Change this to your database server
$username = "root"; // Change this to your database username
$password = "vamsi123"; // Change this to your database password
$dbname = "login"; // Change this to your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    // Using die() is okay for development, but for a live site, 
    // you should log the error and show a generic message.
    error_log("Database connection failed: " . $conn->connect_error);
    die("An error occurred. Please try again later.");
}

// Check if form is submitted using POST, which is more secure for sending credentials.
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // NOTE: This file is named login.php, but the code performs a registration (INSERT).
    // This can be confusing. Consider renaming to register.php.

    // Use prepared statements to prevent SQL Injection attacks.
    // The table name 'login-data' with a hyphen can be problematic. 'login_data' is a safer convention.
    $sql = "INSERT INTO `login_data` (username, password) VALUES (?, ?)";

    if ($stmt = $conn->prepare($sql)) {
        // NEVER store passwords in plain text. Use password_hash().
        $hashed_password = password_hash($_POST['password'], PASSWORD_DEFAULT);

        // Bind variables to the prepared statement as parameters
        $stmt->bind_param("ss", $_POST['username'], $hashed_password);

        if ($stmt->execute()) {
            echo "Registration successful!"; // More accurate message
        } else {
            echo "Error: " . $stmt->error;
        }
        // Close statement
        $stmt->close();
    }
}

// Close connection
$conn->close();
?>
