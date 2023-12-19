import { useContext, useState } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { ProductosContext } from "../../context/ProductosContext"

export default function BtnCantidadProducto(
    {  id }
        : {
             id: number,
        }) {

    const { aumentarCantidad, disminuirCantidad, borrarProducto } = useContext(CarritoContext)

    const {cantidad , setCantidad} = useContext(ProductosContext)
    const handleAumentar = () => {
        setCantidad(cantidad + 1)
    }
    const handleDisminuir = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }

    return (
        <div className="d-flex w-100 input-group btn-cantidad flex-nowrap ">
            <button type="button" className="input-group-text"
                onClick={() => handleDisminuir()}
            >-</button>
            <input
                className="form-control text-center borde-dorado bg-transparent"
                type="text"
                value={cantidad}
                disabled
            />
            <button type="button" className="input-group-text"
                onClick={() => handleAumentar()}
            >+</button>
        </div>
    )
}