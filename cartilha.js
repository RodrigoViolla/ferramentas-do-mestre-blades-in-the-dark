function renderizarCartilha(cartilha){
    cartilhaDiv = document.createElement("DIV");
    cartilhaDiv.style.width = "100%";
    
    header = document.createElement("INPUT")
    header.value = cartilha.tipo;
    header.classList.add("tipo-cartilha");
    header.name = "header";

    bando = document.createElement("div");
    inputBando = document.createElement("INPUT");
    inputBando.value = cartilha.bando;
    inputBando.classList.add("campo-ficha");
    bando.appendChild(inputBando);
    bando.appendChild(document.createElement("HR"));
    bandoDesc = document.createElement("SPAN");
    bandoDesc.appendChild(document.createTextNode("Bando"));
    bandoDesc.style.fontSize = "10px";    
    bando.appendChild(bandoDesc);
    bando.style.width = "100%";
    bando.style.float = "left";
    bando.style.marginBottom = "20px";

    nome = document.createElement("div");
    inputNome = document.createElement("INPUT");
    inputNome.value = cartilha.nome;
    inputNome.classList.add("campo-ficha");
    nome.appendChild(inputNome);
    nome.appendChild(document.createElement("HR"));
    nomeDesc = document.createElement("SPAN");
    nomeDesc.appendChild(document.createTextNode("Nome"));
    nomeDesc.style.fontSize = "10px";    
    nome.appendChild(nomeDesc);
    nome.style.width = "60%";
    nome.style.float = "left";
    nome.style.marginBottom = "20px";

    alcunha = document.createElement("div");
    alcunhaInput = document.createElement("INPUT");
    alcunhaInput.value = cartilha.alcunha;
    alcunhaInput.classList.add("campo-ficha");
    alcunha.appendChild(alcunhaInput);
    alcunha.appendChild(document.createElement("HR"));
    alcunhaDesc = document.createElement("SPAN");
    alcunhaDesc.appendChild(document.createTextNode("Alcunha"));
    alcunhaDesc.style.fontSize = "10px";    
    alcunha.appendChild(alcunhaDesc);
    alcunha.style.width = "30%";
    alcunha.style.float = "right";
    alcunha.style.marginBottom = "20px";

    aparencia = document.createElement("div");
    aparenciaInput = document.createElement("INPUT");
    aparenciaInput.value = cartilha.aparencia;
    aparenciaInput.classList.add("campo-ficha");
    aparencia.appendChild(aparenciaInput);
    aparencia.appendChild(document.createElement("HR"));
    aparenciaDesc = document.createElement("SPAN");
    aparenciaDesc.appendChild(document.createTextNode("Aparência"));
    aparenciaDesc.style.fontSize = "10px";    
    aparencia.appendChild(aparenciaDesc);
    aparencia.style.width = "100%";
    aparencia.style.float = "left";
    aparencia.style.marginBottom = "20px";
    
    raizes = document.createElement("div");
    inputRaizes = document.createElement("INPUT");
    inputRaizes.value = cartilha.raizes;
    inputRaizes.classList.add("campo-ficha");
    raizes.appendChild(inputRaizes);
    raizes.appendChild(document.createElement("HR"));
    raizesDesc = document.createElement("SPAN");
    raizesDesc.appendChild(document.createTextNode("Raizes"));
    raizesDesc.style.fontSize = "10px";    
    raizes.appendChild(raizesDesc);
    raizes.style.width = "45%";
    raizes.style.float = "left";
    raizes.style.marginBottom = "20px";

    historico = document.createElement("div");
    inputHistorico = document.createElement("INPUT");
    inputHistorico.value = cartilha.historico;
    inputHistorico.classList.add("campo-ficha");
    historico.appendChild(inputHistorico);
    historico.appendChild(document.createElement("HR"));
    historicoDesc = document.createElement("SPAN");
    historicoDesc.appendChild(document.createTextNode("Histórico"));
    historicoDesc.style.fontSize = "10px";    
    historico.appendChild(historicoDesc);
    historico.style.width = "45%";
    historico.style.float = "right";
    historico.style.marginBottom = "20px";

    vicio = document.createElement("div");
    inputVicio = document.createElement("INPUT");
    inputVicio.value = cartilha.vicio;
    inputVicio.classList.add("campo-ficha");
    vicio.appendChild(inputVicio);
    vicio.appendChild(document.createElement("HR"));
    vicioDesc = document.createElement("SPAN");
    vicioDesc.appendChild(document.createTextNode("Vício/Fornecedor"));
    vicioDesc.style.fontSize = "10px";    
    vicio.appendChild(vicioDesc);
    vicio.style.width = "100%";
    vicio.style.float = "right";
    vicio.style.marginBottom = "20px";

    estresse = document.createElement("div");
    estresseDesc = document.createElement("SPAN");
    estresseDesc.appendChild(document.createTextNode("Estresse "));    
    estresseDesc.verticalAlign = "top";
    estresseDesc.style.fontSize = "15px";
    estresseDesc.style.padding = "5px";
    estresse.appendChild(estresseDesc);
    estresse.style.width = "20%";
    estresse.style.float = "left";    
    estresse.classList.add('cabec-ficha');
    estresse.style.marginBottom = "20px";
    estresse.style.height = "20px";

    estresseImgs = document.createElement("DIV");
    estresseImgs.style.float = "left";
    estresseImgs.style.width = "30%";

    estresseImg = [];

    for(var i = 0; i < 9; i++){    
        estresseImg.push(document.createElement("IMG"));

        estresseImg[i].style.cursor = "pointer";

        if(i+1 > cartilha.estresse)
            estresseImg[i].src = "img/estresse.png";        
        else
            estresseImg[i].src = "img/estresse-preenchido.png";        

        estresseImg[i].onclick = function(){
            if(cartilha.estresse < 9)
                cartilha.estresse += 1;
            else
                cartilha.estresse = 0;

            redesenharCartilhas();
        }
        
        estresseImgs.appendChild(estresseImg[i]);
    }

    console.log(estresseImg);
    trauma = document.createElement("div");
    traumaDesc = document.createElement("SPAN");
    traumaDesc.appendChild(document.createTextNode("Trauma "));    
    traumaDesc.verticalAlign = "top";
    traumaDesc.style.fontSize = "15px";
    traumaDesc.style.padding = "5px";
    trauma.appendChild(traumaDesc);
    trauma.style.width = "20%";
    trauma.style.float = "left";    
    trauma.classList.add('cabec-ficha');
    trauma.style.marginBottom = "20px";
    trauma.style.height = "20px";

    traumaImgs = document.createElement("DIV");
    traumaImgs.style.float = "left";
    traumaImgs.style.width = "30%";
    traumaImg = [];

    for(var i = 0; i < 4; i++){
        traumaImg.push(document.createElement("IMG"));    

        traumaImg[i].style.cursor = "pointer";

        if(i+1 > cartilha.trauma)
            traumaImg[i].src = "img/estresse.png";        
        else
            traumaImg[i].src = "img/estresse-preenchido.png";  
            
        traumaImg[i].onclick = function(){
            if(cartilha.trauma < 4)
                cartilha.trauma += 1;
            else
                cartilha.trauma = 0;

            redesenharCartilhas();
        }
            
        traumaImgs.appendChild(traumaImg[i]);
    }

    dano = document.createElement("div");
    danoDesc = document.createElement("SPAN");
    danoDesc.appendChild(document.createTextNode("Dano"));
    danoDesc.style.fontSize = "15px";    
    danoDesc.style.width = "100%";
    danoDesc.style.float = "left";
    danoDesc.classList.add('cabec-ficha');    

    danoTbl = document.createElement("TABLE");    
    danoTbl.style.width = "100%";
    danoTbl.style.textAlign = "center";

    danoTblLine1 = document.createElement("TR");
    danoTblLine1.style.borderBottom = "1px solid black";
    
    danoTblLine1Col1 = document.createElement("TD");
    danoTblLine1Col1.style.background = "#d0d0d0";
    danoTblLine1Col1.style.width = "20px";
    danoTblLine1.appendChild(danoTblLine1Col1);
    danoTblLine1Col1.appendChild(document.createTextNode("3"));

    danoTblLine1Col2 = document.createElement("TD");
    danoTblLine1Col2.colSpan = "2";
    danoTblLine1.appendChild(danoTblLine1Col2);
    inputDano3 = document.createElement("INPUT");
    inputDano3.value = cartilha.dano3;    
    inputDano3.classList.add("campo-ficha");
    danoTblLine1Col2.appendChild(inputDano3);

    danoTblLine1Col3 = document.createElement("TD");
    danoTblLine1Col3.style.background = "#d0d0d0";
    danoTblLine1.appendChild(danoTblLine1Col3);
    danoTblLine1Col3.appendChild(document.createTextNode("Prec. Ajuda"));

    danoTblLine2 = document.createElement("TR");
    danoTblLine2.style.borderBottom = "1px solid black";

    danoTblLine2Col1 = document.createElement("TD");
    danoTblLine2Col1.style.background = "#d0d0d0";
    danoTblLine2Col1.style.width = "20px";
    danoTblLine2.appendChild(danoTblLine2Col1);
    danoTblLine2Col1.appendChild(document.createTextNode("2"));

    danoTblLine2Col2 = document.createElement("TD");
    danoTblLine2Col2.style.borderRight = "1px solid black";
    danoTblLine2.appendChild(danoTblLine2Col2);
    inputDano21 = document.createElement("INPUT");
    inputDano21.value = cartilha.dano21;
    inputDano21.classList.add("campo-ficha");
    danoTblLine2Col2.appendChild(inputDano21);

    danoTblLine2Col3 = document.createElement("TD");
    danoTblLine2.appendChild(danoTblLine2Col3);
    inputDano22 = document.createElement("INPUT");
    inputDano22.value = cartilha.dano22;
    inputDano22.classList.add("campo-ficha");
    danoTblLine2Col3.appendChild(inputDano22);

    danoTblLine2Col4 = document.createElement("TD");
    danoTblLine2Col4.style.background = "#d0d0d0";
    danoTblLine2.appendChild(danoTblLine2Col4);
    danoTblLine2Col4.appendChild(document.createTextNode("-1D"));

    danoTblLine3 = document.createElement("TR");
    danoTblLine3.style.borderBottom = "1px solid black";

    danoTblLine3Col1 = document.createElement("TD");
    danoTblLine3Col1.style.background = "#d0d0d0";
    danoTblLine3Col1.style.width = "20px";
    danoTblLine3.appendChild(danoTblLine3Col1);
    danoTblLine3Col1.appendChild(document.createTextNode("1"));

    danoTblLine3Col2 = document.createElement("TD");
    danoTblLine3Col2.style.borderRight = "1px solid black";
    danoTblLine3.appendChild(danoTblLine3Col2);
    inputDano11 = document.createElement("INPUT");
    inputDano11.value = cartilha.dano11;
    inputDano11.classList.add("campo-ficha");
    danoTblLine3Col2.appendChild(inputDano11);

    danoTblLine3Col3 = document.createElement("TD");
    danoTblLine3.appendChild(danoTblLine3Col3);
    inputDano12 = document.createElement("INPUT");
    inputDano12.value = cartilha.dano12;
    inputDano12.classList.add("campo-ficha");
    danoTblLine3Col3.appendChild(inputDano12);

    danoTblLine3Col4 = document.createElement("TD");
    danoTblLine3Col4.style.background = "#d0d0d0";
    danoTblLine3.appendChild(danoTblLine3Col4);
    danoTblLine3Col4.appendChild(document.createTextNode("Efeito Red."));

    danoTbl.appendChild(danoTblLine1);
    danoTbl.appendChild(danoTblLine2);
    danoTbl.appendChild(danoTblLine3);

    dano.appendChild(danoDesc);
    dano.appendChild(danoTbl);

    dano.style.width = "100%";
    dano.style.float = "right"; 

    inputNome.onchange = function(){
        cartilha.nome = inputNome.value;
    }

    inputHistorico.onchange = function(){
        cartilha.historico = inputHistorico.value;
    }

    inputRaizes.onchange = function(){
        cartilha.raizes = inputRaizes.value;
    }

    inputVicio.onchange = function(){
        cartilha.vicio = inputVicio.value;
    }

    inputBando.onchange = function(){
        cartilha.bando = inputBando.value;
    }

    inputDano11.onchange = function(){
        cartilha.dano11 = inputDano11.value;
    }

    inputDano12.onchange = function(){
        cartilha.dano12 = inputDano12.value;
    }

    inputDano21.onchange = function(){
        cartilha.dano21 = inputDano21.value;
    }

    inputDano22.onchange = function(){
        cartilha.dano22 = inputDano22.value;
    }

    inputDano3.onchange = function(){
        cartilha.dano3 = inputDano3.value;
    }

    alcunhaInput.onchange = function(){
        cartilha.alcunha = alcunhaInput.value;
    }

    aparenciaInput.onchange = function(){
        cartilha.aparencia = aparenciaInput.value;
    }

    header.onchange = function(){
        cartilha.tipo = header.value;
    }

    body = document.createElement("DIV");
    body.appendChild(bando);
    body.appendChild(nome);
    body.appendChild(alcunha);
    body.appendChild(aparencia);
    body.appendChild(raizes);
    body.appendChild(historico);
    body.appendChild(vicio);
    body.appendChild(estresse);
    body.appendChild(estresseImgs);
    body.appendChild(trauma);
    body.appendChild(traumaImgs);
    body.appendChild(dano);
    body.classList.add("content");

    body.style.width = "70%";
    body.style.float = "left";

    skills = document.createElement("DIV");
    skills.style.width = "25%"
    skills.style.float = "right";

    cartilhaDiv.appendChild(header);
    cartilhaDiv.appendChild(body);
    cartilhaDiv.appendChild(skills);

    return cartilhaDiv;
}