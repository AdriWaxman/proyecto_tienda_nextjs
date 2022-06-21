//esta forma de crear el componente es una forma para crear componentes dinámicos
//como por ejemplo entradas de un blog. De esa forma cogerá el id del blog y lo mostrará 
//con el diseño del componente

import Image from 'next/image';
import Layout from '../../components/Layout';
import {formateDate} from '../../helpers';
import styles from '../../styles/Entrada.module.css';


const EntradaBlog = ({entrada}) => {

const {contenido, imagen, titulo, published_at} = entrada;
  return (
  <Layout pageTitle={titulo}>
   <main className='contenedor'>
       <h1 className='heading'>{titulo}</h1>
       <article className={styles.entrada}>
          <Image layout='responsive' width={800} height={600} src={imagen.url} alt={titulo} />
          <div className={styles.contenido}>
            <p className={styles.fecha}>{formateDate(published_at)}</p>
            <p className={styles.texto}>{contenido}</p>
          </div>
       </article>
   </main>
  </Layout>
   );
}


export async function getStaticPaths() {

  const api = await fetch(`${process.env.API_URL}/blogs`);
  const entradas = await api.json();

  const paths = entradas.map(entrada => ({
    params: {url: entrada.url}
  }));
 
    return {
      paths,
      fallback: false
      //Muchas entradas true y pocas false
    }
}

export async function getStaticProps({params:{url}}) {

  const api = await fetch(`${process.env.API_URL}/blogs?url=${url}`);
  const entrada = await api.json();

    return {
      props:{
        entrada: entrada[0]
      }
    }
}


// export async function getServerSideProps({query:{id}}) {

//   const api = await fetch(`${process.env.API_URL}/blogs/${id}`);
//   const entrada = await api.json();

//     return {
//       props:{
//         entrada
//       }
//     }
// }




 
export default EntradaBlog;