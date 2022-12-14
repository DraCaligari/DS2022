axios({
    method: 'GET',
    url: '/users/profile'
}).then(function(result){
    console.log(result.data);
}).catch(function(error){
    if(error.response) {
        Swal.fire({
                    background:'var(--colors-pink)',
                    color: "var(--colors-white)",
                    showCloseButton: true,
                    allowOutsideClick: false,
                    title: 'Iniciar Sesión',
                    confirmButtonText: "Iniciar Sesión", 
                    confirmButtonColor: 'var(--colors-white)',          
                    html:`    
                    <section class="row m-0">
                        <article class="col">
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">@</span>
                                <input type="text" id="email" class="form-control" placeholder="Correo" aria-label="Correo" aria-describedby="basic-addon1">
                            </div> 
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">**</span>
                                <input type="password" id="password" class="form-control" placeholder="Contraseña" aria-label="Contraseña" aria-describedby="basic-addon1">
                            </div>              
                        </article>
                    </section>`,
                    //text: 'Aquí debe venir el formulario del login',
                    footer: '<a class="register-link" href="">No tienes cuenta? Registrate</a>',
                    showLoaderOnConfirm: true,
                    preConfirm: function(x){
                        var email = $("#email").val();
                        var password = $("#password").val();

                        console.log({
                            email:email,
                            password: password
                        });

                        return axios({
                            method:'POST',
                            url: '/users/login',
                            data: payload
                        }).then(function(result){
                            $('#title').html(`Bienvenid@ ${result.user.name}... Ya tienes sesión :3`)
                            //console.log(result);
                        }).catch(function(error) {
                            Swal.showValidationMessage(`Request failed ${error}`);
                        });
                            }
                        }).then(function(result){
                            if(result.isConfirmed) {
                               window.location.href=window.location.href;
                            }
                        })
    } else {
        console.log(error);
    }
});