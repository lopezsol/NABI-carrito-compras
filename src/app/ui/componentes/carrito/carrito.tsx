import { ListaProductos } from "@/app/lib/definiciones"
import { calcularCantidadProductos } from "@/app/lib/utils"
import TarjetaCarrito from "./tarjetaCarrito"
import '../../styles/carrito.css'

export default function Carrito({ listaProductos, }
    : { listaProductos: ListaProductos }) {
    const cantProductos = calcularCantidadProductos(listaProductos)
    const txtArticulo = cantProductos === 1 ? 'artículo' : 'artículos'

    return (
        <div className="col-12 col-lg-8 d-flex align-items-center flex-column mb-5">
            <div className="w-100">
                <div className="carrito-productos card shadow-none border-0">
                    <div
                        className="card-header border-0 py-0 px-1 d-flex justify-content-between align-items-center bg-white"
                    >
                    </div>
                    {listaProductos.length === 0 ? <p>El carrito esta vacío </p>
                        :
                        <span className="ms-auto">{cantProductos} {txtArticulo}</span>
                    }{
                        listaProductos.map((producto) => {
                            return (
                                <TarjetaCarrito
                                    producto={producto}
                                    key={producto.id}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}