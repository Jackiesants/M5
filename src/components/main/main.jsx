import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Email from '../email/Email';
import "./StyleMain.css"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//const [page, setPage] = useState(1)

function Main(){

    const [elementos, setElemento] = useState([])
    const [pages, setPages] = useState(1)

    
    useEffect(()=>{
      const fetchR = async () => {
        const url =  `https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${pages}`
        const resposta = await fetch(url)
        const data = await resposta.json()
       // setElemento(data.products);
        setElemento([...elementos, ...data.products]);

        //console.log(data.products)
      }
      fetchR();
      
      
    }, [pages])    

    
      return (
        
        <main > 
            <Email/>
          <div className="line"> 
            <span className="lineRight"></span>
          <p className="text-div">Sua seleção especial</p>
          <span className="lineRight"></span>
          </div>
           <Container className="d-flex flex-wrap">
           <Row> 
           {
                    elementos.map((elemento) => {
                      return ( 
                            <Col  className="Card-Columns col-xs-6 col-sm-6 col-md-3 col-lg-3 col"> 
                        <Card key={elemento.id} className="Card-box">
                        <Card.Img variant="top" src={elemento.image} />
                        <Card.Body>
                          <Card.Title className="Card-Title" >{elemento.name}</Card.Title>
                          <Card.Text className="Card-Desc">
                            {elemento.description}
                          </Card.Text>
                          <Card.Text className="values">
                          <p className="oldValue"> De: R${elemento.oldPrice} </p> 
                          <p className="newValue"> De: R${elemento.price} </p>  
                          <p className="parcelas"> ou {elemento.installments.count}x de R${elemento.installments.value} </p>

                          </Card.Text>
                          <Button variant="secondary" className="btn-comprar" >Comprar</Button>
                        </Card.Body>
                      </Card>
                      </Col>
                      
                      
                          )

                    }
                   
                    )}

        
</Row>
<Row className="btn-row"> 
  <Col className="btn-col"> 
  <Button variant="secondary" className="Mais-Produtos"  onClick={() => setPages(pages + 1)} >Ainda mais produtos aqui!</Button>
 </Col>

</Row>

</Container>
<div className="line"> 
            <span className="lineRight"></span>
          <p className="text-div">Compartilhe a novidade</p>
          <span className="lineRight"></span>
          </div>
            
        </main>
       
        
      )
    }
    



export default Main;