import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function SignUpPage() {
    const [roles, setRoles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmError, setConfirmError] = useState('');
    const navigate = useNavigate();

    const { register,
        handleSubmit,
        watch,
        formState: { errors } } = useForm({
            mode: "all"
        });

    const password = watch("password");
    const selectedRole = watch('role_id');
    console.log("Selected Role: ", selectedRole);

    const api = axios.create({ baseURL: 'https://workintech-fe-ecommerce.onrender.com' });

    const onSubmit = (data) => {
        console.log("Form submitted successfully: ", data);
        setLoading(true);

        /*api.post('/signup', data)
            .then(response => {
                //console.log("Form submitted successfully: ", response.data);
                navigate(-1, {
                    state: {
                        warning: 'You need to click link in email to activate your account!',
                    }
                });
            })
            .catch(error => {
                setLoading(false);
                console.error('Error: ', error.response?.data || error.message)
            })*/
    }

    useEffect(() => {
        api.get('/roles')
            .then(response => {
                setRoles(response.data)
            })
            .catch(error => console.error(error));
    }, []);

    const handleConfirmPasswordChange = (e) => {
        const value = e.target.value;
        setConfirmPassword(value);

        if (value !== password) {
            setConfirmError('Passwords do not match');
        } else {
            setConfirmError('');
        }
    };

    return <>
        <div className='flex items-center bg-[#23A6F0] h-[100vh] '>
            <div className='font-montserrat flex flex-col items-center mx-auto border border-[#BABABA] px-10 py-16 rounded-xl bg-[#FAFAFA] w-[23rem] lg:w-[30rem] '>
                <h1 className='text-4xl font-bold pb-10'>Signup</h1>

                <form className='flex flex-col items-center gap-5'
                    onSubmit={handleSubmit(onSubmit)}>
                    <input className='select-menu '
                        type='text'
                        placeholder='Full Name'
                        {...register("name", { required: true, min: 3, maxLength: 80 })} />
                    {/*<input className='select-menu '
                        type='text'
                        placeholder='Last name'
                        {...register("lastName", { required: true, maxLength: 100 })} />*/}
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
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                    />
                    {confirmError && <div className='error-text'>{confirmError}</div>}

                    {/* Roles */}
                    <select {...register('role_id', { required: true })} className='select-menu text-[#9CA3AF]'>
                        {roles.map((role) => (
                            <option key={role.id} value={role.id}>
                                {role.name}
                            </option>
                        ))}
                    </select>

                    {/* Selected 'STORE' */}
                    {selectedRole === '2' && (
                        <div className='flex flex-col items-end gap-2'>
                            {/* Store Name*/}
                            <input className='store-select-role'
                                type='text'
                                placeholder='Store Name'
                                {...register('name', {
                                    required: true,
                                    minLength: { value: 3, message: 'Name must be at least 8 characters' }
                                })} />
                            {errors.name && <div className='error-text'>{errors.name.message}</div>}

                            {/* Store Phone*/}
                            <input className='store-select-role'
                                type='text'
                                placeholder='Store Phone'
                                {...register('phone', {
                                    required: true,
                                    pattern: {
                                        value: /^5(0[5-7]|[3-5]\d) ?\d{3} ?\d{4}$/,
                                        message: 'Please enter a valid Turkish phone number',
                                    },
                                })} />
                            {errors.phone && <div className='error-text'>{errors.phone.message}</div>}

                            {/* Store Tax*/}
                            <input className='store-select-role'
                                type='text'
                                placeholder='Store Tax ID'
                                {...register('tax_no', {
                                    required: true,
                                    pattern: {
                                        value: /^T\d{4}V\d{6}$/,
                                        message: 'Tax ID must be in format TXXXXVXXXXXX'
                                    },
                                })} />
                            {errors.tax_no && <div className='error-text'>{errors.tax_no.message}</div>}

                            {/* Store Bank Account*/}
                            <input className='store-select-role'
                                type='text'
                                placeholder='Store Bank Account'
                                {...register('bank_account', {
                                    required: 'Bank account (IBAN) is required',
                                    pattern: {
                                        value: /^[A-Z]{2}\d{2}[A-Z0-9]{11,30}$/,
                                        message: 'Please enter a valid IBAN',
                                    },
                                })} />
                            {errors.bank_account && <div className='error-text'>{errors.bank_account.message}</div>}
                        </div>
                    )}

                    <button className='border border-[#252B42] bg-[#252B42] font-bold text-[#FFFFFF] rounded-md px-4 py-2 w-[20rem] lg:w-[25rem]'
                        type='submit' disabled={loading}>{loading ? 'Sending...' : 'Submit'}</button>
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