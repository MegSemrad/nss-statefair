const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "rideTicket") {
       const rideEvent = new CustomEvent("rideTicketPurchsed", {
           detail: {

           }
       }) 
    }
}

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
        </div>
    `
}

