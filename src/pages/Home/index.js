import { useState } from "react"
import './home.css'
import { Link } from "react-router-dom";

export default function Home(){

  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');

  function handleLogin(e){
    e.preventDefault();
    
    if(email !== '' && password !== ''){
      alert(email + password);
    }else{
      alert('nao pasou');
    }

  }

  return(
    <div className="home-container">
      <h1>Lista de Tarefas</h1>
      <span>Gerencie sua lista de tarefas!</span>

      <form className="formClass" onSubmit={handleLogin}>
        <input type="text" placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="*******" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="submite">Acessar</button>
      </form>
      <Link className="button-link" to='/register'>
        Não possue cadastro ? Registre-se agora mesmo!
      </Link>
    </div>
  )
}