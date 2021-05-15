function relatorio(){
    var valInvestido = document.getElementById('invest').value;
        if (valInvestido == ""){
            alert("o campo do valor investido não pode ser vazio")
        }else  if (valInvestido < 0){
                    alert("O valor investido não pode ser negativo")
                }else if (valInvestido != 0) {
                    var visualizaAnuncio = (valInvestido * 30); // 30 pessoas visualizam o anúncio original a cada R$ 1,00 investido.
                    if(visualizaAnuncio != 0) {
                        var clicaAnuncio = (parseInt)((visualizaAnuncio / 100) * 12); // A cada 100 pessoas q visualizam o anúncio 12 clicam nele.
                    }

                    if(clicaAnuncio != 0) {
                        var compartilha = (parseInt)((clicaAnuncio / 20) * 3); // A cada 20 pessoas que clicam no anuncio 3 compartilham nas redes sociais.
                    }

                    if(compartilha != 0){
                        var novaVisualizacao = (parseInt)(compartilha * 40); // Cada compartilhamento nas redes sociais gera 40 novas visualizações.
                    }

                    if (novaVisualizacao != 0) {
                        var compartilhaOriginal = (parseInt)(compartilha * 4); // O mesmo anúncio é compartilhado no máximo 4 vezes em sequência.
                    }
                    var total = (visualizaAnuncio + novaVisualizacao); //cálculo do retorno aproximado da quantidade máxima de pessoas que visualizarão o mesmo anúncio.
                    alert("Quantidade máxima de pessoas que visualizarão o mesmo anuncio : " + total + " pessoas"); // Aqui imprime na tela a quantidade de pessas que visualizarão o anúncio
            }else {
                alert("O valor investido não pode ser zero!!!");
        }	
}