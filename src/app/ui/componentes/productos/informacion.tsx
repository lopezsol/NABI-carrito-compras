export default function Informacion({ producto }: { producto: Producto }) {
    return (
        <div className="container">
            <div className="row mt-1 ">
                <div className="col-12 col-md-6 d-flex align-items-center justify-content-center ">
                    <div className="w-75 text-start">
                        <h2>Información</h2>
                        <hr className=" mb-1" />
                        <p className="mb-3">{`${producto.informacion.descripcion}`}</p>

                        {producto.informacion.modoUso &&
                            <>
                                <h3>Modo de uso</h3>
                                <hr className="mb-1" />
                                <p>{producto.informacion.modoUso}</p>
                            </>
                        }
                    </div>
                </div>
                <div className="col-12 col-md-6">
                </div>
            </div>
        </div>
    )
}