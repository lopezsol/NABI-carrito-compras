
import GrillaProductos from './ui/componentes/inicio/grillaProductos';

export default async function Home({ searchParams }: {
  searchParams?: {
    q?: string
  }
}) {
  const busqueda = searchParams?.q || '';

  return (
    <div className='container w-75'>
        <GrillaProductos busqueda={busqueda} />

    </div>
  )
}
