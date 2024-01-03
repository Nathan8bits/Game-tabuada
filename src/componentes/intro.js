import Styles from './Intro.module.css' 

function Intro({setQnt, btnIntro, setI1, setI2}) {
                //dessa forma desestruturamos o objeto passado em variaveis
    return (
        <form
        onClick = {btnIntro} 
        className={Styles.container}>
            <h1>Tabuada Game</h1>
            <label >Quantas questões?
                <input 
                    className={Styles.number}
                    type="number"
                    id="qntQuestoes"
                    name="qntQuestoes"
                    onChange={ (e) => setQnt(e.target.value)} />
            </label> 
            <label >Qual o intervalo?
                Entre
                <input 
                    placeholder='1'
                    onChange={(e) => setI1(e.target.value)}
                    className={Styles.number} 
                    type="number" 
                    id="i1" 
                    name="i1" />
                e
                <input 
                    placeholder='10'
                    onChange={(e) => setI2(e.target.value)}
                    className={Styles.number} 
                    type="number" 
                    id="i2" 
                    name="i2" />
            </label> 

            <input type="submit" 
                   className={Styles.btnIntro}
                   value="cadastrar"/>
        </form>
    )
}

export default Intro;