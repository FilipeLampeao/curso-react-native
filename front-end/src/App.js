import React, {useState, useEffect} from 'react'
import Header from './Components/Header'
import api from './services/api'

function App() {

  const [projects, setProjects] = useState([])

  useEffect(() => {
    api.get('projeto').then(response => {setProjects(response.data)})
  }, [])

  function handleAddProject (){
    setProjects([ ... projects, `Projeto criado em: ${Date.now()}`])
  }

  return (
    <>
      <Header title="React">
        <ul>
          {projects.map(project => (
            <li key = {project.id}>
              {project.title}
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
