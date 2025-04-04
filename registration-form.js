const RegistrationForm = {
    props: ["items"],
    template: `
        <h3>Registration</h3>
        <hr>
        <form autocomplete="off" class="needs-validation" novalidate>
            <text-input name="first-name" label="First Name" type="text" required="true"></text-input>
            <text-input name="last-name" label="Last Name" type="text" required="true"></text-input>
            <text-input name="email" label="Email" type="email" required="true"></text-input>
            <text-input name="password" label="Password" type="password" required="true"></text-input>
            <select-input name="color" label="Favourite Color" :items="items"></select-input>
            <hr>
            <input class="btn btn-outline-primary" type="submit" value="Register">
        </form>
    `,
    components: {
        'text-input': TextInput,
        'select-input': SelectInput,
    },
    mounted() {
        console.log('RegistrationForm mounted');
        (function () {
            'use strict'

            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.querySelectorAll('.needs-validation')

            // Loop over them and prevent submission
            Array.prototype.slice.call(forms)
                .forEach(function (form) {
                    form.addEventListener('submit', function (event) {
                        if (!form.checkValidity()) {
                            event.preventDefault()
                            event.stopPropagation()
                        }

                        form.classList.add('was-validated')
                    }, false)
                })
        })()
    },
}