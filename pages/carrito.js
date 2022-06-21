
import Layout from "../components/Layout";
import styles from '../styles/Carrito.module.css';
import Image from 'next/image';
import {useState, useEffect} from 'react';

const Carrito = ({carrito, actualizarCantidad, eliminarProducto}) => {

const [total, setTotal] = useState(0);

useEffect(() => {
    const calculoTotal = carrito.reduce((total, producto) => total + (producto.cantidad * producto.precio), 0);
    setTotal(calculoTotal);
}
, [carrito]);

  return ( 
    <Layout pageTitle={"Carrito de compras"}>
      <h1 className="heading">Carrito</h1>
      <main className={`${styles.contenido} contenedor` }>
        <div className={styles.carrito}>
          <h2>Artículos</h2>
           {carrito.length === 0 ?  'Cesta vacía': (
            carrito.map(producto =>(
              <div className={styles.producto} key={producto._id}>
                  <div>
                    <Image layout="responsive" width={250} height={500} src={producto.imagen} alt={producto.nombre} />
                  </div>
                  <div>
                    <p className={styles.nombre}>{producto.nombre}</p>
                    <div className={styles.cantidad}>
                      <p>Cantidad:</p>
                      <select  className={styles.select} value={producto.cantidad} name="cantidad" id="cantidad"
                      onChange={(e) => actualizarCantidad({
                        cantidad: e.target.value,
                        id: producto._id
                      })}
                      >
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
                    </div>
                    <p className={styles.precio}><span>{producto.precio}</span>€</p>
                    <p className={styles.subtotal}>Subtotal: <span>{producto.precio * producto.cantidad}</span>€</p>
                  </div>
                  <button type="button" className={styles.eliminar} onClick={() => eliminarProducto(producto._id)} >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                     <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                </div>
            ))
           )}
        </div>
        <div className={styles.resumen}>
            
            {total > 0 ? (
              <>
                <h3>Resumen del pedido:</h3>
                <p>Total a pagar: {total}€ </p>
              </>
            ) : (<p>No hay productos en el carrito</p>)}
        </div>
      </main>
    </Layout>
   );
}
 
export default Carrito;