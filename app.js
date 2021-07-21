

//let urlText = `http://www.omdbapi.com/?t=${movieSearch}&type=movie&apikey=23daade9`;

//let urlPoster = `http://img.omdbapi.com/?i=${dataText.imdbID}&type=movie&apikey=23daade9`;



const testAPI = async () =>{
    
    const resultText = await fetch(`http://www.omdbapi.com/?t=harry&type=movie&apikey=23daade9`, {
        method: 'GET',
    });

    let resultJson;

    if(resultText.ok){
        resultJson = await resultText.json();
        console.log(resultJson);
        console.log(resultJson.Poster);
    }
    
}

testAPI();









