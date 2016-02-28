//-------------------------------------------------------------
// Global variable start here
//-------------------------------------------------------------
var allTransAction = [];
//-------------------------------------------------------------
// type your code here
//-------------------------------------------------------------
readdbfile();
createTableLine();
//-------------------------------------------------------------
// function that read file DB to global variable
//-------------------------------------------------------------
function readdbfile() {
	var fs = require('fs');

	fs.readFile("db/db.json", "utf8", function (err, data) {
    if (err) {console.log("err");};
    allTransAction = data.split("},");
    console.log(allTransAction.length);
	});
}

//-------------------------------------------------------------
// function that create new line of table in lowermain toolbar
//-------------------------------------------------------------
function createTableLine () {
	var elem = document.getElementById('myTable');
	var mytable = "<tr>" + 
					"<td>1</td>" +
					"<td>Income</td>" +
					"<td>1200.00</td>" +
					"<td>За удаление ретинированнной восмерки, вверху с лева</td>" + 
					"<td>2016-02-11</td>" + 
					"<td>15:44:59</td>" +
					"<td>Зарплата</td>" +
					"<td>Наличные</td>" +
					"<td></td>" +
					"<td></td>" +
					"<td>100000.00</td>" + 
					"<td><input type = \"button\" value = \"Удалить\" class=\"deleteTransaction\" /></td>";
	elem.innerHTML += mytable;
	elem.innerHTML += mytable;
	elem.innerHTML += mytable;
	elem.innerHTML += mytable;
	elem.innerHTML += mytable;
	elem.innerHTML += mytable;
	elem.innerHTML += mytable;
	elem.innerHTML += mytable;
	elem.innerHTML += mytable;
	elem.innerHTML += mytable;
	elem.innerHTML += mytable;
	elem.innerHTML += mytable;
	elem.innerHTML += mytable;
	elem.innerHTML += mytable;
	elem.innerHTML += mytable;
	elem.innerHTML += mytable;
}