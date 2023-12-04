import Layout from '@/components/Layout';

export default function Home({ products }) {
  return (
    <Layout
      title={'Inicio'}
      description={'Echa un vistazo a la mejor tienda de camisetas de programación'}
    >
      <div className="bg-slate-700 h-full">
        <h1 className="text-3xl">Probando products</h1>
        {products.map(product => (
          <div key={product.id}>
            <h2 className=''>{product.title}</h2>
            <p>{product.description}</p>
            <img src={product.image} alt={product.title} />
          </div>
        ))}
      </div>
      
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/products');

  if(!res.ok) {
    console.error(res);
    return { props: {}}
  }

  const data = await res.json();

  const products = data.products.edges
  .map(({ node }) => 
    {
      if(node.totalInventory === 0) {
        return false
      }
      return {
        id: node.id,
        title: node.title,
        description: node.description,
        image: node.featuredImage.url,
        slug: node.handle,
        totalInventory: node.totalInventory
      }
    }
  ).filter(Boolean)
  

  return {
    props: {
      products
    }
  }
}