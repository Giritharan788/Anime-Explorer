
function getData(){
  let Aname = document.getElementById('inp').value;
  // let dis = document.querySelector('.main')
  let dis = document.querySelector('.posters')

  fetch(`https://api.jikan.moe/v4/anime?q=${Aname}`)  
    .then(response => response.json())
    .then(data => {
        dis.innerHTML = ''
      
      if(data.data.length === 0 || Aname === ''){
      let err = document.createElement('p');
      err.innerText = `No results found for "${Aname}"`;
      err.style.color = 'white'
      dis.append(err);
      return;
    }


        for(let i = 0;i<data.data.length;i++){
          let newImg = document.createElement('div')
          let newPost = document.createElement('img')
          let name = document.createElement('p')
          let rating = document.createElement('p')
          let duration = document.createElement('p')
          
          name.innerHTML = `Title : ${data.data[i].title}`
          rating.innerHTML = `Rating : ${data.data[i].rating}`
          duration.innerHTML = `Duration : ${data.data[i].duration}`
          newPost.src = data.data[i].images.jpg.image_url
          newPost.alt = "Poster"
          newImg.append(newPost)
          newImg.append(name) 
          newImg.append(rating)
          newImg.append(duration)
          dis.append(newImg)
        }
      })
    .catch(error => {
      let err = document.createElement('p')
      err.innerHTML = `Data not found : ${error}`
      dis.append(err)
    });
}


    
    
