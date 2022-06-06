import React, { useState } from "react";
import "./styles.css"

export default function App() {

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
console.log('testando umas paradas aqui mano velho kk que travada kkk')
  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">

            <span className="login-form-title">Bem vindo de volta!</span>
            <span className="login-form-title logo">
              LSG
            </span>

            <div className="wrap-input">
              <input 
              className={email !== ""? "has-val input":"input"} 
              type="email"
              value={email}
              onChange={e=>setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder = "Email"></span>
            </div>

            <div className="wrap-input">
              <input 
              className={password !== ""? "has-val input":"input"} 
              type="password"
              value={password}
              onChange={e=>setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder = "Password"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">Login</button>
            </div>

            <div className="text-center">
              <span className="txt1">Não possue conta?</span>
              <a href="#" className="txt2">Criar conta.</a>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

