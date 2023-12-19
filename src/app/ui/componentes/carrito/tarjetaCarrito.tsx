import { ProductoCarrito } from "@/app/lib/definiciones"
import BtnCantidad from "./btnCantidad"
import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import {TrashIcon } from '@heroicons/react/24/outline';

export default function TarjetaCarrito(
    { producto, }: { producto: ProductoCarrito }) {

    const { borrarProducto } = useContext(CarritoContext)

    const handleBorrar = (id: number) => {
        borrarProducto(id)
    }
    return (
        <div className="card-body py-0" key={producto.id}>
            <div className="row align-items-center border-bottom py-1">
                <div className="col-6 col-lg-2 col-xl-3">
                    <img
                        className="mx-auto d-block"
                        src={producto.img}
                        alt={producto.nombre}
                    />
                </div>

                <div className="col-6 col-lg-4 col-xl-3">
                    <h5 className="card-title mb-0">{producto.nombre}</h5>
                    <ul className="list-unstyled mb-auto">
                        <li className="list-group-item">{producto.marca}</li>
                        <li className="list-group-item">{producto.descripcion}</li>
                    </ul>
                </div>

                <div className="col-6 col-lg-3 col-xl-3">
                    <BtnCantidad
                        cantidad={producto.cantidad}
                        id={producto.id}
                    />
                </div>

                <div className="col-3 col-lg-2 col-xl-2 text-center">
                    <p className="mb-0">${producto.precio}</p>
                </div>

                <div className="col-3 col-lg-1 col-xl-1 p-0 text-center">
                    <button type="button" className="btn border-0 p-0"
                        onClick={() => { handleBorrar(producto.id) }}>                        
                        <TrashIcon className="icono-borrar"/>
                    </button>
                </div>
            </div>
        </div>
    )
}