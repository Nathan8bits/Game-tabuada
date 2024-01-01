import Styles from './Intro.module.css' 

function Intro() {
    //dessa forma desestruturamos o objeto passado em variaveis
    return (
        <div className={Styles.container}>
            <h1>Tabuada Game</h1>
            <label for="qntQuestoes">Quantas questões?
                <input className={Styles.number} type="number" id="qntQuestoes" name="qntQuestoes" />
            </label> 
            <label for="Intervalo">Qual o intervalo?
                Entre
                <input className={Styles.number} type="number" id="i1" name="intervalo1" />
                e
                <input className={Styles.number} type="number" id="i1" name="intervalo1" />
            </label> 

            <button className={Styles.btnIntro}>OK</button>
        </div>
    )
}

export default Intro;