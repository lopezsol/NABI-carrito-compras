'use client'
import React, { useContext, useState } from 'react'
import { ProductosContext } from '../context/ProductosContext'
import { redirect, usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { revalidatePath } from 'next/cache';

const WAIT_BETWEEN_CHANGE = 300;
export default function Buscador() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const router = useRouter()
    const [inputValue, setInputValue] = useState('');
    
    const handleBuscar = useDebouncedCallback((event: any) => {
        const params = new URLSearchParams(searchParams);
        if (event.target.value.trim()) {
            params.set('q', event.target.value.trim());
        } else {
            params.delete('q');
        }
        setInputValue(event.target.value.trim());
        replace(`${pathname}?${params.toString()}`);
    }, WAIT_BETWEEN_CHANGE);

    const handleClick = (event: any) => {
        event.preventDefault();
        const params = new URLSearchParams(searchParams);
        if (inputValue) {
            params.set('q', inputValue);
        } else {
            params.delete('q');
        }
        router.push(`/?${params.toString()}`);
    }
    return (
        <div className="d-flex form-inputs">
            <input className="form-control" type="text" placeholder="¿Qué estás buscando?"
                onChange={(event) => { handleBuscar(event) }} />
            <button onClick={(event) => { handleClick(event) }}>
                <MagnifyingGlassIcon className="icono-buscar" />
            </button>

        </div>
    )
}
