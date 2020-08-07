import React, {useState} from 'react'
import PageDefault from '../../../components/PageDefault'
import {Link} from 'react-router-dom'
import FormField from '../../../components/FormField'

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: ''
  }
  const [values, setValues] = useState(valoresIniciais)
  const [categorias, setCategorias] = useState([])

  const setValue = (chave, valor) => {
    setValues(
      {
        ...values,
        [chave]: valor
      }
    )
  }
  const handleChange = (e) => {
    setValue(e.target.getAttribute('name'), e.target.value)
  }
  return (
    <PageDefault>
      <h1>Cadastro de categoria: {values.nome}</h1>
      <Link to="/">Ir para página inicial</Link>
      <form onSubmit={(e) => {
        e.preventDefault()
        setCategorias([...categorias, values])
        setValues(valoresIniciais)
      }}>
        <FormField type="text" name="nome" label="Nome da categoria : " value={values.nome} onChange={handleChange} />
        <div>
          <label>
            Descrição da categoria
            <textarea type="text" value={values.descricao} onChange={handleChange} name="descricao" />
          </label>
        </div>
        <FormField type="color" name="cor" label="Cor da categoria : " value={values.cor} onChange={handleChange} />
        <button>Cadastrar</button>

      </form>
      <ul>
        {categorias.map((categoria, index) => {
          return (
            <li key={`${categoria}${index}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>
    </PageDefault>

  )

}

export default CadastroCategoria
