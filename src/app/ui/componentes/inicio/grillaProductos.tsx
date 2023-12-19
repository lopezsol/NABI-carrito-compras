'use client'
import { use, useContext, useEffect, useState } from "react"
import { ProductosContext } from "../../context/ProductosContext"
import { CarritoContext } from "../../context/CarritoContext"
import { Producto } from "@/app/lib/definiciones"
import TarjetaProducto from "./tarjetaProducto"
import { useSearchParams } from "next/navigation"

export default function GrillaProductos({ busqueda }: { busqueda: string }) {
    const { productos, productosFiltrados, filtrarProductos } = useContext(ProductosContext)
    const { agregarProducto } = useContext(CarritoContext)

    useEffect(() => {
        filtrarProductos(busqueda)        
    }, [busqueda])
    
    const handleAgregar = (producto: Producto) => {
        const nuevoProducto = {
            ...producto,
            cantidad: 1
        }
        agregarProducto(nuevoProducto)
    }
    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 mt-5 mb-5">

            {productosFiltrados?.map((producto) => {
                return (
                    <TarjetaProducto producto={producto} agregar={handleAgregar} key={producto.id} />
                )
            })}


        </div>
    )

}