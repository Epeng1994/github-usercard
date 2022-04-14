/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/Epeng1994')
  .then((res)=>{
    const x = userCard(res.data)
    const cards = document.querySelector('.cards')
    cards.appendChild(x)
    /*const follow = res.data.followers
    follow.forEach(a => {
      axios.get(`https://api.github.com/users/${a}`)
        .then((res)=>{
          const y = userCard(res.data)
          const cards = document.querySelector('.cards')
          cards.append(y)
        })
    })
    */
  })
  .catch((err) =>{
    console.log(err)
  })
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['tetondan','dustinmyers','justsml','luishrd','bigknell'];

followersArray.forEach(a => {
  axios.get(`https://api.github.com/users/${a}`)
  .then((res)=>{
    const x = userCard(res.data)
    const cards = document.querySelector('.cards')
    cards.appendChild(x)
  })
  .catch((err) =>{
    console.log(err)
  })
})


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function userCard(myObj){
  const card = document.createElement('div')
  card.classList.add('card')

  const picture = document.createElement('img')
  picture.src = myObj.avatar_url

  const cardInfo = document.createElement('div')
  cardInfo.classList.add('card-info')
  card.append(picture, cardInfo)

  const person = document.createElement('h3')
  person.classList.add('name')
  person.textContent = myObj.name

  const username = document.createElement('p')
  username.classList.add('username')
  username.textContent = myObj.login

  const ulocation = document.createElement('p')
  ulocation.textContent = `Location: ${myObj.location}`

  const profile = document.createElement('p')
  profile.textContent = 'Profile'
  const anc = document.createElement('a')
  anc.href = myObj.url
  anc.textContent = myObj.url
  profile.appendChild(anc)

  const ufollowers = document.createElement('p')
  ufollowers.textContent = `Followers: ${myObj.followers}`

  const ufollowing = document.createElement('p')
  ufollowing.textContent = `Following : ${myObj.following}`
  
  const ubio = document.createElement('p')
  ubio.textContent = `Bio: ${myObj.bio}`

  cardInfo.append(person, username, ulocation, profile, ufollowers, ufollowing, ubio)

  return card
}

const cards = document.querySelector('.cards')




/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
