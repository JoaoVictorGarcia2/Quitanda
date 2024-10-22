import React from 'react';

const SobreNos = () => {
  return (
    <div style={styles.container}>
      <h1>Sobre Nós</h1>
      <p>
        Bem-vindo à nossa loja! Somos especializados em fornecer produtos frescos e de alta qualidade diretamente para você.
        Nosso compromisso é garantir que todos os nossos clientes recebam os melhores produtos, sempre com o melhor atendimento.
      </p>
      <p>
        Aqui, você encontrará uma grande variedade de frutas, legumes e outros itens essenciais para sua alimentação saudável e sustentável.
        Visite-nos e descubra mais sobre o que fazemos!
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
  },
};

export default SobreNos;
