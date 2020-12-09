const contentTarget = document.querySelector(".games");
const eventHub = document.querySelector("#state-fair");

export const GameTicketHolders = () => {
    eventHub.addEventListener("gameTicketPurchased", customEvent => {
        return contentTarget.innerHTML += `
        <div class="player person"></div>
        `
    })
}