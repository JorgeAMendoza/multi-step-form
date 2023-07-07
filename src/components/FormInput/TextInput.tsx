import { UseControllerProps, useController } from 'react-hook-form'
import type { PersonalInfoForm } from '../Form/PersonalSection/PersonalSection.tsx'

type TextInputProps = UseControllerProps<PersonalInfoForm> & {
  placeholder?: string
}

const TextInput = (props: TextInputProps) => {
  const { field, fieldState } = useController(props)
  return (
    <div>
      <div>
        <label htmlFor="input-name">
          {props.name}
          <input
            {...field}
            placeholder={props.placeholder ? props.placeholder : ''}
          />
        </label>

        {fieldState.invalid ? <p>something is wrong</p> : null}
      </div>
    </div>
  )
}

export default TextInput
