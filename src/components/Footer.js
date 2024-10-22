import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2024 Quitanda Online. Todos os direitos reservados.</p>
      <div>
        <a href="https://www.facebook.com">Facebook</a> | 
        <a href="https://www.instagram.com">Instagram</a> | 
        <a href="https://www.twitter.com">Twitter</a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    padding: '5px',
    backgroundColor: '#e63946',
    color: '#fff',
    textAlign: 'center',
    width: '100%',
  }
};

export default Footer;
