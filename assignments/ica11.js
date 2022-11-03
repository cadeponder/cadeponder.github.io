
    let btn = document.querySelector('#js-new-quote');
    btn.addEventListener('click',getQuote);

async function getQuote() {
     console.log("Clicked button");
     var endpoint = 'https://dog.ceo/api/breeds/image/random';
     let dataFetch = await fetch(endpoint);
     let jsontext = await dataFetch.text();
     if (dataFetch) {
        // console.log(jsontext);
        let quote = JSON.parse(jsontext);
        console.log(quote.message);
        displayQuote(quote.message);
     }
     else {
        console.log('Error, coud not pull');
        alert('Error, coud not pull');
     }

async function displayQuote(quoteText){
    document.getElementById('dogs').src = quoteText;
}

}