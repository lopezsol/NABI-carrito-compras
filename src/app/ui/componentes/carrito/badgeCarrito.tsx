import Link from "next/link";
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { calcularCantidadProductos } from "@/app/lib/utils";
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";

export default function BadgeCarrito({ pathname, }: { pathname: string }) {
    const { listaProductos } = useContext(CarritoContext)
    const cantProductos = listaProductos ? calcularCantidadProductos(listaProductos) : 0
    return (
        <button type="button" className="position-relative badge-carrito">
            <Link
                key={'Carrito'}
                href={'/carrito'}
                className={`nav-link 
            ${pathname === '/carrito'
                        ? 'activo'
                        : ''
                    }
            `}
            >
                <ShoppingCartIcon className="icono" />
                <span className="position-absolute top-0 start-100 translate-middle 
        badge rounded-pill badge-notification bg-violeta">{cantProductos}</span>
            </Link>
        </button>

    )
}