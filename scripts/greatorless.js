let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let num1big = document.getElementById("num1big");
let num2big = document.getElementById("num2big");
let SubmitBtn = document.getElementById("SubmitBtn");
let SayHelloText = document.getElementById("SayHelloText");


SubmitBtn.addEventListener("click", async () =>{
    if(num1.value && num2.value){
        let getData = await GreatORlessEndpoint(num1.value, num2.value);
        SayHelloText.textContent = getData;
    }
});

SubmitBtn.addEventListener("click", async () =>{
    if(num1big.value && num2big.value){
        let getData = await GreatORlessEndpoint1(num1big.value, num2big.value);
        SayHelloText.textContent = getData;
    }
});

const GreatORlessEndpoint = async (num1, num2) => {
    const promise = await fetch(`http://localhost:5143/Compare/NumCompare/${num1}/${num2}`);
    const data = await promise.text();
   return data;
}

const GreatORlessEndpoint1 = async (num1, num2) => {
    const promise = await fetch(`http://localhost:5143/Compare/NumCompare/${num1}/${num2}`);
    const data = await promise.text();
   return data;
}
