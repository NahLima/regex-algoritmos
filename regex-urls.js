let urls = [ 'https://imagens-revista.vivadecora.com.br/uploads/2020/06/bolino-de-chuva-quality-refeições.jpg', 
"https://imagens-revista.vivadecora.com.br/uploads/2021/08/Ideias-de-cores-para-sala-de-estar-pequena-decorada-com-tapete-listrado-e-almofadas-coloridas-Foto-Home-Interior-Ideas.jpg", "https://imagens-revista.vivadecora.com.br/uploads/2021/08/Cores-neutras-para-decoração-de-sala-pequena-de-apartamento-Foto-HomisHome.jpg", 
"https://imagens-revista.vivadecora.com.br/uploads/2021/08/Cores-para-sala-de-jantar-pequena-decorada-com-cadeiras-amarelas-para-mesa-de-vidro-redonda-Foto-Yamagata-Arquitetura.jpg"];

const regex = /^[^ãáàâéêíîóôõúç]+$/i;
//let valido = false
//let urlsOk = []
urls.forEach(pathImagem => {
    let matchUrl = pathImagem.split(/ +/).every(parte => regex.test(parte)); //  retorna true or false 
    //console.log(matchUrl)  
    //console.log(`${pathImagem} = ${matchUrl ? 'válido': 'inválido'}`);

    if ( matchUrl == true){
        novaUrl = pathImagem.replace(/(\.jpg|\.png|\.jpeg)$/g,'.webp')
        console.log(novaUrl)
    }
});








// retorna
// https://imagens-revista.vivadecora.com.br/uploads/2020/06/bolino-de-chuva-quality-refeições.jpg = inválido
// https://imagens-revista.vivadecora.com.br/uploads/2021/08/Ideias-de-cores-para-sala-de-estar-pequena-decorada-com-tapete-listrado-e-almofadas-coloridas-Foto-Home-Interior-Ideas.jpg = válido
// https://imagens-revista.vivadecora.com.br/uploads/2021/08/Cores-neutras-para-decoração-de-sala-pequena-de-apartamento-Foto-HomisHome.jpg = inválido
