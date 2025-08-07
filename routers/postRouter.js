//importo express
const express = require ('express');

//definisco un istanza della classe Router di express
const router = express.Router();


//importo il controller
const postController = require('../controllers/postController.js')
//definizione  della  rotta index
router.get('/', postController.index);

//definizione della rotta show
router.get('/:id', req, postController.show);

//definizione della rotta store
router.post('/', postController.store);

//definizione della rotta update
router.put('/:id', postController.update);

//definizione della rotta modify
router.patch('/:id', postController.modify);

//definizione della rotta destroy
router.delete('/:id', postController.destroy);

//esporto il router
module.exports = router;  