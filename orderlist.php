<?php
require_once('connect1.php');

$query = "SELECT * FROM `order`";
$result = mysqli_query($conn, $query);

if ($result) {
	// Fetch rows from the result set
	$rows = mysqli_fetch_all($result, MYSQLI_ASSOC);

	// Close the result set
	mysqli_free_result($result);

	// Close the database connection
	mysqli_close($conn);
} else {
	echo "Error: " . mysqli_error($conn);
	exit();
}
?>

<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="style.css">
	<title>Order List</title>
</head>

<body>
	<span style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776; </span>
	<div id="mySidenav" class="sidenav">
		<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
		<ul>
			<li><a href="orderlist.html">Order List</a></li>
			<li><a href="">Inventory</a></li>
			<li><a href="#">Update Order</a></li>
			<li><a href="#">Sales History</a></li>
			<li><a href="order1/menu.html">Order</a></li>
		</ul>
	</div>
	<h1 align="center">Order List</h1>

	<div class="table-section">
		<table>
			<thead>
				<tr align="center">
					<th>firstName</th>
					<th>lastName</th>
					<th>Order_ID</th>
					<th>Product_Name</th>
					<th>Quantity</th>
					<th>Status</th>
				</tr>
			</thead>
			<tbody>
				<?php foreach ($rows as $row): ?>
					<tr align="center">
						<td>
							<?php echo $row['firstName']; ?>
						</td>
						<td>
							<?php echo $row['lastName']; ?>
						</td>
						<td>
							<?php echo $row['order_id']; ?>
						</td>
						<td>
							<?php echo $row['products']; ?>
						</td>
						<td>
							<?php echo $row['Quantity']; ?>
						</td>
						<td>
							<?php echo $row['status']; ?>
						</td>
					</tr>
				<?php endforeach; ?>
			</tbody>
		</table>
	</div>

	<script>
		function openNav() {
			document.getElementById("mySidenav").style.width = "250px";
		}

		function closeNav() {
			document.getElementById("mySidenav").style.width = "0";
		}
	</script>

</body>

</html>