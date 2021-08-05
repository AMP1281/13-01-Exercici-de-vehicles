//Car values
var matriculaTable = '';
var marcaTable = '';
var colorTable = '';
//wheel values
var D1Table = parseFloat('');
var W1BTable = '';
var D2Table = parseFloat('');
var W2BTable = '';
var D3Table = parseFloat('');
var W3BTable = '';
var D4Table = parseFloat('');
var W4BTable = '';
var errorCar = new Array();
var errorRodes = new Array();
var message = {
    mErrorMatricula: "La matricula ha de tenir 4 números i 3 lletres",
    mErrorRodes: "El diametre ha de ser entre 0,4 i 2"
};
var form = document.getElementById('formulariCar');
function cotxe() {
    var matriculaHTML = document.getElementById('matricula');
    var matriculaValue = matriculaHTML.value;
    var marcaHTML = document.getElementById('marca');
    var marcaValue = marcaHTML.value;
    var colorHTML = document.getElementById('color');
    var colorValue = colorHTML.value;
    var matriculaError = document.querySelector('#error');
    var errorCar = [];
    errorCar = [];
    if (!/^[\d]{4}[A-Za-z]{3}$/.test(matriculaHTML.value)) {
        matriculaHTML.classList.add('is-invalid');
        errorCar.push(message.mErrorMatricula);
        matriculaError.textContent = errorCar.toString();
    }
    else {
        matriculaHTML.classList.remove('is-invalid');
        matriculaError.textContent = "";
    }
    if (errorCar.length > 0) {
        form.addEventListener('submit', function (event) { event.preventDefault(), event.stopPropagation(); });
        return false;
    }
    else {
        matriculaTable = matriculaValue;
        marcaTable = marcaValue;
        colorTable = colorValue;
        var divCar = document.getElementById('divCar');
        divCar.style.display = 'none';
        var divRodes = document.getElementById('divRodes');
        divRodes.style.display = '';
    }
}
function rodes() {
    var D1Value = parseFloat(document.getElementById('D1').value);
    var D1HTML = document.getElementById('D1');
    var eD1 = document.querySelector('#eD1');
    var D2Value = parseFloat(document.getElementById('D2').value);
    var D2HTML = document.getElementById('D2');
    var eD2 = document.querySelector('#eD2');
    var D3Value = parseFloat(document.getElementById('D3').value);
    var D3HTML = document.getElementById('D3');
    var eD3 = document.querySelector('#eD3');
    var D4Value = parseFloat(document.getElementById('D4').value);
    var D4HTML = document.getElementById('D4');
    var eD4 = document.querySelector('#eD4');
    errorRodes = [];
    //Validar campos ruedas
    function invalid(ele, campError) {
        ele.classList.add('is-invalid');
        errorRodes.push(message.mErrorRodes);
        campError.textContent = message.mErrorRodes;
    }
    function valid(ele, campError) {
        ele.classList.remove('is-invalid');
        campError.textContent = "";
    }
    if (D1Value < 0.4 || D1Value > 2) {
        invalid(D1HTML, eD1);
    }
    else {
        valid(D1HTML, eD1);
    }
    if (D2Value < 0.4 || D2Value > 2) {
        invalid(D2HTML, eD2);
    }
    else {
        valid(D2HTML, eD2);
    }
    if (D3Value < 0.4 || D3Value > 2) {
        invalid(D3HTML, eD3);
    }
    else {
        valid(D3HTML, eD3);
    }
    if (D4Value < 0.4 || D4Value > 2) {
        invalid(D4HTML, eD4);
    }
    else {
        valid(D4HTML, eD4);
    }
    //Guardar variables
    if (errorRodes.length > 0) {
        return false;
    }
    else {
        D1Table = D1Value;
        W1BTable = D1HTML.value;
        D2Table = D2Value;
        W2BTable = D1HTML.value;
        D3Table = D3Value;
        W3BTable = D1HTML.value;
        D4Table = D4Value;
        W4BTable = D1HTML.value;
        //Esconder divRodes mostrar divCar
        var divCar = document.getElementById('divCar');
        divCar.style.display = '';
        var divRodes = document.getElementById('divRodes');
        divRodes.style.display = 'none';
        //Crear
        var car = new Car(matriculaTable, marcaTable, colorTable);
        car.addWheel(new Wheel(D1Table, W1BTable));
        //Mostrar resultado
        var Tablatest = document.getElementById('tabla');
        Tablatest.innerHTML +=
            "<tr><td class=\"text-danger\"> <b> NEW CAR </b> </td> <td> </td>\n                <td> <b> Car Plate: </b> </td> <td> " + matriculaTable + " </td>\n                <td> <b> Car Color: </b> </td> <td> " + marcaTable + " </td>\n                <td> <b> Car Brand: </b> </td> <td> " + colorTable + " </td>\n\n            <tr><td> <b> Wheel 1 Diameter: </b> </td> <td> " + D1Table + " </td>\n                <td> <b> Wheel 2 Diameter: </b> </td> <td> " + D2Table + " </td>\n                <td> <b> Wheel 3 Diameter: </b> </td> <td> " + D3Table + " </td>\n                <td> <b> Wheel 4 Diameter: </b> </td> <td> " + D4Table + " </td>\n\n            <tr><td> <b> Wheel 1 Brand: </b> </td> <td> " + W1BTable + " </td>\n                <td> <b> Wheel 2 Brand: </b> </td> <td> " + W2BTable + " </td>\n                <td> <b> Wheel 3 Brand: </b> </td> <td> " + W3BTable + " </td>\n                <td> <b> Wheel 4 Brand: </b> </td> <td> " + W4BTable + " </td>\n        ";
    }
}
