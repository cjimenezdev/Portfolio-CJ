<?php

if (isset($_POST['correo']) && isset($_POST['mensaje']) && isset($_POST['nombre'])) {
    
  $patron_texto = "/^[a-zA-ZáéíóúÁÉÍÓÚäëïöüÄËÏÖÜàèìòùÀÈÌÒÙ.,\s]+$/";
    
  $correo = $_POST['email'];
  $mensaje = $_POST['msg'];
$nombre = $_POST['user'];
	$asunto = $_POST['asunto'];
    
    
		$from = $nombre;
		$to = "carlosjimenez1995@outlook.com";
		$subject = $asunto." ". $correo;
		$message = $mensaje;
		$headers = "From:" . $from;
	
	if( preg_match($patron_texto, $_POST['mensaje']) ){
	    
	    if($correo != $to){
	        if (mail($to,$subject,$message, $headers)) {
	            echo 1;
	        }else{
	            echo 0;
	        }
	        
	    }else{
	        echo 'Debe ser un correo diferente';   
	    }
	    
	}else{
	    echo "El nombre sólo puede contener letras y espacios";
	    
	}
		
}else{
    echo 0;
}
