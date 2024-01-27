let name = document.getElementById("name");
let time = document.getElementById("time");
let name1 = document.getElementById("name1");
let time1 = document.getElementById("time1");
let SubmitBtn = document.getElementById("SubmitBtn");
let SayHelloText = document.getElementById("SayHelloText");


SubmitBtn.addEventListener("click", async () =>{
    if(name.value && time.value){
        let getData = await AskEndpoint(name.value, time.value);
        SayHelloText.textContent = getData;
    }
});

SubmitBtn.addEventListener("click", async () =>{
    if(name1.value && time1.value){
        let getData = await AskEndpoint(name1.value, time1.value);
        SayHelloText.textContent = getData;
    }
});



const AskEndpoint = async (name, time) => {
    const promise = await fetch(`http://localhost:5143/AskingQuestion/NameReturn/${name}/${time}`);
    const data = await promise.text();
    console.log(data);
    return data;
}

const AskEndpoint1 = async (name1, time1) => {
    const promise = await fetch(`http://localhost:5143/AskingQuestion/NameReturn/${name}/${time}`);
    const data = await promise.text();
    console.log(data)
    return data;
}


