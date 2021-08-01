function registrar(){
    var email = document.getElementById('email').value;
   var contraseña = document.getElementById('contraseña').value;
   
   firebase.auth().createUserWithEmailAndPassword(email, contraseña)
     .then(function () {
         verificar()
     })
     .catch((error) => {
       var errorCode = error.code;
       var errorMessage = error.message;
       console.log(errorCode);
       console.log(errorMessage);
       //...
     });
   
   }
   
   function ingreso(){
       var email2 = document.getElementById('email2').value;
      var contraseña2 = document.getElementById('contraseña2').value;
      firebase.auth().signInWithEmailAndPassword(email2, contraseña2)
     .then((userCredential) => {
       // Signed in
       var user = userCredential.user;
       // ...
     })
     .catch((error) => {
       var errorCode = error.code;
       var errorMessage = error.message;
       console.log(errorCode);
       console.log(errorMessage);
     });
   
     
   } 
   
   function observador(){
       firebase.auth().onAuthStateChanged((user) => {
           if (user) {
               console.log('existe usuario activo')
               aparecer()
            //user is signed in.
            var displayName = user.displayName;
            var email = user.email;
            console.log('****************');
            console.log(user.emailVerified)
            console.log('****************');
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;
             // ...
           } else {
             // User is signed out
             console.log('no existe usuario activo')
             // ...
           }
         });
     }
     observador();
   
   
     function aparecer(){
       var contenido = document.getElementById('contenido');
      
       contenido.innerHTML = 
       `
       <p>Bienvenido</p>
       <button onclick="cerrar()">Cerrar</button>
       `;  
     }
   
     
     function cerrar() {
       firebase.auth().signOut()
       .then(function(){
           console.log('Saliendo......')
       })
       .catch(function(error){
           console.log(error)
       })
   }
   
   function verificar(){
       var user = firebase.auth().currentUser;
   
       user.sendEmailVerification().then(function() {
       // Email verification sent!
       // ...
       console.log('Enviando correo....');
     }).catch(function(error){
   
     });
   }