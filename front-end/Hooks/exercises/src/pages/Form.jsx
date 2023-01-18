import React, { useState } from 'react'

import InputAge from "../components/InputAge";
import InputCity from "../components/InputCity";
import InputModules from '../components/InputModules';
import InputName from "../components/InputName";

function Form() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [city, setCity] = useState('');
    const [module, setModule] = useState();
    // console.log(name)
    // console.log(age)
    // console.log(city)
    // console.log(module)
    

  return(
      (<>
        <h1>Exercício Form Hooks</h1>
            <form className='Form'>
                <fieldset>
                    <legend>Dados pessoais</legend>
                    <InputName state={ { name, setName } } />
                    <InputAge state={ { age, setAge } } />
                    <InputCity state={ { city, setCity } } />
                    <InputModules state={ { module, setModule } } />
                </fieldset>
                    <button
                    type='submit'
                    onClick={(ev) => {
                        ev.preventDefault();
                        setName('');
                        setAge('')
                        setCity('')
                        setModule()
                        alert('Eviado com sucesso');

                    }}
                    >Enviar</button>
            </form>
      </>
      )
  ) 
}

export default Form;
