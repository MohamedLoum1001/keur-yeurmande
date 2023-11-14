import React from 'react'
import './Bouton.css'
import styled from 'styled-components'

const Button = styled.button`
width: 207px;
height: 41px;
border: 1px solid white;
padding: 10px;
gap: 10px;
background-color: transparent;
`;
const BoutonReutilisable = ({title}) => {
  return (
        <Button>{title}</Button>
  )
}

export default BoutonReutilisable