$(document).ready(function () {
  let selecValue;
  $('select').material_select();

  $('select').on('change', function () {
    selecValue = this.value;
    window.location = "index.html";

    let selectionCall = selecValue;

    selection_datos = new Object();
    selection_datos.selectionCall = selectionCall;

    let selection_serializado = JSON.stringify(selection_datos);


    window.localStorage.setItem('objdatos', selection_serializado);

  });

});