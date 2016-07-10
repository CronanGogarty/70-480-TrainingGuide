
function callServer() {
    var data = $(ContactForm).serialize();
    $.post('/ContactService', data, function (returnObject) {
        $('#result').html(returnObject.result);
    }, 'json');
}

$('document').ready(function () {
    $('#btnSubmit').on('click', callServer);
});

