import { createContext } from "react";
import { ListaProductos } from "@/app/lib/definiciones";
import { Producto } from "@/app/lib/definiciones";
import { ProductoCarrito } from "@/app/lib/definiciones";

// export const CarritoContext = createContext({
//     listaProductos: [],
//     agregarProducto: (producto: Producto) => {},
//     aumentarCantidad: (id: number, cantidad : number) => {},
//     disminuirCantidad: (id: number) => {},
//     borrarProducto: (id: number) => {}
// });

export const CarritoContext = createContext({
    listaProductos: [] as ListaProductos,
    agregarProducto: (producto: Producto) => {},
    aumentarCantidad: (id: number, cantidad: number) => {},
    disminuirCantidad: (id: number) => {},
    borrarProducto: (id: number) => {}
});