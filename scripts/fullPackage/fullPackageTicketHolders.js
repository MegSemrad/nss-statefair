const eventHub = document.querySelector("#state-fair");
const contentTarget = document.querySelectorAll(".people");



export const fullPackageTicketHolders = () => {
        eventHub.addEventListener("fullPackageTicketPurchased", event => {
            let i;
            for(i = 0; i < contentTarget.length; i++) {
                contentTarget[i].innerHTML += `
                <div class="bigSpender person"></div>
            `
            }
        })
}
 

    /*
    - .querySelectorAll() is a method 
    */