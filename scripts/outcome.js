//-------------------------------------------------------------
// Global variable start here
//-------------------------------------------------------------
var oneTransactionOutcome = {};                      // object with all form income value 
var myOutcome = document.outcome.AddOneOutcome;      // object button income

//-------------------------------------------------------------
// type your code here
//-------------------------------------------------------------
document.getElementById("NameOfCountOutcome").onkeypress  = function(e) {
	e = e || event;

	var chr = getChar(e);

	// с null надо осторожно в неравенствах,
    // т.к. например null >= '0' => true
    // на всякий случай лучше вынести проверку chr == null отдельно
    if (chr == null) return;

    if (chr < "A" || chr > "Z") {
    	if (chr < "a" || chr > "z") {
    		if (chr < "А" || chr > "Я") {
    			if (chr < "а" || chr > "я") {
    				return false; }
    		}
    	}
	}
}

document.getElementById("NameOfOutcome").onkeypress = function(e) {
	e = e || event;

	var chr = getChar(e);

	// с null надо осторожно в неравенствах,
    // т.к. например null >= '0' => true
    // на всякий случай лучше вынести проверку chr == null отдельно
    if (chr == null) return;

    if (chr < "A" || chr > "Z") {
    	if (chr < "a" || chr > "z") {
    		if (chr < "А" || chr > "Я") {
    			if (chr < "а" || chr > "я") {
    				return false; }
    		}
    	}
	}
}

document.getElementById("ValueOfCountOutcome").onkeypress = function(e) {

	e = e || event;

	if (e.ctrlKey || e.altKey || e.metaKey) return;

	var chr = getChar(e);

	// с null надо осторожно в неравенствах, т.к. например null >= '0' => true!
	// на всякий случай лучше вынести проверку chr == null отдельно
	if (chr == null) return;

	if (chr < "." || chr > ".") {
		if (chr < '0' || chr > '9' ) {
        	return false;
		}
	}
}

myOutcome.addEventListener("click", function () {
	addOutcomeToVariable();

	if (checkFormOutcome()) {
		addOutcomeToDB();
		document.outcome.reset();
	}

});

//-------------------------------------------------------------
// In this function I add values from income of main page in existing variable.
//-------------------------------------------------------------
function addOutcomeToVariable() {
	var outcomeForm = document.outcome;

	oneTransactionOutcome.TypeOfCountOutcome        = "outcome";
	oneTransactionOutcome.NameOfCountOutcome        = outcomeForm.NameOfCountOutcome.value;
	oneTransactionOutcome.NameOfOutcome       	    = outcomeForm.NameOfOutcome.value;
	oneTransactionOutcome.DataOfCountOutcome        = outcomeForm.DataOfCountOutcome.value;
	oneTransactionOutcome.TimeOfCountOutcome        = getLocalTime();
	oneTransactionOutcome.ValueOfCountOutcome       = outcomeForm.ValueOfCountOutcome.value;
	oneTransactionOutcome.DescriptionOfCountOutcome = outcomeForm.DescriptionOfCountOutcome.value;
}

//-------------------------------------------------------------
// This function add maked variable to DB
//------------------------------------------------------------- 
function addOutcomeToDB() {
	var fs = require('fs');

	var json = JSON.stringify(oneTransactionOutcome);

	fs.open("db/db.json", "a+", 0644, function(err, file_handle) {
		if (!err) {
		    // Записываем в конец файла readme.txt фразу "Copyrighted by Me"
		    // при открытии в режиме "a" указатель уже в конце файла, и мы передаём null
		    // в качестве позиции
		    fs.write(file_handle, "\n" + json + ",", null, 'utf8', function(err, written) {
		        if (!err) {
		            fs.close(file_handle);// Всё прошло хорошо
		        } else {
		            // Произошла ошибка при записи
		        }
		    });
		} else {
		    alert(error);
		}
		});
}

//-------------------------------------------------------------
// This function get local time for income
//-------------------------------------------------------------
function getLocalTime() {
	var date = new Date();

	var options = {
      timezone: 'UTC',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };

    return date.toLocaleString("ru", options);
}

//-------------------------------------------------------------
// This function making check for be aware of not empty form
//-------------------------------------------------------------
function checkFormOutcome () {
	if (!oneTransactionOutcome.NameOfCountOutcome.length){
		alert("Поле \"На счет:\" пустое или неверное значение!");
		return 0;
	} else if (!oneTransactionOutcome.NameOfOutcome.length) {
		alert("Поле \"Доход от:\" пустое!");
		return 0;
	} else if (!oneTransactionOutcome.DataOfCountOutcome.length) {
		alert("Поле \"Дата:\" пустое!");
		return 0;
	} else if (!oneTransactionOutcome.ValueOfCountOutcome.length) {
		alert("Поле \"Cумма:\" пустое!");
		return 0;
	} else if (!/[0-9]{1,8}\.[0-9]{2}/.test(oneTransactionOutcome.ValueOfCountOutcome)){
		alert("В поле \"Сумма:\" неправильный формат! \nПравильно 0.00 ");
		return 0;
	}else {
		return 1;
	}
}

//-------------------------------------------------------------
// This function get key press
//-------------------------------------------------------------
function getCharOutcome(event) {
	if (event.which == null) {
		if (event.keyCode < 32) return null;
			return String.fromCharCode(event.keyCode) // IE
	}

	if (event.which != 0 && event.charCode != 0) {
		if (event.which < 32) return null;
			return String.fromCharCode(event.which) // остальные
	}

     return null; // специальная клавиша
}