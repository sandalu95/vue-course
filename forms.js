const TextInput = {
    props: {
        name: String,
        type: String,
        label: String,
        placeholder: String,
        required: String,
        min: String,
        max: String,
        value: String
    },
    template: `
        <div class="mb-3">
            <label :for="name" class="form-label">
                {{ label }}
            </label>
            <input
                :value="value"
                :type="type"
                :name="name"
                :id="name"
                :placeholder="placeholder"
                :required="required"
                :min="min"
                :max="max"
                :autocomplete="name + '-new'"
                class="form-control">
        </div>
    `
}