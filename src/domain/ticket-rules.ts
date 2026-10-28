import { Ticket } from "./ticket";

function validateTicketTitle(ticket: Ticket): void {
    const trimmedTitle = ticket.title.trim();

    if (trimmedTitle.length < 3 || trimmedTitle.length > 100) {
        console.error("invalid title");
    }
}