<?php


	require_once('connect1.php');

	if(isset($_POST['submit'])){
		$firstName = $_POST['firstName'];
		$lastName = $_POST['lastName'];
		$products = $_POST['products'];
		$quantity = $_POST['quantity'];
		$email = $_POST['email'];
		$address = $_POST['address'];
		$number = $_POST['number'];

		$query = "INSERT INTO `order` (firstName, lastName, products, quantity, email, address, number) VALUES ('$firstName', '$lastName', '$products', '$quantity', '$email', '$address', '$number')";
		$result = mysqli_query($conn, $query);

		if($result) {
			echo "Successful";
			header('Location: orderlist.html');
			exit();
		} else {
			echo "Error: " . mysqli_error($conn);
		}
	}
?>
