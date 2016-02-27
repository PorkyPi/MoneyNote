//-------------------------------------------------------------
// Global variable start here
//-------------------------------------------------------------
var allTransAction = {};
//-------------------------------------------------------------
// type your code here
//-------------------------------------------------------------
readdbfile();

//-------------------------------------------------------------
// function that read file DB to global variable
//-------------------------------------------------------------
function readdbfile() {
	var fs = require('fs');

	fs.readFile("db/db.json", "utf8", function (err, data) {
    if (err) {console.log("err");};
    console.log(data);
	});
}