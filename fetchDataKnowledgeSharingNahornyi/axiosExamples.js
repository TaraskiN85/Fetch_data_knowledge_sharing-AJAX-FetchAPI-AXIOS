//examples for presentation

//Axios with promise
axios.get("url").then((response) => {
  console.log("response", response.data);
});

//Axios with async/await
(async () => {
  const response = await axios.get("url");
  console.log(response);
})();
