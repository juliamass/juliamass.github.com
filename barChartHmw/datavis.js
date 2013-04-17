$(function() {
//$('body').append('<p>My Visualization Here</p>');
//alert("hello");

//var myP = $("p").text("my...here")
//$("body").append("myP");

//$("<p>").text("my...here")
//.appendTo("body");


//retreaving the data from salaries.js
//create a loop that goes through all the arrays and bring back each 8th and 11th array back. person var helps conncect data and its length [?] 
//
var i = 0;
console.log[data]
   while(i < data.length) {
    var cities = data[i];
	var nameCity = cities.name;
	var incidentNumber = parseInt(cities.incidents);
	
	var domesticParse = parseInt(cities.domestic);
	
	var maxIncidents = 6747;
	var fraction = incidentNumber / maxIncidents;
	var IncidentWidth= fraction *500;
	
	var maxDomestic = 1635;
	var fraction = domesticParse / maxDomestic;
	var DomesticWidth= fraction *500;

//var div=$("<div>").text(name + " " + salary)
//	.css({ width: salaryWidth,
//		 	backgroundColor: "pink", 
//			marginTop:10});
		//$("body").append(div);

    var row = $("<div>").addClass("row");

  var nameDiv = $("<div>").addClass("names").text(nameCity) //create a new variable that contains a new div and will hold the infor of name var.
			.appendTo(row);

   var incidentsDiv = $("<div>").addClass("incidents").text(incidentNumber)
		.css({ width: IncidentWidth})
		.appendTo(row);		
	
	var domesticDiv = $("<div>").addClass("domestic").text(DomesticWidth)
		.css({ width: DomesticWidth})
		.appendTo(row);		
		
	var domesticDivText = $("<div>").addClass("domesticText").text("DOMESTIC")
			.appendTo(row);	
	var domesticDivText = $("<div>").addClass("incidentText").text("INCIDENT")
			.appendTo(row);		 
			
	var incidentNum = $("<p>").addClass("incident-number").text(incidentNumber);


$("body").append(row); //append the row to body

 
     i++;
   }

});