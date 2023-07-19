import { UseControllerProps, useController } from 'react-hook-form'
import type { PersonalInfoForm } from '../Form/PersonalSection/PersonalSection.tsx'

type TextInputProps = UseControllerProps<PersonalInfoForm> & {
  placeholder?: string
  type: 'text' | 'email' | 'tel'
}

const TextInput = (props: TextInputProps) => {
  const { field, fieldState } = useController(props)

  return (
    <div data-testid={`${props.name}Input`}>
      <div>
        <label>
          {props.name}
          <input
            {...field}
            type={props.type}
            placeholder={props.placeholder ? props.placeholder : ''}
          />
        </label>

        {fieldState.isTouched && fieldState.invalid ? (
          <span>
            {fieldState.error?.message
              ? fieldState.error.message
              : 'Invalid input'}
          </span>
        ) : null}
      </div>
    </div>
  )
}

export default TextInput
