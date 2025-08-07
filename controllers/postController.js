// index
const index = (req, res)=> {
  res.send(`Invio dell' elenco dei post`)
}

//show
const show = (req, res) => {
  const id = req.params.id;
  res.send(`Dettaglio del post con id ${id}`);
}

//store
const store = (req, res) => {
  res.send(`Creazione di un nuovo post`);
}

// update
const update = (req, res) => {
  const id = req.params.id
  res.send(`Modifica totale del post con id ${id}`);
}

//modify
const modify = (req, res) => {
  const id = req.params.id
  res.send(`Modifixa parziale del post con id ${id}`)
}

//destroy
const destroy = (req, res) => {
  const id = req.params.id
  res.send(`Cancellazione del post con id ${id}`)
}

 module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
 }