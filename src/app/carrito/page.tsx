'use client';
import { useContext } from "react";
import Resumen from "../ui/componentes/carrito/resumen";
import Carrito from "../ui/componentes/carrito/carrito";
import { CarritoContext } from "../ui/context/CarritoContext";
import { useRouter } from "next/navigation";

export default function CarritoPage() {
    const { listaProductos } = useContext(CarritoContext)
    const router = useRouter()

    const handleClick = (event: any) => {
        event.preventDefault()
        router.push('/');
    }
    return (
        <div className="container-md mt-5 ">
            <div className="row ">
                <h1 className="">Carrito</h1>
                {listaProductos.length === 0 ?
                    <div className="mt-3 d-flex flex-column align-items-center ">
                        <p className="text-center">No hay productos en el carrito</p>
                        <div className="mt-3">
                            <button type="button" className="btn border border-0 rounded-4  btn-dorado w-100"
                                onClick={(event) => { handleClick(event) }}
                            >AGREGAR PRODUCTOS</button>
                        </div>
                    </div>

                    :
                    <>
                        <Carrito listaProductos={listaProductos} />
                        <Resumen listaProductos={listaProductos} />
                    </>
                }
            </div>
        </div>
    );
}