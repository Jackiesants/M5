import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  "./EmailStyle.css"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

//import { ErrorMessage } from "@hookform/error-message";
import {object, string, number} from "yup"

const schema = object ({
name: string().required("Campo nome obrigatorio"),
email: string().required("Campo email obrigatorio"),
cpf: number().required().min(11, "Pelo menos 11 caracteres, sem espaços ou pontos"),
sexo: string().required("Marcar opção obrigatória")


})

const Email = () => {
    const data = [];
    const { register, handleSubmit: onSubmit, watch, formState: { errors } } = useForm({resolver: yupResolver(schema)});
    const handleSubmit = (data) => { 
      console.log (data)
    }
    console.log(errors)

    
      return (
        <Container className="EmailContainer">
      <Row className="d-flex align-items-center justify-content-center flex-wrap ">
        <Col className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
    
            <h2 className="EmailTit"> Ajude o algorítimo a ser mais certeiro</h2>
            <p className="EmailPar">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies tellus nec mi porta convallis sollicitudin eu urna. Mauris rhoncus erat sed interdum dignissim. Suspendisse semper pretium consectetur. Praesent bibendum arcu risus, sit amet iaculis ex tempus quis. Cras et erat ut tellus vulputate tincidunt. Aenean lacinia euismod augue vel egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum vel urna tortor. Vivamus et arcu non felis tristique eleifend. <br></br><br></br> Morbi eu condimentum urna. Curabitur eu magna eget turpis condimentum ultrices. Suspendisse quis lorem ultricies, pulvinar purus sed, egestas erat. Etiam ultricies a ante vehicula pharetra. Quisque ut neque mattis, consequat velit ut, ultrices orci. Nulla varius elementum erat vel pharetra. Aenean sit amet nisi diam. Morbi viverra, magna ac luctus commodo, odio ante suscipit libero, at mattis augue est vel metus.</p>
      
        
        </Col>
        <Col className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        
        <Form onSubmit={onSubmit(handleSubmit)}>
                 <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Seu nome:</Form.Label>
                    <Form.Control type="text" placeholder="Nome Completo" {...register("name")}/>
                    <span className="error">{errors?.name?.message}</span>
                </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" placeholder="Email" name="email" {...register("email")} />  
                <span className="error">{errors?.email?.message}</span>
   
            </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>CPF</Form.Label>
                    <Form.Control type="text" placeholder="CPF"  {...register("cpf")}  />
                    <span className="error">{errors?.cpf?.message}</span>

                </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicCheckbox" >
            <Form.Check inline type="radio" label="Masculino" {...register("sexo")}/>  
            <Form.Check inline type="radio" label="Feminino" {...register("sexo")}/>
            <span className="error">{errors?.sexo?.message}</span>

            </Form.Group>
      <Button className="Btn-Email" variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
               
        
        </Col>
      </Row>

    </Container>


        





          
     
      )
    }
    




export default Email;