import { toTypedSchema } from '@vee-validate/yup';
import { defineStore } from 'pinia';
import { useForm } from 'vee-validate';
import * as Yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schema = toTypedSchema(
    Yup.object({
        firstName: Yup.string().required(),
        lastName: Yup.string().required(),
        email: Yup.string().email().required(),
        phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
        birthday: Yup.date().nullable().min(new Date(1900, 0, 1)),
        about: Yup.string(),
        avatar: Yup.string()
    })
)

export const useProfileStore = defineStore('profile', () => {
    const { errors, meta, defineField, handleSubmit } = useForm({
        validationSchema: schema,
    });

    const [firstName, firstNameProps] = defineField('firstName')
    const [lastName, lastNameProps] = defineField('lastName')
    const [email, emailProps] = defineField('email')
    const [phone, phoneProps] = defineField('phone')
    const [birthday, birthdayProps] = defineField('birthday')
    const [about, aboutProps] = defineField('about')
    const [avatar, avatarProps] = defineField('avatar')

    const submit = handleSubmit((values) => {
    // send values to API
    console.log('Submit', JSON.stringify(values, null, 2));
    })

    return {
        errors,
        meta,
        firstName,
        firstNameProps,
        lastName,
        lastNameProps,
        email,
        emailProps,
        phone,
        phoneProps,
        birthday,
        birthdayProps,
        about,
        aboutProps,
        avatar,
        avatarProps,
        submit,
    }
})
