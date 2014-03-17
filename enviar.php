<?php

$destino="contacto@atiliocum.cl";

$nombre =$_GET['nombre'];
$apellido=$_GET['apellido'];
$email=$_GET['email'];
$telefono=$_GET['telefono'];
$comentario=$_GET['comentario'];

$nombrecompleto=$nombre." ".$apellido;

enviarmail($email,$nombre,$apellido,$telefono,$comentario,$destino);


function enviarmail($email,$nombre,$apellido,$telefono,$comentario,$destino){

	require_once('class.phpmailer.php');
	require_once('class.smtp.php');
	$mail = new PHPMailer();

//MENSAJE

		$body='
			
			Nombre: '.$nombre.' <br>
			Apellido: '.$apellido.'<br>
			Email: '.$email.'<br>
			Telefono:'.$telefono.'<br>
			Comentario:'.$comentario.'<br>
<br><br>
			Mensaje enviado desde interser.cl

		';

// TERMINA MENSAJE

		$mail->IsSMTP(); 
		$mail->Host = "mail.atiliocum.cl";
		$mail->From = "noreply@atiliocum.cl";
		$mail->FromName = "Interser.cl";
		$mail->Subject = "Nuevo Contacto atiliocum.cl";
		$mail->AltBody = "Nuevo Contacto"; 
		$mail->MsgHTML($body);
	
		$mail->AddAddress($destino, "atiliocum.cl");

		$mail->SMTPAuth = true;
		$mail->SMTPSecure = "tls";

		$mail->Username = "noreply@atiliocum.cl";
		$mail->Password = "cum159"; 

		if(!$mail->Send()) {
		echo "Mailer Error: " . $mail->ErrorInfo;
		} else {
		// echo "Message sent!";
			echo '<h2>Gracias por contactarnos!</h2>';
			echo 'Su mensaje será contestado a la brevedad<br><br>';
		}

}





?>