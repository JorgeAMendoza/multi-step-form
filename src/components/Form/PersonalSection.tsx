import TextInput from '../FormInput/TextInput.tsx'
const PersonalInfo = () => {
  return (
    <div>
      <h2>Pesonal Info</h2>
      <p>Please provide your name, email address, and phone number.</p>

      <form>
        <TextInput />
        <TextInput />
        <TextInput />
      </form>
    </div>
  )
}

export default PersonalInfo
