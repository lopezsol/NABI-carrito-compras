'use client'
import { listaProductosMocks } from '@/app/lib/mocks'
import React, { useReducer, useState } from 'react'
import { CarritoContext } from './CarritoContext'
import { Producto } from '@/app/lib/definiciones'
import { ProductoCarrito } from '@/app/lib/definiciones'

const initialState: ProductoCarrito[] = []

export const CarritoProvider = ({ children, }: { children: any }) => {

    //acciones
    const agregarProducto = (producto: any) => {
        const action: Action = {
            type: 'AGREGAR_PRODUCTO',
            producto
        };
        dispatch(action)
    }
    const aumentarCantidad = (id: number, cantidad: number) => {
        const action: Action = {
            type: 'AUMENTAR_CANTIDAD',
            payload: { id, cantidad }
        }
        dispatch(action)
    }

    const disminuirCantidad = (id: number) => {
        const action: Action = {
            type: 'DISMINUIR_CANTIDAD',
            id
        }
        dispatch(action)
    }

    const borrarProducto = (id: number) => {
        const action: Action = {
            type: 'BORRAR_PRODUCTO',
            id
        }
        dispatch(action)
    }

    type Action =
        | { type: 'AGREGAR_PRODUCTO', producto: ProductoCarrito }
        | { type: 'AUMENTAR_CANTIDAD', payload: { id: number, cantidad: number } }
        | { type: 'DISMINUIR_CANTIDAD', id: number }
        | { type: 'BORRAR_PRODUCTO', id: number };

    const comprasReducer = (state = initialState, action: Action) => {
        switch (action.type) {
            case 'AGREGAR_PRODUCTO':
                return [...state, action.producto]
            case 'AUMENTAR_CANTIDAD':
                return state.map((producto) => {
                    if (producto.id === action.payload.id) {
                        return {
                            ...producto,
                            cantidad: producto.cantidad + action.payload.cantidad
                        }
                    } return producto
                })
            case 'DISMINUIR_CANTIDAD':
                return state.map((producto: ProductoCarrito) => {
                    if (producto.id === action.id) {
                        return {
                            ...producto,
                            cantidad: producto.cantidad - 1
                        }
                    } return producto
                })
            case 'BORRAR_PRODUCTO':
                return state.filter((producto) => producto.id !== action.id)
            default:
                return state;
        }
    }

    const [listaProductos, dispatch] = useReducer(comprasReducer, initialState)

    return (
        <CarritoContext.Provider value={{
            listaProductos, agregarProducto, aumentarCantidad,
            disminuirCantidad, borrarProducto
        }}>
            {children}
        </CarritoContext.Provider>
    )
}
