import { MultiStepForm } from '@/src/types/form.ts'
import TextInput from '../../FormInput/TextInput/TextInput.tsx'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from '@/src/redux/hooks.tsx'
import { updatePersonalInformation, updateStep } from '@/src/redux/reducer.ts'
import { useEffect } from 'react'
import { Container } from '@/src/styles/utils/Container.styled.tsx'
import { PersonalForm, PersonalStyled } from './PersonalSection.styled.tsx'
import {
  ButtonFormContainer,
  NextButton,
} from '@/src/styles/utils/Button.styled.tsx'

export type PersonalInfoForm = Pick<
  MultiStepForm,
  'name' | 'email' | 'phoneNumber'
>

const PersonalInfo = () => {
  const dispatch = useAppDispatch()
  const { name, email, phoneNumber } = useAppSelector((state) => state.form)
  const { control, handleSubmit, reset } = useForm<PersonalInfoForm>({
    defaultValues: {
      name: '',
      email: '',
      phoneNumber: '',
    },
    mode: 'onChange',
  })

  useEffect(() => {
    if (name && email && phoneNumber) {
      reset({
        name,
        email,
        phoneNumber,
      })
    }
  }, [name, email, phoneNumber, reset])

  const onSubmit: SubmitHandler<PersonalInfoForm> = (data) => {
    dispatch(
      updatePersonalInformation({
        name: data.name,
        email: data.email,
        phoneNumber: data.phoneNumber,
      })
    )
    dispatch(updateStep('plan'))
  }

  return (
    <PersonalStyled data-testid="personalInfo">
      <Container>
        <h2>Personal info</h2>
        <p>Please provide your name, email address, and phone number.</p>
        <PersonalForm onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            control={control}
            labelText="Name"
            name="name"
            placeholder="e.g. Stephen King"
            type="text"
            rules={{
              required: { value: true, message: 'This field is required' },
            }}
          />
          <TextInput
            control={control}
            labelText="Email address"
            name="email"
            placeholder="e.g. stephenking@lorem.com"
            type="email"
            rules={{
              required: { value: true, message: 'This field is required' },
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: 'Valid email required',
              },
            }}
          />
          <TextInput
            control={control}
            labelText="Phone number"
            name="phoneNumber"
            placeholder="e.g. +1 234 567 890"
            type="tel"
            rules={{
              required: { value: true, message: 'This field is required' },
              pattern: {
                value: /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                message: 'Valid phone number required',
              },
            }}
          />
        </PersonalForm>
      </Container>

      <ButtonFormContainer>
        <NextButton
          type="button"
          data-testid="nextButton"
          onClick={() => {
            handleSubmit(onSubmit)()
          }}
        >
          Next Step
        </NextButton>
      </ButtonFormContainer>
    </PersonalStyled>
  )
}

export default PersonalInfo
