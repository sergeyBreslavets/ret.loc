// 

//  $(document).ready(function() {

//    /* ---------------------------------------------- /*
//     * Contact form ajax
//    /* ---------------------------------------------- */

//    $('#contact-form').find('input,textarea').jqBootstrapValidation({
//      preventSubmit: true,
//      submitError: function($form, event, errors) {
//        // additional error messages or events
//      },
//      submitSuccess: function($form, event) {
//        event.preventDefault();

//        var submit          = $('#contact-form submit');
//        var ajaxResponse    = $('#contact-response');

//        var name            = $("input#cname").val();
//        var email           = $("input#cemail").val();
//        var message         = $("textarea#cmessage").val();

//        $.ajax({
//          type: 'POST',
//          url: 'assets/php/contact.php',
//          dataType: 'json',
//          data: {
//            name: name,
//            email: email,
//            message: message,
//          },
//          cache: false,
//          beforeSend: function(result) {
//            submit.empty();
//            submit.append('<i class="fa fa-cog fa-spin"></i> Wait...');
//          },
//          success: function(result) {
//            if(result.sendstatus == 1) {
//              ajaxResponse.html(result.message);
//              $form.fadeOut(500);
//            } else {
//              ajaxResponse.html(result.message);
//            }
//          }
//        });
//      }
//    });

//  });

// 

(function($){
$(document).on('click touchstart', '#send-contact-form', function(e) {
    e.preventDefault();
    var data = $('#contact-form').serializeArray();
    console.log("zloooo");
    var url = '/send.php'
    $.ajax({
        url: url,
        type: 'POST',
        data: data,
        dataType: 'json',
        beforeSend: function() {

        },
        complete: function() {

        },
        success: function(obj) {
            console.log(obj);
            //очишаем все help-block
            $('#contact-form').find('.form-group').removeClass('has-error').find('.help-block').empty();
            if (obj['success']) {
                $('.ajax-hidden').addClass('zoomOut').delay(200).queue(function(next) {
                    $('.ajax-hidden').addClass('hidden')
                });
                $('.ajax-response').removeClass('hidden');
                 $('#contact-form').fadeOut(500);
            } else {
                //обкат ошибок
                $.each(obj['error'], function(key, val) {
                    console.log(obj['error'][key]);
                    if (obj['error'][key]) {
                        $('#contact-form').find('#' + key).parents('.form-group').addClass('has-error');
                        $('#contact-form').find('#' + key).next().html(val);
                    }
                });
            }
        },
        error: function(xhr, ajaxOptions, thrownError) {
            console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText + "\r\n" + xhr);
        }
    });
});

})(jQuery);
