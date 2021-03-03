const options = {
  method: "GET",
  mode: "cors",
  cache: "default"
};

fetch('https://my-json-server.typicode.com/naveteam/fake-api/navers', options)
.then(response => response.json())
.then(data => {
  data.forEach(function(element) {
    document.getElementById('construtc').innerHTML += "<div><img src='" + element.image_url + "'>" + "<p>" + element.name + "</p>" + "<span>" + element.job_role + "</span></div>";
 });
});