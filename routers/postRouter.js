//importo express
const express = require ('express');

//definisco un istanza della classe Router di express
const router = express.Router();

//definizione  della  rotta index
router.get('/', (req, res) => {
  res.send ('Elenco dei posts');
});

//definizione della rotta show
router.get('/:id', (req, res) => {
   const id = req.params.id;
  res.send(`Pagina di dettaglio del post con id ${id}`);
});

//definizione della rotta store
router.post('/', (req, res) => {
  res.send('Inserimento di un nuovo post');
});

//definizione della rotta update
router.put('/:id', (req, res) => {
   const id = req.params.id;
  res.send(`Modifica totale del post con id ${id}`);
});

//definizione della rotta modify
router.patch('/:id', (req, res) => {
   const id = req.params.id;
  res.send(`Modifica parziale del post con id ${id}`);
});

//definizione della rotta destroy
router.delete('/:id', (req, res) => {
   const id = req.params.id;
   res.send(`Operazione di cancellazione con id ${id}`);
});

//esporto il router
module.exports = router;  