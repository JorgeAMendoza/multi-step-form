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
    <label data-testid={`${props.name}Input`}>
      <span>
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
      </span>

      <span>{props.addOnTitle}</span>
      <span>{props.addOnDesc}</span>
      <span>{props.addOnPrice}</span>
    </label>
  )
}

export default AddOnInput
