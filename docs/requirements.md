# Problem

Companies need to log, track, and resolve internal support requests, while maintaining information regarding those responsible, priorities, and the status of each request.

# My mission 

Develop an application that enables the management of the internal ticket lifecycle, while ensuring information remains consistent and accessible only to authorized users.

## functional requirements

FR01 — Create a ticket.

FR02 — List existing tickets.

FR03 — Retrieve a ticket by its identifier.

FR04 — Update the status of a ticket.

FR05 — Change the priority of a ticket.

## Business rules

BR01 — Every ticket must have a unique identifier.

BR02 — Every ticket must have a title.

BR03 — The priority must belong to a defined set.

BR04 — A closed ticket cannot return to an open state
       without an authorized reopening operation.

BR05 — Only resolved tickets can be closed.

