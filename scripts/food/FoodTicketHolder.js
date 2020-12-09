const contentTarget = document.querySelector(".food");
const eventHub = document.querySelector("#state-fair");

export const foodTicketHolders = () => {
    eventHub.addEventListener("foodTicketPurchased", customEvent => {
        return contentTarget.innerHTML += `
        <div class="eater person"></div>
        `
    })
};