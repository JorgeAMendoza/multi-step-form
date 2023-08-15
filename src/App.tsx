import { Provider } from 'react-redux'
import Form from './components/Form/Form.tsx'
import FormStep from './components/FormStep/FormStep.tsx'
import { store } from './redux/store.ts'
import GlobalStyle from './styles/Global.styled.tsx'
import { FormContainer } from './App.styled.tsx'

export const MultiStepForm = () => {
  return (
    <main>
      <GlobalStyle />
      <FormContainer>
        <FormStep />
        <Form />
      </FormContainer>
    </main>
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <MultiStepForm />
    </Provider>
  )
}

export default App
