import React from 'react';
import { useState } from 'react';
import './App.css';
import logo from './static/img/kcell.a29d88e4f4df717462940e2b88d2a415.svg'
import settings from './static/img/setting.8793bcbbd47798309a59a404cb8ac7e8.svg'


export const App = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

    const afterSubmission = (event) => {
        event.preventDefault();
        login()
    }

    const login = () => {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        }
        fetch('https://localhost:5000/api/Login/auth', options)
    }

  return (
    <div>
      <header className="header">
        <div className="header-container">
          <a className="header-home" href="/">
            <img src={logo} className="header-logo" alt='header logo' />
          </a>
          <button className="header-settings">Настройки
            <img src={settings} className="" alt='setting' />
          </button>
        </div>
      </header>
      <main className="auth-page">
              <form className="auth-page-form" id="formId" onSubmit={afterSubmission}>
          <h1>Вход в кабинет</h1>
          <label className="input">
            <span className="input-title">Логин</span>
                      <input type="text" className="" id="username" onChange={e => setUsername(e.target.value)} />
          </label>
          <label className="input">
            <span className="input-title">Пароль</span>
                      <input type="password" className="" id="password" onChange={e => setPassword(e.target.value)} />
          </label>
          <input className="button-base" type="submit" value="Войти"/>
        </form>
      </main>
    </div>
  );
}

export default App;
