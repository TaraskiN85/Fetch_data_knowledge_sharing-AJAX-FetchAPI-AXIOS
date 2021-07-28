//examples for presentation

//error handling in Fetch API
fetch("url")
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

//error handling in Axios
axios("url")
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
