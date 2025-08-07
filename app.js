//importo express
const express = require('express');

//inizializzazione nella variabile app un' istanza di express
const app= express();

//definizione della porta
const port = 3000;

//importo il file di router
const postRouter = require('./routers/postRouter');

//permetto l' utilizzo degli asset statici
app.use(express.static('public'));

//utilizzo il file di router per definire le rotte dei posts
app.use('/posts', postsRouter);

// definizione della rotta base
app.get('/', (req, res) => {
  res.send("Benvenuti nel blog");
})

// diciamo al server di rimanere in ascolto
app.listen(port,() => {
  console.log(`Server del blog in ascolto sulla porta ${port}`);
})