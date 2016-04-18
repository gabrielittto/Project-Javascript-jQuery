$(document).ready(function() {


 


 $('button').click(function(){

    $('Root').empty();

   
    

        
    var dimension = prompt("What Dimensions will be your GRID ?", 25);

      for (i = 1; i <= dimension; i++) {

    var apend = '<div'   +  ' id=' + i +  ' </div>';
     $('Root').append(apend);

     document.getElementById(i.toString()).style.width = "1750px";

    


    for (j = 1; j <= dimension; j++) {

      
      
      var append2 = '<div' +  ' class=' +  i.toString() + '_' + j.toString() +  ' style="display: inline;margin: 2px;border: 3px solid #73AD21; "' + '>' + 'BOX ' + '       ' + '</div>';

       $("#" + i.toString()).append(append2);

      


        var r = Math.floor(Math.random() * 256);
var g = Math.floor(Math.random() * 256);
var b = Math.floor(Math.random() * 256);

var count = 0;

var r_10_por_cento = r * (0.1);
var g_10_por_cento = g * (0.1);
var b_10_por_cento = b * (0.1);


      

      $('.' + i.toString() + '_' + j.toString()).hover(function() {
        
        
        
        
        var hue2 = 'rgb(' + (parseInt(r - (count*r_10_por_cento))) + ',' + (parseInt(g - (count*g_10_por_cento))) + ',' + parseInt((b - (count*b_10_por_cento))) + ')';

        $(this).css("background-color", hue2);
        count ++;
      
      });


      

    };

    
  };
  


    
  });

    var r = Math.floor(Math.random() * 256);
var g = Math.floor(Math.random() * 256);
var b = Math.floor(Math.random() * 256);

var r_10_por_cento = r*0.1;
var g_10_por_cento = g*0.1;
var b_10_por_cento = b*0.1;



var hue = 'rgb(' + (r) + ',' + (g) + ',' + (g) + ')';


        for (i = 1; i <= 25; i++) {

    var apend = '<div'   +  ' id=' + i +  ' </div>';
     $('Root').append(apend);

     document.getElementById(i.toString()).style.width = "1750px";

    


    for (j = 1; j <= 25; j++) {

      
      
      var append2 = '<div' +  ' class=' +  i.toString() + '_' + j.toString() +  ' style="display: inline;margin: 2px;border: 3px solid #73AD21; "' + '>' + 'BOX ' + '       ' + '</div>';

       $("#" + i.toString()).append(append2);


  



      $('.' + i.toString() + '_' + j.toString()).hover(function() {
        $(this).css("background-color", hue);
      });


      


    };
  };


 


});
