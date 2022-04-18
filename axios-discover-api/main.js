const url = "http://localhost:5500/api"

function getUsers () {
    axios.get(url)
    .then(response => {
        apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))   
}

function addNewUser() {
    axios.post(url, newUser)
    .then( response => {
        console.log(response)
    })
    .catch(error => console.error(error))
}

function getUser (id) {
    axios.get(`${url}/${id}`)
    .then(response => {
        const data = response.data
        userName.textContent = data.name
        userCity.textContent = data.city
        userID.textContent = data.id
        userAvatar.src = data.avatar
    })
    .catch(error => console.error(error))
}

function updateUser(id, userUpdated) {
    axios.put(`${url}/${id}`, userUpdated)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}   

function deleteUser(id){
    axios.delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

const userUpdated = {
    name:"Arya Padilha",
    avatar:"http://picsum.photos/200/300",
    city: "Itajai"
}

const newUser = {
    name:"Thor Padilha",
    avatar:"http://picsum.photos/200/300",
    city:"Guaratuba"
}

addNewUser()

getUser(1)

getUsers()

//updateUser(3, userUpdated)

deleteUser(5)