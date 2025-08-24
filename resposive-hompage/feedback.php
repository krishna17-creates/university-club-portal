<?php
// Database connection parameters
$servername = "localhost"; // Change this to your database server
$username = "root"; // Change this to your database username
$password = "vamsi123"; // Change this to your database password
$dbname = "feedback"; // Change this to your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Extract data from form
    $username = $_POST['username'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // SQL statement to insert data into the table
    $sql = "INSERT INTO feed-back-data (username, email, message) VALUES ('$username', '$email', '$message')";

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

error_reporting(E_ALL);
ini_set('display_errors', 1);


// Close connection
$conn->close();
?>
