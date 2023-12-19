
import { ProductoCarrito } from "./definiciones";
import { ListaProductos } from "./definiciones";
export const calcularSubtotal = (listaProductos: ListaProductos) => {
    const subtotal = listaProductos.reduce(
        (acumulador, productoActual) =>
                acumulador + (productoActual.precio * productoActual.cantidad),
        0,
    )
    return subtotal;
};

export const calcularCantidadProductos = (listaProductos: ListaProductos) => {
    const cantProductos = listaProductos.reduce(
        (acumulador, productoActual) =>
            acumulador + productoActual.cantidad,
        0,
    )
    return cantProductos;
};

export const calcularCuotas = (precio : number) => {
    return (precio / 3).toFixed(2);
};