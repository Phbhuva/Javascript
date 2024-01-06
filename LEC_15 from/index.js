let check = true
function data(d) {

    document.getElementById("error").innerHTML =''
    document.getElementById("wrong").innerHTML =''
    document.getElementById("errorG1").innerHTML = ''


    let name = document.form.name.value;
    if (name == "") {
        document.getElementById("error").innerHTML = "Name is required"
        check = false
    }
    if (name.length < 2 || name.length > 20) {
        document.getElementById("error").innerHTML = "Name must be atlieast 2 or 20 characters...."
        check = false
    }

    let mail = document.form.email.value;
    if (mail == "") {
        document.getElementById("wrong").innerHTML = "Email required"
        check = false
    }

    let pass = document.form.pwd.value;
    if (pass == "") {
        document.getElementById("errorG1").innerHTML = "Please enter a password"
        check = false
    }
    if (check == true) {
        return true;
    }else{
        return  false;
    }
}
