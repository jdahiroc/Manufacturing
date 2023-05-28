<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sales history</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <h1>Sales History</h1>
    <table class="styled-table">
        <thead>
            <tr>
                <th>Customer</th>
                <th>Order</th>
                <th>Id</th>
                <th>Date ordered</th>
                <th>Status</th>
                <th>Total</th>
                <th>update</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>CJ</td>
                <td>toy truck</td>
                <td>142</td>
                <td>03/12/2023</td>
                <td>active</td>
                <td>$220</td>
                <td><button>Edit</button></td>
            </tr>
            <tr class="active-row">
                <td>Dave</td>
                <td>race car</td>
                <td>53</td>
                <td>03/12/2023</td>
                <td>active</td>
                <td>$220</td>
                <td><button>Edit</button></td>
            </tr>
            <tr>
                <td>Rigel</td>
                <td>bike</td>
                <td>27</td>
                <td>03/12/2023</td>
                <td>active</td>
                <td>$220</td>
                <td><button>Edit</button></td>
            </tr>
        </tbody>
    </table>

</body>

</html>