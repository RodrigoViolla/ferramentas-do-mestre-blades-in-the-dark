function gerar(){
    var ruas = getRuas();
    var predios = getPredios();
    var pessoas = getPessoas();    
    var golpes = getGolpes();    

    var ruaParam = document.getElementById('rua').checked;
    var detalhesRuaParam = document.getElementById('detalhesRua').value;

    var prediosParam = document.getElementById('predios').checked;
    var quantidadePrediosParam = document.getElementById('quantidadePredios').value;
    var prediosRarosParam = document.getElementById('prediosRaros').checked;
    var detalhesPredioParam = document.getElementById('detalhesPredio').value;

    var pessoasParam = document.getElementById('pessoas').checked;
    var quantidadePessoasParam = document.getElementById('quantidadePessoas').value;
    var profissoesRarasParam = document.getElementById('profissoesRaras').checked;
    
    var golpesParam = document.getElementById('golpes').checked;
    var quantidadeGolpesParam = document.getElementById('quantidadeGolpes').value;
    var surpresaParam = document.getElementById('surpresa').checked;

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
        
        html += "<div class='cabec'>"+
        "<i class='fa fa-road'></i> "+
        "Rua</div>"+
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

            html += "<div class='cabec'>"+
            "<i class='fa fa-university '></i> "+
            "Predio</div>"+
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

            pessoa.sexo = pessoas.sexos[rand(0,3)];
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

            html += "<div class='cabec'>"+
            "<i class='fa fa-user'></i> "+
            "Pessoa</div>" +
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

    if (golpesParam) {
        golpesGerados = [];

        for (var i = 0; i < quantidadeGolpesParam; i++) {            
            var golpe = {};

            if(surpresaParam)
                golpe.surpresa = golpes.surpresas[rand(0,18)];

            var tipoAlvo = rand(1,5);

            switch(tipoAlvo){
                case 1:
                    golpe.alvo = "Civil - "+golpes.alvos.civil[rand(1,6)];
                    break;
                case 2:
                    golpe.alvo = "Criminoso - "+golpes.alvos.criminoso[rand(1,6)];
                    break;
                case 3:
                    golpe.alvo = "Politico - "+golpes.alvos.politico[rand(1,6)];
                    break;
                case 4:
                    golpe.alvo = "Estranho - "+golpes.alvos.estranho[rand(1,6)];
                    break;
            }

            var tipoServico = rand(1,5);

            switch(tipoServico){
                case 1:
                    golpe.servico = "Ladinagem - "+golpes.servicos.ladinagem[rand(0,6)];
                    break;
                case 2:
                    golpe.servico = "Violência - "+golpes.servicos.violencia[rand(0,6)];
                    break;
                case 3:
                    golpe.servico = "Submundo - "+golpes.servicos.submundo[rand(0,6)];
                    break;
                case 4:
                    golpe.servico = "Sobrenatural - "+golpes.servicos.sobrenatural[rand(0,6)];
                    break;
            }

            golpe.pessoa = golpes.pessoas[rand(0,6)];
            golpe.faccao = golpes.faccoes[rand(0,36)];
            
            golpesGerados.push(golpe);

            html += "<div class='cabec'>"+
            "<i class='fas fa-dollar-sign'></i> "+
            "Golpe</div>"+
            "<div class='content'>"+
            "Alvo: "+golpe.alvo+"<br>"+
            "Servico: "+golpe.servico+"<br>"+
            "Ligado a: "+golpe.pessoa+"<br>"+
            "Ligado a: "+golpe.faccao+"<br>";

            html += surpresaParam ? "Surpresa: "+golpe.surpresa+"<br>" : "";
                        
            html += "</div>";
        }        
    }
    
    document.getElementById('gerados').innerHTML += html;  
}

function limpar(){
    document.getElementById('gerados').innerHTML = "";  
}

function rand(min, max){
    return Math.floor(Math.random() * (+max - +min)) + +min;  
}