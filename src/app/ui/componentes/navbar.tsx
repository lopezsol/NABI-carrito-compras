'use client'
import Link from "next/link";
import Buscador from "./buscador";
import { usePathname } from "next/navigation";
import BadgeCarrito from "./carrito/badgeCarrito";
import '../styles/navbar.css'

export default function Navbar() {
    const pathname = usePathname();
    return (
        <header>
            <nav className="navbar navbar-expand-lg py-4">
                <div className="container-fluid">
                    <Link className="navbar-brand logo-top" href="/">
                        <img
                            className="img-fluid d-lg-inline-block"
                            src="/img/nabi/logo-NABI-negro.webp"
                            alt="Logo Nabi"
                        />
                    </Link>
                    <button
                        className="navbar-toggler btn-nav"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse w-100 px-3">
                        <ul className="navbar-nav w-50">
                            <li className="nav-item w-100 ">
                                <Buscador />
                            </li>
                        </ul>
                        <ul className=" ms-auto">
                            <li className=" icono-carrito d-flex align-items-center">
                                <BadgeCarrito pathname= {pathname}/>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
            <div
                className="collapse navbar-collapse d-lg-none d-xl-block d-xl-none px-3"
                id="navbarNav"
            >
                <ul className="navbar-nav">
                   
                    <li className="nav-item">
                        <Link
                            key={'Carrito'}
                            href={'/carrito'}
                            className={`nav-link
            ${pathname === '/carrito'
                                    ? 'activo'
                                    : ''
                                }
            `}
                        >
                            <p className="hidden md:block m-0 ">Carrito</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}