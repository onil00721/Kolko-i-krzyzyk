
var znak= false; // false= wstaw kółko, true wstaw krzyżyk

var jeden= false;
var dwa= false;
var trzy= false;
var cztery= false;
var piec= false;
var szesc= false;
var siedem= false;
var osiem= false;
var dziewiec= false;


//var stanKratki= $("#1").value; 
//document.write("#1");


function myFun(){  
    
        if  (znak == false)  {  
           
            $( "#1").html( '<i class=" icon-circle-empty" style="opacity: 1;"></i>'); // wstawia kółko O    
            
             znak = true; 
            }

        else{                
            $( "#1" ).html( '<i class="demo-icon icon-cancel" style="opacity: 1;"></i>');//X
             znak = false; 
             } 
        console.log(jeden + "tot tu"); 
       
    }






$( "#1" ).click(function() {   


if ( jeden==false){
  myFun();
     console.log("myFUN");
    
    }
else{
    console.log("end");
}
});





                
   
    $('#1').click(function() {
     jeden=true;     
    })

     $('#2').click(function() {
       dwa=true; 
         
     })

     $('#3').click(function() {
       trzy=true;   
         
     })

     $('#4').click(function() {
      cztery=true;    
     })

     $('#5').click(function() {
      piec=true;    
     })
    
     $('#6').click(function() {
      szesc=true;    
     })

    $('#7').click(function() {
      siedem=true;    
     })

     $('#8').click(function() {
      osiem=true;    
     })

     $('#9').click(function() {
      dziewiec=true;    
     })
       
              
              
              
              
   //console.log('test');
   
         



//$('input#guzik').on('click', function() {
 //   console.log('test');
//})