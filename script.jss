const quotes = [
    {
        quote: "Success is not final, failure is not fatal.",
        author: "Winston Churchill"
    },
    {
        quote: "The future depends on what you do today.",
        author: "Mahatma Gandhi"
    },
    {
        quote: "Dream big and dare to fail.",
        author: "Norman Vaughan"
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "Stay hungry, stay foolish.",
        author: "Steve Jobs"
    }
];

function generateQuote() {
    const random = Math.floor(Math.random() * quotes.length);

    document.getElementById("quote").innerText =
        `"${quotes[random].quote}"`;

    document.getElementById("author").innerText =
        `- ${quotes[random].author}`;
}

// Show a random quote when page loads
window.onload = generateQuote;