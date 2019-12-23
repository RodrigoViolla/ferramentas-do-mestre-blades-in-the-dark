function getGolpes(){
    var golpes = {};

    golpes.alvos = {};

    golpes.alvos.civil = [
        'Acadêmico ou Estudioso',
        'Trabalhador ou Artesão',
        'Mensageiro ou Marujo',
        'Mercador ou Lojista',
        'Artista ou Escritor',
        'Doutor ou Alquimista',
    ];

    golpes.alvos.criminoso = [
        'Traficante ou Fornecedor',
        'Mercenário ou Bandido',
        'Atravessador ou Jogador',
        'Espião ou Informante',
        'Contrabandista ou Ladrão',
        'Chefe do Crime',
    ];

    golpes.alvos.politico = [
        'Nobre ou Oficial',
        'Banqueiro ou Capitão',
        'Revolucionário ou Refugiado',
        'Clérigo ou Cultista',
        'Guarda ou Inspetor',
        'Juiz ou Chefe do Bairro',
    ];

    golpes.alvos.estranho = [
        'Fantasma de um (role novamente)',
        'Colecionador Ocultista',
        'Vampiro ou Outro Morto-Vivo',
        'Demônio (disfarçado)',
        'Possuído ou Vazio',
        'Sussurro ou Cultista',
    ];

    golpes.servicos = {};

    golpes.servicos.ladinagem = [
        'Perseguição ou Espionagem',
        'Sabotagem ou Incêndio',
        'Remover ou Plantar Objeto',
        'Envenenar ou Arranjar um Acidente',
        'Roubo ou Assalto',
        'Assumir uma identidade ou Iludir',
    ];

    golpes.servicos.violencia = [
        'Assassinato',
        'Desaparer ou Sequestrar c/ Resgate',
        'Aterrorizar ou Extorquir',
        'Destruir ou Depredar',
        'Invadir ou Defender',
        'Assaltar ou Coagir à força',
    ];

    golpes.servicos.submundo = [
        'Escoltar ou Fazer Segurança',
        'Contrabandear ou Mandar Mensagem',
        'Chantagear ou Desacreditar',
        'Enganar ou Espionar',
        'Localizar ou Esconder',
        'Negociar ou Ameaçar',
    ];

    golpes.servicos.sobrenatural = [
        'Amaldiçoar ou Santificar',
        'Banir ou Conjurar',
        'Extrair Essência',
        'Inserir ou Remover Runas',
        'Executar ou Impedir Ritual',
        'Esvaziar ou Revivificar',
    ];

    golpes.surpresas = [
        'Algum elemento serve de fachada para práticas espirituais heréticas de cultos',
        'Um ocultista previu os acontecimentos e alertou as partes envolvidas',
        'Espíritos descontrolados possuem alguns/muitos/todos os envolvidos',
        'Espíritos descontrolados assombram o local',
        'O serviço avança os interesses secretos de um demônio',
        'O serviço avança os interesses secretos de um vampiro',
        'Algum elemento serve de fachada para um empreendimento criminoso',
        'Uma gangue perigosa usa esse local',
        'O serviço é uma armadilha preparada pelos seus inimigos',
        'O serviço é um teste para outro serviço',
        'O serviço avança os interesses secretos de um lorde mercantil',
        'O serviço avança os interesses secretos de um chefe do crime',
        'O serviço exige uma viagem de electro-trem',
        'O serviço exige uma jornada pelas terras mortais',
        'O serviço exige viagem marítima',
        'A localização é móvel (o lugar de encontro muda, é em um veículo, etc.)',
        'O serviço avança os interesses secretos de um revolucionário',
        'O serviço avança os interesses secretos de um oficial da cidade',
    ];

    golpes.pessoas = [
        'PJ - Amigo',
        'PJ - Rival',
        'PJ - Fornecedor de vício',
        'Bando - Contato',
        'Cidade - Notável de Doskvol',
        'Estranho - Fantasma, Demônio, Deus',
    ];

    golpes.faccoes = [
        'Os Velados',
        'Os Cravosde Prata',
        'Lorde Scurlock',
        'A Colmeia',
        'O Círculo das Chamas',
        'Os Corvos',
        'Os Lanternas Negras',
        'Os Faixas Escarlates',
        'As Irmãs Funestas',
        'Os Trituradores',
        'Os Cutelos',
        'Os Vultos',
        'Os Casacas Cinzas',
        'Ulf Filhodo Ferro',
        'Os Mastins da Névoa',
        'Almas Perdidas',
        'Cons. Municipal ou A Fundação',
        'Prisão Anzolférreo',
        'Patrulheiros Espirituais',
        'Casacas Azuis ou Inspetores',
        'Exército Imperial',
        'Trabalhadores ou Servos',
        'Faisqueiros',
        'Cifras ou Libertintos',
        'Um Consulado',
        'Ministério da Preservação',
        'Caçadores de Leviatãs',
        'Marujos ou Estivadores',
        'Gondoleiros ou Cocheiros',
        'Peões dos Trilhos ou A Brigada',
        'A Igrejado Êxtase',
        'A Dama Lacrimosa',
        'Os Deuses Esquecidos',
        'Via dos Ecos ou Reconciliados',
        'Refugiados Skovlandeses',
        'Legião da Morte',
    ];

    return golpes;
}