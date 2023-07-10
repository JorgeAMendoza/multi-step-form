import { MultiStepForm } from '@/src/types/form.ts'
import TextInput from '../../FormInput/TextInput.tsx'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from '@/src/redux/hooks.tsx'
import { updatePersonalInformation, updateStep } from '@/src/redux/reducer.ts'
import { useEffect } from 'react'

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
    <div>
      <h2>Pesonal Info</h2>
      <p>Please provide your name, email address, and phone number.</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          control={control}
          name="name"
          placeholder="e.g. Stephen King"
          type="text"
          rules={{
            required: { value: true, message: 'This field is required' },
          }}
        />
        <TextInput
          control={control}
          name="email"
          placeholder="e.g. stephenking@lorem.com"
          type="email"
          rules={{
            required: { value: true, message: 'This field is required' },
            pattern: {
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: 'Please enter a valid email address',
            },
          }}
        />
        <TextInput
          control={control}
          name="phoneNumber"
          placeholder="e.g. +1 234 567 890"
          type="tel"
          rules={{
            required: { value: true, message: 'This field is required' },
            pattern: {
              value: /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
              message: 'Please enter a valid phone number',
            },
          }}
        />
        <button type="submit">Next</button>
      </form>
    </div>
  )
}

export default PersonalInfo
