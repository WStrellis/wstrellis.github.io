'use strict'

const makeRepoCard = ( url, name) =>{
  let sec = document.createElement('section');
  sec.classList.add('col-6', 'col-12-narrower', 'feature');
  sec.insertAdjacentHTML( 'afterbegin', `<header><h2>${name}</h2></header><ul class="actions"><li><a href=${url} target="_blank" class="button">View on Github</a></li></ul></section>`)

  document.querySelector('div.row.gitRepos').appendChild(sec);
}



const makeRepoList = () =>{
  fetch("https://api.github.com/users/WStrellis/repos")
    .then(response => response.json() )
    .then(  resData => {
      // make list of repos
      resData.forEach( obj => makeRepoCard( obj.html_url, obj.name))
    })
    .catch(err => false)
    
}

window.addEventListener("load", (e)=>{
  makeRepoList()
}, false)
