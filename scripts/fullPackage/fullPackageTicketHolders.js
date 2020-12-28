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
 

    /*  NOTES FROM w3schools.com
    - The querySelectorAll() method returns all elements in the document that 
      matches a specified CSS selector(s), as a static NodeList object.
    - The NodeList object represents a collection of nodes. The nodes can be accessed 
      by index numbers. The index starts at 0.
    - Tip: You can use the length property of the NodeList object to determine the 
      number of elements that matches the specified selector, then you can loop 
      through all elements and extract the info you want.
    */