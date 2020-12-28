const contentTarget = document.querySelector(".entry");
const eventHub = document.querySelector("#state-fair");

/* Remember to be mindful of whether selecting an id or class as that
   dictates whther you use a # or . 
*/

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "rideTicket") {
       const rideEvent = new CustomEvent("rideTicketPurchased")
       eventHub.dispatchEvent(rideEvent) 
    }
});

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "foodTicket") {
        const foodEvent = new CustomEvent("foodTicketPurchased")
        eventHub.dispatchEvent(foodEvent)
    }
});

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "gameTicket") {
        const gameEvent = new CustomEvent ("gameTicketPurchased")
        eventHub.dispatchEvent(gameEvent)
    }
});

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "sideshowTicket") {
        const sideshowEvent = new CustomEvent ("sideshowTicketPurchased")
        eventHub.dispatchEvent(sideshowEvent)
    }
});

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "fullPackageTicket") {
        const fullPackage = new CustomEvent ("fullPackageTicketPurchased")
        eventHub.dispatchEvent(fullPackage)
    }
});

export const ticketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
            <button id="foodTicket">Food Ticket</button>
            <button id="gameTicket">Game Ticket</button>
            <button id="sideshowTicket">Sideshow Ticket</button>
            <button id="fullPackageTicket">Full Package Ticket</button>
        </div>
    `
};