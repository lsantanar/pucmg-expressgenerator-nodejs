var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* Exibe o body recebido via requisição em JSON */
router.post('/', (req, res) => {
  res.status("Retorno do JSON").json('/form');
})

/* Cada objeto da requisição será armazenado em um array */
let users = { items: [] };

router.post('/', (req, res) => {
  users.items.push(req.params.name),
  users.items.push(req.params.email),
  users.items.push(req.params.endereco)
  res.send('Dados armazenados!');
});

/* Remoção do e-mail de usuário adicionado */
router.delete('/:email', (req,res) => {
  users.items.delete(req.params.email)
    if (!err) {
      res.status(200).send({message: 'Email removido!'})
    } else {
      res.status(500).send({message: err.message})
    }
});

/* Retorno de itens adicionados */
router.get('/', (req, res) => {
  users.items.get(req.params.name),
  users.items.get(req.params.email),
  users.items.getr(req.params.endereco)
  res.send('Dados armazenados:');
});

module.exports = router;