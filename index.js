
//Finding elements
let head = document.querySelector("head");
let title = document.querySelector("title");
let main = document.querySelector("main");
let h1 = document.querySelector("h1");
let sectionContact = document.querySelector("#contact");
let sectionAbout = document.querySelector("#about");
let lastLink = document.querySelector("li:last-child a");
let paragraphInContact = document.querySelector("#contact p");
let firstRowInTable = document.querySelector("table thead tr");
let td1 = document.querySelector("table thead td:first-child");
let td2 = document.querySelector("table thead td:last-child");

//Changing text content in h1
h1.textContent = "Fruits & Vegetables Corp";

//Changing text content in link
lastLink.textContent = "Vegetables";

//Changing href in link
lastLink.setAttribute("href", "#vegetables");

//Wrapping the text in About in a p tag
let paragraphInAbout = document.createElement("p");
paragraphInAbout.textContent = sectionAbout.textContent;
sectionAbout.appendChild(paragraphInAbout);
let textInAbout = sectionAbout.firstChild;
sectionAbout.removeChild(textInAbout);

//Creating two h2 elements
let headerContact = document.createElement("h2");
let headerAbout = document.createElement("h2");

//Placing headers in each section
sectionContact.insertBefore(headerContact, paragraphInContact);
sectionAbout.insertBefore(headerAbout, paragraphInAbout);

//Adding text content to headers
headerContact.textContent = sectionContact.id;
headerAbout.textContent = sectionAbout.id;

//Capitalizing h2-headers
headerContact.setAttribute("style", "text-transform:capitalize");
headerAbout.setAttribute("style", "text-transform:capitalize");

//Swapping sections
main.insertBefore(sectionAbout, sectionContact);

//Changing title
title.textContent = "Fruits & Vegetables Corp";

//Adding main.css file
let link = document.createElement("link");
link.setAttribute("rel", "stylesheet");
link.setAttribute("href", "main.css");
head.appendChild(link);

//Creating th elements
let th1 = document.createElement("th");
let th2 = document.createElement("th");

//Adding content to th elements
th1.textContent = td1.textContent;
th2.textContent = td2.textContent;

//Replacing td elements with th elements
firstRowInTable.replaceChild(th1, td1);
firstRowInTable.replaceChild(th2, td2);
