const FormStep = () => {
  return (
    // lets make the form steps dependent on the store.
    // so it should loop over the steps, and using another var, it will be "active"
    <div>
      <ul>
        <li data-active="true">
          <p>Step X</p>
          <p>Step name</p>
        </li>
      </ul>
    </div>
  )
}

export default FormStep
