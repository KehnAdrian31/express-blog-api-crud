const posts = require('../data/posts.js')

// index
const index = (req, res)=> {
  //recupero i parametri passati da query string
  const tag = req.query.tag;

  // definisco un array da restituire
  let filteredPosts =posts;

  // controlo il valore di title
  if(tag){
    filteredPosts = posts.filter(item => {
      return item.tags.map(tag => tag.toLowerCase()).includes(tag.toLowerCase()); 
    
  });
}
  res.send(filteredPosts)
}

//show
const show = (req, res) => {
  const id = parseInt(req.params.id);

  //recuper il post con l ' id passato come parametro
  const post = post.find(item => item.id === id);

  //verifico se post non esiste
  if(!post){
    return res.status(404).json({ error: " 404 Pagina non trovata", message: "il post non è presente"})
  }
  res.json(posts);
}

//store
const store = (req, res) => {
  // definisco l ' id del nuovo oggetto da inserire nell ' array
  const newId = posts[posts.length -1].id + 1;

  // recupero i dati del body della richiesta
  const { title, content, image , tags} = req.body;

  // creo il nuovo oggetto
  const newPost = {
    id: newId,
    title,
    content,
    image,
    tags
  }

  //pusho il nuovo oggetto nell' array
  posts.push(newPost);

  res.status(201).json(newPost);
}

// update
const update = (req, res) => {
  const id = parseInt(req.params.id)

  //recupero i dati passati tramite il body della richiesta
  const {title, content, image, tags} = req.body

  //recupero il post con l' id passato come parametro 
  const post = posts.find(item => item.id === id);

  //bonus: se non è stato trovato il post, restituire un messaggio di errore 404
  if(!post){
    return res.status(404).json({error: "404 Not found", message: "Post non trovato"})
  }

  post.title = title;
  post.content = content;
  post.image = image;
  post.tags = tags 

  req.send(post);
}

//modify
const modify = (req, res) => {
  const id = req.params.id
  res.send(`Modifica parziale del post con id ${id}`)
}

//destroy
const destroy = (req, res) => {
  const id = parseInt(req.params.id);

   //verifico se post non esiste
  if(!post){
    return res.status(404).json({ error: " 404 Pagina non trovata", message: "il post non è presente"})
  } 

  //eliminare il post dall' array
  posts.splice(posts.indexOf(post), 1)

  res.status(204);
}

 module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
 }