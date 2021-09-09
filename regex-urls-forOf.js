let fwdUri = ['https://imagens-revista.vivadecora.com.br/uploads/2020/06/bolino-de-chuva-quality-refeições.jpg',
    "https://imagens-revista.vivadecora.com.br/uploads/2021/08/Ideias-de-cores-para-sala-de-estar-pequena-decorada-com-tapete-listrado-e-almofadas-coloridas-Foto-Home-Interior-Ideas.jpg", "https://imagens-revista.vivadecora.com.br/uploads/2021/08/Cores-neutras-para-decoração-de-sala-pequena-de-apartamento-Foto-HomisHome.jpg",
    "https://imagens-revista.vivadecora.com.br/uploads/2021/08/Cores-para-sala-de-jantar-pequena-decorada-com-cadeiras-amarelas-para-mesa-de-vidro-redonda-Foto-Yamagata-Arquitetura.jpg",
    "https://imagens-revista.vivadecora.com.br/uploads/2021/08/Cores-para-sala-de-estar-pequena-decorada-com-sofá-cinza-e-quadro-grande-Foto-Carlos-Piratininga.jpg",
    "https://imagens-revista.vivadecora.com.br/uploads/2021/08/Cores-para-sala-pequena-decorada-com-estilo-industrial-Foto-Mandril-Arquitetura.jpg"];




const regex = /^[^ãáàâéêíîóôõúç]+$/i;
let newFwdUri = []

for (let value of fwdUri){
    let matchUrl = value.split(/ +/).every(parte => regex.test(parte)); //  retorna true or false 
    
    if (matchUrl == true) {
        fwdUri = value.replace(/(\.jpg|\.png|\.jpeg)$/g, '.webp')
        newFwdUri.push(fwdUri)
        //console.log(newFwdUri)
    }else{
        fwdUri = value
        newFwdUri.push(fwdUri)
        //console.log(newFwdUri)
    }
} 

console.log(newFwdUri)
    




// urls sem acento convertidas para webp + urls sem converter
//console.log(urls);



