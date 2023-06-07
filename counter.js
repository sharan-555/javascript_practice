let counterElement=document.getElementById("val");

function increment(){
    let previousValue=counterElement.textContent;// 0 will be in string format
    let presentValue=parseInt(previousValue)+1;//parseInt() will converts string to integer
    counterElement.textContent=presentValue;
    if (presentValue>0)
    {
      counterElement.style.color="Green";
    }
    else if(presentValue<0)
    {
    counterElement.style.color="Red";
    }
    else
    {
        counterElement.style.color="Black";
    }
   
}
function decrement(){
    let previousValue=counterElement.textContent;// 0 will be in string format
    let presentValue=parseInt(previousValue)-1;//parseInt() will converts string to integer
    counterElement.textContent=presentValue;
    if (presentValue<0)
    {
      counterElement.style.color="Red";
    }
    else if(presentValue>0)
    {
    counterElement.style.color="Green";
    }
    else
    {
        counterElement.style.color="Black";
    }

}
function reset(){

    counterElement.textContent=0;
   if (presentValue===0){
    counterElement.style.color="Black";
    }
}