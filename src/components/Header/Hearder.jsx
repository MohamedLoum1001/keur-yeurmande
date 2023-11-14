import React from 'react'
import styled from 'styled-components';
import { Col, Row } from 'antd';
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import google from "../../assets/google.png";
import vector from "../../assets/Vector.png";
import wifi from "../../assets/wifi.png";
import linkdin from "../../assets/linkdin.png";
import email from "../../assets/email.png";
import telephone from "../../assets/telephone.png";

const Hearder = () => {

    const Wrapper = styled.section`
  background: #ff0390;
  color: #fff;
  width: 100%
`;
    const Text = styled.p`
    font-family: Roboto;
    font-size: 12px;
    margin-left: 5px;
    display: flex;
    align-items: center; 
    justify-content: center;
`;
    const Image = styled.img`
    width: 10px;
    height: 10px;
    margin-left: 5px;
    `;
    const Div = styled.div`
    display: flex; 
    flex-direction: row;
    align-items: center;  // Ajoutez cette ligne
    justify-content: center;
    `;

    return (
        <Wrapper>
            <Row hidden={{ sm: true, xs: true }}>
                <Col xl={12} lg={12} md={12} sm={0} xs={0}>
                    <Div>
                        <Text>Nous suivre :</Text>
                        <Image src={facebook} alt="icon-facebook" />
                        <Image src={twitter} alt="icon-twitter" />
                        <Image src={google} alt="icon-google" />
                        <Image src={vector} alt="icon-vector" />
                        <Image src={wifi} alt="icon-wifi" />
                        <Image src={linkdin} alt="icon-linkdin" />
                    </Div>


                </Col>
                <Col xl={12} lg={12} md={12} sm={0} xs={0}>
                    <Div>
                        <Image src={email} alt="icon-email" /><Text>Email : demo@gmail.com</Text>
                        <Image src={telephone} alt="icon-telephone" /><Text>Téléphone : 771234567</Text>
                    </Div>
                </Col>
            </Row>
        </Wrapper>
    )
}

export default Hearder