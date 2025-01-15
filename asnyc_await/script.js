const quotes =[
    {content:"the only way to do great work is to love what you do.",author:"Steve Jobs"},
    {content:"Sucess is not final,failue is not fatal: It is the courage to continue that counts. ",
        author:"Winston Churchill"},
    {content:"Believe you can and you're halfway there.",author:"Theodero Roosevelt"},
    {content:"Act as if what you do makes a difference.It does.",author:"William James"},
    {content:"Keep your face always toward  the sunshine-and shadows will fall behind you.",author:"Walt Whitman"},
    {content:"What you get by achieving your goals is not as important as What you become by achieving your goals.",
        author:"Zig Ziglar"},
    {content:"You are never too old to set another goal or to dream a new dream. ",author:"C.S.Lewis"}
];

async function fetchQuote() {
    const quoteText = document.querySelector('.quote-text');
    const quoteAuthor = document.querySelector('.quote-author')

    quoteText.textContent = 'Loading a Quote ...'
    quoteAuthor.textContent = '';

    try{
        const quote = await new Promise((resolve) => {
            setTimeout(() => {
                const randomIndex = Math.floor(Math.random() * quotes.length);
                resolve(quotes[randomIndex]);
            },1000)
        })
        quoteText.textContent = quote.content;
        quoteAuthor.textContent = quote.author;

    } catch(error){
        console.error(error);
        //quoteText.textContent = 'An error occured while fetching the quote.';
        quoteText.innerHTML = '<span style="color:red;">An error occured while fetching the quote.</span>';
    }
}

document.getElementById('fetchQuoteButton').addEventListener('click',fetchQuote);