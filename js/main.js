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


// Initialize Buttons 

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;



function goStore() {
    button1.innerText = "Buy 10 health (10 gold)";
    button2.innerText = "Buy weapon (30 gold)";
    button3.innerText = "Go to town square";
    button1.onclick = buyHealth;
    button2.onclick = buyWeapon;
    button3.onclick = goTown;
}


function goCave() {
    console.log("Going to cave.");
}


function fightDragon() {
    console.log("Fighting dragon.");
}