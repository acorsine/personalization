const proxy = [
    {    
    context: '/api',
    target: 'http://srvdwbnsbr001.bs.br.bsch:9080/',
    pathRewrite: {'^/api': ''} 
    }
];
module.exports = proxy;
