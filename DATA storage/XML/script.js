function loadxml() {

console.log("first")
const xhttp = new XMLHttpRequest();
xhttp.onload = function(){
    const xmlDoc = xhttp.responseXML;
    const books = xmlDoc.getElementsByTagName("book ");
    let output = "<h2>books in catalog</h2>";
    for (let i=0; i<books.length;i++){
        output +="<p> <strong>Tittle :</strong>"+
        books[i].getElementsByTagName("title")[0].childNodes[0].nodevalue + "</p>";
    }

    document.getElementById("output").innerHTML = output;
    };
    xhttp.open("get","books.xml",true);
    xhttp.send();

}