const RegistrationForm = {
    data() {
        return {
            addressSameChecked: true,
        }
    },
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

            <text-input name="address" label="Address" type="text" required="true"></text-input>
            <text-input name="city" label="City" type="text" required="true"></text-input>
            <text-input name="province" label="Province" type="text" required="true"></text-input>
            <text-input name="zip" label="Zip/Postal" type="text" required="true"></text-input>

            <check-input v-on:click="addressSame" name="addressSameCheck" label="Mailing Address Same" checked="true" v-model="addressSameChecked"></check-input>

            <div v-if="addressSameChecked === false">
                <div class="mt-3">
                    <text-input name="address2" label="Mailing Address" type="text" required="true"></text-input>
                    <text-input name="city2" label="Mailing City" type="text" required="true"></text-input>
                    <text-input name="province2" label="Mailing Province" type="text" required="true"></text-input>
                    <text-input name="zip2" label="Mailing Zip/Postal" type="text" required="true"></text-input>
                </div>
            </div>

            <check-input name="terms" label="I agree to the terms and conditions" required="true"></check-input>
            <hr>
            <input class="btn btn-outline-primary" type="submit" value="Register">
        </form>
    `,
    methods: {
        addressSame() {
            console.log("addressSameChecked fired");
            if (this.addressSameChecked) {
                console.log("was checked on click");
                this.addressSameChecked = false;
            } else {
                console.log("was unchecked on click");
                this.addressSameChecked = true;
            }
        }
    },
    components: {
        'text-input': TextInput,
        'select-input': SelectInput,
        'check-input': checkInput
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