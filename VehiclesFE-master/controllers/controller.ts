//Car values
let matriculaTable:string = '';
let marcaTable:string = '';
let colorTable:string = '';

//wheel values
let D1Table:number = parseFloat('');
let W1BTable:string='';

let D2Table:number = parseFloat('');
let W2BTable:string='';

let D3Table:number = parseFloat('');
let W3BTable:string='';

let D4Table:number = parseFloat('');
let W4BTable:string='';


let errorCar:string[]= new Array()
let errorRodes:string[]= new Array()

const message = {
    mErrorMatricula:"La matricula ha de tenir 4 números i 3 lletres",
    mErrorRodes: "El diametre ha de ser entre 0,4 i 2",
}

const form = document.getElementById('formulariCar')!;

function cotxe(){

    let matriculaHTML = (document.getElementById('matricula') as HTMLInputElement)!;
    let matriculaValue = matriculaHTML.value;

    let marcaHTML = (document.getElementById('marca') as HTMLInputElement)!;
    let marcaValue = marcaHTML.value;

    let colorHTML = (document.getElementById('color') as HTMLInputElement)!;
    let colorValue = colorHTML.value;

    let matriculaError: HTMLInputElement = document.querySelector('#error')!;

    let errorCar:string[]= [];

    errorCar = [];

    if(!/^[\d]{4}[A-Za-z]{3}$/.test(matriculaHTML.value)){
        matriculaHTML.classList.add('is-invalid');
        errorCar.push(message.mErrorMatricula);
        matriculaError.textContent= errorCar.toString();
    }
    else{
        matriculaHTML.classList.remove('is-invalid');
        matriculaError.textContent="";
    }

    if(errorCar.length>0){
        form.addEventListener('submit', (event) => {event.preventDefault(), event.stopPropagation()});
        return false;
    }

    else{
        matriculaTable = matriculaValue;
        marcaTable = marcaValue;
        colorTable = colorValue;

        var divCar = document.getElementById('divCar')!;
        divCar.style.display = 'none';

        var divRodes = document.getElementById('divRodes')!;
        divRodes.style.display = '';

    }
}

function rodes(){

    let D1Value = parseFloat((<HTMLInputElement>document.getElementById('D1')).value);
    let D1HTML = (document.getElementById('D1') as HTMLInputElement)!;

    let eD1: HTMLInputElement = document.querySelector('#eD1')!;

    let D2Value = parseFloat((<HTMLInputElement>document.getElementById('D2')).value);
    let D2HTML = (document.getElementById('D2') as HTMLInputElement)!;

    let eD2: HTMLInputElement = document.querySelector('#eD2')!;

    let D3Value = parseFloat((<HTMLInputElement>document.getElementById('D3')).value);
    let D3HTML = (document.getElementById('D3') as HTMLInputElement)!;

    let eD3: HTMLInputElement = document.querySelector('#eD3')!;


    let D4Value = parseFloat((<HTMLInputElement>document.getElementById('D4')).value);
    let D4HTML = (document.getElementById('D4') as HTMLInputElement)!;

    let eD4: HTMLInputElement = document.querySelector('#eD4')!;

    errorRodes = [];

    //Validar campos ruedas
    function invalid(ele:HTMLInputElement, campError:HTMLInputElement){
        ele.classList.add('is-invalid');
        errorRodes.push(message.mErrorRodes);
        campError.textContent= message.mErrorRodes
    }
    function valid(ele:HTMLInputElement, campError:HTMLInputElement){
        ele.classList.remove('is-invalid');
        campError.textContent="";
    }

    if(D1Value<0.4 || D1Value>2){
        invalid(D1HTML,eD1);
    }
    else{
        valid(D1HTML,eD1);
    }

    if(D2Value<0.4 || D2Value>2){
        invalid(D2HTML,eD2);
    }
    else{
        valid(D2HTML,eD2);
    }

    if(D3Value<0.4 || D3Value>2){
        invalid(D3HTML,eD3);
    }
    else{
        valid(D3HTML,eD3);
    }

    if(D4Value<0.4 || D4Value>2){
        invalid(D4HTML,eD4);
    }
    else{
        valid(D4HTML,eD4);
    }

    //Guardar variables
    if (errorRodes.length>0){
        return false
    }

    else{

        D1Table = D1Value;
        W1BTable = D1HTML.value;

        D2Table = D2Value;
        W2BTable = D1HTML.value;

        D3Table = D3Value;
        W3BTable = D1HTML.value;

        D4Table = D4Value;
        W4BTable = D1HTML.value;
    

    //Esconder divRodes mostrar divCar
        var divCar = document.getElementById('divCar')!;
        divCar.style.display = '';

        var divRodes = document.getElementById('divRodes')!;
        divRodes.style.display = 'none';

    //Crear
    let car = new Car(matriculaTable, marcaTable, colorTable);
    car.addWheel(new Wheel(D1Table,W1BTable));

    //Mostrar resultado

     const Tablatest = document.getElementById('tabla') as HTMLTableElement;
    Tablatest.innerHTML +=
           `<tr><td class="text-danger"> <b> NEW CAR </b> </td> <td> </td>
                <td> <b> Car Plate: </b> </td> <td> ${matriculaTable} </td>
                <td> <b> Car Color: </b> </td> <td> ${marcaTable} </td>
                <td> <b> Car Brand: </b> </td> <td> ${colorTable} </td>

            <tr><td> <b> Wheel 1 Diameter: </b> </td> <td> ${D1Table} </td>
                <td> <b> Wheel 2 Diameter: </b> </td> <td> ${D2Table} </td>
                <td> <b> Wheel 3 Diameter: </b> </td> <td> ${D3Table} </td>
                <td> <b> Wheel 4 Diameter: </b> </td> <td> ${D4Table} </td>

            <tr><td> <b> Wheel 1 Brand: </b> </td> <td> ${W1BTable} </td>
                <td> <b> Wheel 2 Brand: </b> </td> <td> ${W2BTable} </td>
                <td> <b> Wheel 3 Brand: </b> </td> <td> ${W3BTable} </td>
                <td> <b> Wheel 4 Brand: </b> </td> <td> ${W4BTable} </td>
        `;
        
}
}




