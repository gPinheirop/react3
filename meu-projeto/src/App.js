import './App.css';
import Evento from './components/Evento';
import Form from './components/Form';
import List from './components/List';
import Pessoa from './components/Pessoa';

function App() {
  return (
    <div className="App">
      <h1>Salve</h1>
      <Pessoa
        nome = "Renatin"
        idade ="35"
        profissao = "manobrista de bitrem"
        foto = "https://via.placeholder.com/150"
      />
      <Evento numero ={1}/>
      <List />
      <Form />
    </div>
  );
}

export default App;
