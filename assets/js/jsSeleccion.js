$(document).ready(function() {
  let selecValue;
  $('select').material_select();

  $('select').on('change', function() {
    selecValue = this.value;
    console.log(selecValue);
  });
});

/* let seleccion = document.getElementById('seleccion');
function sel() {
  return seleccion.options[seleccion.selectedIndex].value;
}
seleccion.addEventListener('change', function() {
  console.log('Event Triggered!');
}); */
