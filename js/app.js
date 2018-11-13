const inputValue = document.querySelector("#search");
const searchButton = document.querySelector(".searchButton");
const name = document.querySelector(".main-name");
const username = document.querySelector(".main-username");
const repos = document.querySelector(".main-repos");
const url = document.querySelector(".main-url");

const client_id = "785dd4b1bae1ec291366";
const client_secret = "3e25827d521c2dc4c207c2409a49639a57d1cf0e";

const findUsers = async (user) => {
    const apiCall = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`);

    const data = await apiCall.json();

    return { data: data }
};

const showData = () => {
    findUsers(inputValue.value).then((res) => {
        console.log(res); 

        name.innerHTML = `Name: <span class="main__profile-value">${res.data.name}</span>`;

        username.innerHTML = `Username: <span class="main__profile-value">${res.data.login}</span>`;

        repos.innerHTML = `Number of Repos: <span class="main__profile-value">${res.data.public_repos}</span>`;

        url.innerHTML = `URL: <span class="main__profile-value">${res.data.html_url}</span>`;

    })

}

searchButton.addEventListener("click", () => {
showData();
})