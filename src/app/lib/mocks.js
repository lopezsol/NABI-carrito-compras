const productosMocks = [
    {
        id: 1,
        nombre: 'VOL.1: Balance',
        marca: 'ACF by Dadatina',
        descripcion: 'Todo tipo de piel',
        precio: 13400,
        img: '/img/productos/balance.webp',
        informacion: {
            descripcion: 'Serum exclusivo de ACF formulado con colaboración de @soydadatina. Otorga balance y humectación a la piel, reduciendo la inflamación y/o enrojecimiento de la misma. Ayuda a controlar el acné y brinda luminosidad.',
            modoUso: 'Colocar 3 a 4 gotas en rostro y cuello después de la limpieza y presionar suavemente con las manos para que se absorba. Continuar la rutina aplicando una crema de día/noche.'
        }

    },
    {
        id: 2,
        nombre: 'Madecassic eye cream',
        marca: 'Coony',
        descripcion: 'Todo tipo de piel',
        precio: 24649,
        img: '/img/productos/eye-cream.webp',
        informacion: {
            descripcion: 'COONY Madecassic Eye Cream es una crema intensiva hidratante y nutritiva que colabora a la reducción de ojeras, líneas de expresión y bolsas que se suelen crear en el contorno de los ojos. Contiene Madecassoside, el extracto más puro de la Centella Asiática, el cual posee múltiples propiedades astringentes y anti-inflamatorias, que ayudan a calmar e hidratar el área del contorno de ojos. Este ingrediente premium es la estrella de la moderna cosmética coreana, siendo su valor tan alto en formulación que muy pocos productos en occidente lo contienen. Su fórmula rica en extractos botánicos, complejo de Algas Marinas y Péptidos, ayudan a reducir tanto las ojeras marrones o azuladas como la hinchazón de los párpados, y refuerza las defensas naturales de la piel frente a agresores externos.',
            modoUso: '1. Luego de la limpieza facial, debido a su concentración, recomendamos utilizar una pequeña cantidad (tamaño de un grano de arroz) de producto en la yema del dedo anular. 2. La zona del contorno del ojo es una de las más delicadas por eso se recomienda que su aplicación sea muy suave. Masajear extendiéndose suavemente debajo de los ojos, en el hueso de las cejas y en las esquinas exteriores de la zona de los ojos. 3. Finalizar con ligeros golpecitos de las yemas de los dedos sobre las bolsas y ojeras. Recomendamos uso diario por la noche.También se puede utilizar como tratamiento para zonas específicas en el cuello y en la sonrisa, para mejorar las líneas de expresión.'
        }
    },
    {
        id: 3,
        nombre: 'Restore hand cream',
        marca: 'Bek',
        descripcion: 'Todo tipo de piel',
        precio: 18149,
        img: '/img/productos/restore-hand-cream.webp',
        informacion: {
            descripcion: 'Esta crema reparadora posee activos calmantes e hidratantes que ayudan a reparar la barrera cutánea, entre ellos, la Niacinamina, el Pantenol, la Manzanilla, la Vitamina E, la Centella Asiática y el Cm-Glucan Forte. Este último rebalancea el sistema inmune de la piel y reduce la sensación de picazón en pieles sensibles.',
            modoUso: '-Aplicar el producto en el dorso o palma de las manos (previamente higienizadas) y luego distribuir con suaves masajes hasta su absorción. Repetir las veces que sea necesario. '
        }
    },
    {
        id: 4,
        nombre: 'Restaurador de Puntas',
        marca: 'Nic',
        descripcion: 'Puntas florecidas',
        precio: 5900,
        img: '/img/productos/restaurador-puntas.webp',
        informacion: {
            descripcion: 'Este acondicionador liviano Repuntando de Nic, sin enjuague ayuda a reparar y cerrar las puntas florecidas, protegiendo el cabello del daño producido por tratamientos químicos y /o de herramientas de cepillado y secado. Aporta una suave textura y un brillo natural, dejando el cabello suave y fácil de peinar',
            modoUso: 'Como acondicionador: luego del shampoo aplicar una muy pequeña cantidad en la palma de la mano y frotar el cabello mojado masajeando de medios a puntas. No enjuagar. Como restaurador de puntas: aplicar una mínima dosis en la palma de la mano y frotar las puntas del cabello seco o húmedo, masajeándolas. No enjuagar.'
        }
    },
    {
        id: 5,
        nombre: 'Esponja facial',
        marca: 'Konjac',
        descripcion: 'Piel Mixta',
        precio: 10649,
        img: '/img/productos/esponja-facial.webp',
        informacion: {
            descripcion: 'Nuestra esponja es 100% Konjac de alta pureza, CULTIVADO y HECHO en la ISLA JEJU, COREA. Esta Isla paradisíaca tiene el privilegio de poseer la triple corona de la UNESCO: 1) Es Patrimonio Natural de la Humanidad, 2) Es una Reserva de la Biosfera, y 3) Es un Geoparque Global. En este contexto de pleno cuidado del medio ambiente, mediante una plantación sustentable, es desde donde te traemos este producto premium para el cuidado de la piel.  Es un MUST HAVE en tu rutina de limpieza facial diaria: Su función es limpiar profundamente, removiendo con el paso del tiempo los puntos negros, reduciendo el tamaño de los poros, dejando un muy suave efecto exfoliante y traslúcido en la piel. Ayuda a estimular el flujo sanguíneo y promueve la renovación celular de la piel. Se utiliza humedecida, y te vas a sorprender de su textura tan suave, única en el mercado. Su composición totalmente natural te garantiza un resultado eficaz, siendo apto para todo tipo de pieles, incluso sensibles y con rosácea (¡y lo bien que le hace!)',
            modoUso: 'Las esponjas Konjac Original son de pura fibra vegetal natural, por lo que la humedad las puede dañar. Te pedimos cumplir con los siguientes cuidados: 1. Enjuaga bien para evitar residuos. 2. Escurre al MÁXIMO con ambas manos (sin retorcer). 3. Colgarla del hilito en un ambiente limpio y ventilado. 4. Higienizar semanalmente con agua caliente (durante no más de 2 minutos) y jabón neutro.  '
        }
    },
    {
        id: 6,
        nombre: 'Rodillo de Jade',
        marca: 'ACF',
        descripcion: 'Todo tipo de piel',
        precio: 9990,
        img: '/img/productos/rodillo-jade.webp',
        informacion: {
            descripcion: 'Rodillo de jade para masajes faciales. Ideal para mantener la elasticidad en la piel, promover la circulación y reducir hinchazón. La frialdad del jade cierra los poros mientras que el rodillo promueve la circulación de la sangre. ',
            modoUso: ''
        }

    }
]

const listaProductosMocks = [
    {
        id: 1,
        nombre: 'VOL.1: Balance',
        marca: 'ACF by Dadatina',
        descripcion: 'Todo tipo de piel',
        precio: 5990,
        img: '/img/productos/balance.webp',
        cantidad: 1

    },
    {
        id: 5,
        nombre: 'Esponja facial',
        marca: 'Konjac',
        descripcion: 'Piel Mixta',
        precio: 3649,
        img: '/img/productos/esponja-facial.webp',
        cantidad: 2
    },
    {
        id: 3,
        nombre: 'Restore hand cream',
        marca: 'Bek',
        descripcion: 'Todo tipo de piel',
        precio: 5749,
        img: '/img/productos/restore-hand-cream.webp',
        cantidad: 1
    }
]

module.exports = { productosMocks, listaProductosMocks }