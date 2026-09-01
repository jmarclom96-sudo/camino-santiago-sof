export type PuntoInteres = {
    nombre: string;
    descripcion?: string;
};

export type Restaurante = {
    nombre: string;
    localidad: string;
    especialidad?: string;
    nota?: string;
    web?: string;
    maps?: string;
};

export type ContenidoEtapa = {
    itinerario: string[];
    queVer: PuntoInteres[];
    dondeComer: Restaurante[];
    perfil: unknown | null;
    mapa: unknown | null;
};

export const contenidoEtapas: Record<number, ContenidoEtapa> = {

    // =========================================================
    // ETAPA 1 — SARRIA → PORTOMARÍN
    // =========================================================

    1: {
        itinerario: [
            "Ascendemos por la calle Mayor dando inicio a nuestra etapa del día de hoy. Salimos en dirección a Barbadelo dejando a nuestra derecha el monasterio de la Magdalena. Cruzaremos a través de un puente medieval el río Pequeno. Tras salvar las vías del tren, iniciaremos la subida a la siguiente localidad.",
            "Seguimos en la misma dirección y pasaremos por el pueblo de O Mosteiro, tras un kilómetro llegaremos a Rente.",
            "Continuamos por la misma pista hasta la población de A Serra, donde cruzaremos la carretera y avanzaremos recto hasta el Molino de Marzán. A esta altura realizaremos un giro a mano derecha por una pista de tierra que está muy bien señalizada y nos conducirá a través de los núcleos de A Pena (Belante) y Peruscallo hasta Cortiñas.",
            "Continuaremos avanzando sin desviarnos del trazado mientras vamos dejando atrás los núcleos de A Brea y Morgade, lugar dónde nos encontraremos con el mojón que señaliza el km. 100, la distancia que nos separa de la meta, la Catedral de Santiago. Descendemos por la parroquia de Ferreiros hasta Mirallos, donde nos desviaremos por la izquierda de la carretera comarcal avanzando en paralelo a ella. A nuestro paso, dejaremos atrás el lugar de A Pena y As Rozas, tomando el camino de tierra que nos llevará ahora por la derecha de la carretera.",
            "Seguiremos avanzando junto a las flechas amarillas, esta vez por un camino de tierra hasta que una nueva indicación nos dirija a un desvío a la izquierda y comenzamos el descenso hasta A parrocha.",
            "A la salida de esta población tomamos el camino señalizando a mano derecha para llegar a Vilachá, cruzaremos la vía y torceremos a la izquierda hasta la carretera, la seguimos hasta el puente sobre el embalse de Belesar, el cual cruzamos. Continuamos con la carretera y salvamos por un segundo puente uno de los afluentes. Así llegamos al final de la etapa, la población de Portomarín. Las imponentes escaleras del antiguo puente medieval nos dan la bienvenida invitándonos a subirlas para adentrarnos en el pueblo y aparcar nuestra mochila por hoy."
        ],

        queVer: [
            { nombre: "Iglesia de Barbadelo" },
            { nombre: "Iglesia de Santa María de Ferreiros" },
            { nombre: "Iglesia de San Xiao de Chorente" },
            { nombre: "Iglesia de San Miguel de Biville" },
            { nombre: "Iglesia de San Fiz de Reimondez" },
            {
                nombre: "Cruceiro de doble cara",
                descripcion: "El cruceiro de Doble Cara se encuentra ubicado en el lugar de Os Lameiros y fue construido en el siglo XVII. La base de dicha construcción se encuentra dividida en cuatro lados y presenta diversos relieves tallados en forma de martillo, espinas, clavo y calaveras, simbolizando así el martirio y la muerte de Jesús. La cruz consta de dos caras, en una de ellas se puede contemplar una figura que simboliza la maternidad y la vida, mientras que en la otra cara se representa la figura de Cristo Crucificado."
            },
            { nombre: "Capilla de San Marcos" },
            {
                nombre: "Castro de Castromaior",
                descripcion: "Yacimiento de la edad de Hierro"
            },
            { nombre: "Iglesia de Santiago" },
            { nombre: "Iglesia de Santa María de Gonzar" },
            { nombre: "María de Cortapezas" },
            {
                nombre: "Iglesia de Santa María de Castromaior",
                descripcion: "Iglesia en la que hubo un enfrentamiento entre cristianos y árabes"
            },
            { nombre: "Capilla A Magdalena" }
        ],

        dondeComer: [
            {
                nombre: "A Pulpería do Luís",
                localidad: "Sarria",
                nota: "Por las noches no abren",
                web: "",
                maps: "https://maps.app.goo.gl/dEUtDzkut5FSL5it9"
            },
            {
                nombre: "Restaurante Roma",
                localidad: "Sarria",
                especialidad: "Carne",
                web: "https://hotelroma1930.es/restaurante/",
                maps: "https://maps.app.goo.gl/WLvM4TjUM54upnJt6"
            },
            {
                nombre: "Mercadoiro",
                localidad: "Paradela",
                web: "http://www.mercadoiro.com/",
                maps: "https://maps.app.goo.gl/SuptdZRxV4rvkZA26"
            },
            {
                nombre: "O Mirador",
                localidad: "Portomarín",
                web: "http://www.omiradorportomarin.com/",
                maps: "https://maps.app.goo.gl/rruFsvVijQXTL7jG7"
            }
        ],

        perfil: null,
        mapa: null
    },

    // =========================================================
    // ETAPA 2 — PORTOMARÍN → PALAS DE REI
    // =========================================================

    2: {
        itinerario: [
            "Descendemos por delante de la iglesia de San Nicolás a través de rúa de Compostela, las flechas nos llevarán hasta la C-535, la cual seguimos hasta cruzar el puente tras el que giramos a la derecha. Nos reencontraremos con la misma carretera y avanzamos junto a ella. Dejamos a nuestra izquierda la pequeña población de Toxibó mientras seguimos recto, nos alejaremos un poco de la calzada para volver próximos a ella más adelante.",
            "Tras alcanzar la población de Gonzar continuamos de frente por un camino de tierra que va en ascenso y volveremos a situarnos paralelos a la carretera. Tras un fuerte repecho con el que dejamos atrás el núcleo de Castromaior, lugar que recibe su nombre del asentamiento prerromano que se sitúa en el lugar y que en lengua gallega se denomina “castro”, continuamos nuevamente paralelos a la carretera hasta alcanzar Hospital da Cruz.",
            "Su nombre hace referencia al antiguo hospital de peregrinos que aquí se encontraba. Tras salir de la población salvaremos la nacional N-540, giramos a mano izquierda y nos dirigimos por una pista de asfalto hasta la siguiente población.",
            "Continuamos nuestro camino sin abandonar el sendero, afrontando una subida que nos llevará a coronar la sierra de Ligonde, que divide de forma amistosa las cuencas del río Miño y el río Ulla y que nos permitirá gozar de una panorámica excepcional de todo el entorno. Tras coronar la cima comienza el descenso hacia Os Lameiros, donde se encuentran la capilla de San Marcos y su singular crucero levantado en 1670 en honor a la Virgen de los Dolores y el Cristo Crucificado (representados cada uno en una cara del crucero).",
            "Llegamos a Ligonde donde su suelo empedrado y sus aires de nobleza nos recuerdan que esta pequeña localidad fue cobijo de monarcas como Carlos I (Carlos V por su título imperial). En este punto el Camino prosigue por una senda distante de la carretera nacional que nos conduce al puente sobre el que se atraviesa el río Airexe. Tomamos un cruce a la izquierda e iniciamos un ascenso, que posteriormente se torna en descenso hacia Portos. Seguiremos junto a la carretera hasta Lestedo, un pequeño núcleo rural que alberga un antiguo hospital de peregrinos, hoy convertido en alojamiento.",
            "Continuamos la etapa atravesando los lugares de Os Valos y A Mamurria hasta que llegamos al lugar de A Brea, punto en el que deberemos coger el sendero que continua en paralelo al margen izquierdo de la N-547. En este margen nos encontraremos con Avenostre y O Rosario, desde dónde empezaremos a visualizar ya la entrada a la localidad de Palas de Rei. Entraremos en el pueblo dejando a mano izquierda el albergue público y a mano derecha la plaza del Ayuntamiento. Nuestra etapa de hoy habrá finalizado y tocará empezar a prepararse para la caminata más larga de nuestro viaje, la que separa Palas de Rei de Arzúa."
        ],

        queVer: [
            { nombre: "Lavadero de San Julián del Camino" },
            { nombre: "Fonte da Saleta" },
            { nombre: "Castillo de Pambre" },
            { nombre: "Iglesia de Santa María de Leboreiro" },
            { nombre: "Puente Medieval del Río Furelos" },
            { nombre: "Iglesia de Santiago de Boente" },
            { nombre: "Puente de Ribadiso" },
            { nombre: "Iglesia de San Xoán de Furelos" },
            { nombre: "Embalse de Portodemouros" },
            { nombre: "Playa fluvial de Ribadiso" },
            { nombre: "Cabazo do Leboreiro" },
            { nombre: "Área recreativa río Furelos" }
        ],

        dondeComer: [
            {
                nombre: "Casa de Mari Luz",
                localidad: "Monterroso",
                especialidad: "Tapa de tortilla de patata",
                web: "",
                maps: "https://maps.app.goo.gl/nmH863tZkcxsdY3S9"
            },
            {
                nombre: "Pulpería Casa Camiño",
                localidad: "Palas de Rei",
                web: "https://pulperiacasacamino.es/",
                maps: "https://maps.app.goo.gl/H9fDXgUwGnoHBW9J7"
            },
            {
                nombre: "A Parada das Bestas",
                localidad: "Palas de Rei",
                web: "https://aparadadasbestas.com/#nosa-gastronomia",
                maps: "https://maps.app.goo.gl/WeMDb4FidnLVmLZj9"
            }
        ],

        perfil: null,
        mapa: null
    },

    // =========================================================
    // ETAPA 3 — PALAS DE REI → ARZÚA
    // =========================================================

    3: {
        itinerario: [
            "El Camino abandona la localidad de Palas de Rei por la Nacional 547, adentrándose durante unos metros por una senda y vuelve nuevamente a salir a la carretera. Abandonamos la carretera a mano derecha guiados por el indicador de Carballal, atravesando la aldea de Riba siguiendo una subida bastante pronunciada; tras alcanzar el final de la propia aldea, descendemos nuevamente para volver a la carretera y cruzarla, esta vez para dejarla atrás por su margen izquierdo, siguiendo un mojón que nos indica el trazado hacia San Xulián do Camiño. Sobrepasada la aldea, el asfalto vuelve a dejar paso a un terreno más natural donde a escasos metros, nos encontramos en un cruce en el que debemos de seguir de frente.",
            "Cruzaremos el río Pambre y pasaremos por Casanova, lugar interesante por sus casas solariegas. continuamos por la pista asfaltada durante unos metros y la abandonamos a mano izquierda, regresando nuevamente al sendero, el cual nos llevará en descenso al valle de Porto de Bois, donde atravesamos su río para avanzar, esta vez en pendiente de subida, hacia Campanilla, donde nos despediremos de la provincia de Lugo y nos adentramos en la de A Coruña.",
            "Dejaremos la nacional a mano derecha y avanzaremos en dirección a Leboreiro, una de las aldeas más espectaculares de la etapa, con un imponente suelo empedrado y un cruceiro que nos anuncia la llegada a la iglesia de Santa María de Leboreiro, declarada por la Consellería de Cultura hito patrimonial del Camino. Proseguimos y el mojón número 56 nos indica que nos encontramos en Discabio, lugar que da entrada a uno de los tramos más tediosos de la etapa, el que discurre paralelo a la carretera nacional por una vía de servicio que no abandonaremos hasta dejar atrás el Polígono Industrial de Melide.",
            "Vislumbraremos, ahora sí, un nuevo paraje digno de mencionar en nuestro cuaderno de bitácora, el área recreativa del río Furelos, donde atravesamos este afluente del Ulla por un imponente puente medieval, antesala de nuestra entrada en Melide, uno de los pueblos más grandes del trazado francés en tierras gallegas.",
            "Melide marca la mitad de nuestra etapa y es famosa por su excepcional pulpo. Continuamos nuestro rumbo nuevamente por la carretera nacional 547, que cruzaremos para adentrarnos en la comarcal 4603 en dirección San Martiño, girando a mano derecha, unos metros más adelante dirección hacia Santa María de Melide, una pequeña aldea que guarda una iglesia románica con una fachada espectacular. Atravesamos los lugares de Raido y Parabispo para cruzar el arroyo de Valverde, donde al otro lado nos espera el lugar de A Peroxa, antesala de la parroquia de Boente.",
            "Abandonamos Boente afrontando una dura cuesta que nos conduce a las parroquias de Figueiroa y Castañeda, desde donde comenzaremos nuevamente a bajar hasta el arroyo Ribeiral. En este punto el Camino vuelve a empinarse, volveremos a cruzar la carretera una vez más y llegaremos a un tramo empedrado de corta duración y enfilaremos el descenso hacia el que quizás sea el lugar más mágico de toda nuestra etapa, Ribadiso, con un albergue ideal para hacer noche.",
            "Entramos en Ribadiso por un puente sobre el río Iso, donde hay un área de descanso. Abandonar Ribadiso supone no solo abandonar este enclave paradisíaco, sino que supone afrontar los 3.4 km que restan hasta Arzúa, con un odiosa pendiente que transcurre por una vía de servicio paralela a la carretera nacional. En cuanto el terreno comienza a allanarse divisamos al fin el cartel de entrada en Arzúa, de donde no nos podemos ir sin probar su queso de denominación de origen."
        ],

        queVer: [
            { nombre: "Palomar de Curiscada" },
            { nombre: "Molino de Pontedapedra" },
            { nombre: "Iglesia de Santa Leocadia de Brazá" },
            { nombre: "Iglesia de San Vicente de Burres" },
            { nombre: "Capilla y fuente de Santa Irene" },
            { nombre: "Iglesia de San Verísimo de Ferreiros" },
            { nombre: "Iglesia de San Pedro de Lema" },
            { nombre: "Iglesia de San Mamed de Ferreiros" },
            { nombre: "Iglesia de San Cristovo de Dombodán" },
            { nombre: "Ermita de San Paio" }
        ],

        dondeComer: [
            {
                nombre: "Pulperia A Garnacha",
                localidad: "Melide",
                nota: "Uno de los mejores restaurantes del camino",
                web: "http://www.pulperiaagarnacha.com/",
                maps: "https://maps.app.goo.gl/wNnktVuD1c7TmSiJ7"
            },
            {
                nombre: "Pulpería Ezequiel",
                localidad: "Melide",
                nota: "Mejor pulpo de Galicia",
                web: "https://www.pulperiaezequiel.com/",
                maps: "https://maps.app.goo.gl/RJT4PAWytggqbTJK9"
            },
            {
                nombre: "Casa Teodora",
                localidad: "Arzúa",
                web: "http://www.casateodora.com/",
                maps: "https://maps.app.goo.gl/wzKBZx3b9wZQ3uqw7"
            }
        ],

        perfil: null,
        mapa: null
    },

    // =========================================================
    // ETAPA 4 — ARZÚA → O PEDROUZO
    // =========================================================

    4: {
        itinerario: [
            "Abandonamos Arzúa por la rúa do Carmen y descendiendo por una pista empedrada. En nuestro trayecto encontraremos pequeñas aldeas como Preguntoño o A Peroxa, a la que llegamos tras haber cruzado la N-547 por un paso inferior. Continuando a penas un kilómetro a través de un bosque de castaños y robles de una belleza significativa, alcanzamos otra pequeña aldea, As Quintas.",
            "Avanzamos en la misma dirección y pasamos por el lugar de A Calzada y posteriormente por Ferreiros. Tomaremos entonces una pista de tierra señalizada a mano derecha de la carretera y llegaremos a Salceda, punto de inflexión para el caminante, ya que las cómodas pistas forestales y el entorno rural desaparecen del mapa para dar lugar a la itinerancia entre este panorama y la carretera nacional, con la que lidiaremos en numerosas ocasiones.",
            "Nos separamos un instante del asfalto, cogiendo un camino a mano derecha, y un ligero ascenso, llegamos hasta el lugar de O Xen, diminuto núcleo muy disperso, y donde volveremos a encontrarnos con la carretera nacional, la cual deberemos cruzar de forma poco segura para llegar a las inmediaciones de Ras, tras la que continuamos hasta A Brea.",
            "Al salir de A Brea avanzaremos paralelos a la carretera y tras pasar por el lugar de O Empalme tomaremos un camino a la derecha que nos llevará próximos a la aldea de Santa Irene, ubicada fuera del Camino. Pasaremos por delante del albergue que se encuentra a mano derecha y descenderemos para cruzar la carretera nacional por un paso inferior. Así alcanzaremos la siguiente población, A Rúa, la última antes de llegar a nuestro destino y finalizar la etapa.",
            "Llegaremos A Rúa caminando en paralelo a la carretera nacional, y tras haber sobrepasado esta población sin salirnos del trazado, deberemos cruzar la carretera para situarnos en el margen izquierdo y avanzar nuevamente de frente por la pista de servicio hasta alcanzar a ver la población de O Pedrouzo. Accederemos al pueblo por el propio margen de la carretera, ya que esta lo atraviesa por el centro y es aquí donde se aglutina la mayoría de oferta de servicios de restauración y alojamiento. Llegados a este punto ponemos fin a nuestra etapa y ya solo nos quedará una jornada por delante para terminar nuestro Camino."
        ],

        queVer: [
            { nombre: "Porta Itineris Sanctis Iacobi" },
            { nombre: "Castro do Amenal" },
            { nombre: "Monumento a la visita de Juan Pablo II" },
            { nombre: "Iglesia de San Miguel de Pereira" },
            { nombre: "Ermita de Santiso" },
            { nombre: "Ermita de la Magdalena" }
        ],

        dondeComer: [
            {
                nombre: "O Ceadoiro",
                localidad: "O Pino",
                nota: "La mejor tortilla de Galicia",
                web: "https://www.facebook.com/OCeadoiro/",
                maps: "https://maps.app.goo.gl/v9eHhiHhVtQjPvyD6"
            },
            {
                nombre: "Bar O Pedrouzo",
                localidad: "Pedrouzo",
                web: "",
                maps: "https://maps.app.goo.gl/Fozmz4HfGAbJKta69"
            }
        ],

        perfil: null,
        mapa: null
    },

    // =========================================================
    // ETAPA 5 — O PEDROUZO → SANTIAGO
    // =========================================================

    5: {
        itinerario: [
            "Abandonamos la localidad por la Rúa Concello y giraremos a la izquierda al llegar al campo de fútbol para tomar una pista de tierra que nos conducirá a la pequeña aldea de San Antón. La cruzaremos siguiendo de largo para llegar hasta Amenal.",
            "Cruzamos la carretera nacional por un paso inferior y nos sumergimos en un bosque hasta desembocar en una pista de tierra paralela a la carretera. Veremos una rotonda pero nosotros debemos tomar antes a la izquierda para continuar por la pista y bordear el aeropuerto de Lavacolla. Una vez sobrepasado, seguimos la carretera local situada a la derecha. Así llegaremos al lugar de San Paio, donde cruzaremos un túnel y continuamos por una pista que nos lleva a Lavacolla.",
            "Tras cruzar la carretera nacional y tomar la carretera local, cruzamos el puente sobre el río Sionlla y ascendemos hasta Vilamaior. A nuestro paso veremos las instalaciones de la Televisión Gallega y TVE mientras desembocamos en una carretera que nos conduce a San Marcos, pero antes deberemos coger a la izquierda por una calle con el mismo nombre.",
            "Continuamos avanzando en la misma dirección mientras iniciamos un pequeño descenso por una pista que se encuentra debidamente señalizada y nos conduce al complejo del Monte do Gozo. Desde aquí tenemos nuestra primera vista sobre la ciudad de Santiago, ya casi podemos sentir la sensación de haber cumplido nuestro objetivo.",
            "Descendemos por unas escaleras y cruzamos sucesivos puentes sobre la autopista hasta alcanzar la rúa San Lázaro, avanzando algo más de un kilómetro. Llegamos al barrio de Os Concheiros, que recibe su nombre por los numerosos puestos que vendían a los peregrinos las famosas conchas peregrinas.",
            "Descendemos para entrar en el casco histórico de la ciudad por la calle de Casas Reais, subiendo luego hacia la plaza de Cervantes. Solo nos queda descender por la calle de Azabachería, donde antiguamente se asentaban los artesanos del azabache, y pasar por delante del imponente monasterio de San Martín Pinario. Ya solo queda cruzar el pasadizo donde los músicos callejeros nos esperan con sus instrumentos para darnos la bienvenida a la majestuosa Plaza del Obradoiro.",
            "Tras disfrutar de la vista de la Catedral, nos dirigimos a la Oficina de Acogida del Peregrino en Rúa Carretas, 33, donde podremos solicitar la Compostela, documento que nos certifica como peregrinos."
        ],

        queVer: [
            { nombre: "Catedral de Santiago" },
            { nombre: "San Martín Pinario" },
            { nombre: "Santo Domingo de Bonaval" },
            { nombre: "Mercado de Abastos" }
        ],

        dondeComer: [
            {
                nombre: "Mesón 42",
                localidad: "Santiago",
                web: "https://meson42.com/",
                maps: "https://maps.app.goo.gl/N871oRzxkPvph2og6"
            },
            {
                nombre: "A Noiesa",
                localidad: "Santiago",
                web: "http://www.anoiesa.com/",
                maps: "https://maps.app.goo.gl/G1q3e9xRbLnSxTiz8"
            },
            {
                nombre: "Casa Marcelo",
                localidad: "Santiago",
                web: "http://www.casamarcelo.net/",
                maps: "https://maps.app.goo.gl/aodwNqP6jpaWuJFX8"
            },
            {
                nombre: "O Gato Negro",
                localidad: "Santiago",
                web: "https://ogatonegro.com/",
                maps: "https://maps.app.goo.gl/S2pV1SFVkpuKutrx8"
            },
            {
                nombre: "Abasto 2.0",
                localidad: "Santiago",
                web: "http://www.abastosdouspuntocero.com/",
                maps: "https://maps.app.goo.gl/KX2m8Vs5y42guRFt7"
            },
            {
                nombre: "Mesón do Pulpo",
                localidad: "Santiago",
                web: "",
                maps: "https://maps.app.goo.gl/pZupefR6QyYpS7Ys6"
            },
            {
                nombre: "Pampin",
                localidad: "Santiago",
                web: "http://www.pampinbar.com/",
                maps: "https://maps.app.goo.gl/aBnLVYQPvofAaKMHA"
            }
        ],

        perfil: null,
        mapa: null
    }
};