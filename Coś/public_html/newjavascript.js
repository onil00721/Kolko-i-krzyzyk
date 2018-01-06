
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

var jeden_Wygrana;     //wartość false odpowiada za wartość O a true  X
var dwa_Wygrana;
var trzy_Wygrana;
var cztery_Wygrana;
var piec_Wygrana;
var szesc_Wygrana;
var siedem_Wygrana;
var osiem_Wygrana;
var dziewiec_Wygrana ;

var nrKratki=0;  //Zwraca numer kratki do której się odwołujemy




function myFun(){  //funkcja wstawiająca odpowiedni znak do kratki
    
        if  (znak == false)  {             
            $(nrKratki).html( '<i class=" icon-circle-empty" style="opacity: 1;"></i>'); // wstawia kółko O               
             znak = true; 
           
            }

        else{                
            $( nrKratki ).html( '<i class="icon-cancel" style="opacity: 1;"></i>');// wstawia X
             znak = false; 
             } 
       
       
    }


function jakiZnak(){    //Wzraca wartość czy O czy X    
           
      var htmlString = $(nrKratki).html();    
    if ( htmlString ==  '<i class=" icon-circle-empty" style="opacity: 1;"></i>' ){   
       
            if(nrKratki=="#1"){
                    jeden_Wygrana=false;
                }
        
             else if (nrKratki=="#2"){
                    dwa_Wygrana=false;
                }
             else if (nrKratki=="#3"){
                    trzy_Wygrana=false;
                }
             else if (nrKratki=="#4"){
                    cztery_Wygrana=false;
                }
             else if (nrKratki=="#5"){
                    piec_Wygrana==false;
                }
             else if (nrKratki=="#6"){
                    szesc_Wygrana=false;
                }
             else if (nrKratki=="#7"){
                    sziedem_Wygrana=false;
                }
             else if (nrKratki=="#8"){
                    osiem_Wygrana=false;
                }
             else if (nrKratki=="#9"){
                    dziewiec_Wygrana=false;
                } 
                 
    } 
    
     else{
         
            if(nrKratki=="#1"){
                    jeden_Wygrana=true;
                }
        
             else if (nrKratki==="#2"){
                    dwa_Wygrana=true;
                }
             else if (nrKratki=="#3"){
                    trzy_Wygrana=true;
                }
             else if (nrKratki=="#4"){
                    cztery_Wygrana=true;
                }
             else if (nrKratki=="#5"){
                    piec_Wygrana=true;
                }
             else if (nrKratki=="#6"){
                    szesc_Wygrana=true;
                }
             else if (nrKratki=="#7"){
                    sziedem_Wygrana=true;
                }
             else if (nrKratki=="#8"){
                    osiem_Wygrana=true;
                }
             else if (nrKratki=="#9"){
                    dziewiec_Wygrana=true;
                }

         
         
        }
    
 }


function ktoWygral(){
    
    if( jeden_Wygrana && dwa_Wygrana && trzy_Wygrana == true){
        console.log("Wygrał X 123");
    }
    
    else if(){
             console.log("Ktoś chyba wygrał");
            }
    
    
    
}

    

$( "#1" ).click(function() {     //akcja dla kratki 1
      nrKratki="#1";   
       
    if ( jeden==false){    
        myFun();          //wstawiamy O albo X
    } 
    
     jeden=true;    //blokuje możliwość ponownego wstawienia znaku 
     jakiZnak();     //Zwraca informację o wstawionym znaku do kratki w postaci true albo false   
     ktoWygral();   

    
});


$( "#2" ).click(function() {     //akcja dla kratki 1
      nrKratki="#2";   
       
    if ( dwa==false){    
        myFun();          //wstawiamy O albo X
    } 
    
     dwa=true;    //blokuje możliwość ponownego wstawienia znaku 
     jakiZnak();     //Zwraca informację o wstawionym znaku do kratki w postaci true albo false   
     ktoWygral();   

    
});


$( "#3" ).click(function() {     //akcja dla kratki 1
      nrKratki="#3";   
       
    if ( trzy==false){    
        myFun();          //wstawiamy O albo X
    } 
    
     trzy=true;    //blokuje możliwość ponownego wstawienia znaku 
     jakiZnak();     //Zwraca informację o wstawionym znaku do kratki w postaci true albo false   
     ktoWygral();   
console.log(jeden_Wygrana);
console.log(dwa_Wygrana);
console.log(trzy_Wygrana);
    
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





              
              
    