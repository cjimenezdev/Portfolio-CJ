const preloader = document.querySelector('.preloader');
const main = document.querySelector('#wrapper');
const cont = document.querySelector('#page-content');
const sect = document.querySelector('#home');
const footer = document.querySelector('.footer');

function init() {
    setTimeout(() => {
        preloader.style.opacity = 0;
        preloader.style.display = 'none';
        main.style.display = 'flex';
        cont.style.display = 'flex';
        sect.classList.toggle("show");
        footer.style.display = 'flex';
        setTimeout(() => (cont.style.opacity = 1, main.style.opacity = 1, sect.style.opacity = 1, footer.style.opacity = 1), 50);
    }, 2000);
}
init();

$(".sidebar__toggle").click(function() {
    $(".sidebar__menu").toggleClass("show").siblings().removeClass("show");
});

function enviarCorreo(){
	$(".alerta_correo").css('display', 'none');
	$(".alerta_mensaje").css('display', 'none');
	$('.alerta_enviado').css('display','none');
	$('.alerta_error').css('display','none');
	
	var correo = $("#email").val();
	var mensaje = $("#msg").val();
	var nombre = $("#user").val();
    var asunto = $("#asunto").val();
	var valido = 1;
	var validacion_correo = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
	
	
	if(!validacion_correo.test(correo)){
		$(".alerta_correo").css('display', 'block');
		valido = 0;
	}
	if(mensaje.length <= 5 ){
		$(".alerta_mensaje").css('display', 'block');
		valido = 0;
	}

	if (valido == 1) {
		var datos = 'email=' + correo + '&msg=' + mensaje + '&user=' + nombre  + '&asunto=' + asunto ;
        $.ajax({
			type: "POST",
			url: "contact.php",
			data: datos,
			success: function(res) {
				if (parseInt(res) == 1) {
				    let formulario = document.getElementById('formulario');
                    formulario.reset();
                    
				    $('.alerta_enviado').css('display','block');
				}else{
					$('.alerta_error').css('display','block');
				}
			},
			error: function(res) {
				$('.alerta_error').css('display','block');
			}
		});
	}
}
