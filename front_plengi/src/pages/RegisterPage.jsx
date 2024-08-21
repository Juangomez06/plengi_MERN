import { useForm } from 'react-hook-form'
import { useAuth } from "../context/AuthContext";
import { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";

function RegisterPage() {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()
    const { signup, isAuthenticated, errors: RegisterErrors } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (isAuthenticated) navigate('/tasks')
    }, [isAuthenticated])

    const onSubmit = handleSubmit(async (values) => {
        signup(values)
    })

    return (
        <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
            <div className='bg-zinc-800 max-w-md p-10 rounded-md'>
                {
                    RegisterErrors.map((errors, i) => (
                        <div className='bg-red-500 p-2 text-white' key={i}>
                            {errors}
                        </div>
                    ))
                }

                <h1 className='text-2xl font-bold'>Registrate</h1>

                <form onSubmit={onSubmit}>

                    <input type="text" {...register("username", { required: true })}
                        className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                        placeholder='Username'
                    />
                    {
                        errors.username && (
                            <p className='text-red-500'>El nombre de usuario es requerido </p>
                        )
                    }
                    <input type="email" {...register("email", { required: true })}
                        className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                        placeholder='Email'
                    />
                    {
                        errors.email && (
                            <p className='text-red-500'>El correo es requerido </p>
                        )
                    }
                    <input type="password" {...register("password", { required: true })}
                        className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                        placeholder='Password'
                    />
                    {
                        errors.password && (
                            <p className='text-red-500'>La contraseña es requerida </p>
                        )
                    }

                    <button type='sumbit'
                    className='bg-sky-500 text-white px-4 py-2 rounded-md my-2'
                    >Register</button>

                </form>

                <p className='flex gap-x-2 justify-between'>
                    ¿Ya tienes una cuenta? <Link to="/login"
                        className='text-sky-500'>Inicia sesión</Link>
                </p>

            </div>
        </div>
    )
}

export default RegisterPage