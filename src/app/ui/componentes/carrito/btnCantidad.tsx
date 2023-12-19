import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import '../../styles/btnCantidad.css'

export default function BtnCantidad(
    { cantidad, id }
        : {
            cantidad: number, id: number,
        }) {

    const { aumentarCantidad, disminuirCantidad, borrarProducto } = useContext(CarritoContext)

    const handleAumentar = (id: number) => {
        aumentarCantidad(id, 1)
    }
    const handleDisminuir = (id: number) => {
        if (cantidad > 1) {
            disminuirCantidad(id)
        }
        else {
            borrarProducto(id)
        }
    }
    
    return (        
        <div className="input-group btn-cantidad ">
            <button type="button" className="input-group-text"
                onClick={() => handleDisminuir(id)}
            >-</button>
            <input
                className="form-control text-center borde-dorado bg-transparent"
                type="text"
                value={cantidad}
                disabled
            />
            <button type="button" className="input-group-text"
                onClick={() => handleAumentar(id)}
            >+</button>
        </div>
    )
}