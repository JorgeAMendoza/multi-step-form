import { MultiStepForm } from '@/src/types/form.ts'
import TextInput from '../../FormInput/TextInput.tsx'
import { SubmitHandler, useForm } from 'react-hook-form'

export type PersonalInfoForm = Pick<
  MultiStepForm,
  'name' | 'email' | 'phoneNumber'
>

const PersonalInfo = () => {
  const { control, handleSubmit } = useForm<PersonalInfoForm>({
    defaultValues: {
      name: '',
      email: '',
      phoneNumber: '',
    },
    mode: 'onChange',
  })

  const onSubmit: SubmitHandler<PersonalInfoForm> = (data) => {
    console.log(data)
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
        />
        <TextInput
          control={control}
          name="email"
          placeholder="e.g. stephenking@lorem.com"
          type="email"
        />
        <TextInput
          control={control}
          name="phoneNumber"
          placeholder="e.g. +1 234 567 890"
          type="tel"
        />
        <button type="submit">Next</button>
      </form>
    </div>
  )
}

export default PersonalInfo
