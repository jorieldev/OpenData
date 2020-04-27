<?php
	$destino= correo@correo.com;
	$asunto="comentario";

	$comentario="
	Email: $_POST[email]
	Comentario: $_POST[coment]
	";
	$headers= 'From'.$_POST['email']."\r\n".
	'Reply-To:'.$_POST['email']."\r\n".
	'X-Mailer:PHP/'.phpversion();

	mail($destino,$asunto,$coment,$headers);

	echo "Mensaje enviado";
?>