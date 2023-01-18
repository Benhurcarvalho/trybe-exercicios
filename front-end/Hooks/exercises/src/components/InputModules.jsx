import React from 'react'

function InputModules({state}) {
    const { module, setModule } = state;
  return (
    <>
        <label>Módulos</label>
        <label
            htmlFor="fundamentals"
        >Fundamentos:
                <input
                    id="fundamentals"
                    type="radio"
                    value="Fundamentos"
                    name='module'
                    checked={ module === "Fundamentos" }
                    onChange={({ target }) => setModule(target.value)}
                >
                </input>
        </label>
        <label
            htmlFor="frontend"
        >Front-end:
                <input
                    id="frontend"
                    type="radio"
                    value="Front-end"
                    name='module'
                    checked={ module === "Front-end" }
                    onChange={({ target }) => setModule(target.value)}
                >
                </input>
        </label>
        <label
            htmlFor="backend"
        >Back-end:
                <input
                    id="backend"
                    type="radio"
                    value="Back-end"
                    name='module'
                    checked={ module === "Back-end" }
                    onChange={({ target }) => setModule(target.value)}
                >
                </input>
        </label>
        <label
            htmlFor="cd"
        >Ciência da computação:
                <input
                    id="cd"
                    type="radio"
                    value="Ciência da computação"
                    name='module'
                    checked={ module === "Ciência da computação" }
                    onChange={({ target }) => setModule(target.value)}
                >
                </input>
        </label>
    </>
  )
}

export default InputModules;
