import React, {userState, useState} from 'react'
import Header from './Components/Header'

function App() {

  const [projects, setProjects] = useState(["Facebook", "Uber"])

  function handleAddProject (){
    setProjects([ ... projects, `Projeto criado em: ${Date.now()}`])
  }

  return (
    <>
      <Header title="React">
        <ul>
          {projects.map(project => (
            <li key = {project}>
              {project}
            </li>
          ))}
        </ul>
      </Header>

      <button type="button" onClick={handleAddProject}>
        Adicionar Projeto
      </button>
    </>
  )
}

export default App;
