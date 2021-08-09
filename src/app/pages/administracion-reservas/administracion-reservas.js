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
  
  const db1 = firebase.database();
  coleccionReservas = db1.ref().child('reservas');
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
  const iconoEditar = '<svg class="bi bi-pencil-square" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg>';
  const iconoBorrar = '<svg class="bi bi-trash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg>';
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
    <td align="center"><button class="btnEditar btn btn-secondary" data-toggle="tooltip" title="Editar">${iconoEditar}</button><button class="btnBorrar btn btn-danger" data-toggle="tooltip" title="Borrar">${iconoBorrar}</button></td>
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