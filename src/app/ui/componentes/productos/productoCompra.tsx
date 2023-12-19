import { useContext, useEffect } from "react"
import BtnAgregar from "../inicio/btnAgregar"
import BtnCantidadProducto from "./btnCantidadProducto"
import { ProductosContext } from "../../context/ProductosContext"
import { CarritoContext } from "../../context/CarritoContext"
import { calcularCuotas } from "@/app/lib/utils"
import { Producto } from "@/app/lib/definiciones"

export default function ProductoCompra({ producto }: { producto: Producto }) {
    const { cantidad, setCantidad } = useContext(ProductosContext)
    const { listaProductos, agregarProducto, aumentarCantidad } = useContext(CarritoContext)

    const cuotas = calcularCuotas(producto.precio)
    const handleAgregar = (producto: Producto) => {
        const estaEnCarrito = listaProductos.find((prod: Producto) => prod.id === producto.id)
        if (estaEnCarrito) {
            aumentarCantidad(producto.id, cantidad)
        }
        else {
            const nuevoProducto = {
                ...producto,
                cantidad: cantidad
            }
            agregarProducto(nuevoProducto)
        }
    }
    useEffect(() => { setCantidad(1) }, [])
    return (
        <div className="col-12 col-md-6 d-flex align-items-center flex-column justify-content-center mb-5">
            <div className="w-75 text-start">
                <h1 className="">{producto.nombre}</h1>
                <hr className=" mb-1" />
                <h3 className=" mb-4">{producto.marca}</h3>
                <h2 className=" mb-2">${producto.precio}</h2>
                <p className="mb-5"> <strong>3 cuotas sin interés</strong> de ${cuotas}</p>

                <div className="row gap-column-1 row-gap-3 mb-3">
                    <div className="col-12 col-sm-6 col-xl-5">
                        <BtnCantidadProducto id={producto.id} />
                    </div>
                    <div className="col-12 col-sm-6 col-xl-7">
                        <BtnAgregar producto={producto} agregar={() => { handleAgregar(producto) }} />
                    </div>
                </div>
            </div>
        </div>
    )
}