const contentTarget = document.querySelector(".games");
const eventHub = document.querySelector("#state-fair");

export const gameTicketHolders = () => {
    eventHub.addEventListener("gameTicketPurchased", customEvent => {
        return contentTarget.innerHTML += `
        <div class="player person"></div>
        `
    })
}