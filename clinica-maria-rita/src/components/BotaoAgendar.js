import React from 'react';
import './BotaoAgendar.css';

const BotaoAgendar = () => {
  const handleAgendamento = () => {
    window.open('https://conecta.recife.pe.gov.br/servico/942', '_blank');
  };

  return (
    <button className="botao-agendar" onClick={handleAgendamento}>
      Agendar via Conecta Recife
    </button>
  );
};

export default BotaoAgendar;