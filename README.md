Requisitos para aplicação:
- Enviar mensagem no WhatsApp
- Enviar mensagem para os clientes a cada mês para lembrar da manutenção
- Agenda (dashboard)
- Sistema de cadastro do cliente (dashboard)
  -> Dados do cliente:
    a) Nome completo
    b) Endereço
    c) Telefone (WhatsApp)
    d) E-mail
    e) Ar condicionado:
      1) Modelo
      2) BTU
      3) Data da manutenção
      4) Próxima manutenção

  -> No Dashboard, conseguir ver:
    a) Todos os clientes
    b) Serviço realizado no cliente
    c) Data do último e próximo serviço
    d) Valores para caixa (financeiro)
  
  -> Cadastro de produtos e serviços
  -> Caixa da empresa
  -> Filtro por serviço

- Chatbot para agendamento
- Emissão de boleto
- Emissão de nota fiscal

VERIFICAR:

[ ] na hora de criar um service, passar o customer_id e o service_provider_id de forma dinamica
[ ] criar as tabelas de relação de forma dinamica (ServiceProvider_Customer, Customer_Service)
[ ] criar um update (para editar) os dados dos serviços
[ ] criar um update (para editar) os dados dos customers
[ ] criar um update (para editar) os dados dos service providers
[ ] integrar o WhatsApp API