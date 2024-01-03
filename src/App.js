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

  
  for(let i=0; i<qnt; i++) {
    if(i<qnt) {
      questoes[i] = i
      console.log("[forApp]", qnt, questoes[i], i)
    }
  }

  function cadastrar(e) {
    e.preventDefault()//um form envia pro backEnd e recarrega 
                        //a pagina. esse comando para esse fluxo para 
                        //exexutar oq esta logo em seguida 
    console.log(`questoes:${qnt}. Intervalo: entre ${i1} e ${i2}`)
  }

  return (
    <div className="App">
      <Intro
      btnIntro={cadastrar} 
      setI1={setI1} 
      setI2={setI2} 
      setQnt = {setQnt}/>

      <Questoes 
        i1={i1} 
        i2={i2} 
        questoes={questoes}/>
      
    </div>
  );
}

export default App;