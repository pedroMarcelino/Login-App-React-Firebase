import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebaseConnection";
import { createUserWithEmailAndPassword } from "firebase/auth";



export default function Register(){

  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');
  const navigate = useNavigate();

  async function handleRegister(e){
    e.preventDefault();
    
    if(email !== '' && password !== ''){
      await createUserWithEmailAndPassword(auth, email, password)
        .then(()=>{
          navigate('/admin', {replace: true})
        })
        .catch(()=>{
          console.log("erro ao fazer login");
        })
    }else{
      alert('nao pasou');
    }

  }

  return(
    <div className="home-container">
      <h1>Cadastre-se</h1>
      <span>Vamos criar sua conta!</span>

      <form className="formClass" onSubmit={handleRegister}>
        <input type="text" placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="*******" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="submite">Cadastrar</button>
      </form>
      <Link className="button-link" to='/'>
        Já possue uma conta? Faça o login!
      </Link>
    </div>
  )
}