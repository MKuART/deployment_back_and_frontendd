import express from "express"
import { getBooks, getError, getErrorEigeneMiddleware, postBooks } from "./controllers/bookController.js";
import { getRoot, notFound } from "./controllers/generalController.js";
import cors from "cors";
import "dotenv/config";

const PORT = 4000;
const app = express();

// da wir JSON vom Client erwarten, müssen wir das zuvor parsen
// damit es in request.body verfügbar ist
// ähnlich wie JSON.parse(jsonString)
app.use( express.json() );

// In der Entwicklung könntest du CORS für alle Quellen zulassen.
// In der Produktion könntest du CORS auf bestimmte vertrauenswürdige Domänen beschränken.
if( process.env.NODE_ENV === "development" ) {
    app.use( cors() );
} else {
    // TODO: REnder URL eintragen
    app.use( cors({ origin: "http://localhost:4000/books"}) )
}

app.get("/", getRoot);

// getBooks wird als Controller ausgelagert
// Name "getBooks", da es sich um eine GET Methode handelt
app.get("/books", getBooks);
app.post("/books", postBooks);

app.get("/error", getError)
app.get("/error-eigene-middleware", getErrorEigeneMiddleware)

app.use("*", notFound)



app.use( (err, req, res, next) => {

    if(process.env.NODE_ENV === "production") {
       
        res.status(500).send("Ein Fehler ist aufgetreten")
    } else {
       
         res.status(500).send(err.message);
         console.error(err)
    }
} );


app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
})
