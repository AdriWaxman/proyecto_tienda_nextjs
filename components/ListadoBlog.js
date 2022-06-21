import styles from '../styles/ListadoBlog.module.css';
import Entrada from './Entrada';

const ListadoBlog = ({entradas}) => {
  return ( 
    <div className={styles.blog}>
          {entradas.map(entrada => (
            <Entrada
              key={entrada._id}
              entrada={entrada}
            />
          ))}
        </div>
   );
}
 
export default ListadoBlog;