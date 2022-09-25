import React from "react";
import "./HStyle.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

class Headers extends React.Component{

    render(){
      return (


        
        <div className="header">
          <p className="pp">Uma seleção de produtos </p>
          <h3>especial para você</h3>
          <p className="sp">Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</p>
         
          <ButtonGroup aria-label="Basic example">
            <Button  variant="secondary">Conheça a Linx</Button>
            <Button variant="secondary">Ajude o algorítimo</Button>
            <Button  variant="secondary">Seus produtos</Button>
            <Button  variant="secondary">Compartilhe</Button>
        </ButtonGroup>
               
        </div>
      )
    }
    


}

export default Headers;