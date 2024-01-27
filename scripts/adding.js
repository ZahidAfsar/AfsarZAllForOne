let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let num1big = document.getElementById("num1big");
let num2big = document.getElementById("num2big");
let SubmitBtn = document.getElementById("SubmitBtn");
let SayHelloText = document.getElementById("SayHelloText");

SubmitBtn.addEventListener("click", async () =>{
    if(num1.value && num2.value){
        let getData = await AddingEndpoint(num1.value, num2.value);
        SayHelloText.textContent = getData;
    }
});

SubmitBtn.addEventListener("click", async () =>{
    if(num1big.value && num2big.value){
        let getData = await AddingEndpoint(num1big.value, num2big.value);
        SayHelloText.textContent = getData;
    }
});


const AddingEndpoint = async (num1, num2) => {
    const promise = await fetch(`http://localhost:5143/Adding/NumReturn/${num1}/${num2}`);
    const data = await promise.text();
    console.log(data)
    return data;
}


const AddingEndpoint1 = async (num1big, num2big) => {
    const promise = await fetch(`http://localhost:5143/Adding/NumReturn/${num1}/${num2}`);
    const data = await promise.text();
    console.log(data)
    return data;
}

