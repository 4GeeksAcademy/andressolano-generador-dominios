import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];


window.onload = function() {
  //write your code here
  let container = document.querySelector("#domain-list");

  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        let domain = `${p}${a}${n}.com`;
        console.log(domain); 
        let li = document.createElement("li");
        li.textContent = domain;
        container.appendChild(li);
      }
    }
  }
};
