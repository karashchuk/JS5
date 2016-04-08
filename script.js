(function($) {
    $(function() {
        $(document).on('click', '#send', function(event) {
            
            $.get('validator.php',{
                'username': $('#username').val(),
                'password': $('#password').val(),
                'email': $('#email').val(),
                'gender': $('#gender').val(),
                'credit_card': $('credit_card').val(),
                'bio': $('#bio').val(),
            },
              function(data){
                    if(data='false'){
                        $('#response').html('Неправильные данные');
                    }
                    else{
                        $('#response').html('Принято');     
                    }
                    //$('#response').html(data);
                });
            });
            event.preventDefault();

        });

})(jQuery);

