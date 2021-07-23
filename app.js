

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

    const moviePoster = document.createElement('img');
    moviePoster.className = 'card-img-top';
    moviePoster.src = dataPoster;
    moviePoster.alt = dataText.Title;

    const movieTitle = document.createElement('h4');
    movieTitle.className = 'card-title pt-4 pl-2';
    movieTitle.textContent = dataText.Title.toUpperCase();

    const movieLink = document.createElement('a');
    movieLink.className = 'btn btn-dark';
    movieLink.href = `https://www.imdb.com/title/${dataText.imdbID}/`;
    movieLink.textContent = 'IMDB';
    movieLink.target = '_blank';

    const movieUl = document.createElement('ul');
    movieUl.className = "list-group list-group-flush";

    let movieArray = [];
    
    for(let key in dataText){
        
        movieArray.push(key + ": " + dataText[key]);
    }
    console.log(movieArray);

    movieArray.map((value, index) =>{
        if([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].includes(index)){
            let dataLi = document.createElement('li');
            dataLi.className = 'list-group-item';
            dataLi.textContent = value;

            movieUl.appendChild(dataLi);            
        }
    });

    cardMovie.appendChild(moviePoster);
    cardMovie.appendChild(movieTitle);
    cardMovie.appendChild(movieLink);
    cardMovie.appendChild(movieUl);
};











