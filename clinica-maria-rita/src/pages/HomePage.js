import React from 'react';
import BotaoAgendar from '../components/BotaoAgendar';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <section className="hero">
        <div className="hero-content">
          <h1>Cuidando da sua saúde, perto de você.</h1>
          <p>
            Bem-vindo à USF + ACS Maria Rita. Somos a Equipe 2 e nossa missão é oferecer um atendimento de saúde primária
            humanizado e de qualidade para toda a comunidade, com foco na prevenção e no bem-estar.
          </p>
          <BotaoAgendar />
        </div>
      </section>

      <div className="container">
        <section className="info-section">
          <h2>Nossos Horários</h2>
          <div className="info-grid">
            <div className="info-card">
              <h3>Atendimento Equipe 2</h3>
              <p>Segunda a Sexta</p>
              <p className="horario-destaque">07:00 - 13:00</p>
            </div>
            <div className="info-card">
              <h3>Acolhimento Equipe 2</h3>
              <p>Segunda a Sexta</p>
              <p className="horario-destaque">07:00 - 10:00</p>
              <span>(Atendimento de demandas espontâneas)</span>
            </div>
          </div>
        </section>

        <section className="info-section">
            <h2>Como Agendar uma Consulta</h2>
            <div className="agendar-grid">
                <div className="agendar-card">
                    <h3>Presencialmente</h3>
                    <p>
                        Você pode se dirigir à recepção da unidade para marcar consulta ou entrar na lista de espera.
                    </p>
                    <p className="horario-destaque">07:00 - 19:00</p>
                </div>
                <div className="agendar-card">
                    <h3>Online</h3>
                    <p>
                        Utilize a plataforma da prefeitura para agendar seu atendimento de forma rápida e prática.
                    </p>
                    <BotaoAgendar />
                </div>
            </div>
        </section>

        <section className="about-section">
          <h2>Nossa Missão</h2>
          <p>
            Promover a saúde e prevenir doenças através de um cuidado contínuo e integrado,
            fortalecendo o vínculo entre nossa equipe e a comunidade que servimos.
            Acreditamos em um atendimento que respeita e valoriza cada indivíduo.
          </p>
        </section>
      </div>
    </div>
  );
};

export default HomePage;