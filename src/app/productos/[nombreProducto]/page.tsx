'use client'
import Informacion from "@/app/ui/componentes/productos/informacion";
import ProductoCompra from "@/app/ui/componentes/productos/productoCompra";
import { ProductosContext } from "@/app/ui/context/ProductosContext";
import { useContext } from "react";

export default function Producto({ params, }: {
    params: {
        nombreProducto: string
    }
}) {
    const { getProductoNombre } = useContext(ProductosContext)
    const producto = getProductoNombre(decodeURIComponent(params.nombreProducto))
    return (
        <>
            {producto &&
                <div className="container mt-5">
                    <div className="row ">
                        <div className="col-12 col-md-6 d-flex align-items-center flex-column mb-5">
                            <div className="w-75 borde-dorado rounded-4">
                                <img
                                    src={producto.img}
                                    className=" mx-auto d-block img-fluid rounded-4 info-producto-img"
                                    alt={producto.nombre}
                                />
                            </div>
                        </div>
                        <ProductoCompra producto={producto} />
                    </div>
                </div>
            }

            <Informacion producto={producto} />
        </>
    );
}