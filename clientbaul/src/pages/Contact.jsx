import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import { useForm } from "react-hook-form";
import { contactRequest } from "../api/auth";
import { useAuth } from "../context/authContext";

function Contact() {
    const { errors: contactErrors } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleClick = () => {
        if (!contactErrors) return alert("Datos Enviados");
        
        alert("Ingresa los Datos Completos");
    }

    return (
        <div>
            <div className="full_bg">
                <div className="slider_main">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="board">
                                    <h2>INFORMACIÓN GENERAL</h2>
                                    <div className="con">
                                        <img src="\src\docs\dino.png" alt="" width="190px" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about_1">
                <div className="container">
                    <h2>CONTÁCTANOS</h2>
                    <div className="baul_about">
                        <div className="row d_flex">
                            <div className="col-md-6">
                                <div className="content address">
                                    <h4 className="prid_text">Para comunicarnos contigo:</h4>
                                    <p>Proporciona los datos del formulario, de esta manera podremos ponernos en contacto
                                        contigo
                                        lo antes posible para brindarte acceso a nuestros baúles.</p>
                                    <h5>Dirección: <span className="spa">Chalco, C.P. 56600, Col. La Bomba</span> </h5>
                                    <h5>Hora de atención: <span className="spa">Lunes - Viernes de 9 a.m. a 5 p.m.</span></h5>
                                    <h5>Llamanos: <span className="spa">+52 55 1234 5678</span></h5>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="">
                                    <div className="content ">
                                        {contactErrors.map((error, i) => (
                                            <div key={i}>
                                                {['danger'].map((variant) => (
                                                    <Alert key={variant} variant={variant}>
                                                        {error}
                                                    </Alert>
                                                ))}
                                            </div>
                                        ))}
                                        <form onSubmit={handleSubmit(async (values) => {
                                            contactRequest(values)
                                        })}>
                                            <Form.Group className="mb-3">
                                                <Form.Control type="text" name="username" placeholder="Nombre*" {...register("username", { required: true })} />
                                                {errors.username && (<p>Nombre de usuario es necesario</p>)}
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Control type="email" name="email" placeholder="Correo*" {...register("email", { required: true })} />
                                                {errors.username && (<p>Correo es necesario</p>)}
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Control type="phone" name="phone" placeholder="Teléfono*" {...register("phone", { required: true })} />
                                                {errors.username && (<p>Teléfono es necesario</p>)}
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Control type="message" name="message" placeholder="Mensaje..*" {...register("message", { required: true })} />
                                                {errors.username && (<p>Teléfono es necesario</p>)}
                                            </Form.Group>
                                            <Button variant="primary" type="submit" onClick={handleClick}>
                                                Enviar
                                            </Button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;