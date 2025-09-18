


let Aname = "One piece"

fetch(`https://api.jikan.moe/v4/anime?q=${Aname}`)  
    .then(response => response.json())
    .then(data => {
        console.log(data.data[3].rating);
        console.log(data.data[3].duration);
        
     })
        