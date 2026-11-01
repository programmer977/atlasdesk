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
const ticket2: Ticket = {
    id: "2",
    title: "Acesso bloqueado ao ERP",
    description: "Usuário errou a senha 3 vezes e a conta foi bloqueada no sistema principal.",
    status: "open",
    priority: "high",
    createdAt: new Date(),
    UpdatedAt: new Date('2026-11-01T10:00:00Z')
};

const ticket3: Ticket = {
    id: "3",
    title: "Tela azul da morte (BSOD)",
    description: "Notebook do setor de vendas reinicia sozinho apresentando erro de memória.",
    status: "open",
    priority: "critical",
    createdAt: new Date(),
    UpdatedAt: new Date('2026-11-01T10:15:00Z')
};

const ticket4: Ticket = {
    id: "4",
    title: "Solicitação de novo mouse",
    description: "O scroll do mouse atual parou de funcionar. Solicito substituição.",
    status: "closed",
    priority: "low",
    createdAt: new Date('2026-10-30T14:00:00Z'),
    UpdatedAt: new Date('2026-11-01T09:00:00Z')
};

const ticket5: Ticket = {
    id: "5",
    title: "Lentidão na internet - Setor RH",
    description: "Vários computadores do RH estão com taxa de download abaixo de 5 Mbps.",
    status: "open",
    priority: "medium",
    createdAt: new Date(),
    UpdatedAt: new Date('2026-11-01T11:30:00Z')
};

const ticket6: Ticket = {
    id: "6",
    title: "Configuração de VPN",
    description: "Novo colaborador em home office necessita de credenciais e guia de instalação da VPN.",
    status: "open",
    priority: "medium",
    createdAt: new Date(),
    UpdatedAt: new Date('2026-11-01T12:00:00Z')
};

const ticket7: Ticket = {
    id: "7",
    title: "Queda total do servidor de e-mail",
    description: "Nenhum usuário consegue enviar ou receber e-mails através do Outlook corporativo.",
    status: "open",
    priority: "critical",
    createdAt: new Date(),
    UpdatedAt: new Date('2026-11-01T12:35:00Z')
};

const ticket8: Ticket = {
    id: "8",
    title: "Instalação de software estatístico",
    description: "Solicito a instalação do pacote R e RStudio para análise de dados contratuais.",
    status: "closed",
    priority: "low",
    createdAt: new Date('2026-10-28T09:00:00Z'),
    UpdatedAt: new Date('2026-10-29T17:00:00Z')
};

const ticket9: Ticket = {
    id: "9",
    title: "Atualização de segurança pendente",
    description: "Servidor de homologação necessita da aplicação dos patches de segurança do SO.",
    status: "open",
    priority: "high",
    createdAt: new Date(),
    UpdatedAt: new Date('2026-11-01T08:15:00Z')
};

const ticket10: Ticket = {
    id: "10",
    title: "Troca de toner do setor financeiro",
    description: "A impressora do financeiro está apresentando a mensagem 'Toner Baixo'.",
    status: "open",
    priority: "medium",
    createdAt: new Date(),
    UpdatedAt: new Date('2026-11-01T12:10:00Z')
};

const ticket11: Ticket = {
    id: "11",
    title: "Backup diário falhou",
    description: "O log do sistema apontou erro de espaço em disco ao tentar rodar o backup da madrugada.",
    status: "open",
    priority: "high",
    createdAt: new Date(),
    UpdatedAt: new Date('2026-11-01T06:00:00Z')
};


tickets.push(ticket1);
tickets.push(ticket2);
tickets.push(ticket3);
tickets.push(ticket4);
tickets.push(ticket5);
tickets.push(ticket6);
tickets.push(ticket7);
tickets.push(ticket8);
tickets.push(ticket9);
tickets.push(ticket10);
tickets.push(ticket11);

const prioridadeMaxima :Ticket[] = tickets.filter(ticket=>ticket.priority==="critical");

const estadoAtual :Ticket[] = tickets.filter(ticket=>ticket.status==="in_progress");

const searchWithIdentity:Ticket|undefined = tickets.find(ticket=>ticket.id==="3");
console.log(searchWithIdentity);

const dataCreationOrdentate:Ticket[] = tickets.toSorted((a,b)=>a.createdAt.getDate-b.UpdatedAt.getDate);

