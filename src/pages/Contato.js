import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contato = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Contato</h1>
      <p style={styles.description}>Estamos aqui para ajudar! Preencha o formulário abaixo ou entre em contato diretamente conosco.</p>
      <div style={styles.contactInfo}>
        <div style={styles.contactCard}>
          <FaEnvelope style={styles.icon} />
          <h3>Email</h3>
          <p>contato@****.com</p>
        </div>
        <div style={styles.contactCard}>
          <FaPhone style={styles.icon} />
          <h3>Telefone</h3>
          <p>(11) 1234-5678</p>
        </div>
        <div style={styles.contactCard}>
          <FaMapMarkerAlt style={styles.icon} />
          <h3>Endereço</h3>
          <p>Avenida *****, 123, Cidade, Estado</p>
        </div>
      </div>
      <form style={styles.form}>
        <label style={styles.label}>
          Nome:
          <input type="text" style={styles.input} required />
        </label>
        <label style={styles.label}>
          Email:
          <input type="email" style={styles.input} required />
        </label>
        <label style={styles.label}>
          Mensagem:
          <textarea style={styles.textarea} required></textarea>
        </label>
        <button type="submit" style={styles.button}>Enviar</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px',
    maxWidth: '600px',
    margin: 'auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  },
  description: {
    fontSize: '1.1rem',
    textAlign: 'center',
    marginBottom: '30px',
    color: '#666',
  },
  contactInfo: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '40px',
  },
  contactCard: {
    textAlign: 'center',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    width: '30%',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  icon: {
    fontSize: '2rem',
    color: '#e63946',
    marginBottom: '10px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '15px',
    fontSize: '1rem',
    color: '#333',
  },
  input: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginBottom: '10px',
  },
  textarea: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    minHeight: '100px',
    marginBottom: '10px',
  },
  button: {
    padding: '10px',
    backgroundColor: '#e63946',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.3s',
  },
};

export default Contato;
