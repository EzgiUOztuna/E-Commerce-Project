import { useForm } from 'react-hook-form';

export default function SignUpPage() {
    const { register,
        handleSubmit,
        watch,
        formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    /*
    https://ozmeneyup60.medium.com/react-jste-form-y%C3%B6netimi-react-hook-form-vs-formik-e6d394f30057
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        verifiedPassword: ''
    });
    */

    return <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type='text'
                placeholder='First name'
                {...register("First name", { required: true, min: 3, maxLength: 80 })} />
            <input type='text'
                placeholder='Last name'
                {...register("Last name", { required: true, maxLength: 100 })} />
            <input type='text'
                placeholder='Email'
                {...register("Email", { required: true, pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })} />
            {errors.email && <div>{errors.email.message}</div>}
            <input type='text'
                placeholder='Password'
                {...register('Password', { required: true, minLength: 8, pattern: { value: '(?=.*)(?=.*[a-z])(?=.*[A-Z]).{8,}' }, message: 'Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters' })} />
        </form>

    </>;
}