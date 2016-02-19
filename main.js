var fs = require('fs');

var OneTransaction = {};

var myForm = document.form1

var myButton = document.getElementById("AddOneTransaction");

function AddTransaction () {
	OneTransaction.NameOfCount = myForm.NameOfCount.value;
	OneTransaction.ValueOfCount = myForm.ValueOfCount.value;
	OneTransaction.DataOfCount = myForm.DataOfCount.value;
	OneTransaction.DescriptionOfCount = myForm.DescriptionOfCount.value;
	var json = JSON.stringify(OneTransaction);
	alert(json);
	fs.open("db/db.json", "a+", 0644, function(err, file_handle) {
		if (!err) {
		    // Записываем в конец файла readme.txt фразу "Copyrighted by Me"
		    // при открытии в режиме "a" указатель уже в конце файла, и мы передаём null
		    // в качестве позиции
		    fs.write(file_handle, "\n" + json, null, 'utf8', function(err, written) {
		        if (!err) {
		            // Всё прошло хорошо
		        } else {
		            // Произошла ошибка при записи
		        }
		    });
		} else {
		    alert(error);
		}
		fs.close(file_handle);
		var text = fs.readFileSync('db/db.txt', 'utf8');
		});
};

myButton.addEventListener("click", AddTransaction);

var person = {
	first: "Jhon",
	last: "Doe",
	age: 30
};

//var json = JSON.stringify(OneTransaction);

//fs.writeFileSync('DB.json', json);