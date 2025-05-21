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
        <div className='font-montserrat flex flex-col items-center mx-auto mt-10 border border-[#BABABA] w-[30rem] px-10 py-16 rounded-xl bg-[#FAFAFA]'>
            <h1 className='text-4xl font-bold pb-10'>Signup</h1>
            <form className='flex flex-col items-center gap-5'
                onSubmit={handleSubmit(onSubmit)}>
                <input className='border border-[#BABABA] rounded-md w-[25rem] px-4 py-2'
                    type='text'
                    placeholder='First name'
                    {...register("First name", { required: true, min: 3, maxLength: 80 })} />
                <input className='border border-[#BABABA] rounded-md w-[25rem] px-4 py-2'
                    type='text'
                    placeholder='Last name'
                    {...register("Last name", { required: true, maxLength: 100 })} />
                <input className='border border-[#BABABA] rounded-md w-[25rem] px-4 py-2'
                    type='text'
                    placeholder='Email'
                    {...register("Email", { required: true, pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })} />
                {errors.email && <div>{errors.email.message}</div>}
                <input className='border border-[#BABABA] rounded-md w-[25rem] px-4 py-2'
                    type='text'
                    placeholder='Password'
                    {...register('Password', { required: true, minLength: 8, pattern: { value: '(?=.*)(?=.*[a-z])(?=.*[A-Z]).{8,}' }, message: 'Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters' })} />
                {errors.password && <div>{errors.password.message}</div>}
                <button className='border border-[#252B42] bg-[#252B42] font-bold text-[#FFFFFF] rounded-md w-[25rem] px-4 py-2'
                    type='submit'>Submit</button>
            </form>

        </div>


    </>;
}