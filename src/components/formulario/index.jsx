import { useState } from "react"

const Formulario = () => {
    let [materiaA, setMateriaA] = useState(0);
    let [materiaB, setMateriaB] = useState(0);
    let [materiaC, setMateriaC] = useState(0);

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (medio >= 7 ) {
            return (
                <p>Você foi aprovado</p>
            )
        } else {
            <p>Você não foi aprovado</p>
        }
    }

    return( 
        <form>
            <input type="number" placeholder="Nota materia A" onChange={evento => setMateriaA(evento.target.value)} />
            <input type="number" placeholder="Nota materia B" onChange={evento => setMateriaB(evento.target.value)}/>
            <input type="number" placeholder="Nota materia C" onChange={evento => setMateriaC(evento.target.value)}/>
            {renderizaResultado()}
        </form>
    )
}

export default Formulario