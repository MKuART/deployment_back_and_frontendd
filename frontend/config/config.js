let backendUrl;

if(process.env.NODE_ENV === "production") {
    // Benutze diese URL, um mit dem Backend zu kommunizueren,
    // wenn wir auf render sind
    backendUrl = "https://book-app-deployment-test.onrender.com";
} else {
    // Benutze diese URL, um mit dem Backend zu kommunizieren,
    // wenn wir lokal am Projekt arbeiten
    backendUrl = "http://localhost:4000";
}

export default backendUrl;


console.log(import.meta.env.VITE_TEST, "(aus import.meta.env.VITE_TEST)")