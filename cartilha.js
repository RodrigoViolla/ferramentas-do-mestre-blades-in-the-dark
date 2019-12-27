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

    cartilhaLine = document.createElement("TR");
    cartilhaData = document.createElement("TD");
    cartilhaLine.appendChild(cartilhaData);

    cartilhaLvl = document.createElement("div");
    cartilhaLvlDesc = document.createElement("SPAN");
    cartilhaLvlDesc.appendChild(document.createTextNode("Cartilha "));    
    cartilhaLvlDesc.verticalAlign = "top";
    cartilhaLvlDesc.style.fontSize = "15px";
    cartilhaLvlDesc.style.padding = "5px";
    cartilhaLvl.appendChild(cartilhaLvlDesc);
    cartilhaLvl.style.width = "40%";
    cartilhaLvl.style.float = "left";    
    cartilhaLvl.classList.add('cabec-ficha');
    
    cartilhaLvl.style.height = "20px";

    cartilhaImgs = document.createElement("DIV");
    cartilhaImgs.style.float = "left";
    cartilhaImgs.style.width = "60%";

    cartilhaImg = [];

    for(var i = 0; i < 8; i++){    
        cartilhaImg.push(document.createElement("IMG"));

        cartilhaImg[i].style.cursor = "pointer";

        if(i+1 > cartilha.cartilha)
            cartilhaImg[i].src = "img/estresse.png";        
        else
            cartilhaImg[i].src = "img/estresse-preenchido.png";        

        cartilhaImg[i].onclick = function(){
            if(cartilha.cartilha < 8)
                cartilha.cartilha += 1;
            else
                cartilha.cartilha = 0;

            redesenharCartilhas();
        }
        
        cartilhaImgs.appendChild(cartilhaImg[i]);
    }
    cartilhaData.appendChild(cartilhaLvl);
    cartilhaData.appendChild(cartilhaImgs);

    espertezaLine = document.createElement("TR");
    espertezaData = document.createElement("TD");
    espertezaLine.appendChild(espertezaData);

    espertezaLvl = document.createElement("div");
    espertezaLvlDesc = document.createElement("SPAN");
    espertezaLvlDesc.appendChild(document.createTextNode("Esperteza "));    
    espertezaLvlDesc.verticalAlign = "top";
    espertezaLvlDesc.style.fontSize = "15px";
    espertezaLvlDesc.style.padding = "5px";
    espertezaLvl.appendChild(espertezaLvlDesc);
    espertezaLvl.style.width = "40%";
    espertezaLvl.style.float = "left";    
    espertezaLvl.classList.add('cabec-ficha');
    
    espertezaLvl.style.height = "20px";

    espertezaImgs = document.createElement("DIV");
    espertezaImgs.style.float = "left";
    espertezaImgs.style.width = "60%";

    espertezaImg = [];

    for(var i = 0; i < 8; i++){    
        espertezaImg.push(document.createElement("IMG"));

        espertezaImg[i].style.cursor = "pointer";

        if(i+1 > cartilha.esperteza)
            espertezaImg[i].src = "img/estresse.png";        
        else
            espertezaImg[i].src = "img/estresse-preenchido.png";        

        espertezaImg[i].onclick = function(){
            if(cartilha.esperteza < 8)
                cartilha.esperteza += 1;
            else
                cartilha.esperteza = 0;

            redesenharCartilhas();
        }
        
        espertezaImgs.appendChild(espertezaImg[i]);
    }
    
    espertezaData.appendChild(espertezaLvl);
    espertezaData.appendChild(espertezaImgs);

    cacarLine = document.createElement("TR");
    cacarData = document.createElement("TD");
    cacarLine.appendChild(cacarData);

    cacarLvl = document.createElement("div");

    cacarImgs = document.createElement("DIV");
    cacarImgs.style.float = "left";

    cacarImg = [];

    for(var i = 0; i < 4; i++){    
        cacarImg.push(document.createElement("IMG"));

        cacarImg[i].style.cursor = "pointer";
        cacarImg[i].style.width = "20px";        

        if(i+1 > cartilha.cacar)
            cacarImg[i].src = "img/skill.png";        
        else
            cacarImg[i].src = "img/skill-preenchida.png";        

        cacarImg[i].onclick = function(){
            if(cartilha.cacar < 4)
                cartilha.cacar += 1;
            else
                cartilha.cacar = 0;

            redesenharCartilhas();
        }
        
        cacarImgs.appendChild(cacarImg[i]);        
    }

    cacarLvlDesc = document.createElement("SPAN");
    cacarLvlDesc.appendChild(document.createTextNode("Caçar"));    
    cacarLvlDesc.verticalAlign = "top";
    cacarLvlDesc.style.fontSize = "20px";
    cacarLvlDesc.style.padding = "5px";    
    cacarLvl.appendChild(cacarLvlDesc);
    cacarLvl.style.float = "left";     
    cacarLvl.style.height = "20px";

    cacarData.appendChild(cacarImgs);
    cacarData.appendChild(cacarLvl);    

    estudarLine = document.createElement("TR");
    estudarData = document.createElement("TD");
    estudarLine.appendChild(estudarData);

    estudarLvl = document.createElement("div");

    estudarImgs = document.createElement("DIV");
    estudarImgs.style.float = "left";

    estudarImg = [];

    for(var i = 0; i < 4; i++){    
        estudarImg.push(document.createElement("IMG"));

        estudarImg[i].style.cursor = "pointer";
        estudarImg[i].style.width = "20px";        

        if(i+1 > cartilha.estudar)
            estudarImg[i].src = "img/skill.png";        
        else
            estudarImg[i].src = "img/skill-preenchida.png";        

        estudarImg[i].onclick = function(){
            if(cartilha.estudar < 4)
                cartilha.estudar += 1;
            else
                cartilha.estudar = 0;

            redesenharCartilhas();
        }
        
        estudarImgs.appendChild(estudarImg[i]);        
    }

    estudarLvlDesc = document.createElement("SPAN");
    estudarLvlDesc.appendChild(document.createTextNode("Estudar"));    
    estudarLvlDesc.verticalAlign = "top";
    estudarLvlDesc.style.fontSize = "20px";
    estudarLvlDesc.style.padding = "5px";    
    estudarLvl.appendChild(estudarLvlDesc);
    estudarLvl.style.float = "left";        
    estudarLvl.style.height = "20px";

    estudarData.appendChild(estudarImgs);
    estudarData.appendChild(estudarLvl);

    sondarLine = document.createElement("TR");
    sondarData = document.createElement("TD");
    sondarLine.appendChild(sondarData);

    sondarLvl = document.createElement("div");

    sondarImgs = document.createElement("DIV");
    sondarImgs.style.float = "left";

    sondarImg = [];

    for(var i = 0; i < 4; i++){    
        sondarImg.push(document.createElement("IMG"));

        sondarImg[i].style.cursor = "pointer";
        sondarImg[i].style.width = "20px";        

        if(i+1 > cartilha.sondar)
            sondarImg[i].src = "img/skill.png";        
        else
            sondarImg[i].src = "img/skill-preenchida.png";        

        sondarImg[i].onclick = function(){
            if(cartilha.sondar < 4)
                cartilha.sondar += 1;
            else
                cartilha.sondar = 0;

            redesenharCartilhas();
        }
        
        sondarImgs.appendChild(sondarImg[i]);        
    }

    sondarLvlDesc = document.createElement("SPAN");
    sondarLvlDesc.appendChild(document.createTextNode("Sondar"));    
    sondarLvlDesc.verticalAlign = "top";
    sondarLvlDesc.style.fontSize = "20px";
    sondarLvlDesc.style.padding = "5px";    
    sondarLvl.appendChild(sondarLvlDesc);
    sondarLvl.style.float = "left"; 
    sondarLvl.style.height = "20px";

    sondarData.appendChild(sondarImgs);
    sondarData.appendChild(sondarLvl);

    adulterarLine = document.createElement("TR");
    adulterarData = document.createElement("TD");
    adulterarLine.appendChild(adulterarData);

    adulterarLvl = document.createElement("div");
    adulterarLvl.style.marginBottom = "10px";

    adulterarImgs = document.createElement("DIV");
    adulterarImgs.style.float = "left";

    adulterarImg = [];

    for(var i = 0; i < 4; i++){    
        adulterarImg.push(document.createElement("IMG"));

        adulterarImg[i].style.cursor = "pointer";
        adulterarImg[i].style.width = "20px";        

        if(i+1 > cartilha.adulterar)
            adulterarImg[i].src = "img/skill.png";        
        else
            adulterarImg[i].src = "img/skill-preenchida.png";        

        adulterarImg[i].onclick = function(){
            if(cartilha.adulterar < 4)
                cartilha.adulterar += 1;
            else
                cartilha.adulterar = 0;

            redesenharCartilhas();
        }
        
        adulterarImgs.appendChild(adulterarImg[i]);        
    }

    adulterarLvlDesc = document.createElement("SPAN");
    adulterarLvlDesc.appendChild(document.createTextNode("Adulterar"));    
    adulterarLvlDesc.verticalAlign = "top";
    adulterarLvlDesc.style.fontSize = "20px";
    adulterarLvlDesc.style.padding = "5px";    
    adulterarLvl.appendChild(adulterarLvlDesc);
    adulterarLvl.style.float = "left";        
    adulterarLvl.style.height = "20px";

    adulterarData.appendChild(adulterarImgs);
    adulterarData.appendChild(adulterarLvl);

    valentiaLine = document.createElement("TR");
    valentiaData = document.createElement("TD");
    valentiaLine.appendChild(valentiaData);

    valentiaLvl = document.createElement("div");
    valentiaLvlDesc = document.createElement("SPAN");
    valentiaLvlDesc.appendChild(document.createTextNode("valentia "));    
    valentiaLvlDesc.verticalAlign = "top";
    valentiaLvlDesc.style.fontSize = "15px";
    valentiaLvlDesc.style.padding = "5px";
    valentiaLvl.appendChild(valentiaLvlDesc);
    valentiaLvl.style.width = "40%";
    valentiaLvl.style.float = "left";    
    valentiaLvl.classList.add('cabec-ficha');
    
    valentiaLvl.style.height = "20px";

    valentiaImgs = document.createElement("DIV");
    valentiaImgs.style.float = "left";
    valentiaImgs.style.width = "60%";

    valentiaImg = [];

    for(var i = 0; i < 8; i++){    
        valentiaImg.push(document.createElement("IMG"));

        valentiaImg[i].style.cursor = "pointer";

        if(i+1 > cartilha.valentia)
            valentiaImg[i].src = "img/estresse.png";        
        else
            valentiaImg[i].src = "img/estresse-preenchido.png";        

        valentiaImg[i].onclick = function(){
            if(cartilha.valentia < 8)
                cartilha.valentia += 1;
            else
                cartilha.valentia = 0;

            redesenharCartilhas();
        }
        
        valentiaImgs.appendChild(valentiaImg[i]);
    }

    valentiaData.appendChild(valentiaLvl);
    valentiaData.appendChild(valentiaImgs);   
    
    manejarLine = document.createElement("TR");
    manejarData = document.createElement("TD");
    manejarLine.appendChild(manejarData);

    manejarLvl = document.createElement("div");

    manejarImgs = document.createElement("DIV");
    manejarImgs.style.float = "left";

    manejarImg = [];

    for(var i = 0; i < 4; i++){    
        manejarImg.push(document.createElement("IMG"));

        manejarImg[i].style.cursor = "pointer";
        manejarImg[i].style.width = "20px";        

        if(i+1 > cartilha.manejar)
            manejarImg[i].src = "img/skill.png";        
        else
            manejarImg[i].src = "img/skill-preenchida.png";        

        manejarImg[i].onclick = function(){
            if(cartilha.manejar < 4)
                cartilha.manejar += 1;
            else
                cartilha.manejar = 0;

            redesenharCartilhas();
        }
        
        manejarImgs.appendChild(manejarImg[i]);        
    }

    manejarLvlDesc = document.createElement("SPAN");
    manejarLvlDesc.appendChild(document.createTextNode("Manejar"));    
    manejarLvlDesc.verticalAlign = "top";
    manejarLvlDesc.style.fontSize = "20px";
    manejarLvlDesc.style.padding = "5px";    
    manejarLvl.appendChild(manejarLvlDesc);
    manejarLvl.style.float = "left";        
    manejarLvl.style.height = "20px";

    manejarData.appendChild(manejarImgs);
    manejarData.appendChild(manejarLvl);

    conviccaoLine = document.createElement("TR");
    conviccaoData = document.createElement("TD");
    conviccaoLine.appendChild(conviccaoData);

    conviccaoLvl = document.createElement("div");
    conviccaoLvlDesc = document.createElement("SPAN");
    conviccaoLvlDesc.appendChild(document.createTextNode("conviccao "));    
    conviccaoLvlDesc.verticalAlign = "top";
    conviccaoLvlDesc.style.fontSize = "15px";
    conviccaoLvlDesc.style.padding = "5px";
    conviccaoLvl.appendChild(conviccaoLvlDesc);
    conviccaoLvl.style.width = "40%";
    conviccaoLvl.style.float = "left";    
    conviccaoLvl.classList.add('cabec-ficha');
    
    conviccaoLvl.style.height = "20px";

    conviccaoImgs = document.createElement("DIV");
    conviccaoImgs.style.float = "left";
    conviccaoImgs.style.width = "60%";

    conviccaoImg = [];

    for(var i = 0; i < 8; i++){    
        conviccaoImg.push(document.createElement("IMG"));

        conviccaoImg[i].style.cursor = "pointer";

        if(i+1 > cartilha.conviccao)
            conviccaoImg[i].src = "img/estresse.png";        
        else
            conviccaoImg[i].src = "img/estresse-preenchido.png";        

        conviccaoImg[i].onclick = function(){
            if(cartilha.conviccao < 8)
                cartilha.conviccao += 1;
            else
                cartilha.conviccao = 0;

            redesenharCartilhas();
        }
        
        conviccaoImgs.appendChild(conviccaoImg[i]);
    }

    conviccaoData.appendChild(conviccaoLvl);
    conviccaoData.appendChild(conviccaoImgs);    

    convencerLine = document.createElement("TR");
    convencerData = document.createElement("TD");
    convencerLine.appendChild(convencerData);

    convencerLvl = document.createElement("div");

    convencerImgs = document.createElement("DIV");
    convencerImgs.style.float = "left";

    convencerImg = [];

    for(var i = 0; i < 4; i++){    
        convencerImg.push(document.createElement("IMG"));

        convencerImg[i].style.cursor = "pointer";
        convencerImg[i].style.width = "20px";        

        if(i+1 > cartilha.convencer)
            convencerImg[i].src = "img/skill.png";        
        else
            convencerImg[i].src = "img/skill-preenchida.png";        

        convencerImg[i].onclick = function(){
            if(cartilha.convencer < 4)
                cartilha.convencer += 1;
            else
                cartilha.convencer = 0;

            redesenharCartilhas();
        }
        
        convencerImgs.appendChild(convencerImg[i]);        
    }

    convencerLvlDesc = document.createElement("SPAN");
    convencerLvlDesc.appendChild(document.createTextNode("Convencer"));    
    convencerLvlDesc.verticalAlign = "top";
    convencerLvlDesc.style.fontSize = "20px";
    convencerLvlDesc.style.padding = "5px";    
    convencerLvl.appendChild(convencerLvlDesc);
    convencerLvl.style.float = "left";        
    convencerLvl.style.height = "20px";

    convencerData.appendChild(convencerImgs);
    convencerData.appendChild(convencerLvl);

    socializarLine = document.createElement("TR");
    socializarData = document.createElement("TD");
    socializarLine.appendChild(socializarData);

    socializarLvl = document.createElement("div");

    socializarImgs = document.createElement("DIV");
    socializarImgs.style.float = "left";

    socializarImg = [];

    for(var i = 0; i < 4; i++){    
        socializarImg.push(document.createElement("IMG"));

        socializarImg[i].style.cursor = "pointer";
        socializarImg[i].style.width = "20px";        

        if(i+1 > cartilha.socializar)
            socializarImg[i].src = "img/skill.png";        
        else
            socializarImg[i].src = "img/skill-preenchida.png";        

        socializarImg[i].onclick = function(){
            if(cartilha.socializar < 4)
                cartilha.socializar += 1;
            else
                cartilha.socializar = 0;

            redesenharCartilhas();
        }
        
        socializarImgs.appendChild(socializarImg[i]);        
    }

    socializarLvlDesc = document.createElement("SPAN");
    socializarLvlDesc.appendChild(document.createTextNode("Socializar"));    
    socializarLvlDesc.verticalAlign = "top";
    socializarLvlDesc.style.fontSize = "20px";
    socializarLvlDesc.style.padding = "5px";    
    socializarLvl.appendChild(socializarLvlDesc);
    socializarLvl.style.float = "left";        
    socializarLvl.style.height = "20px";

    socializarData.appendChild(socializarImgs);
    socializarData.appendChild(socializarLvl);

    sintonizarLine = document.createElement("TR");
    sintonizarData = document.createElement("TD");
    sintonizarLine.appendChild(sintonizarData);

    sintonizarLvl = document.createElement("div");

    sintonizarImgs = document.createElement("DIV");
    sintonizarImgs.style.float = "left";

    sintonizarImg = [];

    for(var i = 0; i < 4; i++){    
        sintonizarImg.push(document.createElement("IMG"));

        sintonizarImg[i].style.cursor = "pointer";
        sintonizarImg[i].style.width = "20px";        

        if(i+1 > cartilha.sintonizar)
            sintonizarImg[i].src = "img/skill.png";        
        else
            sintonizarImg[i].src = "img/skill-preenchida.png";        

        sintonizarImg[i].onclick = function(){
            if(cartilha.sintonizar < 4)
                cartilha.sintonizar += 1;
            else
                cartilha.sintonizar = 0;

            redesenharCartilhas();
        }
        
        sintonizarImgs.appendChild(sintonizarImg[i]);        
    }

    sintonizarLvlDesc = document.createElement("SPAN");
    sintonizarLvlDesc.appendChild(document.createTextNode("Sintonizar"));    
    sintonizarLvlDesc.verticalAlign = "top";
    sintonizarLvlDesc.style.fontSize = "20px";
    sintonizarLvlDesc.style.padding = "5px";    
    sintonizarLvl.appendChild(sintonizarLvlDesc);
    sintonizarLvl.style.float = "left";        
    sintonizarLvl.style.height = "20px";

    sintonizarData.appendChild(sintonizarImgs);
    sintonizarData.appendChild(sintonizarLvl);

    detonarLine = document.createElement("TR");
    detonarData = document.createElement("TD");
    detonarLine.appendChild(detonarData);

    detonarLvl = document.createElement("div");

    detonarImgs = document.createElement("DIV");
    detonarImgs.style.float = "left";

    detonarImg = [];

    for(var i = 0; i < 4; i++){    
        detonarImg.push(document.createElement("IMG"));

        detonarImg[i].style.cursor = "pointer";
        detonarImg[i].style.width = "20px";        

        if(i+1 > cartilha.detonar)
            detonarImg[i].src = "img/skill.png";        
        else
            detonarImg[i].src = "img/skill-preenchida.png";        

        detonarImg[i].onclick = function(){
            if(cartilha.detonar < 4)
                cartilha.detonar += 1;
            else
                cartilha.detonar = 0;

            redesenharCartilhas();
        }
        
        detonarImgs.appendChild(detonarImg[i]);        
    }

    detonarLvlDesc = document.createElement("SPAN");
    detonarLvlDesc.appendChild(document.createTextNode("Detonar"));    
    detonarLvlDesc.verticalAlign = "top";
    detonarLvlDesc.style.fontSize = "20px";
    detonarLvlDesc.style.padding = "5px";    
    detonarLvl.appendChild(detonarLvlDesc);
    detonarLvl.style.float = "left";        
    detonarLvl.style.height = "20px";
    detonarLvl.style.marginBottom = "10px";

    detonarData.appendChild(detonarImgs);
    detonarData.appendChild(detonarLvl);

    brigarLine = document.createElement("TR");
    brigarData = document.createElement("TD");
    brigarLine.appendChild(brigarData);

    brigarLvl = document.createElement("div");

    brigarImgs = document.createElement("DIV");
    brigarImgs.style.float = "left";

    brigarImg = [];

    for(var i = 0; i < 4; i++){    
        brigarImg.push(document.createElement("IMG"));

        brigarImg[i].style.cursor = "pointer";
        brigarImg[i].style.width = "20px";        

        if(i+1 > cartilha.brigar)
            brigarImg[i].src = "img/skill.png";        
        else
            brigarImg[i].src = "img/skill-preenchida.png";        

        brigarImg[i].onclick = function(){
            if(cartilha.brigar < 4)
                cartilha.brigar += 1;
            else
                cartilha.brigar = 0;

            redesenharCartilhas();
        }
        
        brigarImgs.appendChild(brigarImg[i]);        
    }

    brigarLvlDesc = document.createElement("SPAN");
    brigarLvlDesc.appendChild(document.createTextNode("Brigar"));    
    brigarLvlDesc.verticalAlign = "top";
    brigarLvlDesc.style.fontSize = "20px";
    brigarLvlDesc.style.padding = "5px";    
    brigarLvl.appendChild(brigarLvlDesc);
    brigarLvl.style.float = "left";        
    brigarLvl.style.height = "20px";

    brigarData.appendChild(brigarImgs);
    brigarData.appendChild(brigarLvl);

    esgueirarLine = document.createElement("TR");
    esgueirarData = document.createElement("TD");
    esgueirarLine.appendChild(esgueirarData);

    esgueirarLvl = document.createElement("div");

    esgueirarImgs = document.createElement("DIV");
    esgueirarImgs.style.float = "left";

    esgueirarImg = [];

    for(var i = 0; i < 4; i++){    
        esgueirarImg.push(document.createElement("IMG"));

        esgueirarImg[i].style.cursor = "pointer";
        esgueirarImg[i].style.width = "20px";        

        if(i+1 > cartilha.esgueirar)
            esgueirarImg[i].src = "img/skill.png";        
        else
            esgueirarImg[i].src = "img/skill-preenchida.png";        

        esgueirarImg[i].onclick = function(){
            if(cartilha.esgueirar < 4)
                cartilha.esgueirar += 1;
            else
                cartilha.esgueirar = 0;

            redesenharCartilhas();
        }
        
        esgueirarImgs.appendChild(esgueirarImg[i]);        
    }

    esgueirarLvlDesc = document.createElement("SPAN");
    esgueirarLvlDesc.appendChild(document.createTextNode("Esgueirar"));    
    esgueirarLvlDesc.verticalAlign = "top";
    esgueirarLvlDesc.style.fontSize = "20px";
    esgueirarLvlDesc.style.padding = "5px";    
    esgueirarLvl.appendChild(esgueirarLvlDesc);
    esgueirarLvl.style.float = "left";        
    esgueirarLvl.style.height = "20px";

    esgueirarData.appendChild(esgueirarImgs);
    esgueirarData.appendChild(esgueirarLvl);

    comandarLine = document.createElement("TR");
    comandarData = document.createElement("TD");
    comandarLine.appendChild(comandarData);

    comandarLvl = document.createElement("div");

    comandarImgs = document.createElement("DIV");
    comandarImgs.style.float = "left";

    comandarImg = [];

    for(var i = 0; i < 4; i++){    
        comandarImg.push(document.createElement("IMG"));

        comandarImg[i].style.cursor = "pointer";
        comandarImg[i].style.width = "20px";        

        if(i+1 > cartilha.comandar)
            comandarImg[i].src = "img/skill.png";        
        else
            comandarImg[i].src = "img/skill-preenchida.png";        

        comandarImg[i].onclick = function(){
            if(cartilha.comandar < 4)
                cartilha.comandar += 1;
            else
                cartilha.comandar = 0;

            redesenharCartilhas();
        }
        
        comandarImgs.appendChild(comandarImg[i]);        
    }

    comandarLvlDesc = document.createElement("SPAN");
    comandarLvlDesc.appendChild(document.createTextNode("Comandar"));    
    comandarLvlDesc.verticalAlign = "top";
    comandarLvlDesc.style.fontSize = "20px";
    comandarLvlDesc.style.padding = "5px";    
    comandarLvl.appendChild(comandarLvlDesc);
    comandarLvl.style.float = "left";        
    comandarLvl.style.height = "20px";

    comandarData.appendChild(comandarImgs);
    comandarData.appendChild(comandarLvl);

    skills = document.createElement("TABLE");
    skills.style.width = "25%"
    skills.style.float = "right";

    skills.appendChild(cartilhaLine);    
    skills.appendChild(espertezaLine);    
    skills.appendChild(cacarLine);    
    skills.appendChild(estudarLine);    
    skills.appendChild(sondarLine);  
    skills.appendChild(adulterarLine);  
    skills.appendChild(valentiaLine);    
    skills.appendChild(manejarLine); 
    skills.appendChild(esgueirarLine); 
    skills.appendChild(brigarLine); 
    skills.appendChild(detonarLine); 
    skills.appendChild(conviccaoLine);    
    skills.appendChild(sintonizarLine); 
    skills.appendChild(comandarLine); 
    skills.appendChild(socializarLine); 
    skills.appendChild(convencerLine); 

    cartilhaDiv.appendChild(header);
    cartilhaDiv.appendChild(body);
    cartilhaDiv.appendChild(skills);

    return cartilhaDiv;
}