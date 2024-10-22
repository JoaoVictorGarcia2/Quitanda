import React from 'react';
import macaVerde from './img/macaverde.png';
import abacaxiImage from './img/abacaxi.png';
import macaImage from './img/maca.png';
import melanciaImage from './img/melancia.png';
import Abacate from './img/abacate.png';
import Laranja from './img/laranja.png';
import LaranjaP from './img/laranjapalma.png';
import Morango from './img/morango.png';
import Limao from './img/limao.png';
import Uva from './img/uva.png';

const productsData = [
  { id: 1, name: 'Maça verde', price: 4.5, stock: 345.2, image: macaVerde },
  { id: 2, name: 'Abacaxi', price: 4.5, stock: 100.0, image: abacaxiImage },
  { id: 3, name: 'Maçã', price: 4.5, stock: 50.0, image: macaImage },
  { id: 4, name: 'Melancia', price: 4.5, stock: 75.0, image: melanciaImage },
  { id: 5, name: 'Uva', price: 4.5, stock: 75.0, image: Uva },
  { id: 6, name: 'Abacate', price: 4.5, stock: 345.2, image: Abacate },
  { id: 7, name: 'Morango', price: 4.5, stock: 100.0, image: Morango },
  { id: 8, name: 'Limao', price: 4.5, stock: 50.0, image: Limao },
  { id: 9, name: 'Laranja Palma', price: 4.5, stock: 75.0, image: LaranjaP },
  { id: 10, name: 'Laranja', price: 4.5, stock: "ESGOTADO", image: Laranja },
];

const Produto = ({ cartItems, setCartItems }) => {


  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Nososs Produtos</h1>
      <div style={styles.productsGrid}>
        {productsData.map((product) => (
          <div key={product.id} style={styles.productCard}>
            <img src={product.image} alt={product.name} style={styles.productImage} />
            <h3>{product.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  productsGrid: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  productCard: {
    border: '1px solid #ddd',
    padding: '10px',
    borderRadius: '8px',
    width: '200px',
    marginBottom: '20px',
  },
  productImage: {
    width: '150px', 
    height: '150px', 
    objectFit: 'cover', 
    borderRadius: '8px', 
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#e63946',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
};

export default Produto;
