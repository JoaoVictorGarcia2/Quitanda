import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2024 Quitanda Online. Todos os direitos reservados.</p>
      <div style={styles.socialLinks}>
        <a href="https://www.facebook.com" style={styles.link}>Facebook</a> 
        <span style={styles.separator}>|</span>
        <a href="https://www.instagram.com" style={styles.link}>Instagram</a> 
        <span style={styles.separator}>|</span>
        <a href="https://www.twitter.com" style={styles.link}>Twitter</a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    padding: '20px',
    backgroundColor: '#e63946',
    color: '#fff',
    textAlign: 'center',
    width: '100%',
    marginTop: '20px',
    fontSize: '14px',
  },
  socialLinks: {
    marginTop: '10px',
  },
  link: {
    color: '#fff', // Muda a cor dos links para preto
    textDecoration: 'none', // Remove o sublinhado padrão
    margin: '0 10px',
    fontWeight: 'bold',
  },
  separator: {
    color: '#fff',
  },
  linkHover: {
    color: '#555', // Cor ao passar o mouse
  }
};

export default Footer;
