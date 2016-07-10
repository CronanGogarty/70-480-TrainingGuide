/// <reference path="../../../Scripts/_references.js" />
module('Calculator Test Suite', {   
    setup: function () {
        calculatorNamespace.initialize();
    }
});


test('Initialize test', function () {
    expect(2);
    expected = '0';
    equal($('#txtInput').val(), expected, 'Expected Result: ' + expected + ' Actual Result: ' + $('#txtInput').val());
    equal($('#txtResult').val(), expected, 'Expected Result: ' + expected + ' Actual Result: ' + $('#txtResult').val());
});

test("Button Click Test", function () {
    var buttonQuantity = 10;
    expect(buttonQuantity * 2);
    for (var i = 0; i < buttonQuantity; i++) {
        //var btn = document.getElementById('btn' + i);
        //QUnit.triggerEvent(btn, "click");
        $('#btnNumber' + i).triggerHandler('click');

        var result = $('#txtInput').val()[$('#txtInput').val().length - 1];
        var expected = String(i);
        equal(result, expected, 'Expected Value: ' + expected + ' Actual Value: ' + result);
        var expectedLength = i < 2 ? 1 : i;
        equal($('#txtInput').val().length, expectedLength, 'Expected Length: ' + expectedLength + ' Actual String Length: ' + $('#txtInput').val().length);
    }
});

test("Test Plus Button", function () {
    expect(2);
    $('#txtInput').val('10');
    $('#txtResult').val('20');
    //var btnPlus = document.getElementById('btnPlus');
    //QUnit.triggerEvent(btnPlus, "click");
    $('#btnPlus').triggerHandler('click');
    var expected = '30';
    equal( $('#txtResult').val(), expected, 'Expected Result: ' + expected + ' Actual Result: ' + $('#txtResult').val());
    var expected = 0;
    equal($('#txtInput').val(), expected, 'Expected Result: ' + expected + ' Actual Result: ' + $('#txtInput').val());

});

test("Test Minus Button", function () {
    expect(2);
    $('#txtInput').val('15');
    $('#txtResult').val('45');
    //var btnMinus = document.getElementById('btnMinus');
    //QUnit.triggerEvent(btnMinus, "click");
    $('#btnMinus').triggerHandler('click');
    var expected = '30';
    equal(Number($('#txtResult').val()), expected, 'Expected Result: ' + expected + ' Actual Result: ' + $('#txtResult').val());
    var expected = 0;
    equal($('#txtInput').val(), expected, 'Expected Result: ' + expected + ' Actual Result: ' + $('#txtInput').val());
});

test('Test ClearEntry Button', function () {
    expect(1);
    $('#txtInput').val('40');
    $('#txtResult').val('20');
    //var btnClearEntry = document.getElementById('btnClearEntry');
    //QUnit.triggerEvent(btnClearEntry, 'click');
    $('#btnClearEntry').triggerHandler('click')
    var expected = 0;
    equal(Number($('#txtInput').val()), expected, 'Expected Result: ' + expected + ' Actual Result: ' + $('#txtInput').val());
});

test('Test Clear Button', function () {
    expect(2);
    //txtInput.value = '23';
    //txtResult.value = '123';
    $('#txtInput').val('23');
    $('#txtResult').val('123');
    //var btnClear = document.getElementById('btnClear');
    //QUnit.triggerEvent(btnClear, 'click');
    $('#btnClear').triggerHandler('click');
    var expected = '0';
    equal($('#txtInput').val(), expected, 'Expected Result: ' + expected + " Actual Result: " + $('#txtInput').val());
    equal($('#txtResult').val(), expected, 'Expected Result: ' + expected + ' Actual Result: ' + $('#txtResult').val());
});