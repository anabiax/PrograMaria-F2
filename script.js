function carregarPopup() {
//     let biografia = ["Lélia Gonzalez", "Sueli Carneiro", "Beatriz Nascimento",
//      "Marielle Franco", "Nilma Lino Gomes", "Grada Kilomba"];
//     alert(biografia[4]);

    let biografias = { 
        bio01: { 
            nome: "Lélia Gonzalez", 
            imagem: "assets/img/leliagonzalez.jpg", 
            citacao: "Nós negros estamos na lata de lixo da sociedade brasileira, pois assim determina a lógica da dominação. [...] Exatamente porque temos sido falados, infantilizados, que neste trabalho assumimos nossa própria fala. Ou seja, o lixo vai falar, e numa boa." },

        bio02: { 
            nome: "Sueli Carneiro", 
            imagem: "assets/img/suelicarneiro.webp", 
            citacao: "Nós, mulheres negras, somos a vanguarda do movimento feminista nesse país; nós, povo negro, somos a vanguarda das lutas sociais deste país porque somos os que sempre ficaram para trás, aquelas e aqueles para os quais nunca houve um projeto real e efetivo de integração social." },

        bio03: { 
            nome: "Beatriz Nascimento",
            imagem: "assets/img/beatriznascimento.jpeg",
            citacao: "Eu sou Atlântica." },

        bio04: { 
            nome: "Marielle Franco",
            imagem: "assets/img/marielle5.webp",
            citacao: "O mandato de uma mulher negra, favelada, periférica, precisa estar pautado junto aos movimentos sociais, junto à sociedade civil organizada, junto a quem está fazendo para nos fortalecer naquele lugar onde a gente objetivamente não se reconhece, não se encontra, não se vê." },

        bio05: {
            nome: "Nilma Lino Gomes",
            imagem: "assets/img/NilmaGomes.jpg",
            citacao: "Tenho como referência a luta dos meus ancestrais." },

        bio06: { 
            nome: "Grada Kilomba",
            imagem: "assets/img/gradaK.jpg",
            citacao: "A língua, por mais poética que possa ser, tem também uma dimensão política de criar, fixar e perpetuar relações de poder e de violência, pois cada palavra que usamos define o lugar de uma identidade." },
    }; 

    var content = document.getElementById("content");

    // for vai percorrer todas as infos e pegar aquilo que determinei ser importante
    for (let bio in biografias) {
        content.innerHTML += 

        '<div class="card">' + 
        '<img src="' + 
        biografias[bio].imagem + '"/>' + 
        '<details>' +
        '<summary>' + 
        biografias[bio].nome + 
        '</summary>' + 
        '<q>' + 
        biografias[bio].citacao + 
        '</q>' + 
        '</details>' + '</div>';
    }
}

carregarPopup();