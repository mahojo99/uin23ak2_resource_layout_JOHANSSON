const resources = [
    {
        category: "HTML",
        text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/html/"
            },
            {
                title: "HTML Living standard",
                url: "https://html.spec.whatwg.org/multipage/"
            },
            {
                title: "HTML.com Tutorials",
                url: "https://html.com/"
            },
        ]
    },
    {
        category: "CSS",
        text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/css/"
            },
            {
                title: "W3C HTML & CSS Standards",
                url: "https://www.w3.org/standards/webdesign/htmlcss.html"
            },
            {
                title: "W3C CSS Validator",
                url: "https://jigsaw.w3.org/css-validator/"
            },
            {
                title: "CSS Tricks",
                url: "https://css-tricks.com/"
            },
        ]
    },
    {
        category: "JavaScript",
        text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/js/"
            },
            {
                title: "MDN Web Docs",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "React",
        text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
        sources: [
            {
                title: "React documentation",
                url: "https://reactjs.org/docs/getting-started.html"
            },
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/REACT/DEFAULT.ASP"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "Sanity and headless CMS",
        text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
        sources: [
            {
                title: "Sanity documentation",
                url: "https://www.sanity.io/docs"
            },
            {
                title: "OnCrawl: a beginners guide to headless CMS",
                url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/"
            },
            {
                title: "Section.io: Getting started with Sanity CMS",
                url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/"
            },
        ]
    },
]




let main = document.getElementById("main")

let btnOne = document.getElementById("HTML");
let btnTwo = document.getElementById("CS");
let btnThree = document.getElementById("JS");
let btnFour = document.getElementById("REACT");
let btnFive = document.getElementById("CMS");


function renderContent() {
    main.innerHTML = `<h2>${resources[0].category}</h2><p>${resources[0].text}</p><ul>`;
    for (let i = 0; i < resources[0].sources.length; i++) {
        main.innerHTML += `<li><a href="${resources[0].sources[i].url}">${resources[0].sources[i].title}</a></li>`;
    }
    main.innerHTML += `</ul>`;
}

renderContent();

btnOne.addEventListener("click", function(){
    main.innerHTML = `<h2>${resources[0].category}</h2><p>${resources[0].text}</p><ul>`;
    for (let i = 0; i < resources[0].sources.length; i++) {
        main.innerHTML += `<li><a href="${resources[0].sources[i].url}">${resources[0].sources[i].title}</a></li>`;
    }
    main.innerHTML += `</ul>`;
});

btnTwo.addEventListener("click", function(){
    main.innerHTML = `<h2>${resources[1].category}</h2><p>${resources[1].text}</p><ul>`;
    for (let i = 0; i < resources[1].sources.length; i++) {
        main.innerHTML += `<li><a href="${resources[1].sources[i].url}">${resources[1].sources[i].title}</a></li>`;
    }
    main.innerHTML += `</ul>`;
});

btnThree.addEventListener("click", function(){
    main.innerHTML = `<h2>${resources[2].category}</h2><p>${resources[2].text}</p><ul>`;
    for (let i = 0; i < resources[2].sources.length; i++) {
        main.innerHTML += `<li><a href="${resources[2].sources[i].url}">${resources[2].sources[i].title}</a></li>`;
    }
    main.innerHTML += `</ul>`;
});

btnFour.addEventListener("click", function(){
    main.innerHTML = `<h2>${resources[3].category}</h2><p>${resources[3].text}</p><ul>`;
    for (let i = 0; i < resources[3].sources.length; i++) {
        main.innerHTML += `<li><a href="${resources[3].sources[i].url}">${resources[3].sources[i].title}</a></li>`;
    }
    main.innerHTML += `</ul>`;
});

btnFive.addEventListener("click", function(){
    main.innerHTML = `<h2>${resources[4].category}</h2><p>${resources[4].text}</p><ul>`;
    for (let i = 0; i < resources[4].sources.length; i++) {
        main.innerHTML += `<li><a href="${resources[4].sources[i].url}">${resources[4].sources[i].title}</a></li>`;
    }
    main.innerHTML += `</ul>`;
});
