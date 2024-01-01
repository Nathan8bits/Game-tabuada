import StyleQuestao from './Questao.module.css'

function Questao() {

    return(
        <div className={StyleQuestao.container}>
            <p>n1 x n2 = 
                <input 
                    placeHolder="resposta"
                    type="number"
                    className={StyleQuestao.number}> 
                </input>
                <button className={StyleQuestao.btnQuestao} >Verificar</button>
            </p>
        </div>
    )
}

export default Questao;