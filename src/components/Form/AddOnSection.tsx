import AddOnInput from '../FormInput/AddOnInput.tsx'

const AddOnSection = () => {
  return (
    <div>
      <h2>Pick add-ons</h2>
      <p>Add-ons help enhance your gaming experience.</p>

      <form>
        <AddOnInput />
        <AddOnInput />
        <AddOnInput />
      </form>

      <div>
        <button type="button">Go Back</button>
        <button type="button">Next</button>
      </div>
    </div>
  )
}

export default AddOnSection
