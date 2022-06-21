import Layout from '../components/Layout';
import Image from 'next/image';
import styles from '../styles/nosotros.module.css';

const Nosotros = () => {
  return (
    <Layout
      pageTitle="Nosotros"
    >
     
     <main className="contenedor">
       <h2 className="heading">Nosotros</h2>
       <div className={styles.contenido}>

          <Image layout="responsive" width={600} height={450} alt="sobre nosotros" src="/img/nosotros.jpg"  />

         <div>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora illo vero at totam placeat perspiciatis libero quasi consectetur ratione, enim, deserunt accusamus ducimus animi maxime iusto repudiandae corrupti quidem iure commodi. Sit eveniet nam modi est inventore ex, veritatis dolore! Reiciendis doloribus excepturi voluptates, sequi atque aut asperiores ipsum, fugiat nam eaque quia veritatis earum eveniet saepe non, deleniti fugit obcaecati incidunt eligendi sunt. Expedita, libero labore perspiciatis excepturi dolor.</p>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores aperiam incidunt ut tempora quas dolor assumenda labore numquam suscipit temporibus nisi libero, est sapiente commodi expedita, delectus quaerat inventore aliquam alias. Illum fugiat placeat incidunt eos fuga blanditiis voluptate eius saepe molestias unde distinctio eaque tempora commodi pariatur dicta consectetur eligendi tenetur, dolorum, temporibus ipsam. Neque, cupiditate impedit. Aliquam, numquam! Fugit adipisci dolor quidem debitis.</p>
         </div>
       </div>
     </main>

    </Layout>
  )
}

export default Nosotros