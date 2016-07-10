module("QUNIT Test Suite - jQuery Tests", { setup: function() {  initialize(); } });

test('Initialize Test', function()   {
    expect(2);
    var expected = '0';
    equal($('#txtInput').val(),expected, "Expected result = " + expected + "; Actual result = " + $('#txtInput').val());
    equal($('#txtResult').val(), expected, "Expected result = " + expected + "; Actual result = " + $('#txtResult').val());
});

//test("jQuery Tests", function () {
//    expect(1);
//    var expected = null;
//    var actual = 
//});