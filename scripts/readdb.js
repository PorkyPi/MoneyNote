//-------------------------------------------------------------
// Global variable start here
//-------------------------------------------------------------
var gloIter = 1;
var counts = [];
var allTransAction = [];
var income = document.income.AddOneIncome;
var outcome = document.outcome.AddOneOutcome;
//-------------------------------------------------------------
// type your code here
//-------------------------------------------------------------
readdbfile();

outcome.addEventListener("click", function () {
	setTimeout(readdbfileLastString(), 3000);
});
income.addEventListener("click", function () {
	setTimeout(readdbfileLastString(), 3000);
});
//-------------------------------------------------------------
// function that read file DB to global variable
//-------------------------------------------------------------
function readdbfileLastString() {
	var fs = require('fs');

	fs.readFile("db/db.json", "utf8", function (err, data) {
    if (err) {console.log("err");};
    allTransAction = data.split("\n");
    lastString();
    });
    function lastString() {
    	var counter = 0;
    	var data = JSON.parse(allTransAction[allTransAction.length-1]);
		

		if(data.TypeOfCount == "income") {
			counter = makeMass(data.NameOfCount, counts.length+1);
			counts[numberCount(data.NameOfCount)].value += Number(data.ValueOfCount); 
			createTableLine(gloIter++, "Дебет", data.ValueOfCount, data.DescriptionOfCount, data.DataOfCount, data.TimeOfCount, data.NameOfIncome, data.NameOfCount, "", "", counts[numberCount(data.NameOfCount)].value.toFixed(2), "Удалить");
		} else {
			counter = makeMass(data.NameOfCountOutcome, counts.length+1);
			counts[numberCount(data.NameOfCountOutcome)].value -= Number(data.ValueOfCountOutcome);
			createTableLine(gloIter++, "Кредит", data.ValueOfCountOutcome, data.DescriptionOfCountOutcome, data.DataOfCountOutcome, data.TimeOfCountOutcome, "", "", data.NameOfOutcome, data.NameOfCountOutcome, counts[numberCount(data.NameOfCountOutcome)].value.toFixed(2), "Удалить");

		}

		function makeMass(b, number) {
			for (var iter = 0; iter < counts.length; iter++){
				if(data.NameOfCount === counts[iter].name){
					
					return number;}		
			}
			
			counts[number] = new countData();
			counts[number].name = b;
			return number += 1;
		}

		function numberCount(b) {
			for (var iter = 0; iter < counts.length; iter++){
						if(b === counts[iter].name){
							return iter;}		
					}
		}
	}

}

//-------------------------------------------------------------
// function that read file DB to global variable
//-------------------------------------------------------------
function readdbfile() {
	var fs = require('fs');

	fs.readFile("db/db.json", "utf8", function (err, data) {
    if (err) {console.log("err");};
    allTransAction = data.split("\n");
    addingTableLineWhithData ();
	});
}

