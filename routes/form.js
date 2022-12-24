// Implementação da rota /form, que será responsável por exibir o formulário
var express = require('express');
var router = express.Router();

//Método que exibe o formulário pro usuário
router.get('/', (req, res) => {
    res.render('form', {
        title: 'Formulário',
        name: req.params.name,
        email: req.params.email,
        endereco: req.params.endereco
    });
});  

//Exporta o método, para que possamos utilizar em outro lugar
module.exports = router;