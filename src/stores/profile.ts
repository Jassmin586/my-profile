import { toTypedSchema } from '@vee-validate/yup';
import { defineStore } from 'pinia';
import { useForm } from 'vee-validate';
import * as Yup from 'yup';

const schema = toTypedSchema(
    Yup.object({
        name: Yup.string().required(),
        email: Yup.string().email().required(),
    })
)

export const useProfileStore = defineStore('profile', () => {
    const { errors, defineField, handleSubmit } = useForm({
        validationSchema: schema,
    });

    const [name, nameProps] = defineField('name');
    const [email, emailProps] = defineField('email');

    const submit = handleSubmit((values) => {
    // send values to API
    console.log('Submit', JSON.stringify(values, null, 2));
    });

    return {
        errors,
        name,
        nameProps,
        email,
        emailProps,
        submit,
    };
});
