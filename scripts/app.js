let SubmitBtn = document.getElementById("SubmitBtn");
let SayHelloText = document.getElementById("SayHelloText");
let user = document.getElementById("user");


const SayHelloEndpoint = async user => {
    const promise = await fetch(`http://localhost:5143/SayHello/NameReturn/${user}`);
    const data = await promise.text();
    console.log(data)
    return data;
}


SubmitBtn.addEventListener('click', async () => {
    if(user.value)
    {
    let getData = await SayHelloEndpoint(user.value);
    SayHelloText.textContent = getData;
    }
});