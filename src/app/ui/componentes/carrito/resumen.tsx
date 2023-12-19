import { ListaProductos } from "@/app/lib/definiciones"
import { calcularCantidadProductos, calcularSubtotal } from "@/app/lib/utils"
import { useRouter } from "next/navigation";

export default function Resumen({ listaProductos }
    : { listaProductos: ListaProductos }) {
    const subtotal = calcularSubtotal(listaProductos)
    const router = useRouter()

    const handleComprar = () => {
        alert('Gracias por su compra')
        router.push('/');
    }

    return (
        <div className="col-12 col-lg-4 d-flex align-items-center flex-column mb-5">
            <div className="w-100 ">
                <div className="card resumen shadow-none py-5 borde-dorado">

                    <h5 className="text-center mb-0 borde-b-dorado">RESUMEN</h5>

                    <div className="card-body mt-3 mb-4">
                        <ul className="list-group list-group-flush">
                            <li
                                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0"
                            >
                                Subtotal
                                <span>${subtotal}</span>
                            </li>
                            <li
                                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0"
                            >
                                Envío
                                <span>Gratis</span>
                            </li>
                            <li
                                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0"
                            >
                                <p>Total</p>
                                <span>${subtotal}</span>
                            </li>
                        </ul>
                        <button
                            type="button"
                            className="btn mt-3 border-0 rounded-4 btn-dorado w-100"
                            onClick={() => { handleComprar() }}
                        >
                            INICIAR COMPRA
                        </button>
                    </div>

                    <div className="tarjetas">
                        <h6 className="mb-3 text-center borde-b-dorado">
                            Métodos de pago aceptados
                        </h6>

                        <div className="d-flex justify-content-evenly">
                            <img
                                src="/img/tarjetas/American_Express-Logo.svg"
                                alt="American_Express"
                                className=""
                            />
                            <img
                                src="/img/tarjetas/Mastercard-Logo.svg"
                                alt="Mastercard"
                                className=""
                            />
                            <img
                                src="/img/tarjetas/Visa_Inc.-Logo.svg"
                                alt="Visa_Inc"
                                className=""
                            />
                            <img
                                src="/img/tarjetas/PayPal-Logo.svg"
                                alt="PayPal"
                                className=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}