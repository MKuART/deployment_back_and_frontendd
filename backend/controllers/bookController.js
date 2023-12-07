import { v4 as uuidv4 } from 'uuid';

const books = [
    { title: 'Book 1', author: 'Author 1', id: "7aabfffa-6b50-4958-954a-64d460dd0190" },
    { title: 'Book 2', author: 'Author 2', id: "b0514662-3d8a-4ddb-ae18-5753a0d506ec" },
    { title: 'Book 3', author: 'Author 3', id: "d57ec87e-f77c-4a22-92b0-177c7454b013" },
];



export const getError = (req, res) => {
    throw new Error("Express Standard Error Middleware")
}


export const getErrorEigeneMiddleware = (req, res, next) => {
    next( new Error("Eigene Error Middleware") );
}



export const getBooks = (req, res) => {
	
	
    if( process.env.NODE_ENV === "development") {
        const extendedBooks =  books.map( book =>{
            return {
                ...book, 
                
                debugInfo: `Abgerufen am: ${new Date().toLocaleString("de")}`
                
            }
        })

        return res.json(extendedBooks)
    }

    res.json(books);
}


export const postBooks = (req, res) => {

    const book = req.body;
    book.id = uuidv4(); // random ID generated 
    books.push(book);

    res.status(201).json({ added: true, data: book}); 
}