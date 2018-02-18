let expr = / [a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
$(document).ready(function(){
	$('#btnGetIn').click(function(){
    let name = $('#first_name1').val();
    let lastName = $('#first_name2').val();
    let mail = $('#email').val();
    let password = $('#password').val();

		if($('#first_name1').val() == ''){
			$('#mensaje1').fadeIn();
			return false;
		}else{
			$('#mensaje1').fadeOut();

      if($('#first_name2').val() == ''){
        $('#mensaje2').fadeIn();
        return false;
    }else{
      $('#mensaje2').fadeOut();

      if($('#email').val() == '' || !expr.test($('#email').val())){
        $('#mensaje3').fadeIn();
        return false;
      }$('#mensaje3').fadeOut();

      if($('#password').val() == '' || $('#password').val() > 8){
        $('#mensaje4').fadeIn();
        return false;
      }$('#mensaje4').fadeOut();
    }
    }
		}
	})
})