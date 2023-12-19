import { Producto } from "@/app/lib/definiciones"

export default function BtnAgregar({ producto, agregar }: { producto: Producto, agregar: Function }) {
    return (
        <button type="button" className="btn border border-0 rounded-4  btn-dorado w-100"
            onClick={() => { agregar(producto) }}
        >AGREGAR</button>
    )
}