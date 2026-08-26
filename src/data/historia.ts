export type HistoriaRun = {
    texto: string;
    negrita?: boolean;
    subrayado?: boolean;
    cursiva?: boolean;
};

export type HistoriaParrafo = {
    contenido: HistoriaRun[];
};

export type HistoriaItem = {
    id: number;
    titulo: string;
    parrafos: HistoriaParrafo[];
};

export const historia: HistoriaItem[] = [
    {
        id: 1,
        titulo: "El eremita Paio descubre la tumba en la década de 820",
        parrafos: [
            {
                contenido: [
                    {
                        texto: "Alrededor del año 820 se produce el hallazgo de la tumba de Santiago el Mayor e inmediatamente la creación del “locus Sancti Iacobi”, el lugar sagrado para venerar sus restos."
                    }
                ]
            },
            {
                contenido: [
                    {
                        texto: "En un momento impreciso de la década de 820-830 se produce el descubrimiento de la tumba de Santiago el Mayor. Reina en el noroeste peninsular (Reino de Asturias) Alfonso II. Él es el primer gran valedor. Se había criado en el Monasterio de Samos y recibe con entusiasmo la noticia que le transmite el obispo de Iria, Teodomiro."
                    }
                ]
            },
            {
                contenido: [
                    {
                        texto: "Un eremita del lugar de Solovio (donde hoy se alza la Iglesia de San Fiz de Solovio), de nombre Paio, localizó, en un bosque llamado Libredón, las ruinas de un primitivo enterramiento. Contienen las que serán identificadas como tumbas del apóstol Santiago y sus discípulos Teodoro y Atanasio."
                    }
                ]
            },
            {
                contenido: [
                    {
                        texto: "Esta aparición confirma una arraigada tradición popular que habían documentado antes los monjes Beda el Venerable y Beato de Liébana. Pero faltaban estas pruebas. Enseguida, el rey Alfonso II visita el lugar y manda edificar una modesta iglesia, que luego reconstruirá Alfonso III (año 899). Estamos en el germen de la actual "
                    },
                    {
                        texto: "catedral y de la ciudad de Santiago",
                        negrita: true
                    },
                    {
                        texto: "."
                    }
                ]
            }
        ]
    },

    {
        id: 2,
        titulo: "Reyes, abades y monjes, los primeros peregrinos (siglos IX y X)",
        parrafos: [
            {
                contenido: [
                    {
                        texto: "Monarcas astures, abades y monjes franceses y alemanes son los primeros en llegar a Santiago desde finales del siglo IX."
                    }
                ]
            },
            {
                contenido: [
                    {
                        texto: "Los soberanos astures Alfonso II y Alfonso III, junto con la Corte de Oviedo, son los "
                    },
                    {
                        texto: "primeros peregrinos conocidos",
                        negrita: true
                    },
                    {
                        texto: " del siglo IX. Alfonso III el Magno peregrinó en 872 y regresó con la reina Jimena dos años más tarde, en 874, donando al apóstol una cruz de oro y pedrería, emblema del Reino de Asturias."
                    }
                ]
            },
            {
                contenido: [
                    {
                        texto: "En el siglo X",
                        negrita: true
                    },
                    {
                        texto: " comienzan a llegar peregrinos europeos, como Bretenaldo, en 930, un franco que decidió asentarse como vecino de la primitiva Compostela. Dos años más tarde, hacia 932, peregrinó el rey Ramiro II. No obstante, el peregrino más célebre del siglo X fue el "
                    },
                    {
                        texto: "obispo Gotescalco de Le Puy",
                        negrita: true
                    },
                    {
                        texto: ", quien viajó a Compostela en compañía de otros clérigos y de un grupo de fieles de Aquitania a finales de 950."
                    }
                ]
            },
            {
                contenido: [
                    {
                        texto: "Poco después, en 959, peregrina al santo lugar el "
                    },
                    {
                        texto: "abad Cesáreo",
                        negrita: true
                    },
                    {
                        texto: " del monasterio catalán de Santa Cecilia de Montserrat. Pidió la ayuda de la Iglesia compostelana para solicitar del papa la restauración de la sede episcopal de Tarragona. Este trámite de intercesión incrementó el peso de la sede apostólica en el reino de León, reforzando la posición de "
                    },
                    {
                        texto: "Compostela como sede prestigiosa del occidente peninsular",
                        negrita: true
                    },
                    {
                        texto: "."
                    }
                ]
            }
        ]
    },

    {
        id: 3,
        titulo: "La época de oro de las peregrinaciones (siglos XI-XIII)",
        parrafos: [
            {
                contenido: [
                    {
                        texto: "Francia, Italia, centro y este de Europa, Inglaterra, Alemania, incluso Islandia, y por supuesto toda la Hispania llegaban a pie, a caballo, en barco…"
                    }
                ]
            },
            {
                contenido: [
                    {
                        texto: "Santiago se consolida rápidamente como "
                    },
                    {
                        texto: "centro de peregrinación internacional",
                        negrita: true
                    },
                    {
                        texto: " entre los siglos XI y XIII. Gracias a una unión de fuerzas e intereses que, a favor de Compostela, llevaron a cabo los principales centros de poder occidental: la Corona (desde Alfonso II a Alfonso VII o Sancho Ramírez), el papado (Calixto II o Alejandro III) y las órdenes monacales (las abadías de Cluny y el Císter). Así escribirá el "
                    },
                    {
                        texto: "Camino",
                        negrita: true
                    },
                    {
                        texto: " su historia milenaria."
                    }
                ]
            },
            {
                contenido: [
                    {
                        texto: "La época de oro de las peregrinaciones se sitúa en estos siglos: Francia, Italia, centro y este de Europa, Inglaterra, Alemania, incluso Islandia. Y, por supuesto, toda la Hispania. "
                    },
                    {
                        texto: "Llegaban a pie, a caballo, en barco…",
                        negrita: true
                    },
                    {
                        texto: " y eran asistidos principalmente por una red de hospitales fundados por reyes, nobles y burgueses de las ciudades, sobre todo en los barrios de francos, y por los monjes de Cluny, que recibían a los peregrinos en sus monasterios."
                    }
                ]
            },
            {
                contenido: [
                    {
                        texto: "La historia también nos habla de la peregrinación a la tumba del apóstol, en 1214, de "
                    },
                    {
                        texto: "san Francisco de Asís",
                        negrita: true
                    },
                    {
                        texto: ", hecho que inaugura uno de los capítulos más fértiles del "
                    },
                    {
                        texto: "Camino de Santiago",
                        negrita: true
                    },
                    {
                        texto: ": la renovación de la espiritualidad occidental a través de la labor educativa, evangelizadora y fraternal de los franciscanos. En Santiago fundan el primer "
                    },
                    {
                        texto: "convento de la Orden",
                        negrita: true
                    },
                    {
                        texto: "."
                    }
                ]
            }
        ]
    },

    {
        id: 4,
        titulo: "La hospitalidad, seña de identidad del Camino de Santiago",
        parrafos: [
            {
                contenido: [
                    {
                        texto: "La acogida al peregrino constituye uno de los aspectos fundamentales de la experiencia del Camino desde la Edad Media."
                    }
                ]
            },
            {
                contenido: [
                    {
                        texto: "La "
                    },
                    {
                        texto: "acogida al peregrino",
                        negrita: true
                    },
                    {
                        texto: " constituye uno de los aspectos fundamentales de la experiencia del "
                    },
                    {
                        texto: "Camino",
                        negrita: true
                    },
                    {
                        texto: " desde la Edad Media. Un "
                    },
                    {
                        texto: "servicio permanente de ayuda sanitaria y espiritual",
                        negrita: true
                    },
                    {
                        texto: " que fue organizado desde las diversas instituciones, desde la Corona y la Iglesia hasta el propio pueblo. Fue crucial la fundación de hospitales dedicados a atender las necesidades espirituales, materiales y sanitarias del creciente número de peregrinos que se dirigían a Santiago."
                    }
                ]
            },
            {
                contenido: [
                    {
                        texto: "La mayoría de las instituciones hospitalarias para peregrinos y pobres se crearon a través de las donaciones aportadas por comunidades religiosas, sedes episcopales, familias nobles, altos clérigos y, sobre todo, por los reyes. Los monarcas fundaron "
                    },
                    {
                        texto: "gran cantidad de hospitales",
                        negrita: true
                    },
                    {
                        texto: " en el "
                    },
                    {
                        texto: "Camino",
                        negrita: true
                    },
                    {
                        texto: " de peregrinación, manifestando la voluntad de la Corona de ejercer la virtud cristiana de la caridad y de servir a Dios y a Santiago como santo patrono del reino. En los pequeños hospitales medievales era costumbre ofrecer salas con doce camas, o seis lechos dobles, en recuerdo de los doce apóstoles de Jesús."
                    }
                ]
            },
            {
                contenido: [
                    {
                        texto: "Para la mentalidad medieval "
                    },
                    {
                        texto: "el peregrino era un enviado del Cielo,",
                        negrita: true
                    },
                    {
                        texto: " por lo que había que considerarlo y tratarlo como si fuese el propio Jesucristo. Por eso no era infrecuente que en las escenas de la aparición de Jesús resucitado a los discípulos de Emaús se representase al Salvador como peregrino, con distintivos propios de la peregrinación jacobea como el "
                    },
                    {
                        texto: "zurrón",
                        negrita: true
                    },
                    {
                        texto: " y la concha de "
                    },
                    {
                        texto: "vieira",
                        negrita: true
                    },
                    {
                        texto: ". La ocasión más conocida de esta identificación es el célebre relieve románico del claustro de Santo Domingo de Silos (Burgos)."
                    }
                ]
            }
        ]
    },

    {
        id: 5,
        titulo: "La baja Edad Media (siglos XIV y XV)",
        parrafos: [
            {
                contenido: [
                    {
                        texto: "El Camino resistió en esta época los prolongados períodos de hambre, crisis económica y de pensamiento."
                    }
                ]
            },
            {
                contenido: [
                    {
                        texto: "La historia del "
                    },
                    {
                        texto: "Camino de Santiago",
                        negrita: true
                    },
                    {
                        texto: " corre pareja a las vicisitudes de la historia de Europa. Pero a pesar de la influencia negativa que sobre la vida y la cultura causaron episodios como la “Guerra de los Cien Años” (1337-1453), la Peste Negra (1348) y los prolongados períodos de hambre y crisis económica y de pensamiento, el "
                    },
                    {
                        texto: "Camino de Santiago",
                        negrita: true
                    },
                    {
                        texto: " continuó vivo en el duro Trescientos y en el más benéfico siglo XV"
                    }
                ]
            },
            {
                contenido: [
                    {
                        texto: "En la celebración del año santo romano de 1300 el papa ofrece a los peregrinos la "
                    },
                    {
                        texto: "Indulgencia Plenaria",
                        negrita: true
                    },
                    {
                        texto: " o perdón de los pecados. A fines del XIV se inicia una etapa de expansión económica, desarrollada en el siglo siguiente. En este marco de crisis, caos y recuperación, campesinos, burgueses, guerreros, nobles y religiosos peregrinan sobre todo en períodos de treguas, bajo el manto de una cosmovisión que interpretaba la "
                    },
                    {
                        texto: "Vía Láctea",
                        negrita: true
                    },
                    {
                        texto: " como un camino de almas rumbo al Paraíso."
                    }
                ]
            },
            {
                contenido: [
                    {
                        texto: "El encuentro con lo maravilloso "
                    },
                    {
                        texto: "seduce tanto a los más humildes como a los caballeros.",
                        negrita: true
                    },
                    {
                        texto: " El rey Alfonso XI de Castilla (1325-1350) es armado caballero en Compostela; doña Isabel de Aragón (ca. 1270-1336), viuda del rey don Dinís de Portugal, peregrina en 1325, donando su corona, entre otras posesiones y riquezas personales; a inicios de 1343 llega a Compostela santa Brígida de Suecia (1303-1373), que peregrina en compañía de su marido, Ulf Gudmarsson, y de otras personas; en la catedral sufrió una visión mística, algo habitual en su vida."
                    }
                ]
            },
            {
                contenido: [
                    {
                        texto: "Durante el último tercio del siglo XIV la Galicia costera potenciará con la Europa atlántica una dinámica comercial de resultados fecundos. La situación de crisis padecida en Francia, Flandes, Inglaterra y otros países impulsa en Galicia un "
                    },
                    {
                        texto: "comercio internacional ligado a la peregrinación",
                        negrita: true
                    },
                    {
                        texto: " por vía marítima, que tendrá en "
                    },
                    {
                        texto: "A Coruña",
                        negrita: true
                    },
                    {
                        texto: ", puerto de peregrinos, su máximo lugar de referencia."
                    }
                ]
            },
            {
                contenido: [
                    {
                        texto: "Al puerto coruñés arribaron en las décadas finales del XIV y durante el siglo "
                    },
                    {
                        texto: "XV",
                        negrita: true
                    },
                    {
                        texto: " un gran número de barcos cargados con peregrinos de Flandes, Bretaña, Inglaterra y los países bálticos, y mercancías flamencas, de Andalucía, Cataluña, Génova y Venecia. Los mismos muelles exportaban pescado ahumado al Mediterráneo y vino del Ribeiro con destino a la Europa atlántica."
                    }
                ]
            }
        ]
    },

    {
        id: 6,
        titulo: "La peregrinación jacobea en la Edad Moderna (siglos XVI-XVIII)",
        parrafos: [
            {
                contenido: [
                    {
                        texto: "La Reforma protestante y las guerras de religión en los territorios alemanes y en Francia restarán muchos peregrinos al Camino."
                    }
                ]
            },
            {
                contenido: [
                    {
                        texto: "En el siglo XVI",
                        negrita: true
                    },
                    {
                        texto: " el "
                    },
                    {
                        texto: "Camino de Santiago",
                        negrita: true
                    },
                    {
                        texto: " vivirá una profunda crisis, motivada por varias razones. En primer lugar influyó negativamente la sensibilidad de los intelectuales humanistas, que partían de la crítica irónica que Erasmo de Rotterdam dedicó al tema de la peregrinación. Una crítica que se endurece con Lutero. La Reforma protestante y las guerras de religión en los territorios alemanes y en Francia restarán muchos peregrinos al "
                    },
                    {
                        texto: "Camino",
                        negrita: true
                    },
                    {
                        texto: ". Con la guerra abierta entre la España imperial de Carlos V y Francia, esta situación de fractura se mantiene, y todavía es peor en tiempos de Felipe II, con el cierre de fronteras para evitar la entrada del luteranismo en sus reinos."
                    }
                ]
            },
            {
                contenido: [
                    {
                        texto: "La Inquisición también constituye un problema en el XVI, pues sus sospechas afectaban a todo extranjero, incluso a los peregrinos jacobeos, algunos de ellos acusados de espionaje. Tras la celebración del Concilio de Trento (1545-1563) la Iglesia católica se rearma ideológicamente, con la exaltación del culto a la Virgen y a los santos."
                    }
                ]
            },
            {
                contenido: [
                    {
                        texto: "En mayo de 1589, ante el temor de un ataque a Compostela por parte de los ingleses de Francis Drake, cuyos barcos atacaban A Coruña, el arzobispo Juan de Sanclemente ordenó la "
                    },
                    {
                        texto: "ocultación del cuerpo del apóstol",
                        negrita: true
                    },
                    {
                        texto: " dentro del recinto del presbiterio de la catedral. Su exacto paradero sería desconocido durante varios siglos, hasta "
                    },
                    {
                        texto: "1879, año del Segundo Descubrimiento de los restos apostólicos",
                        negrita: true
                    },
                    {
                        texto: "."
                    }
                ]
            },
            {
                contenido: [
                    {
                        texto: "La religiosidad barroca, empapada de este espíritu contrarreformista, favorecerá la "
                    },
                    {
                        texto: "reactivación del Camino de Santiago en el siglo XVII",
                        negrita: true
                    },
                    {
                        texto: ", en especial durante los "
                    },
                    {
                        texto: "años santos",
                        negrita: true
                    },
                    {
                        texto: "; aunque en la ruta tendrán que convivir los jacobitas con falsos peregrinos, interesados en vivir de la caridad y las limosnas en villas y ciudades. La Revolución Francesa de 1789 y la guerra de varias potencias europeas contra Francia motivarán un nuevo descenso en el número de peregrinos a final del siglo XVIII."
                    }
                ]
            }
        ]
    },

    {
        id: 7,
        titulo: "El Camino de Santiago en la Era Contemporánea (siglos XIX y XX)",
        parrafos: [
            {
                contenido: [
                    {
                        texto: "El Segundo Descubrimiento de las reliquias del apóstol (1879) marcó la recuperación de un Camino que posteriormente, en el siglo XX, estaría condicionado por el azote de las guerras española y mundiales."
                    }
                ]
            },
            {
                contenido: [
                    {
                        texto: "Españoles y portugueses mantendrán la llama peregrina, en unas décadas de muy poca afluencia, que incluso afecta a los años santos. La tendencia comenzó a cambiar a partir del "
                    },
                    {
                        texto: "Segundo Descubrimiento del Cuerpo de Santiago, en 1879",
                        negrita: true
                    },
                    {
                        texto: ", con la declaración papal del hallazgo de los restos apostólicos, afirmada en la bula "
                    },
                    {
                        texto: "Deus Omnipotens",
                        cursiva: true
                    },
                    {
                        texto: " (1884), y con la celebración de un año santo extraordinario en 1885."
                    }
                ]
            },
            {
                contenido: [
                    {
                        texto: "El "
                    },
                    {
                        texto: "Camino de Santiago",
                        negrita: true
                    },
                    {
                        texto: " tendrá un nuevo repunte en las décadas finales de la centuria y a comienzos del siglo XX, sobre todo gracias a la acción pastoral de los arzobispos Payá y Martín de Herrera. La quiebra de la Guerra Civil Española (1936-1939) partió en dos una sociedad que tardaría en recuperar el ímpetu de las peregrinaciones, en una Europa sumida en dos guerras mundiales y la tensión de la posterior “guerra fría”."
                    }
                ]
            },
            {
                contenido: [
                    {
                        texto: "En los "
                    },
                    {
                        texto: "años 50 y 60 comenzó tímidamente la recuperación",
                        negrita: true
                    },
                    {
                        texto: ", con la creación de las primeras asociaciones jacobeas de París (1950) y Estella (1963), y la celebración de los años santos 1965 y 1971. El impulso definitivo llegará a partir de 1982 con la "
                    },
                    {
                        texto: "peregrinación del papa Juan Pablo II",
                        negrita: true
                    },
                    {
                        texto: " y su discurso europeísta en el altar mayor de la "
                    },
                    {
                        texto: "catedral de Santiago",
                        negrita: true
                    },
                    {
                        texto: "."
                    }
                ]
            }
        ]
    },

    {
        id: 8,
        titulo: "En la actualidad",
        parrafos: [
            {
                contenido: [
                    {
                        texto: "Frente a un mundo globalizado, la experiencia de la peregrinación a Santiago es única."
                    }
                ]
            },
            {
                contenido: [
                    {
                        texto: "Las primeras décadas del "
                    },
                    {
                        texto: "siglo XXI",
                        negrita: true
                    },
                    {
                        texto: " están marcadas por una concepción global del pensamiento y la economía, el desarrollo de la tecnología digital al servicio de la comunicación, la cultura y el entretenimiento, la amenaza del terrorismo yihadista –los atentados del 11 de septiembre de 2001 en Nueva York y Washington pueden marcar el inicio de la centuria–, una creciente preocupación por el medio ambiente y el estallido en 2008 de una crisis económica mundial que ha endurecido la situación social."
                    }
                ]
            },
            {
                contenido: [
                    {
                        texto: "Ante esta ansiedad y "
                    },
                    {
                        texto: "búsqueda de nuevas experiencias enriquecedoras",
                        negrita: true
                    },
                    {
                        texto: ", la peregrinación tradicional a Santiago propone un cambio radical de comportamiento, una alternativa de valores humanos y universales frente a un mundo cada vez más globalizado, y también alienante y competitivo."
                    }
                ]
            },
            {
                contenido: [
                    {
                        texto: "En este inicio de siglo y de milenio la peregrinación jacobea es, más que nunca, un "
                    },
                    {
                        texto: "fenómeno transversal",
                        negrita: true
                    },
                    {
                        texto: ": por una parte, espiritual y ecuménico, también abierto al conocimiento, a la amistad y la comprensión mutua. Un "
                    },
                    {
                        texto: "Camino",
                        negrita: true
                    },
                    {
                        texto: " cuyos peregrinos cuentan además con la vivencia del paisaje, la historia, la cultura compartida y la solidaridad."
                    }
                ]
            },
            {
                contenido: [
                    {
                        texto: "El peregrino se encuentra hoy con un espacio considerado sagrado durante siglos: el propio "
                    },
                    {
                        texto: "Camino de Santiago",
                        negrita: true
                    },
                    {
                        texto: "; una geografía sacralizada que es también itinerario histórico y cultural. Es, en definitiva, una forma distinta de peregrinación, que no niega la tradicional sino que a ella ha sumado los anhelos y las motivaciones de las sociedades contemporáneas."
                    }
                ]
            }
        ]
    }
];