  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAVhHdmgnhkr9V-Z-sEJZKNhwD2g0GOhsg",
  authDomain: "hotel-ac0cd.firebaseapp.com",
  databaseURL: "https://hotel-ac0cd-default-rtdb.firebaseio.com",
  projectId: "hotel-ac0cd",
  storageBucket: "hotel-ac0cd.appspot.com",
  messagingSenderId: "847218257875",
  appId: "1:847218257875:web:8f3d385902380738088926",
  measurementId: "G-69YN12FKTL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const db = firebase.database();
  coleccionReservas = db.ref().child('reservas');
  bodyReservas = $('#bodyReservas').val();
  console.log(bodyReservas);  
  $('form').submit(function(e){
    e.preventDefault();
    let id = $('#id').val();
    let nombre = $('#nombre').val();
    let correo_electronico = $('#correo_electronico').val();
    let Num_Telefonico = $('#Num_Telefonico').val();
    let Num_Pers_Adultas = $('#Num_Pers_Adultas').val();
    let Num_Niños = $('#Num_Niños').val();
    let Dia_llegada = $('#Dia_llegada').val();
    let Dia_salida = $('#Dia_salida').val();
    let Tipo_Habitacion = $('#Tipo_Habitacion ').val();
    let Pago = $('#Pago').val();
    let idFirebase = id;
    if(idFirebase == ''){
     idFirebase = coleccionReservas.push().key;
    };
    data = {nombre:nombre,correo_electronico:correo_electronico,Num_Telefonico:Num_Telefonico,Num_Pers_Adultas:Num_Pers_Adultas,Num_Niños:Num_Niños,Dia_llegada:Dia_llegada,Dia_salida:Dia_salida,Tipo_Habitacion:Tipo_Habitacion,Pago:Pago};
    actualizacionData = {};
    actualizacionData[`/${idFirebase}`] = data;
    coleccionReservas.update(actualizacionData);
    id = '';
    $('form').trigger('reset');
    $('#modalAltaEdicion').modal('hide');
  });
  
  
  function mostrarReservas({nombre:nombre,correo_electronico:correo_electronico,Num_Telefonico:Num_Telefonico,Num_Pers_Adultas:Num_Pers_Adultas,Num_Niños:Num_Niños,Dia_llegada:Dia_llegada,Dia_salida:Dia_salida,Tipo_Habitacion:Tipo_Habitacion,Pago:Pago}){
    return `
    <td align="center">${nombre}</td>
    <td align="center">${correo_electronico}</td>
    <td align="center" >${Num_Telefonico}</td>
    <td align="center">${Num_Pers_Adultas}</td>
    <td align="center"> ${Num_Niños}</td>
    <td align="center">${Dia_llegada}</td>
    <td align="center">${Dia_salida}</td>
    <td align="center">${Tipo_Habitacion}</td>
    <td align="center">${Pago}</td>
    
    `
  };
  //CHILD_ADDED
  coleccionReservas.on('child_added', data =>{
    let tr = document.createElement('tr')
    tr.id = data.key
    tr.innerHTML = mostrarReservas(data.val())
    document.getElementById('bodyReservas').appendChild(tr)
  });
  //CHILD_CHANGED
  coleccionReservas.on('child_changed', data =>{
    let nodoEditado = document.getElementById(data.key)
    nodoEditado.innerHTML = mostrarProductos(data.val())
  });
  //CHILD_REMOVED
  coleccionReservas.on('child_removed', data =>{
    let nodoEditado = document.getElementById(data.key)
    document.getElementById('bodyReservas').removeChild(nodoEditado)
  });
  //Programación de los botones
  $('#btnNuevo').click(function(){
    $('#id').val('');
    $('#nombre').val('');
    $('#correo_electronico').val('');
    $('#Num_Telefonico').val('');
    $('#Num_Pers_Adultas').val('');
    $('#Num_Niños').val('');
    $('#Dia_llegada').val('');
    $('#Dia_salida').val('');
    $('#Tipo_Habitacion ').val('');
    $('#Pago').val('');
    $('form').trigger('reset');
    $('#modalAltaEdicion').modal('show');
  });
  $('#tablaReservas').on('click', '.btnEditar', function(){
    let id = $(this).closest('tr').attr('id');
    let nombre = $(this).closest('tr').find('td:eq(0)').text();
    let  correo_electronico = $(this).closest('tr').find('td:eq(1)').text();
    let Num_Telefonico = $(this).closest('tr').find('td:eq(2)').text();
    let Num_Pers_Adultas = $(this).closest('tr').find('td:eq(3)').text();
    let Num_Niños = $(this).closest('tr').find('td:eq(4)').text();
    let ia_llegada = $(this).closest('tr').find('td:eq(5)').text();
    let Dia_salida  = $(this).closest('tr').find('td:eq(6)').text();
    let Tipo_Habitacion= $(this).closest('tr').find('td:eq(7)').text();
    let Pago= $(this).closest('tr').find('td:eq(8)').text();
    $('#id').val(id);
    $('#nombre').val(nombre);
    $('#correo_electronico').val(correo_electronico);
    $('#Num_Telefonico').val(Num_Telefonico);
    $('#Num_Pers_Adultas').val(Num_Pers_Adultas);
    $('#Num_Niños').val(Num_Niños);
    $('#Dia_llegada').val(Dia_llegada);
    $('#Dia_salida').val(Dia_salida);
    $('#Tipo_Habitacion ').val(Tipo_Habitacion);
    $('#Pago').val(Pago);                
    $('#modalAltaEdicion').modal('show');
  });
  $('#tablaReservas').on('click', '.btnBorrar', function(){
      Swal.fire({
        title: '¿Está seguro de eliminar esta reserva?',
        text: "¡Está operación no se puede revertir!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Borrar'
        }).then((result) => {
        if (result.value) {
            let id = $(this).closest('tr').attr('id'); //capturamos el atributo ID de la fila  
            db.ref(`reservas/${id}`).remove() //eliminamos la reserva de firebase      
            Swal.fire('¡Eliminado!', 'La reserva  ha sido eliminada.','Completado')
        }
        })        
  });