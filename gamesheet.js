function startop1() {
    var name = document.getElementById('name_input').value;
    if (name == '') {
        alert('Please, insert a name.');
    } else {
        document.getElementById('option1').style.display = 'none';
        document.getElementById('option2').style.display = 'block';
        document.getElementById('name').innerHTML = name;
    }

}