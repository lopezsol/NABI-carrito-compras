'use client'
import { listaProductosMocks } from '@/app/lib/mocks'
import React, { useReducer, useState } from 'react'
import { CarritoContext } from './CarritoContext'
import { Producto } from '@/app/lib/definiciones'
import { ProductoCarrito } from '@/app/lib/definiciones'

const initialState = []
export const CarritoProvider = ({ children }) => {

    //acciones
    const agregarProducto = (producto: ProductoCarrito) => {
        const action = {
            type: 'AGREGAR_PRODUCTO',
            producto
        }
        dispatch(action)
    }
    const aumentarCantidad = (id: number, cantidad : number) => {        
        const action = {
            type: 'AUMENTAR_CANTIDAD',
            payload: {id, cantidad}
        }
        dispatch(action)
    }

    const disminuirCantidad = (id: number) => {
        const action = {
            type: 'DISMINUIR_CANTIDAD',
            id
        }
        dispatch(action)
    }

    const borrarProducto = (id: number) => {
        const action = {
            type: 'BORRAR_PRODUCTO',
            id
        }
        dispatch(action)
    }

    const comprasReducer = (state = initialState, action = {}) => {
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
                return state.map((producto) => {
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
                break;
        }
    }

    const [listaProductos, dispatch] = useReducer(comprasReducer, initialState)

    return (
        <CarritoContext.Provider value={{ listaProductos, agregarProducto, aumentarCantidad,
        disminuirCantidad, borrarProducto }}>
            {children}
        </CarritoContext.Provider>
    )
}
