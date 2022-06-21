import '../styles/normalize.css'
import '../styles/globals.css'
import {useState} from 'react';
import {useEffect} from 'react';

function MyApp({ Component, pageProps }) {
  const [carrito, setCarrito] = useState([]);

  
  useEffect(()=>{
    const carritoLS = JSON.parse(localStorage.getItem('carrito')) ?? [];
    if(carritoLS.length !== 0){
      setCarrito(carritoLS);
    }
  },[])

  useEffect(()=> {
    localStorage.setItem('carrito', JSON.stringify(carrito));
   
  },[carrito])



 
  const addProducto = producto => {
    //Identificar si elemento esta en carrito
    if(carrito.some(articulo => articulo._id === producto._id)){
      //Incrementar cantidad
      const carritoActualizado = carrito.map(articulo =>{
        if(articulo._id === producto._id){
          articulo.cantidad = producto.cantidad;
        }
        return articulo;
      })
      setCarrito(carritoActualizado);
    } else{
      //Agregar al carrito
      setCarrito([...carrito, producto]);
    }
    
  }

  const actualizarCantidad = producto => {
    const carritoActualizado = carrito.map(articulo =>{
      if(articulo._id === producto._id){
        articulo.cantidad = producto.cantidad;
      }
      return articulo;
    });

    setCarrito(carritoActualizado);
  }

  const eliminarProducto = id =>{
    const carritoActualizado = carrito.filter(articulo => articulo._id !== id);
    setCarrito(carritoActualizado);
  }

  return <Component  {...pageProps} carrito={carrito} addProducto={addProducto} actualizarCantidad={actualizarCantidad} eliminarProducto={eliminarProducto}/>
}

export default MyApp
