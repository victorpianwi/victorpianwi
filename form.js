
$(function()
{

    function after_form_submitted() 
    {


        let params = {
            name: $("#name").val(),
            email: $("#email").val(),
            phone: $("#phone").val(),
            message: $("#message").val(),
        };
    
        const serviceId = "service_k5w0zyk";
        const templateId = "template_r4bhn0q";
    
        emailjs.send(serviceId, templateId, params)
        .then(res => {
                document.querySelector('#contact_form').reset();
                console.log(res);
                $('#success_message').show();
                $('#error_message').hide();

                //reverse the response on the button                
                $btn = $('input[type="button"]');
                label = "Send Message";
                if(label)
                {
                    $btn.prop('type','submit' ); 
                    $btn.val(label);
                }

                setTimeout(()=>{
                    $('#success_message').hide();
                }, 5000);
        })                
        .catch((err) => {
            $('#error_message').append('<ul></ul>');

            $('#error_message ul').append('<li>'+err+'</li>');

            $('#success_message').hide();
            $('#error_message').show();
            
            //reverse the response on the button
            $btn = $('input[type="button"]');
            label = "Send Message";
            if(label)
            {
                $btn.prop('type','submit' ); 
                $btn.val(label);
            }
        });
        
    }

	$('#contact_form').submit(function(e)
      {
        e.preventDefault();

        $form = $(this);
        //show some response on the button
        $('input[type="submit"]', $form).each(function()
        {
            $btn = $(this);
            $btn.prop('type','button' );
            $btn.val('Sending ...');

        });

        after_form_submitted();
        
      });	
});
