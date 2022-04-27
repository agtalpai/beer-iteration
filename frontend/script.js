console.log(beers);

// hozzuk létre a szükséges komponenseket: main és card
// see below: anonim, generikus függvényt hozunk létre, ezért oké, hogy szóköz van a function után - ti. kiamrad a név

const mainSectionComponent = function (id, button, logo, cards) {
    return `
        <section id="${id}"> ${button} ${logo} ${cards}</section>
    `
}

const beerCardComponent = function (title, sub, text) {
    return `
    <div class="card">
    <div class="${title}">${title}</div>
    <div class="${sub}">${sub}</div>
    <div class="${text}">${text}</div>
    </div>
    `
}

const loadEvent = function () {
    const rootElement = document.getElementById("root");

    for (const card of beers.cards) {

        let sectionInner = "";

        // for (let index = 1; index <= month.days; index++) {     
        //     sectionInner += beerCardComponent(2022, month.month, index)       
        // }

            // console.log(sectionInner);

        rootElement.insertAdjacentHTML("beforeend", beerCardComponent(sectionInner, beers.cards['title'], beers.button, beers.cards));
        
    }
}
 
window.addEventListener("load", loadEvent);