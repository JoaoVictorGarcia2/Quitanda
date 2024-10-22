import React from 'react';

const SobreNos = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Sobre Nós</h1>
      <p style={styles.paragraph}>
        Em um mundo onde a alimentação saudável é cada vez mais importante, nossa loja se destaca como um farol de qualidade e frescor. 
        Fundada com a missão de fornecer frutas e vegetais que fazem a diferença na sua dieta, nós nos dedicamos a oferecer apenas o que há de melhor.
      </p>
      <p style={styles.paragraph}>
        Nossa história começa nas fazendas locais, onde cultivamos relacionamentos próximos com agricultores apaixonados. 
        Cada fruta é escolhida a dedo, garantido que você receba não apenas um produto, mas um pedaço da terra, recheado de sabor e nutrientes. 
        Acreditamos que comer bem é essencial para uma vida plena e saudável.
      </p>
      <p style={styles.paragraph}>
        Oferecemos uma seleção diversificada de produtos, desde as suculentas bananas até os vibrantes morangos. 
        Cada item é fresco, da mais alta qualidade e, sempre que possível, orgânico. 
        Nossa equipe está aqui para ajudá-lo a escolher os melhores produtos, oferecendo um atendimento ao cliente incomparável.
      </p>
      <p style={styles.paragraph}>
        Venha nos visitar e descubra a diferença que nossas frutas e vegetais podem fazer na sua vida. 
        Junte-se a nós nesta jornada de sabor, saúde e qualidade!
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px',
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: '#e63946',
    textAlign: 'center',
  },
  paragraph: {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    marginBottom: '20px',
    color: '#333',
  },
};

export default SobreNos;
