import './App.css';
import FirstComponent from './components/FirstComponent';
import MyComponent from './components/MyComponent';
import TemplateExpression from './components/TemplateExpression';
import Event from './components/Event';
import Challenge from './components/Challenge';

function App() {
  return (
    <div className="App">
     <h1>Fundamentos do react</h1>
     <FirstComponent/>
     <TemplateExpression/>
     <MyComponent/>
     <Event/>
     <div className='div1'>
     <p>Elemento HTML criado com sucesso!!</p>
     </div>
     <Challenge/>
    </div>
  );
}

export default App;
