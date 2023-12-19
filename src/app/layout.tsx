import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css';
import BootstrapClient from './ui/componentes/BootstrapClient'
import Navbar from './ui/componentes/navbar';
import { roboto } from './ui/fuentes';
import './globals.css'
import { CarritoProvider } from './ui/context/CarritoProvider';
import { ProductoProvider } from './ui/context/ProductoProvider';
import Footer from './ui/componentes/footer';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NABI',
  description: 'Carrito de compras',
  icons: { icon: "/icono-NABI.png", apple: "/icono-NABI.png" },


}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={`${roboto.className} antialiased`}>
        <ProductoProvider>
          <CarritoProvider>
            <Navbar />
            {children}

          </CarritoProvider>
        </ProductoProvider>
        <Footer />

      </body>
      <BootstrapClient />

    </html>
  )
}
