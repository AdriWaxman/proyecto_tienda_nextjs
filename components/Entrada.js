import Link from 'next/link';
import Image from 'next/image';
import {formateDate} from '../helpers';
import styles from '../styles/Entrada.module.css';

const Entrada = ({entrada}) => { 

  const {titulo, published_at, imagen, resumen, id, url} = entrada;

  return ( 
    <article>
      <Image priority="true" src={imagen.url} alt={titulo} width={800} height={600} layout='responsive' />
      <div className={styles.contenido}>
      <h3 className={styles.titulo}>{titulo}</h3>
      <p className={styles.fecha}>{formateDate(published_at)}</p>
      <p className={styles.resumen}>{resumen}</p>
      <Link href={`/blog/${url}`}>
        <a className={styles.enlace}>Leer entrada</a>
      </Link>
      </div>
    </article>
   );
}
 
export default Entrada;