$(function() {
 
 var i= 0;

  var minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  while(i < crimes.data.length){

    var  crime = crimes.data[i];

	var y = parseFloat(crime[35],10);	//turns a string into a number, parse means to turn into somehting else
	var x = parseFloat(crime[34],10);	

	if(x < minX) { minX = x; }
	if(x > maxX) { maxX = x; }
	
	if(x < minY) { minY = y; }
	if(x > maxY) { maxY = y; }

    i++;

  
 }

  var i= 0;
  while(i < crimes.data.length){

    var crime = crimes.data[i];

    var crimeCode = crime[41];

	var neighbourhood = crime[22];

	var y = parseFloat(crime[35],10);	//turns a string into a number, parse means to turn into somehting else
	var x = parseFloat(crime[34],10);
	
	
	var CrimeClass =$("<div>").addClass("crimes"); //how to add / append crime to this div?
	$(".crimes").append(crime);
	
	
	$(div).mouseover(function(){
	      $(this).html(crime);
	})	
	

	$(div).mouseout(function(){
      $(this).hide(crime);
    })
	
	

	
	// var i = 0;
	//     $("div.overout").mouseover(function(){
	//       $("p:first",this).text("mouse over");
	//     }).mouseout(function(){
	//       $("p:first",this).text("mouse out");
	//     });


	// var mousing =	$(div).mouseover(function(){
	// 	      		$(this).html(crime);
	// 	})
	// 	
	// $(div).mouseout(function(){
	//       $().hide(mousing);
	//     });
	
	
	//div.find("<div>").text(i);

//	var div = $("<div>").text(neighbourhood);
//	$("body").append(div);	
	
	
	var diffX = maxX - minX;
	var screenX = (x - minX) / diffX * 500;
	
	var diffY = maxY - minY;
	var screenY = (y - minY) / diffY * 500;
	
	var div =$("<div>").addClass("circles").css({
		position:"absolute", width: 10, height:10,
		backgroundColor:"red",
		left: screenX, top: screenY,
		opacity:0.5	
	})
	
	  	
	
	.attr("title", neighbourhood + crimeCode ); // on this display title, neig + crimeCode
	
	// var div = $("<div>").text(screenY);
	// $("body").append(div);
	// 
	// var div = $("<div>").text(screenX);
	// $("body").append(div);
	

	
$("body").append(div);	



    i++;
   }

   console.log([minX, maxX, minY, maxY]);



//var tomouse = $("<div>").text(minX);
//$(this).mouseover(tomouse);

});

  
