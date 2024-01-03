import StyleQuestao from './Questao.module.css'

function Questao({key, index, i1, i2}) {
    var n1
    var n2

    function verificar() {
        var r = document.querySelector("#resposta")
        var id = document.querySelector("#Questao")
        var btnVerificar = document.querySelector('#btnVerificar')
        
        if(r.value == n1*n2) {
            id.style.backgroundColor = "green"
        }
        else {
            id.style.backgroundColor = "red"
        }

        r.disabled = true
        btnVerificar.disabled = true
        console.log(`verificar ${r.value}`)

    }

    function gerarQuestao() {
        return numAleatorio(parseInt(i1), parseInt(i2))
    }

    function numAleatorio(max, min) {
        return Math.floor((Math.random() * (max-min)) + min)
    }

    return(
        <div id="Questao" className={StyleQuestao.container}>
            <p> {index +1}) {n1 = gerarQuestao(n1)} x {n2 = gerarQuestao(n2)} = 
                <input 
                    id = "resposta"
                    placeholder='resposta'
                    type="number"
                    className={StyleQuestao.number}> 
                </input>
                <button 
                    onClick={verificar}
                    id = "btnVerificar"
                    className={StyleQuestao.btnQuestao} >Verificar</button>
            </p>
        </div>
    )
}

export default Questao;