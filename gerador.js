function gerar(){
    var ruas = getRuas();
    var predios = getPredios();
    var pessoas = getPessoas();    

    var ruaParam = document.getElementById('rua').checked;
    var detalhesRuaParam = document.getElementById('detalhesRua').value;
    var prediosParam = document.getElementById('predios').checked;
    var quantidadePrediosParam = document.getElementById('quantidadePredios').value;
    var prediosRarosParam = document.getElementById('prediosRaros').checked;
    var detalhesPredioParam = document.getElementById('detalhesPredio').value;
    var pessoasParam = document.getElementById('pessoas').checked;
    var quantidadePessoasParam = document.getElementById('quantidadePessoas').value;
    var profissoesRarasParam = document.getElementById('profissoesRaras').checked;

    var html = "";

    if (ruaParam) {
        var rua = {};
        
        rua.lugar = ruas.ocupacoes[rand(0,13)]+
            " - "+
            ruas.tipos[rand(0,11)]+
            " "+
            ruas.ambientes[rand(0,11)]+
            " "+
            ruas.tipos_complemento[rand(0,5)];

        rua.impressoes = {};
        rua.impressoes.visoes = ruas.impressoes.visoes[rand(0,5)];
        rua.impressoes.sons = ruas.impressoes.sons[rand(0,5)];
        rua.impressoes.aromas = ruas.impressoes.aromas[rand(0,5)];
        
        rua.detalhes = [];
        for (var i = 0; i < detalhesRuaParam; i++) {
            rua.detalhes.push(ruas.detalhes[rand(0,35)]);
        }       
        
        html += "<div class='cabec'>Rua</div>"+
        "<div class='content'>"+
        "Descrição: " + rua.lugar + "<br>" +
        "<hr><div class='titulo'>Impressões</div><br>"+
        "- Visões: " + rua.impressoes.visoes + "<br>" +
        "- Sons: " + rua.impressoes.sons + "<br>" +
        "- Aromas: " + rua.impressoes.aromas + "<br>" +
        "<hr><div class='titulo'>Detalhes</div><br>";
        
        for(var i = 0; i < rua.detalhes.length; i++){
            html += "- "+rua.detalhes[i]+"<br>";
        }
        
        html += "</div>";
    }
    
    if (prediosParam) {
        prediosGerados = [];

        for (var i = 0; i < quantidadePrediosParam; i++) {            
            var predio = {};

            if(prediosRarosParam)
                predio.ocupacao = predios.ocupacao.rara[rand(0,33)];
            else
                predio.ocupacao = predios.ocupacao.comum[rand(0,35)];

            predio.exterior = {};
            predio.exterior.material = predios.exterior.materiais[rand(0,5)];
            predio.exterior.detalhe = predios.exterior.detalhes[rand(0,5)];

            predio.detalhes = [];
            for (var j = 0; j < detalhesPredioParam; j++) {
                predio.detalhes.push(predios.detalhes[rand(0,36)]);
            } 

            prediosGerados.push(predio);

            html += "<div class='cabec'>Predio</div>"+
            "<div class='content'>"+
            "Descrição: Predio de " + predio.exterior.material + " e " + predio.exterior.detalhe + "<br>" +
            "Ocupação: " + predio.ocupacao + "<br>" +            
            "<hr><div class='titulo'>Detalhes</div><br>";
            
            for(var j = 0; j < predio.detalhes.length; j++){
                html += "- "+ predio.detalhes[j] +"<br>";
            }
            
            html += "</div>";
        }        
    }

    if (pessoasParam) {
        pessoasGeradas = [];

        for (var i = 0; i < quantidadePessoasParam; i++) {
            var pessoa = {};

            if(profissoesRarasParam)
                pessoa.profissao = pessoas.profissoes.rara[rand(0,35)];
            else
                pessoa.profissao = pessoas.profissoes.comum[rand(0,24)];

            pessoa.sexo = pessoas.sexos[rand(0,2)];
            pessoa.nome = pessoas.nomes[rand(0,79)];
            pessoa.sobrenome = pessoas.sobrenomes[rand(0,47)];
            pessoa.alcunha = pessoas.alcunhas[rand(0,40)];
            pessoa.aparencia = pessoas.aparencias[rand(0,35)];
            pessoa.objetivo = pessoas.objetivos[rand(0,17)];
            pessoa.metodo = pessoas.metodos[rand(0,17)];            
            pessoa.traco = pessoas.tracos[rand(0,35)];
            pessoa.interesse = pessoas.interesses[rand(0,35)];
            pessoa.peculiaridade = pessoas.peculiaridades[rand(0,35)];
            
            pessoasGeradas.push(pessoa);

            html += "<div class='cabec'>Pessoa</div>" +
            "<div class='content'>" +
            "Nome: " + pessoa.nome + " " + pessoa.sobrenome + "<br>" +
            "Alcunha: " + pessoa.alcunha + "<br>" +            
            "Sexo: " + pessoa.sexo + "<br>" +
            "Aparencia: " + pessoa.aparencia + "<br>" +
            "Profissão: " + pessoa.profissao + "<br>" +
            "Peculiaridade: " + pessoa.peculiaridade + "<br>" +
            "<hr><div class='titulo'>Personalidade</div><br>" +
            "Objetivo: " + pessoa.objetivo + "<br>" +
            "Método: " + pessoa.metodo + "<br>" +
            "Traço: " + pessoa.traco + "<br>" +
            "Interesse: " + pessoa.interesse;
            
            html += "</div>";
        }
    }
    
    document.getElementById('gerados').innerHTML = html;  
}

function rand(min, max){
    return Math.floor(Math.random() * (+max - +min)) + +min;  
}