//-------------------------------------------------------------
// function that create new line of table in lowermain toolbar
//-------------------------------------------------------------
function createTableLine (number, type, count, description, data, time, incomFrom, toCount, toGoods, outcomeFrom, totalCount, delateButtton) {
	var elem = document.getElementById('myTable');
	var line = document.createElement('tr');
	var columnFirst   = document.createElement("td");
	var columnSecond  = document.createElement("td");
	var columnThird   = document.createElement("td");
	var columnFourth  = document.createElement("td");
	var columnFifth   = document.createElement("td");
	var columnSixth   = document.createElement("td");
	var columnSeventh = document.createElement("td");
	var columnEighth  = document.createElement("td");
	var columnNinth   = document.createElement("td");
	var columnTenth   = document.createElement("td");
	var columnEleventh= document.createElement("td");
	var columnTvelfth = document.createElement("td");

	elem.insertBefore(line, myTable.firstChild);
	line.appendChild(columnFirst);
	line.appendChild(columnSecond);
	line.appendChild(columnThird);
	line.appendChild(columnFourth);
	line.appendChild(columnFifth);
	line.appendChild(columnSixth);
	line.appendChild(columnSeventh);
	line.appendChild(columnEighth);
	line.appendChild(columnNinth);
	line.appendChild(columnTenth);
	line.appendChild(columnEleventh);
	line.appendChild(columnTvelfth);

	columnFirst.innerHTML = number;
	columnSecond.innerHTML = type;
	columnThird.innerHTML = count;
	columnFourth.innerHTML = description;
	columnFifth.innerHTML = data;
	columnSixth.innerHTML = time;
	columnSeventh.innerHTML = incomFrom;
	columnEighth.innerHTML = toCount;
	columnNinth.innerHTML = toGoods;
	columnTenth.innerHTML = outcomeFrom;
	columnEleventh.innerHTML = totalCount;
	columnTvelfth.innerHTML = delateButtton;

	columnFirst.setAttribute("style","max-width: 50px; width: 50px; overflow: hidden;");
	columnSecond.setAttribute("style","max-width: 75px; width: 75px; overflow: hidden;");
	columnThird.setAttribute("style","max-width: 75px; width: 75px; overflow: hidden;");
	columnFourth.setAttribute("style","max-width: 200px; width: 200px; overflow: hidden;");
	columnFifth.setAttribute("style","max-width: 75px; width: 75px; overflow: hidden;");
	columnSixth.setAttribute("style","max-width: 75px; width: 75px; overflow: hidden;");
	columnSeventh.setAttribute("style","max-width: 100px; width: 100px; overflow: hidden;");
	columnEighth.setAttribute("style","max-width: 100px; width: 100px; overflow: hidden;");
	columnNinth.setAttribute("style","max-width: 100px; width: 100px; overflow: hidden;");
	columnTenth.setAttribute("style","max-width: 100px; width: 100px; overflow: hidden;");
	columnEleventh.setAttribute("style","max-width: 75px; width: 75px; overflow: hidden;");
	columnTvelfth.setAttribute("style","max-width: 55x; width: 55px; overflow: hidden;");
}

//-------------------------------------------------------------
// function that create new line of table in lowermain toolbar
// it contain the crateTableLine function for create new line in 
// table. It create new line in table whirth table.
//-------------------------------------------------------------
function addingTableLineWhithData () {
	
	var counter = 0;

	for(gloIter = 1; gloIter < allTransAction.length; gloIter++) {
		var data = JSON.parse(allTransAction[gloIter]);
		
		

		//counter = makeMass(data.NameOfCount, counter);
		//console.log(counts);

		if(data.TypeOfCount == "income") {
			counter = makeMass(data.NameOfCount, counter);
			counts[numberCount(data.NameOfCount)].value += Number(data.ValueOfCount); 
			createTableLine(gloIter, "Дебет", data.ValueOfCount, data.DescriptionOfCount, data.DataOfCount, data.TimeOfCount, data.NameOfIncome, data.NameOfCount, "", "", counts[numberCount(data.NameOfCount)].value.toFixed(2), "Удалить");
		} else {
			counter = makeMass(data.NameOfCountOutcome, counter);
			counts[numberCount(data.NameOfCountOutcome)].value -= Number(data.ValueOfCountOutcome);
			createTableLine(gloIter, "Кредит", data.ValueOfCountOutcome, data.DescriptionOfCountOutcome, data.DataOfCountOutcome, data.TimeOfCountOutcome, "", "", data.NameOfOutcome, data.NameOfCountOutcome, counts[numberCount(data.NameOfCountOutcome)].value.toFixed(2), "Удалить");

		}

		function makeMass(b, number) {
			for (var iter = 0; iter < counts.length; iter++){
				if(data.NameOfCount === counts[iter].name){
					
					return number;}		
			}
			
			counts[number] = new countData();
			counts[number].name = b;
			return number += 1;
		}

		function numberCount(b) {
			for (var iter = 0; iter < counts.length; iter++){
						if(b === counts[iter].name){
							return iter;}		
					}
		}
	
	}

}

//-------------------------------------------------------------
// The object thet contain all atributs for every counts
// 
//-------------------------------------------------------------
function countData() {
	this.name = "";
	this.value = 0;
}


//-------------------------------------------------------------
// function thet check for exist count if not create one
// 
//-------------------------------------------------------------


//-------------------------------------------------------------
// function thet return number of exist count
// 
//-------------------------------------------------------------
