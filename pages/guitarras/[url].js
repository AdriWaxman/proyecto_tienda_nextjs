import Image from "next/image";
import {useState} from 'react';
import Layout from "../../components/Layout";
import styles from '../../styles/Guitarra.module.css';

const Producto = ({guitarra, addProducto}) => {
  const [cantidad, setCantidad] = useState(1);
  const {nombre, imagen, descripcion, precio, id} = guitarra[0];

  const handleSubmit = e => {
    e.preventDefault();


    // Agregar al carrito
    if(cantidad < 1){
      alert('La cantidad debe ser mayor a 0');
      return;
    }

    const guitarraSeleccionada = {
      id,
      imagen: imagen.url,
      nombre,
      precio,
      cantidad
    }

    addProducto(guitarraSeleccionada)
  }

  return ( 
   <Layout pageTitle={`Guitarra ${nombre}`}>
     <div className={styles.guitarra}>
    <Image layout='responsive' width={180} height={350} src={imagen.url} alt={nombre} />
    <div className={styles.cotenido}>
      <h3>{nombre}</h3>
      <p className={styles.descripcion}>{descripcion}</p>
      <p className={styles.precio}>{precio}€</p>

      <form onSubmit={handleSubmit} className={styles.formulario}>
        <label htmlFor="cantidad">Cantidad:</label>
        <select value={cantidad} onChange={e => setCantidad(parseInt(e.target.value))} name="cantidad" id="cantidad">
          <option value="">--Selecciona--</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>

        <input type="submit" value="Agregar al carrito" />
      </form>
     
    </div>
  </div>
   </Layout>
  );
}

export async function getServerSideProps({query: {url}}) {

  const urlGuitarra = `${process.env.API_URL}/guitarras?url=${url}`;
  const api = await fetch(urlGuitarra);
  const guitarra = await api.json();



  return {
    props: {
      guitarra
    }
  }
}
 
export default Producto;