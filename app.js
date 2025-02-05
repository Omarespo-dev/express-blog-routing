// Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire con nuove funzionalità sulla base di quello che impareremo. RECAP DEI PASSAGGI
    // 1 Step creo file app.js
    
    // 2 Step faccio (npm init) su app.js dove mi va a creare un package.json cioe un oggetto con all'interno vari parametri 
    
    // 3 Step Do nello script di package.json lo start e il watch, in questo caso lo start ci stampa nel terminale con (npm run start), invece con watch ci fa la stessa cosa ma se andiamo a modificare qualcosa lo fara in live con (nmp run watch)
    
    // 4 Step Installiamo express con (npm install express) - dove a sua volta abbiamo vari codici GUARDARE SOTTO

    // 5 Step ora inseriamo come rotta / dove al suo interno ritorna (`Server del mio blog`)

    // 6 Step poi aggiungiamo la cartella img nella cartella public e la andiamo a definire come statica

    // 7 Step Creiamo una nuova rotta con /bacheca dove all'interno andra un array di oggetti con le varie proprieta e infine invio la risposta di tipo di json pero della variabile posts



// Importiamo express una volta che lo installiamo 
const express = require('express')

// L'istanza app è un oggetto che rappresenta il server express.
const app = express()

// Numero porta del server 
const port = 3000

// Rotta di tipo get con la home /
app.get('/', (req, res) => {

    // Invia una risposta al client
    res.send(`Server del mio blog`)
})


// DEFINIAMO L'USO DI UNA CARTELLA PUBLIC CON ALL' INTERNO DEI FILE STATICI 
app.use(express.static('public'));

// ROTTA bacheca POSTS
app.get('/bacheca', (req, res) => {
    
    // Faccio array di oggetti con titolo, contenuto, immagine e tag
    const posts = [
        {
            titolo: "Ricetta del Ciambellone soffice",
            contenuto: "Scopri come preparare un ciambellone soffice e gustoso, perfetto per la colazione o la merenda.",
            immagine: "/images/ciambellone.jpeg",
            tags: ["Dolci", "Colazione", "Forno"]
        },
        {
            titolo: "Cracker fatti in casa: croccanti e genuini",
            contenuto: "Preparare i cracker in casa è facile e veloce! Perfetti per uno snack leggero e salutare.",
            immagine: "/images/cracker_barbabietola.jpeg",
            tags: ["Snack", "Sano", "Forno"]
        },
        {
            titolo: "Pane fritto: una delizia da provare",
            contenuto: "Il pane fritto è una ricetta semplice e sfiziosa, perfetta per accompagnare salumi e formaggi.",
            immagine: "/images/pane_fritto_dolce.jpeg",
            tags: ["Pane", "Fritto", "Tradizione"]
        },
        {
            titolo: "Pasta fatta in casa: il segreto della nonna",
            contenuto: "Impara a fare la pasta fresca in casa con pochi ingredienti e tanta passione.",
            immagine: "/images/pasta_barbabietola.jpeg",
            tags: ["Pasta", "Tradizione", "Fatto in casa"]
        },
        {
            titolo: "Torta Paesana: un dolce della tradizione",
            contenuto: "La Torta Paesana è un dolce tipico lombardo a base di pane raffermo, latte e cacao.",
            immagine: "/images/torta_paesana.jpeg",
            tags: ["Dolci", "Tradizione", "Lombardia"]
        }
    ];
    
    // Invio la risposta al client con il formato json (posts)
    res.json(posts)
})


// Rimane in chiamata con la porta 
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})