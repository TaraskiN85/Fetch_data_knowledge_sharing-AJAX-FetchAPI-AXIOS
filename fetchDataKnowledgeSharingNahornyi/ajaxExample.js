const makeAjax = document.getElementById("makeAjax");
makeAjax.addEventListener("click", ajaxData);

function ajaxData() {
  // create XHR Object
  const xhr = new XMLHttpRequest();
  console.log(xhr);

  //OPEN - type, url/file, async
  xhr.open("GET", "sample.txt", true);
  // console.log("READYSTATE: ", xhr.readyState);

  //Receiving the response 1 variant:
  xhr.onload = function () {
    // console.log("READYSTATE: ", xhr.readyState);
    if (this.status == 200) {
      console.log(this.responseText);
    }
  };

  //Receiving the response another way:
  xhr.onreadystatechange = function () {
    // console.log("READYSTATE: ", xhr.readyState);
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(this.responseText);
    }
  };

  //Sending the request
  xhr.send();
}

//0: request not initialized
//1: server connection established
//2: request received
//3: processing request
//4: request finished and response is ready


// console.log("READYSTATE: ", xhr.readyState);