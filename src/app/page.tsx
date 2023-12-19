
import GrillaProductos from './ui/componentes/inicio/grillaProductos';
import Buscador from './ui/componentes/buscador';
import Link from 'next/link';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import MyLoader from './ui/skeletons';
import { Suspense, use, useEffect } from 'react';

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
