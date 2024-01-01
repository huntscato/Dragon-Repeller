const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
let currentWeapon = 0;
let fighting;
let gold = 50; 
const goldText = document.querySelector("#goldText");
let health = 100;
const healthText = document.querySelector("#healthText");
let inventory = ["stick"];
let monsterHealth;
const monsterHealthText = document.querySelector("#monsterHealth");
const monsterName = document.querySelector("#monsterName");
const monsterStats = document.querySelector("#monsterStats");
const text = document.querySelector("#text");
let xp = 0;
const xpText = document.querySelector("#xpText");
const locations = [
    {
        name: "town square",
        "button text": ["Go to store", "Go to cave", "Fight dragon"],
        "button functions": [goStore, goCave, fightDragon],
        text: "You are in the town square. You see a sign that says \"Store\"."
    },
    {
        name: "store",
        "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
        "button functions": [buyHealth, buyWeapon, goTown],
        text: "You enter the store."
    }
];


// Initialize Buttons 

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;



function goTown() {
    update();
}

function goStore() {
    button1.innerText = "Buy 10 health (10 gold)";
    button2.innerText = "Buy weapon (30 gold)";
    button3.innerText = "Go to town square";
    button1.onclick = buyHealth;
    button2.onclick = buyWeapon;
    button3.onclick = goTown;
    text.innerText = "You enter the store.";
}


function goCave() {
    console.log("Going to cave.");
}


function fightDragon() {
    console.log("Fighting dragon.");
}

function buyHealth() {

}

function buyWeapon() {

}

function update(location) {
    button1.innerText = "Go to store";
    button2.innerText = "Go to cave";
    button3.innerText = "Fight dragon";
    button1.onclick = goStore;
    button2.onclick = goCave;
    button3.onclick = fightDragon;
    text.innerText = "You are in the town square. You see a sign that says \"Store\".";
}
