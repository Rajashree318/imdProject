let search = document.getElementById('searchText');
search.addEventListener('keypress', e => {
    let searchText = e.target.value;
    getMovies(searchText);//calling getmovies function as callback function
})
function getMovies(searchText) {
    let api = `http://www.omdbapi.com/?s=${searchText}&apikey=551adbd9`;
    window.fetch(api).then(data =>{
        //next step is converting  response data into json object ..
        //how to convert reponse object into json object
        let jsondata=data.json();
        jsondata.then(movie =>{
            //if resolve  executing then block
         let movies=movie.Search;
         let output='';
         for(let imdbMovie of movies){
             output +=`
             <h1>${imdbMovie.Title}</h1>
             <p>${imdbMovie.Year}</p>
             <p>${imdbMovie.imdbID}</p>
             <p>${imdbMovie.Type}</p>
             <img src="${imdbMovie.Poster}">`;
             document.getElementById('template').innerHTML=output;

         }
        }).catch(err=>console.log(err));//if rejects executing catch block
    }).catch(err=>console.log(err));//fetching data from omdb server..
}
