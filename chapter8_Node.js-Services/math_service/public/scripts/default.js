

$(document).ready(function () {
    $('#btnAdd').on('click', addNumbers);
    $('#btnSubtract').on('click', subtractNumbers);
    $('#btnMultiplication').on('click', multiplyNumbers);
    $('#btnDivision').on('click', divideNumbers);

});

//**AJAX using the XMLhttpRequest object
//function addNumbers() {
//    console.log('here...');
//    var x = document.getElementById('x').value;
//    var y = document.getElementById('y').value;
//    var result = document.getElementById('result');
//    var xmlhttp = new XMLHttpRequest();
//    xmlhttp.onreadystatechange = function () {
//        console.log("readyState = " + xmlhttp.readyState);
//        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
//            var jsonObject = JSON.parse(xmlhttp.response); 
//            result.innerHTML = jsonObject.result;
//        }
//    }
//    xmlhttp.addEventListener("progress", updateProgress, false);
//    xmlhttp.addEventListener("error", transferFailed, false);
//    xmlhttp.addEventListener("abort", canceled, false);

//    xmlhttp.open("GET", "/addition?x=" + x + "&y=" + y , true);
//    xmlhttp.send();
//}

//**Oh look, we can use JQUERY for cross-browser AJAX
//function addNumbers() {
//    var x = $('#x').val();
//    var y = $('#y').val();
//    var data = { "x": x, "y": y };
//    $.ajax({
//        url: '/addition',
//        data: data,
//        type: 'GET',
//        cache: false,
//        dataType: 'json',
//        success: function (data) {
//            $('#result').html(data.result);
//        }
//    });
//}

//**JQUERY AJAX call using the $.getJSON method instead
//function addNumbers() {
//    var x = $('#x').val();
//    var y = $('#y').val();
//    var data = { "x": x, "y": y };
//    $.getJSON('/addition', data, function (data) {
//        $('#result').html(data.result);
//    });
//}

//function subtractNumbers() {
//    var x = $('#x').val();
//    var y = $('#y').val();
//    var data = { "x": x, "y": y };
//    $.post('/subtraction', data, function (data) {
//        $('#result').html(data.result);
//    });
//}

//function multiplyNumbers() {
//    var x = $('#x').val();
//    var y = $('#y').val();
//    var data = { "x": x, "y": y };
//    $.ajax({
//        url: '/multiply',
//        data: data,
//        type: 'PUT',
//        dataType: 'json',
//        cache: false,
//        success: function (data) {
//            $('#result').html(data.result);
//        }
//    });
//}

//function divideNumbers() {
//    var x = $('#x').val();
//    var y = $('#y').val();
//    var data = { "x": x, "y": y };
//    $.ajax({
//        url: '/divide',
//        data: data,
//        type: 'DELETE',
//        dataType: 'json',
//        cache: false,
//        success: function (data) {
//            $('#result').html(data.result);
//        }
//    });
//}

//**refactor the above code to use "PROMISES"
//When you use jQuery to execute an AJAX call, a promise object is returned. 
//Think of a promise as being a promise to do work. 
function addNumbers() {
    console.log('here addNumbers..');
    var data = getFormData();
    serverAddition(data).done(displayResult);
}

function getFormData() {
    var x = $('#x').val();
    var y = $('#y').val();
    return { "x": x, "y": y };
}

function serverAddition(data) {
    //serverAddition function returns a promise object, and the caller can decide how to handle the result
    return $.getJSON('/addition', data);
}

function displayResult(cronanData) {
    $('#result').html(cronanData.result);
}

function subtractNumbers() {
    var data = getFormData();
    serverSubtraction(data).done(displayResult);
}
function serverSubtraction(data) {
    return $.post('/subtraction', data, 'json');
}

function multiplyNumbers() {
    var data = getFormData();
    serverMultiplication(data).done(displayResult);
}
function serverMultiplication(data) {
    return $.ajax({
        url: '/multiply',
        data: data,
        type: 'PUT',
        dataType: 'json',
        cache: false
    });
}

function divideNumbers() {
    var data = getFormData();
    serverDivision(data).done(displayResult).fail(displayError);
}

function serverDivision(data) {
    return $.ajax({
        url: '/divide',
        data: data,
        type: 'DELETE',
        dataType: 'json',
        cache: false
    });
}

function displayError(serverData, error) {
    var value = 'No result';
    if ('result' in serverData) value = serverData.result;
    $('#result').html(value + ' - ' + error);
}
//--------------------------------
function updateProgress(evt) {
    if (evt.lengthComputable) {
        var percentComplete = evt.loaded / evt.total;
        //display progress
    }
    else {
        //cannot calculate progress
    }
}

function transferFailed(evt) {
    alert("An error occurred");
}
function canceled(evt) {
    alert("canceled by the user");
}