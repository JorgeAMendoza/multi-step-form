import { UseControllerProps, useController } from 'react-hook-form'
import type { PersonalInfoForm } from '../../Form/PersonalSection/PersonalSection.tsx'
import { InputContainer, InputName } from './TextInput.styled.tsx'

type TextInputProps = UseControllerProps<PersonalInfoForm> & {
  placeholder?: string
  type: 'text' | 'email' | 'tel'
  labelText: string;
}

const TextInput = (props: TextInputProps) => {
  const { field, fieldState } = useController(props)

  return (
    <div data-testid={`${props.name}Input`}>
      <InputName>
        <label htmlFor={`${props.name}Input`}>{props.labelText}</label>
        {fieldState.isTouched && fieldState.invalid ? (
          <span>
            {fieldState.error?.message
              ? fieldState.error.message
              : 'Invalid input'}
          </span>
        ) : null}
      </InputName>
      <InputContainer isInvalid={fieldState.error !== undefined}>
        <input
          {...field}
          type={props.type}
          placeholder={props.placeholder ? props.placeholder : ''}
          id={`${props.name}Input`}
        />
      </InputContainer>
    </div>
  )
}

export default TextInput
