console.log("Script loaded");
console.log("Hello World");

button = document.querySelector("body > main > header > p > button");
button.onclick = () => {
    console.log("YOU CLICKED ME");
    window.location.href = "https://hero.fandom.com/wiki/Monkey_D._Luffy#:~:text=Luffy%2C%20also%20known%20as%20Straw,the%20grandson%20of%20Monkey%20D.";
};