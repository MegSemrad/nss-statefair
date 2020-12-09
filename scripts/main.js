import { TicketBooth } from './TicketBooth.js';
import { RideTicketHolders } from './rides/RideTicketHolders.js';
import { FoodTicketHolders } from './food/FoodTicketHolder.js';
import { GameTicketHolders } from './games/GameTicketHolder.js';


TicketBooth();
RideTicketHolders();
FoodTicketHolders();
GameTicketHolders();

/* Ask why RideTicketHolders needs to be imported if we don't 
want it to populate the page when loads
*/