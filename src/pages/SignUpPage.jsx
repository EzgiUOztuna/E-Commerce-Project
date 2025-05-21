import { useForm } from 'react-hook-form';

export default function SignUpPage() {
    const { register,
        handleSubmit,
        watch,
        formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const password = watch("password");
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
        <div className='flex items-center bg-[#23A6F0] h-[100vh] '>
            <div className='font-montserrat flex flex-col items-center mx-auto border border-[#BABABA] px-10 py-16 rounded-xl bg-[#FAFAFA] w-[23rem] lg:w-[30rem] '>
                <h1 className='text-4xl font-bold pb-10'>Signup</h1>
                <form className='flex flex-col items-center gap-5'
                    onSubmit={handleSubmit(onSubmit)}>
                    <input className='border border-[#BABABA] rounded-md px-4 py-2 w-[20rem] lg:w-[25rem]'
                        type='text'
                        placeholder='First name'
                        {...register("firstName", { required: true, min: 3, maxLength: 80 })} />
                    <input className='border border-[#BABABA] rounded-md px-4 py-2 w-[20rem] lg:w-[25rem]'
                        type='text'
                        placeholder='Last name'
                        {...register("lastName", { required: true, maxLength: 100 })} />
                    <input className='border border-[#BABABA] rounded-md px-4 py-2 w-[20rem] lg:w-[25rem]'
                        type='text'
                        placeholder='Email'
                        {...register("email", {
                            required: { value: true, message: "Email is required" },
                            pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                        })}
                    />
                    {errors.email && <div className='text-red-500 text-xs'>{errors.email.message}</div>}

                    <input className='border border-[#BABABA] rounded-md px-4 py-2 w-[20rem] lg:w-[25rem]'
                        type='password'
                        placeholder='Password'
                        {...register('password', {
                            required: { value: true, message: "Password is required" },
                            minLength: { value: 8, message: "Password must be at least 8 characters" },
                            pattern: {
                                value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}/,
                                message:
                                    "Must contain at least one number, one uppercase letter, one lowercase letter, one special character, and be at least 8 characters long",
                            },
                        })}
                    />
                    {errors.password && <div className='text-red-500 text-xs'>{errors.password.message}</div>}
                    {/* Confirm Password*/}
                    <input className='border border-[#BABABA] rounded-md px-4 py-2 w-[20rem] lg:w-[25rem]'
                        type='password'
                        placeholder='Confirm Password'
                        {...register('confirmPassword', {
                            required: { value: true, message: "Please confirm your password" },
                            validate: (value) => value === password || "Passwords do not match",
                        })}
                    />
                    {errors.confirmPassword && <div className='text-red-500 text-xs'>{errors.confirmPassword.message}</div>}

                    <button className='border border-[#252B42] bg-[#252B42] font-bold text-[#FFFFFF] rounded-md px-4 py-2 w-[20rem] lg:w-[25rem]'
                        type='submit'>Submit</button>
                </form>

            </div>
        </div>


    </>;
}