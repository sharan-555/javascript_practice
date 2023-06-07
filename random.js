/*let x=Math.random();
console.log(x);
let m=x*100;
***********
let k=Math.ceil(m);
console.log(k)
let value=document.getElementById("text-val");
let k=value.value;
console.log(k)*/
let input=document.getElementById("text-box");
let random_num= Math.random();
let dec_num=random_num*100;
let number=Math.ceil(dec_num);

function guess(){
    let guessed_number= parseInt(input.value);
    if(guessed_number>number+1){
        document.getElementById("result-text").textContent="your Number is too High";

    }
    else if (guessed_number < number+1){
        document.getElementById("result-text").textContent="your Number is too Low";

    }
    else if (guessed_number === number+1){
        document.getElementById("result-text").textContent="you guessed the correct number";

    }
    else{
        document.getElementById("result-text").textContent="provide valid input";

    }


}