/// <reference path="C:\Users\cronan\documents\visual studio 2013\Projects\70-480-TrainingGuide\70-480-TrainingGuide\Scripts/_references.js" />
//var txtInput;
//var txtResult;

(function () {
    this.calculatorNamespace = this.calculatorNamespace || {};
    var ns = this.calculatorNamespace;

    ns.initialize = function() {
        var Calculator = new ns.Calculator();

        //for (var i = 0; i < 10; i++) {
        //    document.getElementById('btn' + i).addEventListener('click', numberClick, false);
        //}
        $('button[id^="btnNumber"]').on('click', Calculator.numberClick);
        //document.getElementById('btnPlus').addEventListener('click', plusClick, false);
        $('#btnPlus').on('click', Calculator.plusClick);
        //document.getElementById('btnMinus').addEventListener('click', minusClick, false);
        $('#btnMinus').on('click', Calculator.minusClick);
        //document.getElementById('btnClearEntry').addEventListener('click', clearEntryClick, false);
        $('#btnClearEntry').on('click', Calculator.clearEntry);
        //document.getElementById('btnClear').addEventListener('click', clearClick, false);
        $('#btnClear').on('click', Calculator.clear);

        Calculator.clear();
    }

    ns.Calculator = (function () {
        function Calculator() { };

        Calculator.prototype.numberClick = function ()   {
            //txtInput.value = txtInput.value == '0' ? this.innerText : txtInput.value + this.innerText;
            $('#txtInput').val($('#txtInput').val() == '0' ? $(this).text() : $('#txtInput').val() + $(this).text());
        };
        
        Calculator.prototype.plusClick = function () {
            //txtResult.value = Number(txtResult.value) + Number(txtInput.value);
            $('#txtResult').val(Number($('#txtResult').val()) +
                        Number($('#txtInput').val()));
            //clearEntryClick();
            Calculator.prototype.clearEntry();
            var output = (Number($('#txtResult').val()) + Number($('#txtInput').val()));
            console.log("plusClick... " + output);
        }

        Calculator.prototype.minusClick = function () {
            //txtResult.value = Number(txtResult.value) - Number(txtInput.value);
            $('#txtResult').val(Number($('#txtResult').val()) - Number($('#txtInput').val()));
            //clearEntryClick();
            Calculator.prototype.clearEntry();
        }

        Calculator.prototype.clearEntry = function()  {
            //txtInput.value = 0;
            $('#txtInput').val('0');
        }

        Calculator.prototype.clear = function()  {
            //txtInput.value = '0';
            //txtResult.value = '0';
            $('#txtInput').val('0');
            $('#txtResult').val('0');
        }
        return Calculator;
    }());


})();

