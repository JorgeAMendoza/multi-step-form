import PersonalInfo from './PersonalSection/PersonalSection.tsx'

const Form = () => {
  // use selector to know the form state
  // I dont think the dispatch will be needed because each part itself will have the functions to change the state,

  return (
    <div>
      <PersonalInfo />
    </div>
  )
}

export default Form
