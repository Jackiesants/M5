import React from "react";
import "./Compartilhar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

//import { ErrorMessage } from "@hookform/error-message";
import {object, string} from "yup"

const schema = object ({
name: string().required("Campo nome obrigatorio"),
email: string().required("Campo email obrigatorio"),
})

const Compartilhar = () => {
    const data = [];
    const { register, handleSubmit: onSubmit, watch, formState: { errors } } = useForm({resolver: yupResolver(schema)});
    const handleSubmit = (data) => { 
      console.log (data)
    }
    console.log(errors)

      return (
        
        <div className="d-flex flex-column align-items-center"> 
            <p className="Comp-Tit"> Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora! </p>
             <Form className="d-flex flex-row">
                 <Form.Group className="Friend mb-5" controlId="formBasicPassword">
                    <Form.Label className="Comp-label"> Nome do seu amigo:</Form.Label >
                    <Form.Control type="text" placeholder="Nome Completo" {...register("name")}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" placeholder="Email" name="email" {...register("email")} />  
                <span className="error">{errors?.email?.message}</span>
   
            </Form.Group>

           
    </Form>
    <Button className="Btn-Email" variant="primary" type="submit" onClick={onSubmit(handleSubmit)}>
              Enviar Agora
            </Button>
        </div>

      )
    }
    


export default Compartilhar;