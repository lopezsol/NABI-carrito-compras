'use client'
import { Producto } from "@/app/lib/definiciones"
import Link from "next/link"
import BtnCantidad from "../carrito/btnCantidad"
import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import BtnAgregar from "./btnAgregar"
import '../../styles/tarjetaProducto.css'
export default function TarjetaProducto({ producto, agregar }: { producto: Producto, agregar: Function }) {
    const { listaProductos } = useContext(CarritoContext)
    const agregarProducto = (producto: any) => {
    }
    const agregado = listaProductos.find((prod: Producto) => prod.id === producto.id)
    return (

        <div className="col ">
            <div className="card rounded-4 h-100 producto ">
                <Link
                    key={producto.id}
                    href={`/productos/${encodeURIComponent(producto.nombre)}`}
                    onClick={() => { agregarProducto(producto) }}
                >
                    <img
                        src={producto.img}
                        className="card-img-top mx-auto d-block img-fluid rounded-4 "
                        alt={producto.nombre}
                    />

                </Link>

                <div className="card-body text-center p-0 ps-1 pe-1">
                    <Link
                        key={producto.id}
                        className="bg bg-primary text-decoration-none text-dark"
                        href={`/productos/${encodeURIComponent(producto.nombre)}`}
                    >
                        <h5 className="card-title mb-0">{producto.nombre}</h5>
                        <ul className="list-unstyled ">
                            <li className="list-group-item">{producto.marca}</li>
                            <li className="list-group-item">{producto.descripcion}</li>
                            <li className="list-group-item mt-1">${producto.precio}</li>
                        </ul>
                    </Link>
                </div>
                <div className="card-footer bg-white rounded-4 text-center mt-3 pt-0 pb-3 border-0 " >
                    {agregado ?
                            <BtnCantidad
                                cantidad={agregado.cantidad}
                                id={agregado.id}
                            />
                        :
                        <BtnAgregar producto={producto} agregar={agregar} />
                    }
                </div>
            </div>
        </div>

    )
}