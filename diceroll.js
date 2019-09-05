

function start()
{
   // console.log("heee")
   

   var d1= document.getElementById("d1");
   var d2 =document.getElementById("d2");
   var total = document.getElementById("total");
   var status = document.getElementById("status");
 //for dice1
  var randomnum1= Math.random();
  d1=randomnum1;
  var improve =  ( d1 * 6 ) +1 ;
  var flore = Math.floor(improve);
//for dice 2
  var randomnum2= Math.random();
  d2=randomnum2;
  var improve2 =  ( d2 * 6 ) +1 ;
  var flore2 = Math.floor(improve2);

  document.getElementById("d1").textContent = flore;
  document.getElementById("d2").textContent = flore2 ;

 //total 
 var total = flore + flore2 ;
 document.getElementById("total").textContent = "You rolled " +total;

 //status
  if(flore!=flore2)
  {
   status.style.display = "none";
 
  }
  else
  {
      document.getElementById("status").innerHTML = "Double!! u got a new turn";
    status.style.display = "block";
 
    }

  

}