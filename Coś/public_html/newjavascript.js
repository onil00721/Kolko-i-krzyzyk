
var znak= false; // false= wstaw kółko, true wstaw krzyżyk

var jeden= false; // Blokuje możliwość wstawienia więcej niż jednekgo znaku do jednego pola 
var dwa= false;
var trzy= false;
var cztery= false;
var piec= false;
var szesc= false;
var siedem= false;
var osiem= false;
var dziewiec= false;

var jeden_Wygrana;
var dwa_Wygrana;
var trzy_Wygrana;
var cztery_Wygrana;
var piec_Wygrana;
var szesc_Wygrana;
var siedem_Wygrana;
var osiem_Wygrana;
var dziewiec_Wygrana ;

var zwracamZnak;

var nrKratki;  //Zwraca numer kratki do której się odwołujemy




function myFun(){  //funkcja wstawiająca odpowiedni znak do kratki
    
        if  (znak == false)  {             
            $(nrKratki).html( '<i class=" icon-circle-empty" style="opacity: 1;"></i>'); // wstawia kółko O               
             znak = true; 
            jeden_Wygrana=false;
            
            console.log(jeden_Wygrana);
            
            }

        else{                
            $( nrKratki ).html( '<i class="icon-cancel" style="opacity: 1;"></i>');// wstawia X
             znak = false; 
             } 
       
       
    }


function jakiZnak(){    //Wzraca wartość czy O czy X
    
    $( nrKratki).click(function() {  
      var htmlString = $( this ).html();
    
    if ( (htmlString) ==  '<i class=" icon-circle-empty" style="opacity: 1;"></i>' ){     
        console.log("O");
        
      
        zwracamZnak=23;
         console.log(zwracamZnak);
    }  
        else{
            console.log("X");
        }
    
        });
        }
    











$( "#1" ).click(function() {     //akcja dla kratki 1
nrKratki='#1';
   
    
    if ( jeden==false){    
        myFun();          //wstawiamy O albo X
    }  
     jeden=true;
    jakiZnak();     //Zwraca informację o wstawionym znaku do kratki 
    
    console.log(nrKratki);
    
    
     
});



$( "#2" ).click(function() {     
nrKratki='#2';
    
    if ( dwa==false){    
        myFun();          
    }   
    dwa=true;
});



$( "#3" ).click(function() {     
nrKratki='#3';
    
    if ( trzy==false){    
        myFun();          
    }   
    trzy=true;
});



$( "#4" ).click(function() {     
nrKratki='#4';
    
    if ( cztery==false){    
        myFun();          
    }  
    cztery=true;
});



$( "#5" ).click(function() {     
nrKratki='#5';
    
    if ( piec==false){    
        myFun();          
    }   
    piec=true;
});



$( "#6" ).click(function() {     
nrKratki='#6';
    
    if ( szesc==false){    
        myFun();          
    }  
    szesc=true;
});



$( "#7" ).click(function() {     
nrKratki='#7';
    
    if ( siedem==false){    
        myFun();          
    }  
    siedem=true;
});



$( "#8" ).click(function() {     
nrKratki='#8';
    
    if ( osiem==false){    
        myFun();          
    }  
    osiem=true;
});



$( "#9" ).click(function() {     
nrKratki='#9';
    
    if ( dziewiec==false){    
        myFun();          
    }  
    dziewiec=true;
});





              
              
    