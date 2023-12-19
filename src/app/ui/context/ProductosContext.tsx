import { createContext } from "react";
import { ProductoCarrito } from "@/app/lib/definiciones";
import Producto from "@/app/productos/[nombreProducto]/page";
type Producto = {
    id: number;
    nombre: string;
    marca: string;
    descripcion: string;
    precio: number;
    img: string;
    informacion: {
        descripcion: string;
        modoUso: string;
    };
    // Otras propiedades del producto
};

type ProductosContextType = {
    productos: Producto[];
    filtrarProductos: (busqueda: string) => void;
    productosFiltrados: Producto[] | void;
    getProducto: (id: number) => Producto | void;
    getProductoNombre: (nombre: string) => Producto | void; // Modificación aquí
    cantidad: number;
    setCantidad: (cantidad: number) => void;
};

export const ProductosContext = createContext<ProductosContextType>({
    productos: [],
    filtrarProductos: (busqueda: string) => {},
    productosFiltrados: [],
    getProducto: (id: number) => {},
    getProductoNombre: (nombre: string) => {}, // Ajusta la implementación según tu lógica
    cantidad: 1,
    setCantidad: (cantidad: number) => {},
});
// export const ProductosContext = createContext({
//     productos: Array<{
//         id: number;
//         nombre: string;
//         marca: string;
//         descripcion: string;
//         precio: number;
//         img: string;
//         informacion: {
//             descripcion: string;
//             modoUso: string;
//         }
//     }>,
//     filtrarProductos: (busqueda: string) => { },
//     productosFiltrados: [],
//     getProducto: (id: number) => { },
//     getProductoNombre: (nombre: string) => {Producto | undefined},
//     cantidad: 1,
//     setCantidad: (cantidad: number) => { }
// });