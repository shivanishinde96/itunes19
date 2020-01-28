let button=document.querySelector("#submit")
let search=document.querySelector("#search")
let output=document.querySelector("#output")

button.addEventListener('click',(e)=>{
    getDataFromItunes()
})

function getDataFromItunes(){
    let url="https://itunes.apple.com/search?term="+search.value
    fetch (url)

    .then(data=>data.json())
    .then(json=>{
        console.log(json)

        let finalresult=''

        json.results.forEach(song=>{
            finalresult+=`
            <div class="row">
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">${song.artistName}</span>
          <p>${song.collectionName}</p>
          <p>${song.trackName}</p>
        </div>
        <div class="card-action">
          <a href="${song.previewUrl}">Link to the song</a>
          <!--<a href="#">This is a link</a>-->
        </div>
      </div>
    </div>
  </div>
            ` 
        })
          output.innerHTML=finalresult  
    })

    .catch(error=>{console.log(error)})

}