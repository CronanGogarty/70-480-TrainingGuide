module('Scope Test Suite', { setup: function () { initialize() } });

test('Test Initial Values', function () {
    expect(1);
    expected = 'initial value';
    equal(outResult.textContent, expected, 'Expected value of outResult = ' + expected + '; Actual value of outResult = ' + outResult.textContent);
});

test('Return Value of scopeB(1)', function () {
    expect(1);
    expected = '1';
    equal(scopeB(1), expected, 'Expected scopeB(1) returns value = ' + expected + '; Actual result = ' + scopeB(1));
});

test('Return Value of scopeC(1)', function () {
    expect(1);
    expected = '0';
    equal(scopeC(1), expected, 'Expected scopeC(1) returns value = ' + expected + '; Actual result = ' + scopeC(1));
});

test('Return Value of scopeB(1)', function () {
    expect(1);
    expected = '0';
    equal(scopeB(1), expected, 'Expected scopeB(1) returns value = ' + expected + '; Actual result = ' + scopeB(1));
});

test('Return Value of scopeC(1)', function () {
    expect(1);
    expected = '1';
    equal(scopeC(1), expected, 'Expected scopeC(1) returns value = ' + expected + '; Actual result = ' + scopeC(1));
});

test('Return Value of scopeD(1)', function () {
    expect(1);
    expected = '0';
    equal(scopeD(1), expected, 'Expected scopeD(1) returns value = ' + expected + '; Actual result = ' + scopeD(1));
});

test('Return Value of scopeD(1)', function () {
    expect(1);
    expected = '1';
    equal(scopeD(1), expected, 'Expected scopeD(1) returns value = ' + expected + '; Actual result = ' + scopeD(1));
});

test('Return Value of scopeD(1)', function () {
    expect(1);
    expected = '2';
    equal(scopeD(1), expected, 'Expected scopeD(1) returns value = ' + expected + '; Actual result = ' + scopeD(1));
});

test('Return Value of scopeA(1)', function () {
    expect(1);
    expected = undefined;
    equal(scopeA(1), expected, 'Expected scopeA(1) returns value = ' + expected + '; Actual result = ' + scopeA(1));
});

test('Return Value of scopeA(1)', function () {
    expect(1);
    expected = '0';
    equal(scopeA(1), expected, 'Expected scopeA(1) returns value = ' + expected + '; Actual result = ' + scopeA(1));
});

test('Return Value of scopeC(1)', function () {
    expect(1);
    expected = '2';
    equal(scopeC(1), expected, 'Expected scopeC(1) returns value = ' + expected + '; Actual result = ' + scopeC(1));
});