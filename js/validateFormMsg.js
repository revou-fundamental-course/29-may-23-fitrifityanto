function validateForm() {
    const name = document.forms['message-form']['full-name'].value
    const birthDate = new Date(document.forms['message-form']['birth-date'].value)
    const gender = document.forms['message-form']['gender'].value
    const messages = document.forms['message-form']['messages'].value

    if ( name == "" || birthDate == "" || gender == "" || messages == "") {
        alert("Tidak boleh kosong")
        return false
    }
    
    setSenderUI(name, birthDate, gender, messages)

    return false
}

function setSenderUI(name, birthDate, gender, messages) {
    const birthDates = `${birthDate.getDate()}/${birthDate.getMonth()+1}/${birthDate.getFullYear()}`

    document.getElementById("sender-full-name").textContent = name
    document.getElementById("sender-birth-date").textContent = birthDates
    document.getElementById("sender-gender").textContent = gender
    document.getElementById("sender-messages").textContent = messages
}