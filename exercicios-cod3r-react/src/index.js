import React from 'react'
import ReactDOM from 'react-dom'
/* import PrimeiroComponente from './components/PrimeiroComponente'
import {CompA, CompB as B} from './components/DoisComponente'
import MultiElementos from './components/MultiElementos' */
// import FamiliaVeloso from './components/FamiliaVeloso'
// import Familia from './components/Familia'
// import Membro from './components/Membro'
// import ComponenteComFuncao from './components/ComponenteComFuncao'
import Pai from './components/pai'
const elemento = document.getElementById('root')

ReactDOM.render(
  <div>
    <Pai />


    {/*
      <Familia sobreNome="Veloso">

        <ComponenteComFuncao />
        <Membro nome="Lino" />
        <Membro nome="Karla" />
        <Membro nome="Cláudio" />

      </Familia>
    */}



    {/* <FamiliaVeloso sobrenome="Veloso" /> */}
    {
/* <PrimeiroComponente valor = "bom dia" abcd = 'abcd coisa nenhuma'/>
<CompA valor = 'Olá, eu sou o A'></CompA>
<B valor = 'B na área'></B> 
 */}

  </div>
  , elemento)
