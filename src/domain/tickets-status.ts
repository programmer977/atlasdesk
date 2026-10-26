import { TicketStatus , Ticket } from "./ticket";

function transformStatus(actually : TicketStatus ,next : TicketStatus ):TicketStatus {
    if(validateTrasformStatus(actually,next)){
        return next;
    }
    throw new Error(`Invalid status transition from ${actually} to ${next}`);
}
function validateTrasformStatus(actually:TicketStatus,next:TicketStatus):boolean {
    if(actually === "open" && next === "in_progress"){
        return true;
    } if(actually === "in_progress" && next === "resolved"){
        return true;
    } if(actually === "resolved" && next === "closed"){
        return true;
    } else {
        return false;
    }
}
