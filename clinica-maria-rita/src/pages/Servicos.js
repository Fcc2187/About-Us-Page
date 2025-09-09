import React from 'react';
import BotaoAgendar from '../components/BotaoAgendar';
import './Servicos.css';

const servicosList = [
  'Consulta Médica',
  'Consulta Odontológica',
  'Consulta de Enfermagem',
  'Vacinas',
  'Curativos',
  'Aferição de Pressão e Glicose',
  'Inserção de DIU e Implanon',
  'Grupo de Tabagismo',
  'Acupuntura',
  'Auriculoterapia',
  'Agulhamento a seco',
];

const Servicos = () => {
  return (
    <div className="container">
      <div className="page-header">
        <h1>Nossos Serviços</h1>
        <p>Oferecemos um cuidado completo e integrado para você e sua família.</p>
      </div>
      <div className="servicos-list">
        <ul>
          {servicosList.map((servico, index) => (
            <li key={index}>{servico}</li>
          ))}
        </ul>
      </div>
      <div className="agendamento-footer">
        <h2>Agende sua consulta e cuide da sua saúde</h2>
        <BotaoAgendar />
      </div>
    </div>
  );
};

export default Servicos;