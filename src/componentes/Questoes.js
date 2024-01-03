import Questao from "./Questao";

function Questoes({questoes, i1, i2}) {

    return (
        <>
            {questoes.length > 0 ? (
                questoes.map((questao, index) => <Questao index={questoes[index]+1} key={index} i1 = {i1} i2 ={i2} />)
            ) : (
                <p>Numero de questoes nao declarada!</p>
            )} 
        </>
    )
}

export default Questoes;