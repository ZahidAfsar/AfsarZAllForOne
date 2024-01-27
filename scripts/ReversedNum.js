let SubmitBtn = document.getElementById("SubmitBtn");
let SayHelloText = document.getElementById("SayHelloText");
let user = document.getElementById("user");

const intReverseEndpoint = async user => {
    const promise = await fetch(`http://localhost:5143/ChallengeSevenInt/IntReverse/${user}`);
    const data = await promise.text();
    console.log(data)
    return data;
}


SubmitBtn.addEventListener('click', async () => {
    if(user.value)
    {
    let getData = await intReverseEndpoint(user.value);
    SayHelloText.textContent = getData;
    }
});



