import axios from "axios";


const urlImg = "https://static-dev.shopcar.com.br/"

let urlRequisicao   = 'https://api-dev.shopcar.com.br/hotsites/'
let lojaId          = 1722

const api = axios.create({
    baseURL: urlRequisicao,    
    headers: {'Content-type' : 'application/x-www-form-urlencoded'}
});

const defaultColors = {
    primary: 'red',
    secundary: 'black'
}


function loaderImagens({src, width, quality}) {
    return `${urlImg}${src}`
}
function loaderImagensLocal({src, width, quality}) {
    return `${src}`
}


const formatadorValor = (valor) => {
    var v = valor.replace(/\D/g,'');
    v = (v*1).toFixed(2) + '';
    v = v.replace(".", ",");
    v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
    v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");
    return 'R$ ' + v;
}

export {defaultColors, loaderImagens, api, lojaId, urlRequisicao, loaderImagensLocal, formatadorValor};

