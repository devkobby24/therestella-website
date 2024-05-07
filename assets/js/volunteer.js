$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                firstname: {
                    required: true,
                    minlength: 2
                },
                lastname: {
                    required: true,
                    minlength: 4
                },
                gender: {
                    required: true,
                    minlength: 4
                },
                age: {
                    required: true,
                    minlength: 2
                },
                number: {
                    required: true,
                    minlength: 10
                },
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                firstname: {
                    required: "Please enter your first name",
                    minlength: "Your name must consist of at least 2 characters"
                },
                lastname: {
                    required: "Please enter your last name",
                    minlength: "Your subject must consist of at least 4 words"
                },
                gender: {
                    required: "Please enter your gender",
                    minlength: ""
                },
                age: {
                    required: "Please enter your age",
                    minlength: "Your Phone Number must consist at least 10 numbers"
                },
                email: {
                    required: "Please enter a valid email address"
                },
                number: {
                    required: "Please enter your phone number",
                    minlength: "Your message should be a statement"
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"contact_process.php",
                    success: function() {
                        $('#contactForm :input').attr('disabled', 'disabled');
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn()
                            $('.modal').modal('hide');
		                	$('#success').modal('show');
                        })
                    },
                    error: function() {
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $('#error').fadeIn()
                            $('.modal').modal('hide');
		                	$('#error').modal('show');
                        })
                    }
                })
            }
        })
    })
        
 })(jQuery)
})