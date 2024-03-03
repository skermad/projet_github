document.getElementById('all').addEventListener('click', recupAll);
document.getElementById('byId').addEventListener('click', recupById);
document.getElementById('add').addEventListener('click', addProduct);






function recupById() {

    let id = prompt("Entrez l'ID du produit à récupérer :");

    let url  = "http://localhost:3000/products/id/" + id;

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: url,
        headers: {}
    };

    axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error);
        });
}




function addProduct() {

    let id = prompt('ID ?')
    let  name = prompt('Nom du produit ?');
    let description = prompt('Description du produit :');
    let price = prompt('Prix :');
    let ref = prompt('La référence :');
    let age = prompt('Age :');


    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify([
    {
        "id": id,
        "name": name,
        "description": description,
        "price": price,
        "ref": ref,
        "age": age,
    }
    ]);

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("http://localhost:3000/products/add", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

}


