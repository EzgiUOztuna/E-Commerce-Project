import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export default function SignUpPage() {
    const [roles, setRoles] = useState([]);

    const { register,
        handleSubmit,
        watch,
        formState: { errors } } = useForm({
            mode: "all"
        });
    console.log(errors);

    const onSubmit = (data) => {
        console.log("Form submitted successfully: ", data);
    }


    const password = watch("password");
    const selectedRole = watch('roles');

    const api = axios.create({ baseURL: 'https://workintech-fe-ecommerce.onrender.com' });
    useEffect(() => {
        api.get('/roles')
            .then(response => {
                setRoles(response.data)
            })
            .catch(error => console.error(error));
    }, []);

    return <>
        <div className='flex items-center bg-[#23A6F0] h-[100vh] '>
            <div className='font-montserrat flex flex-col items-center mx-auto border border-[#BABABA] px-10 py-16 rounded-xl bg-[#FAFAFA] w-[23rem] lg:w-[30rem] '>
                <h1 className='text-4xl font-bold pb-10'>Signup</h1>

                <form className='flex flex-col items-center gap-5'
                    onSubmit={handleSubmit(onSubmit)}>
                    <input className='select-menu '
                        type='text'
                        placeholder='First name'
                        {...register("firstName", { required: true, min: 3, maxLength: 80 })} />
                    <input className='select-menu '
                        type='text'
                        placeholder='Last name'
                        {...register("lastName", { required: true, maxLength: 100 })} />
                    <input className='select-menu '
                        type='text'
                        placeholder='Email'
                        {...register("email", {
                            required: { value: true, message: "Email is required" },
                            pattern: { value: /^[a-zA-Z0–9._%+-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,}$/, message: 'Invalid email address' }
                        })}
                    />
                    {errors.email && <div className='error-text'>{errors.email.message}</div>}

                    {/* Password */}
                    <input className='select-menu '
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
                    {errors.password && <div className='error-text'>{errors.password.message}</div>}

                    {/* Confirm Password */}
                    <input className='select-menu '
                        type='password'
                        placeholder='Confirm Password'
                        {...register('confirmPassword', {
                            required: { value: true, message: "Please confirm your password" },
                            validate: (value) => value === password || "Passwords do not match",
                        })}
                    />
                    {errors.confirmPassword && <div className='error-text'>{errors.confirmPassword.message}</div>}

                    {/* Roles */}
                    <select {...register('roles', { required: true })} className='select-menu text-[#9CA3AF]'>
                        {roles.map((role) => (
                            <option key={role.id} value={role.code}>
                                {role.name}
                            </option>
                        ))}
                    </select>

                    {/* Selected 'STORE' */}
                    {selectedRole === 'store' && (
                        <div className='flex flex-col items-end gap-2'>
                            {/* Store Name*/}
                            <input className='store-select-role'
                                type='text'
                                placeholder='Store Name'
                                {...register('storeName', {
                                    required: true,
                                    minLength: { value: 3, message: 'Name must be at least 8 characters' }
                                })} />
                            {errors.storeName && <div className='error-text'>{errors.storeName.message}</div>}

                            {/* Store Phone*/}
                            <input className='store-select-role'
                                type='text'
                                placeholder='Store Phone'
                                {...register('storePhone', {
                                    required: true,
                                    pattern: {
                                        value: /^5(0[5-7]|[3-5]\d) ?\d{3} ?\d{4}$/,
                                        message: 'Please enter a valid Turkish phone number',
                                    },
                                })} />
                            {errors.storePhone && <div className='error-text'>{errors.storePhone.message}</div>}

                            {/* Store Tax*/}
                            <input className='store-select-role'
                                type='text'
                                placeholder='Store Tax ID'
                                {...register('storeTaxId', {
                                    required: true,
                                    pattern: {
                                        value: /^T\d{4}V\d{6}$/,
                                        message: 'Tax ID must be in format TXXXXVXXXXXX'
                                    },
                                })} />
                            {errors.storeTaxId && <div className='error-text'>{errors.storeTaxId.message}</div>}

                            {/* Store Bank Account*/}
                            <input className='store-select-role'
                                type='text'
                                placeholder='Store Bank Account'
                                {...register('storeBankAccount', {
                                    required: 'Bank account (IBAN) is required',
                                    pattern: {
                                        value: /^[A-Z]{2}\d{2}[A-Z0-9]{11,30}$/,
                                        message: 'Please enter a valid IBAN',
                                    },
                                })} />
                            {errors.storeBankAccount && <div className='error-text'>{errors.storeBankAccount.message}</div>}
                        </div>
                    )}

                    <button className='border border-[#252B42] bg-[#252B42] font-bold text-[#FFFFFF] rounded-md px-4 py-2 w-[20rem] lg:w-[25rem]'
                        type='submit' >Submit</button>
                </form>
            </div>
        </div>
    </>;
}








/*
  https://ozmeneyup60.medium.com/react-jste-form-y%C3%B6netimi-react-hook-form-vs-formik-e6d394f30057
  const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      verifiedPassword: ''
  });
  */