import React from 'react'

const Card = ({ content: { nome, tipo, numero } }) => {
  return <>
    <dt>#: {numero}</dt>
    <dt>Nome: {nome}</dt>
    <dd>Tipo: {tipo}</dd>
  </>
}

export default Card