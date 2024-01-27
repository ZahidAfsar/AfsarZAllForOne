let SayHelloText = document.getElementById("SayHelloText");
let SubmitBtn = document.getElementById("SubmitBtn");


let name = document.getElementById("name");
let username = document.getElementById("username");
let verb = document.getElementById("verb");
let name2 = document.getElementById("name2");
let noun = document.getElementById("noun");
let noun2 = document.getElementById("noun2");
let verb2 = document.getElementById("verb2");
let noun3 = document.getElementById("noun3");
let noun4 = document.getElementById("noun4");
let creatureName = document.getElementById("creatureName");
let weaponName = document.getElementById("weaponName");

let nameSMALL = document.getElementById("nameSMALL");
let usernameSMALL = document.getElementById("usernameSMALL");
let verbSMALL = document.getElementById("verbSMALL");
let name2SMALL = document.getElementById("name2SMALL");
let nounSMALL = document.getElementById("nounSMALL");
let noun2SMALL = document.getElementById("noun2SMALL");
let verb2SMALL = document.getElementById("verb2SMALL");
let noun3SMALL = document.getElementById("noun3SMALL");
let noun4SMALL = document.getElementById("noun4SMALL");
let creatureNameSMALL = document.getElementById("creatureNameSMALL");
let weaponNameSMALL = document.getElementById("weaponNameSMALL");


const MadLibpoint = async (name, username, verb, name2, noun, noun2, verb2, noun3, noun4, creatureName, weaponName) => {
    const promise = await fetch(`http://localhost:5143/ChallengeFive/MadLib/${name}/${username}/${verb}/${name2}/ ${noun}/${noun2}/${verb2}/ ${noun3}/${noun4}/${creatureName}/${weaponName}`);
    const data = await promise.text();
    console.log(data);
    return data;
}

SubmitBtn.addEventListener('click', async () => {
    if(name.value, username.value, verb.value, name2.value, noun.value, noun2.value, verb2.value, noun3.value, noun4.value, creatureName.value, weaponName.value){
        let getData = await MadLibpoint(name.value, username.value, verb.value, name2.value, noun.value, noun2.value, verb2.value, noun3.value, noun4.value, creatureName.value, weaponName.value);
        SayHelloText.textContent = getData;
    }
});

const MadLibpointSMALL = async (nameSMALL, usernameSMALL, verbSMALL, name2SMALL, nounSMALL, noun2SMALL, verb2SMALL, noun3SMALL, noun4SMALL, creatureNameSMALL, weaponNameSMALL) => {
    const promise = await fetch(`http://localhost:5143/ChallengeFive/MadLib/${nameSMALL}/${usernameSMALL}/${verbSMALL}/${name2SMALL}/ ${nounSMALL}/${noun2SMALL}/${verb2SMALL}/ ${noun3SMALL}/${noun4SMALL}/${creatureNameSMALL}/${weaponNameSMALL}`);
    const data = await promise.text();
    console.log(data);
    return data;
}

SubmitBtnSMALL.addEventListener('click', async () => {
    if(nameSMALL.value, usernameSMALL.value, verbSMALL.value, name2SMALL.value, nounSMALL.value, noun2SMALL.value, verb2SMALL.value, noun3SMALL.value, noun4SMALL.value, creatureNameSMALL.value, weaponNameSMALL.value){
        let getData = await MadLibpointSMALL(nameSMALL.value, usernameSMALL.value, verbSMALL.value, name2SMALL.value, nounSMALL.value, noun2SMALL.value, verb2SMALL.value, noun3SMALL.value, noun4SMALL.value, creatureNameSMALL.value, weaponNameSMALL.value);
        SayHelloText.textContent = getData;
    }
});