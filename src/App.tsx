import { Provider } from 'react-redux'
import Form from './components/Form/index.tsx'
import FormStep from './components/FormStep/FormStep.tsx'
import { store } from './redux/store.ts'

export const MultiStepForm = () => {
  return (
    <main>
      <section>
        <FormStep />
        <Form />
      </section>
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
