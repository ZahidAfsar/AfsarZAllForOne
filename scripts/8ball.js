let SubmitBtn = document.getElementById("SubmitBtn");
let SayHelloText = document.getElementById("SayHelloText");
let user = document.getElementById("user");


const eightballEndpoint = async user => {
    const promise = await fetch(`http://localhost:5143/Magic8/YesOrNoQuestion/${user}`);
    const data = await promise.text();
    console.log(data)
    return data;
}


SubmitBtn.addEventListener('click', async () => {
    if(user.value)
    {
    let getData = await eightballEndpoint(user.value);
    SayHelloText.textContent = getData;
    }
});