// AJAX!!
const makeAjax = document.getElementById("makeAjax");
makeAjax.addEventListener("click", ajaxData);

async function ajaxData() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      const address = `${data.address.street}, ${data.address.suite}, ${data.address.city}, ${data.address.zipcode}`;
      document.getElementById("ajaxName").innerHTML = data.name;
      document.getElementById("ajaxEmail").innerHTML = data.email;
      document.getElementById("ajaxAddress").innerHTML = address;
      document.getElementById("ajaxPhone").innerHTML = data.phone;
    }
  };
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users/1", true);
  xhr.send();
}

// FETCH API!!
const makeFetch = document.getElementById("makeFetch");
makeFetch.addEventListener("click", fetchData);

//Fetch with promise
// function fetchData() {
//   fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then((response) => response.json())
//     .then((data) => {
//       const address = `${data.address.street}, ${data.address.suite}, ${data.address.city}, ${data.address.zipcode}`;
//       document.getElementById("fetchName").innerHTML = data.name;
//       document.getElementById("fetchEmail").innerHTML = data.email;
//       document.getElementById("fetchAddress").innerHTML = address;
//       document.getElementById("fetchPhone").innerHTML = data.phone;
//     });
// }


//Fetch with async
async function fetchData() {
  let result = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const data = await result.json();

  const address = `${data.address.street}, ${data.address.suite}, ${data.address.city}, ${data.address.zipcode}`;
  document.getElementById("fetchName").innerHTML = data.name;
  document.getElementById("fetchEmail").innerHTML = data.email;
  document.getElementById("fetchAddress").innerHTML = address;
  document.getElementById("fetchPhone").innerHTML = data.phone;
}

// AXIOS!!
const makeAxios = document.getElementById("makeAxios");
makeAxios.addEventListener("click", axiosData);

function axiosData() {
  axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/users/1",
  }).then((res) => {
    const address = `${res.data.address.street}, ${res.data.address.suite}, ${res.data.address.city}, ${res.data.address.zipcode}`;
    document.getElementById("axiosName").innerHTML = res.data.name;
    document.getElementById("axiosEmail").innerHTML = res.data.email;
    document.getElementById("axiosAddress").innerHTML = address;
    document.getElementById("axiosPhone").innerHTML = res.data.phone;
    console.log(res);
  });
}
