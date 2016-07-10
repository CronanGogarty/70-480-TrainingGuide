module('Calculator Test Suite', { setup: function () { initialize(); } });

test('Test Initial Input Values', function () {
    expect(2);
    expected = '0';
    equal(txtInput.value, expected, 'Expected Result: ' + expected + ' Actual Result: ' + txtInput.value);
    equal(txtResult.value, expected, 'Expected Result: ' + expected + ' Actual Result: ' + txtResult.value);
});

test("Button Click Test", function () {
    var buttonQuantity = 10;
    expect(buttonQuantity * 2);
    for (var i = 0; i < buttonQuantity; i++) {
        var btn = document.getElementById('btn' + i);
        QUnit.triggerEvent(btn, "click");
        var result = txtInput.value[txtInput.value.length - 1];
        var expected = String(i);
        equal(result, expected, 'Expected Value: ' + expected + ' Actual Value: ' + result);
        var expectedLength = i < 2 ? 1 : i;
        equal(txtInput.value.length, expectedLength, 'Expected Length: ' + expectedLength + ' Actual String Length: ' + txtInput.value.length);
    }
});

test("Test Plus Button", function () {
    expect(2);
    txtInput.value = 10;
    txtResult.value = 20;
    var btnPlus = document.getElementById('btnPlus');
    QUnit.triggerEvent(btnPlus, "click");
    var expected = 30;
    equal(txtResult.value, expected, 'Expected Result: ' + expected + ' Actual Result: ' + txtResult.value);
    var expected = 0;
    equal(txtInput.value, expected, 'Expected Result: ' + expected + ' Actual Result: ' + txtInput.value);

});

test("Test Minus Button", function () {
    expect(2);
    txtInput.value = 15;
    txtResult.value = 45;
    var btnMinus = document.getElementById('btnMinus');
    QUnit.triggerEvent(btnMinus, "click");
    var expected = 30;
    equal(Number(txtResult.value), expected, 'Expected Result: ' + expected + ' Actual Result: ' + txtResult.value);
    var expected = 0;
    equal(txtInput.value, expected, 'Expected Result: ' + expected + ' Actual Result: ' + txtInput.value);
});

test('Test ClearEntry Button', function () {
    expect(1);
    txtInput.value = 40;
    txtResult = 20;
    var btnClearEntry = document.getElementById('btnClearEntry');
    QUnit.triggerEvent(btnClearEntry, 'click');
    var expected = 0;
    equal(Number(txtInput.value), expected, 'Expected Result: ' + expected + ' Actual Result: ' + txtInput.value);
});

test('Test Clear Button', function () {
    expect(2);
    txtInput.value = '23';
    txtResult.value = '123';
    var btnClear = document.getElementById('btnClear');
    QUnit.triggerEvent(btnClear, 'click');
    var expected = '0';
    equal(txtInput.value, expected, 'Expected Result: ' + expected + " Actual Result: " + txtInput.value);
    equal(txtResult.value, expected, 'Expected Result: ' + expected + ' Actual Result: ' + txtResult.value);
});