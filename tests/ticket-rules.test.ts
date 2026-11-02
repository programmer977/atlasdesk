import {Ticket} from "../src/domain/ticket.js";
import { tickets } from "../src/infrastructure/memory-ticket-repository.js";
import { TicketPriority,TicketStatus } from "../src/domain/ticket.js";
import { transformStatus,validateTrasformStatus } from "../src/domain/tickets-status.js";
import {validateTicketTitle } from "../src/domain/ticket-rules.js";

const ticket1 :Ticket ={
    id:"1",
    title:"falha ao usar impressora", 
    description:"impressora não responde à conexão",
    status:"open",priority:"critical",
    createdAt:new Date(),
    UpdatedAt:new Date('2026-11-14T09:30:00Z')
};
tickets.push(ticket1);

const ticketUpdated:Ticket={
    ...ticket1,
    status : ticket1.status = "in_progress",
}
console.log(ticketUpdated);

const TicketsUpdtate:Ticket[]|undefined = tickets.map(ticket=>
    {if(ticket.id==="1"){
        return ticket={...ticketUpdated};
    }
    return ticket;    
}
)