import {Ticket} from "../src/domain/ticket.js";
import { tickets } from "../src/infrastructure/memory-ticket-repository.js";
import { TicketPriority,TicketStatus } from "../src/domain/ticket.js";
import { transformStatus,validateTrasformStatus } from "../src/domain/tickets-status.js";