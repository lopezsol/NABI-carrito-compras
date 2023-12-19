export type Producto = {
    id: number;
    nombre: string
    marca: string;
    descripcion: string;
    precio: number;
    img: string;
    informacion: {
        descripcion: string;
        modoUso: string;
    }
};

export type ProductoCarrito = {
    id: number;
    nombre: string;
    marca: string;
    descripcion: string;
    precio: number;
    img: string;
    cantidad: number;
    informacion: {
        descripcion: string;
        modoUso: string;
    }
};

export type ListaProductos = ProductoCarrito[]