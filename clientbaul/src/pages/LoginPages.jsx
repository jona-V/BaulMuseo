import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import { useForm } from "react-hook-form";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from 'react';

export function LoginPages() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { signin, errors: signinErrors, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const onSubmit = handleSubmit((data) => {
        signin(data);
    });

    useEffect(() => {
        if (isAuthenticated) navigate("/#/");
    }, [isAuthenticated]);

    return (
        <div className="about layout_padding">
            {signinErrors.map((error, i) => (
                <div key={i}>
                    {['danger'].map((variant) => (
                        <Alert key={variant} variant={variant}>
                            {error}
                        </Alert>
                    ))}
                </div>
            ))}
            <h2 className="">INICIO DE SESIÓN</h2>
            <form onSubmit={onSubmit}>
                <Form.Group className="mb-3">
                    <Form.Control type="email" name="email" placeholder="Correo*" {...register("email", { required: true })} />
                    {errors.username && (<p>Nombre de usuario es necesario</p>)}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="password" name="password" placeholder="Contraseña*" {...register("password", { required: true })} />
                    {errors.username && (<p>Contraseña es necesaria</p>)}
                </Form.Group>
                <Button variant="primary" type="submit">
                    Iniciar Sesión
                </Button>
            </form>
            <p>
                ¿Aún no tienes cuenta? Crea una ahora:  <span className="spa1">
                    <Link className="text-sky-500" to="/#/register">
                        Registrarme
                    </Link> </span>
            </p>
        </div>
    )
}
