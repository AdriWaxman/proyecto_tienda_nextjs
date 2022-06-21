import Layout from '../components/Layout';
import Listado from '../components/Listado';

const Tienda = ({guitarras}) => {

  return (
    <Layout
      pageTitle="Tienda de guitarras"
    >
      <main className="contenedor">
      <h1 className='heading'>Tienda</h1>
      <Listado guitarras={guitarras} />
      </main>

      

    </Layout>
  )
}

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/guitarras?_sort=createdAt:desc`;
  const api = await fetch(url);
  const guitarras = await api.json();


  return {
    props: {
      guitarras
    },
  }
}

export default Tienda