
var kolejka= false; // false= wstaw kółko, true wstaw krzyżyk

$( ".kratka " ).click(function() {     
  
      if ( kolejka == false ){             
        $( this ).html( '<i class=" icon-circle-empty" style="opacity: 1;"></i>'); // wstawia kółko O    
         kolejka = true; 
        }
    
    else{                
        $( this ).html( '<i class="demo-icon icon-cancel" style="opacity: 1;"></i>');//X
         kolejka = false; 
         }
    
});
                
 
                      
