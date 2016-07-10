function initialize() {
    outResult = document.getElementById('outResult');
    console.log('Running initialize....');
    outResult.textContent = 'initial value';
    console.log('outResult.textContent = ' + outResult.textContent);
}

var i = 0;
function scopeA() {
    return i;
}

function scopeB(i) {
    return i;
}

function scopeC(i) {
    if (true) {
        var i = 2;
    }
    return i;
}

function scopeD(i) {
    if (true) {
        let i = 2;
    }
    return i;
}