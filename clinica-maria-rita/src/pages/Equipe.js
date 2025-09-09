import React from 'react';
import BotaoAgendar from '../components/BotaoAgendar';
import './Equipe.css';
import fotoDaEquipe from './equipe-foto.jpg';

const equipeData = [
  { nome: 'Médico(a) de Família e Comunidade', especialidade: 'Atendimento médico geral' },
  { nome: 'Enfermeira(o)', especialidade: 'Consulta de enfermagem e coordenação do cuidado' },
  { nome: 'Dentista', especialidade: 'Saúde bucal e atendimento odontológico' },
  { nome: 'Técnico(a) de Enfermagem', especialidade: 'Suporte em procedimentos e vacinação' },
  { nome: 'Técnico(a) de Saúde Bucal', especialidade: 'Assistência em odontologia' },
  { nome: 'Agentes Comunitários de Saúde', especialidade: 'Visitas domiciliares e elo com a comunidade' },
];

const Equipe = () => {
  return (
    <div className="container">
      <div className="page-header">
        <h1>Conheça Nossa Equipe</h1>
        <p>Profissionais dedicados ao seu bem-estar e ao cuidado da comunidade.</p>
      </div>

      <div className="equipe-foto-container">
        <img src={fotoDaEquipe} alt="Equipe da USF + ACS Maria Rita" className="equipe-foto" />
      </div>

      <div className="equipe-grid">
        {equipeData.map((membro, index) => (
          <div key={index} className="membro-card">
            <h3>{membro.nome}</h3>
            <p className="especialidade">{membro.especialidade}</p>
          </div>
        ))}
      </div>

      <div className="agendamento-footer">
        <h2>Pronto para ser atendido?</h2>
        <BotaoAgendar />
      </div>
    </div>
  );
};

export default Equipe;