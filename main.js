$(document).ready(function() {
	$(".contact-form").submit(function(e) {
		e.preventDefault();
		var first_name = $('#first_name').val();
        var last_name = $('#last_name').val();
        var email = $('#email').val();
        var message = $('#message').val();

        if (first_name.length < 1) {
          $("#first_name").after('<span class="error first-name-error">This field is required</span>');
        }
        if (last_name.length < 1) {
          $("#last_name").after('<span class="error last-name-error">This field is required</span>');
        }
        if (email.length < 1) {
          $('#email').after('<span class="error email-error">This field is required</span>');
        } else {
           var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
           var validEmail = regEx.test(email);
           if (validEmail) {
           $('#email').after('<span class="error email-error">Enter a valid email</span>');
           }
        }
        if (message.length < 1) {
          $("#message").after('<span class="error message-error">This field is required</span>');
        }
        if (first_name.length < 1 || last_name.length < 1 || email.length < 1 || message.length < 1) {
        	$("#submit").after('<span class="submit-error">One or more fields have an error. Please check and try again.</span>');
        }
        else {
        	$("#submit").after('<span class="submit-success">Your Message has been send successfully.</span>');
        }
          // $(this).serialize(); will be the serialized form
         var data = JSON.stringify( $("form").serializeArray() );
         console.log(data);
	});
});

