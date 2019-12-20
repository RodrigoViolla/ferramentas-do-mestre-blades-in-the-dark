function getRuas() {
    var ruas = {};

    ruas.ambientes = [
        'Frio', 
        'Escuro', 
        'Claro',
        'Vivaz',
        'Quieto',
        'Refinado',
        'Abandonado',
        'Decrépito',
        'Apertado',
        'Barulhento',
        'Confortavel',
        'Cálido (Entusiasmado)',
    ];

    ruas.impressoes = {
        visoes: [
            'Coberto de Chuva ou Óleo',     
            'Sombras em Movimento, Luzes Oscilantes',
            'Névoa, Neblina, Geada',
            'Vultos Fugitivos, Ecos no Campo Fantasmagórico',
            'Fuligem, Nuvens de Cinzas, Gosmas',
            'Faíscas Elétricas, Cabos, Mecanismos',
        ],
        sons: [
            'Maquinário, Trabalhadores',    
            'Tecidos Tremulantes, Ventos Uivantes',
            'Risadas, Canções, Música',
            'Sussurros, Ecos, Vozes Estranhas',
            'Trovão, Chuva Intensa',
            'Sinos, Badaladas, Sirenes do Porto',
        ],
        aromas: [
            'Fogões, Fornalhas',
            'Madeira Úmida, Podridão, Lixo',
            'Animais, Peles, Sangue',
            'Químicos, Destilados, Vapores',
            'Água da Chuva, Oceano',
            'Ozônio, Descargas Electroplasmáticas',
        ]
    };

    ruas.ocupacoes = [
        'Mão de Obra',
        'Lojas',
        'Comércio',
        'Hospitalidade',
        'Espaço Público',
        'Energia',
        'Manufatura',
        'Transporte',
        'Lazer',
        'Entretenimento',
        'Armazenagem',
        'Cultivo',
        'Acadêmico',
        'Artístico',
    ];

    ruas.tipos = [
        'Viela Estreita',
        'Beco Apertado',
        'Rua Contorcida',
        'Estrada Irregular',
        'Ponte',
        'Canal',
        'Pátio Fechado',
        'Praça Aberta',
        'Avenida Pavimentada',
        'Túnel',
        'Boulevard Larga',
        'Rotatória'
    ];

    ruas.tipos_complemento = [
        'Elevada',
        'Inundada',
        'Suspensa',
        'Subterrânea',
        'Flutuante',
        'Privada, Cercada',
    ];

    ruas.detalhes = [
        'Suportes Metálicos',
        'Portões e Cercas de Metal',
        'Chaminés Esfumaçadas',
        'Portas, Grades de Metal, Escotilhas',
        'Mecanismos de Engrenagens',
        'Cordame, Cabos',
        'Escadas, Rampas e Terraços',
        'Andaimes de Madeira',
        'Passarelas entre Prédios',
        'Espaços nos Telhados',
        'Trens, Vagões',
        'Passagens Ocultas',
        'Bandeiras, Flâmulas',
        'Decoraçõesde Festival',
        'Multidão, Desfile, Revolta',
        'Apresentação de Rua',
        'Barracas, Abrigos improvisados',
        'Rotas que se cruzam',
        'Marcas de Gangues',
        'Postos de Patrulha',
        'Olheiros',
        'Punição Pública, Pelourinho',
        'Arauto de Rua, Visionário',
        'Bancas de Jornais, Avisos',
        'Animais de Rua',
        'Jardins paisagísticos',
        'Lama, Estrume',
        'Construção, Demolição',
        'Chorume, Vapor, Fumaça',
        'Órfãos, Mendigos',
        'Ruínas Antigas',
        'Gárgulas Ameaçadores',
        'Sinos, Proteções Espirituais',
        'Vazio Inquietante',
        'Quarentena, Isolamento',
        'Ofertas em Santuário',
    ];
    
    return ruas;
}