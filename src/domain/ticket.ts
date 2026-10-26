import { transformStatus } from "./tickets-status";

export interface Ticket {
    id : string,
    title : string,
    description : string,
    status : TicketStatus,
    priority : TicketPriority,
    createdAt : Date,
    UpdatedAt : Date,
}

export type TicketStatus = "open"|"in_progress"|"resolved"|"closed";

export type TicketPriority = "critical"|"high"|"medium"|"low";

const ticket1 : Ticket = { 
    id : "1" ,
    title : "DNS error",
    description : "error in DNS service",
    status : "open",
    priority : "medium",
    createdAt : new Date("2026-10-26T15:00:00"),
    UpdatedAt : new Date("2026-10-26T15:08:00")
 }

 ticket1.status = transformStatus(ticket1.status,"in_progress");
 console.log(ticket1.status);