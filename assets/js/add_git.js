'use strict'

const makeRepoCard = ( { html_url, name } ) =>{
  /* create a card */
  let section = document.createElement('section');
  
  section.classList.add('col-6', 'col-12-narrower', 'feature');

  section.insertAdjacentHTML( 'afterbegin', `<header><h2>${name}</h2></header><ul class="actions"><li><a href=${html_url} target="_blank" class="button">View on Github</a></li></ul></section>`)

  return section;
}

const makeRepoList = ( apiURL) =>{

  let parent = document.querySelector('div.row.gitRepos');

   fetchData( apiURL).then(
    data => {
        // make list of repos
        data.forEach( obj => parent.appendChild(makeRepoCard( obj )));
    }
   )
    // do nothing if there is an error with the api request
    .catch( err => false)
}

const fetchData = async ( apiURL ) =>{
  // fetch data from source
  let response = await fetch( apiURL);
  // convert data to JSON and return it
  return await response.json();
}



window.addEventListener("load", ()=>{
  makeRepoList("https://api.github.com/users/WStrellis/repos");
}, false)
