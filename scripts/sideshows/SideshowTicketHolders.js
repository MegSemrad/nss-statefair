const contentTarget = document.querySelector(".sideshow");
const eventHub = document.querySelector("#state-fair");

export const sideshowTicketHolders = () => {
    eventHub.addEventListener("sideshowTicketPurchased", customEvent => {
        return contentTarget.innerHTMl += `
            <div class="gawker person"></div>
        `
    })
};


/*
This module not working - cannot figure out why
*/