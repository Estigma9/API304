


const getSearchText = () =>{
    const submit = document.getElementById('submit');

    submit.addEventListener('click', async (e)=>{
        e.preventDefault();

        let promise = new Promise((resolve, reject) =>{
            const movieSearchTitle = document.getElementById('movieSearchTitle').value ? document.getElementById('movieSearchTitle'): false; 

            if(movieSearchTitle){
                resolve();
            }
            else{
                console.log("reject");
                reject();
            }
        });

        promise.then(
            await (testAPI(movieSearchTitle.value)),
            error => console.log(error),          
        );
        
    }); 
};

getSearchText();



const testAPI = async (movieSearch) =>{

    //Petición de la información
    let urlText = `http://www.omdbapi.com/?t=${movieSearch}&type=movie&apikey=23daade9`;
    
    const resultText = await fetch(urlText, {
        method: 'GET',
    });

    const dataText = await resultText.json();

    //Petición del Poster
    let urlPoster = `http://img.omdbapi.com/?i=${dataText.imdbID}&type=movie&apikey=23daade9`;

    const resultPoster = await fetch(urlPoster, {
        method: 'GET',
    });

    const dataPoster = await resultPoster.url;

    //Llamardo a la función para pintar
    printMovies(dataText, dataPoster);
    
    return dataText 
};

const printMovies = async(dataText, dataPoster) =>{

    let cardMovie = document.getElementById('cardMovie');
    
    cardMovie.innerHTML = "";


    for(let key in dataText){
        console.log(key, dataText[key]);

    }



};











