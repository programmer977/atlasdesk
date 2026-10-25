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