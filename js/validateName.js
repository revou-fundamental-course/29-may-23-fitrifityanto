function validateName() {
    let name = prompt("Silahkan masukkan nama Kamu")
    
    if (name === "") {
        alert("Nama tidak boleh kosong")
        name = prompt("Silahkan masukkan nama Kamu")
    } 
    getName(name)
}

function getName(name) {
    document.getElementById("yourName").textContent = name
}

validateName()