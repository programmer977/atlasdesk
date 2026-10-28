import { Ticket } from "./ticket";

export function validateTicketTitle(ticket: Ticket): void {
    const trimmedTitle = ticket.title.trim();

    if (trimmedTitle.length < 3 || trimmedTitle.length > 100) {
        console.error("invalid title");
    }
}