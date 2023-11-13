import React from 'react'
import styled from 'styled-components';
import { Col, Row, Flex, Segmented } from 'antd';
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import google from "../../assets/google.png";
import vector from "../../assets/Vector.png";
import wifi from "../../assets/wifi.png";
import linkdin from "../../assets/linkdin.png";
import email from "../../assets/email.png";

const Hearder = () => {

    const Wrapper = styled.section`
  background: #ff0390;
  color: #fff;
`;
    const Text = styled.p`
    font-familly: Roboto;
    font-size: 12px;
    margin-left: 20%
`;
    const Image = styled.img`
    width: 20px;
    heigth: 20px 
    margin-left: 10px
    `;

    return (
        <Wrapper>
            <Row>
                <Col span={12}>

                    <Text>Nous suivre :
                        <Image src={facebook} alt="icon-facebook" />
                        <Image src={twitter} alt="icon-twitter" />
                        <Image src={google} alt="icon-google" />
                        <Image src={vector} alt="icon-vector" />
                        <Image src={wifi} alt="icon-wifi" />
                        <Image src={linkdin} alt="icon-linkdin" />
                    </Text>

                </Col>
                <Col span={12}>
                <Image src={email} alt="icon-email" /><Text>Address email :</Text>
                </Col>
            </Row>
        </Wrapper>
    )
}

export default Hearder