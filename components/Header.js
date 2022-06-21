import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '../styles/Header.module.css';

const Header = ({guitarra}) => {

  const router = useRouter();

  return ( 
    <header className={styles.header}>
      <div className="contenedor">
        <div className={styles.barra}>
          <Link href="/">
            <a>
            <Image alt="GuitarES" src="/img/logo.svg" width={350} height={100} />
            </a>
            </Link>
          <nav className={styles.navegacion}>
            <Link href="/">Inicio</Link>
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/tienda">Tienda</Link>
            <Link href="/carrito">
              <a className={styles.carrito_icon}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
              </a>
            </Link>
          </nav>
        </div>
        {guitarra && (
          <div className={styles.modelo}>
            <h2>{guitarra.nombre}</h2>
            <p >{guitarra.descripcion}</p>
            <p className={styles.precio}>{guitarra.precio}€</p>
            <Link href={`/guitarras/${guitarra.url}`}>
              <a className={styles.enlace}>Ver Producto</a>
            </Link>
          </div>
        )}
      </div>

        {router.pathname === '/' && (
          <div className={styles.guitarra}>
            <Image layout="fixed" width={450} height={900} src="/img/header_guitarra.png" alt="imagen header guitarra"/>
            </div>        
          )
        }

    </header>
  
   );
}
 
export default Header;
