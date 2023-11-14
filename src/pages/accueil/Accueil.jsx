import React from 'react'
import './Accueil.css'
import { Col, Row } from 'antd'
import styled from 'styled-components'
import BoutonReutilisable from '../../components/Bouton/BoutonReutilisable'

const Title = styled.h1`
font-family: "Raleway";
color: #fff;
text-align: left;
font-size: 40px;
font-weight: 700;
line-height: 48px;
text-transform: uppercase;
`;
const DIV = styled.div`
dispaly: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const Btn = styled.button`
dispaly: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
`;
const Text = styled.p`
font-family: "Roboto";
color: #fff;
font-size: 15px;
font-weight: 400;
line-height: 22.5px;
text-transform: uppercase;
text-align: justify;
`;

const Accueil = () => {
  return (
    <section className='section'>
      <Row>
        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
          <DIV>
            <Title>
              Nous pouvons aider quelqu'un
            </Title>
            <Text>
              L'orphelinat "Keur Yeurmandé" est un orphelinat que nous avons eu le privilège de découvrir lors <br />
              d'une activité de bénévolat organisée par les Bakelistes. Aujourd'hui, en tant que Bakeli School<br />
              of Technology, une école de formation dans le domaine du numérique, nous nous engageons<br />
              à apporter notre soutien à cet orphelinat en favorisant sa digitalisation, notamment dans le<br />
              traitement de leurs images numériques et la gestion de leurs demandes de soutien.<br />
              Cette note conceptuelle a été élaborée dans le but de concrétiser cette vision et d'assister<br />
              l'orphelinat dans la création d'un site internet dédié à sa cause.<br />
            </Text>
          </DIV>
          <Btn>
          <BoutonReutilisable title="FAIRE UN DON MAINTENANT"/>
          <BoutonReutilisable title="APPRENDRE ENCORE PLUS"/>

          </Btn>

        </Col>

      </Row>
    </section>
  )
}

export default Accueil