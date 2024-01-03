import './App.css';
import Intro from './componentes/intro';
import Questao from './componentes/Questao';
import Questoes from './componentes/Questoes';
import {useState} from 'react'

function App() {

  const [qnt = 0, setQnt] = useState()
  const [i1 =1, setI1] = useState()
  const [i2=10, setI2] = useState()
  var questoes = []
  var q = 0

  for(let i=0; i<qnt; i++) {
    if(i<qnt) {
      questoes[i] = i
    }
    console.log("[for]", qnt, questoes[i], i)
  }

  /*
  questoes.forEach(function(questao, i) {
    questoes[i] = i
    console.log('[forEach]', questao, i);
  })
  */
  
  var introVisible = 1


  function btnIntro() {
    cadastrar()
    //introVisibleAltered()
  }

  function cadastrar(e) {
    e.preventDefault()//um form envia pro backEnd e recarrega 
                        //a pagina. esse comando para esse fluxo para 
                        //exexutar oq esta logo em seguida 
    console.log(`visible ${introVisible} questoes:${qnt}. Intervalo: entre ${i1} e ${i2}`)
    //gerarQuestoes()
    if( q== 0) {
      q = 1
    } else {
      q = 0
    }
  }

  function introVisibleAltered () {
    console.log(`visible ${introVisible}`)
    introVisible = 0
  }

  function gerarQuestoes() {
    return (
      <Questoes 
        i1={i1} 
        i2={i2} 
        questoes={questoes}/>
    )
  }

  return (
    <div className="App">

      {introVisible == 1 &&
        <Intro
        introVisibleAltered = {introVisibleAltered}
        btnIntro={cadastrar} 
        setI1={setI1} 
        setI2={setI2} 
        setQnt = {setQnt}/>
      }     

      {
        //gerarQuestoes()
        <Questoes 
          i1={i1} 
          i2={i2} 
          questoes={questoes}/>
      }

      
    </div>
  );
}

export default App;