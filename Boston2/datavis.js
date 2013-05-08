$(function() {
$("<p>").text("")
.appendTo(".circles");


//retreaving the data from salaries.js
//create a loop that goes through all the arrays and bring back each 8th and 11th array back. person var helps conncect data and its length [?] 
//
var i = 0;
console.log(data)
   while(i < data.length) {
     var costData = data[i];
 	 (function(costData) { //an iefe "trick"
	
	var co2Parse = (Math.round(parseInt(costData.emission_co2)*100)/100);
	var areaParse = (Math.round(parseInt(costData.area)*100)/100);
		
 	var maxCo2 = 1160915.76;
 	var fraction = Math.sqrt(co2Parse) / Math.sqrt(maxCo2);
	var co2Width = (Math.round((fraction * 200)*100)/100);
	var co2height = (Math.round((fraction * 200)*100)/100);
	
	var maxArea = 1160915.76;
 	var fraction = Math.sqrt(areaParse) / Math.sqrt(maxArea);
	var areaWidth = (Math.round((fraction * 200)*100)/100);
	var areaheight = (Math.round((fraction * 200)*100)/100);


	// var fuelType = costData.Fuel;
	//   var FuelShow = $("<div>").addClass("fuelT").text(fuelType) //create a new variable that contains a new div and will hold the infor of name var.
	//   	  				.appendTo(row);
	

	
	
	  var row = $("<div>").addClass("row");
	
//	var buildingType = costData.Facility;
		//	var buildingTshow = $("<div>").addClass("facil").text(buildingType) //create a new variable that contains a new div and will hold the infor of name var.
								  	  			//	.appendTo(row);
	
	  //var co2Div = $("<div>").addClass("co2").text(co2Parse) //create a new variable that contains a new div and will hold the infor of name var.
	  	//  				.appendTo(row);
	
	
	  var co2Divcss = $("<div>").addClass("co2Circles").addClass(costData.Fuel)//.text(co2Width, co2height)
								.css({ width: co2Width,
								height: co2height })
								.appendTo(row);
								
	// var areaDiv = $("<div>").addClass("area").text(areaParse) //create a new variable that contains a new div and will hold the infor of name var.
	//						  	  				.appendTo(row);

	  var areaDivcss = $("<div>").addClass("areaCircles").addClass(costData)//.text(areaWidth, areaheight)
														.css({ width: areaWidth,
														height: areaheight })
														.appendTo(row);	
																		
					
				$(areaDivcss).hover(function(){
		
					var location1 = costData.Location;
				
					
				   var  overlay  = $("<div>").addClass("infoHover").html("Facility:" +" "+ costData.Facility + "</br> " + "Provider:" + " " + costData.Provider + "</br> ")  
				    $(this).append(overlay);
					
					var mapVar = $("<div>").addClass("map1").html("<iframe width=500 height=400 src='https://maps.google.com/?output=embed&iwloc=addrA&q=" + encodeURIComponent(location1) + "&hl=en&geocode='></iframe>");
					overlay.append(mapVar);
				
				},function(){
					      $(this).empty();
					    })
					
								
					
		
																

	$(".circles").append(row); //append the row to body	
	   
	 }(costData)); //an iefe "trick"


 
     i++;
   }


});


//var div=$("<div>").text(name + " " + salary)
//	.css({ width: salaryWidth,
//		 	backgroundColor: "pink", 
//			marginTop:10});
		//$("body").append(div);
		
		//$('body').append('<p>My Visualization Here</p>');
		//alert("hello");

		//var myP = $("p").text("my...here")
		//$("body").append("myP");
		