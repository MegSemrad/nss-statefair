const eventHub = document.querySelector("#state-fair");
const contentTarget = document.querySelectorAll(".people");


export const fullPackageTicketHolders = () => {
        eventHub.addEventListener("fullPackageTicketPurchased", event => {
            contentTarget[0].innerHTML += `
                <div class="bigSpender person"></div>
            `
            contentTarget[1].innerHTML += `
                <div class="bigSpender person"></div>
            `
            contentTarget[2].innerHTML += `
                <div class="bigSpender person"></div>
            `
            contentTarget[3].innerHTML += `
                <div class="bigSpender person"></div>
            `
        })
    };