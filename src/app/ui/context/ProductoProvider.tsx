'use client'
import React, { useReducer, useState } from 'react'
import { productosMocks } from '@/app/lib/mocks'
import { ProductosContext } from './ProductosContext'

export const ProductoProvider = ({ children }) => {
    const initialState = [...productosMocks]
    const [busqueda, setBusqueda] = useState('')
    const [cantidad, setCantidad] = useState(1)
    const [productosFiltrados, setProductosFiltrados] = useState([...productosMocks])
    const [productos, setProductos] = useState([...productosMocks])

    //acciones
    // const filtrarProductos = (busqueda: string) => {
    //     const action = {
    //         type: 'FILTRAR_PRODUCTOS',
    //         busqueda
    //     }
    //     dispatch(action)
    // }

    const filtrarProductos = (busqueda: string) => {
        
        if (busqueda === '') {
            setProductosFiltrados([...productosMocks])
        } else {
            const nuevoArray = productosMocks.filter((producto) => {
                if (producto.nombre.toLowerCase().includes(busqueda.toLowerCase())) {
                    return producto
                }
            })
            setProductosFiltrados(nuevoArray)
        }
    }

    const getProducto = (id: number) => {
        const producto = productosMocks.find((producto) => producto.id === id)
        return producto
    }

    const getProductoNombre = (nombre: string) => {
        const producto = productosMocks.find((producto) => producto.nombre.toLowerCase() === nombre.toLowerCase())
        return producto
    }

    const productosReducer = (state = initialState, action = {}) => {
        switch (action.type) {
            case 'FILTRAR_PRODUCTOS':
                return state.filter((producto) => {
                    if (producto.nombre.toLowerCase().includes(action.busqueda.toLowerCase())) {
                        return { ...producto }
                    }
                })
            default:
                return state
        }
    }    
    return (
        <ProductosContext.Provider value={{ productos, filtrarProductos, productosFiltrados, busqueda, setBusqueda, getProducto
        , getProductoNombre, cantidad, setCantidad}}>
            {children}
        </ProductosContext.Provider>
    )
}
