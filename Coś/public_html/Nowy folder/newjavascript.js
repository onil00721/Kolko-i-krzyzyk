   
 
var tab=[];
var tab2=[];
var tab3=[];
 
var z=0;

  tab[0]=18
  tab[1]=18   
  tab[2]=15  
  tab[3]=12
  tab[4]=12  
  tab[5]=13 
  tab[6]=14  
  tab[7]=15  
  tab[8]=16  
  tab[9]=21  
  tab[10]=18  
tab.sort();
 console.log(tab);
     //  tab.slice(1,4);                                                                       
var t=1;
var a,b,e,f,g;




for( t=0; t<tab.length; t++){
    var a;
    var b;
    e=t+1;
f=t+1;
g=t+2;
   a =tab.slice(t,e);
      b = tab.slice(f,g);
    a = parseInt(a);
    b = parseInt(b);
   
       
        if(a!=b){
   
    console.log(a + "   a");  
    }   
   }


   
        
      
 


     
      
      