import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import { useForm } from "react-hook-form";
import { useAuth } from "../context/authContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function RegisterPages() {
    const { register,
        handleSubmit,
        formState: { errors }, } = useForm();

    const { signup, isAuthenticated, errors: registerErrors } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) navigate("/#/");
    }, [isAuthenticated]);

    const onSubmit = handleSubmit(async (values) => {
        signup(values);
    });
    return (
        <div className="about layout_padding">
            {registerErrors.map((error, i) => (
                <div key={i}>
                    {['danger'].map((variant) => (
                        <Alert key={variant} variant={variant}>
                            {error}
                        </Alert>
                    ))}  
                </div>
            ))}
            <h2 className="">REGISTRO</h2>
            <form onSubmit={onSubmit}>
                <Form.Group className="mb-3">
                    <Form.Control type="text" name="username" placeholder="Nombre*" {...register("username", { required: true })} />
                    {errors.username && (<p>Nombre de usuario es necesario</p>)}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="email" name="email" placeholder="Correo*" {...register("email", { required: true })} />
                    {errors.username && (<p>Correo es necesario</p>)}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="password" name="password" placeholder="Contraseña*" {...register("password", { required: true })} />
                    {errors.username && (<p>Contraseña es necesaria</p>)}
                </Form.Group>
                <Button variant="primary" type="submit">
                    Registrarme
                </Button>
            </form>
            <p>
                ¿Ya tienes una cuenta? Ingresa ahora:  <span className="spa1">
                    <Link className="text-sky-500" to="/#/login">
                        Iniciar sesión
                    </Link> </span>
            </p>
        </div>
    );
}

export default RegisterPages;