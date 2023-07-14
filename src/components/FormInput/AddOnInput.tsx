import { UseControllerProps, useController } from 'react-hook-form'
import { AddOnForm } from '../Form/AddOnSection/AddOnSection.tsx'

type AddOnInputProps = UseControllerProps<AddOnForm> & {
  addOnTitle: string
  addOnPrice: string
  addOnDesc: string
}

const AddOnInput = (props: AddOnInputProps) => {
  const { field } = useController(props)

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
        {props.addOnTitle}
        <br />
        {props.addOnDesc}
      </label>
      <p>{props.addOnPrice}</p>
    </div>
  )
}

export default AddOnInput
