import { toTypedSchema } from '@vee-validate/yup';
import { defineStore } from 'pinia';
import { useForm } from 'vee-validate';
import * as Yup from 'yup';

const phoneRegex = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z-]+(\.[a-zA-Z-]+)*$/
const maxMessage= 'Maximum 255 characters'

const schema = toTypedSchema(
    Yup.object({
        firstName: Yup.string().required().max(255, maxMessage),
        lastName: Yup.string().required().max(255, maxMessage),
        email: Yup.string().email().matches(
            emailRegex,
            'email must be a valid email',
        ).required().max(255, maxMessage),
        phone: Yup.string().required().max(255, maxMessage).matches(phoneRegex, 'Phone number is not valid'),
        birthday: Yup.date().required().min(new Date(1900, 0, 1)),
        about: Yup.string().required(),
        avatar: Yup.mixed().required().test(
            'fileFormat',
            'Available image extensions',
            value => {
                const type = (value as File).type
                if (!value || !type) {
                    return true
                }
                const fileExtensionMIMEType = type.split('/')[0].toLowerCase()
                return ['image'].includes(fileExtensionMIMEType)
            },
        )
        .test('fileSize', 'Maximum 32 MB.', value => {
            const size = (value as File).size
            const maxFileSize = 32 * 1024 * 1024

            if (!value || !size) {
                return true
            }

            return size <= maxFileSize
        }),
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
