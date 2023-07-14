import { UseControllerProps, useController } from 'react-hook-form'
import { AddOnForm } from '../Form/AddOnSection/AddOnSection.tsx'

type AddOnInputProps = UseControllerProps<AddOnForm>

const AddOnInput = (props: AddOnInputProps) => {
  const { field } = useController(props)
  console.log(field.name, field.value)

  return (
    <div>
      <input
        type="checkbox"
        id={props.name}
        name={props.name}
        onChange={() => {
          if (field.value) {
            field.onChange(false)
          } else {
            field.onChange(true)
          }
        }}
        checked={field.value}
      />
      <label htmlFor={props.name}>
        {field.name}
        <br />
        Extra text
      </label>
      <p>add on price</p>
    </div>
  )
}

export default AddOnInput
