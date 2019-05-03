<?php
session_start();
if (!isset($_SESSION['username'])){
header('location:log.php'); // nu ne putem intaorce pe pagian daca nu ne logam

}

?>

<!DOCTYPE html>
<html>
<head>
	<title>Pagina clasamentului</title>
	<title>User login and registration</title>
	<link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="style.css">
	<style>
		a{
			color: white;
			letter-spacing: 3px;
			font-size: 50px;

		}
	</style>
	<script>
    $(document).ready(function() {
        $('img.thumbnail').click(function() {
            window.location.href = this.id + '.html';
        });
    });
</script>
</head>
<body>
<a style="text-decoration: none;" href="logout.php" class="myButton">LOGOUT </a>
<h1 style="margin-top: 5%;"> Bine ai venit <span style="color: aqua;"><?php echo $_SESSION['username']; ?> </span> </h1>



<center><a class="float-center" href="index.html"><img src="play.png" width="300" height="200" alt="joc"></a> </center>
</body>
</html>