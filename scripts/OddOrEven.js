let SubmitBtn = document.getElementById("SubmitBtn");
let num1 = document.getElementById("num1")
let SayHelloText = document.getElementById("SayHelloText");



const OddEvenEndpoint = async num1 => {
    const promise = await fetch(`http://localhost:5143/ChallengeSix/ODDorEVEN/${num1}`);
    const data = await promise.text();
    console.log(data)
    return data;
}


SubmitBtn.addEventListener('click', async () => {
    if(num1.value)
    {
    let getData = await OddEvenEndpoint(num1.value);
    SayHelloText.textContent = getData;
    }
});