
import Layout from '../components/Layout';
import ListadoBlog from '../components/ListadoBlog';

const Blog = ({entradas}) => {



  return (
    <Layout 
      pageTitle="Blog"
    >
      <main className="contenedor">
        <h2 className="heading">Blog</h2>
          <ListadoBlog entradas={entradas} />
      </main>

    </Layout>
  )
}

//API_URL=http://localhost:1337 -> se puede usar para cargar la API del entorno desde servidor
//NEXT_PUBLIC_API_URL=http://localhost:1337 -> para poder usar en componentes/cliente

//GetStaticProps or GetStaticPaths or GetServerSideProps se consumen luego del componente/pagina
// export async function getServerSideProps(){
//   const api = await fetch('${process.env.API_URL}/blogs');
//   const entradas = await api.json();

//   return {
//     props: {
//       entradas
//     }
//   }
// }

export async function getStaticProps(){
  const url = `${process.env.API_URL}/blogs?_sort=createdAt:desc`
  const api = await fetch(url);
  const entradas = await api.json();

  return {
    props: {
      entradas
    }
  }
}

export default Blog