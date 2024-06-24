import { useState } from "react"
import './home.css'
import { Link } from "react-router-dom";
import { auth } from "../../firebaseConnection";
import { signInWithEmailAndPassword } from "firebase/auth";

import { useNavigate } from "react-router-dom";

export default function Home(){

  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');
  const navigate = useNavigate();

  async function handleLogin(e){
    e.preventDefault();
    
    if(email !== '' && password !== ''){
      
      await signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigate('/admin', {replace: true})
        })
        .catch(() =>{
          console.log('erro ao fazer login');
        })

    }else{
      alert('nao passou');
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