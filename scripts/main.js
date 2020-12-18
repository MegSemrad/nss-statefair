import { ticketBooth } from './TicketBooth.js';
import { rideTicketHolders } from './rides/RideTicketHolders.js';
import { foodTicketHolders } from './food/FoodTicketHolder.js';
import { gameTicketHolders } from './games/GameTicketHolder.js';
import { sideshowTicketHolders } from './sideshows/SideshowTicketHolders.js';
import { fullPackageTicketHolders } from './fullPackage/fullPackageTicketHolders.js';

ticketBooth();
rideTicketHolders();
foodTicketHolders();
gameTicketHolders();
sideshowTicketHolders();
fullPackageTicketHolders();

/* Ask why RideTicketHolders needs to be imported if we don't 
want it to populate the page when loads
*/


