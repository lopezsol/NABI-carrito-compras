export type Producto = {
    id: number;
    nombre: string;
    marca: string;
    descripcion: string;
    precio: number;
    img: string;
};

export type ProductoCarrito = {
    id: number;
    nombre: string;
    marca: string;
    descripcion: string;
    precio: number;
    img: string;
    cantidad: number;
};

export type ListaProductos = ProductoCarrito[]