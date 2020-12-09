const contentTarget = document.querySelector(".rides");
const eventHub = document.querySelector("#state-fair");

export const rideTicketHolders = () => {
    eventHub.addEventListener("rideTicketPurchsed", customEvent => {
        return contentTarget.innerHTML += `
            <div class="rider person"></div>
        ` 
    })
};

/*
- Remember to add += and not simply = when adding the the HTML above. 
  This is because you want a blue square to appear everytime the 
  button is clicked 
*/
