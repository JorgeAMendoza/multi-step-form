import { MultiStepForm } from '@/src/types/form.ts'
import TextInput from '../../FormInput/TextInput.tsx'
import { useForm } from 'react-hook-form'

export type PersonalInfoForm = Pick<
  MultiStepForm,
  'name' | 'email' | 'phoneNumber'
>

const PersonalInfo = () => {
  const { control } = useForm<PersonalInfoForm>({
    defaultValues: {
      name: '',
      email: '',
      phoneNumber: '',
    },
    mode: 'onChange',
  })

  return (
    <div>
      <h2>Pesonal Info</h2>
      <p>Please provide your name, email address, and phone number.</p>

      <form>
        <TextInput
          control={control}
          name="name"
          placeholder="e.g. Stephen King"
        />
        <TextInput
          control={control}
          name="email"
          placeholder="e.g. stephenking@lorem.com"
        />
        <TextInput
          control={control}
          name="phoneNumber"
          placeholder="e.g. +1 234 567 890"
        />
      </form>
    </div>
  )
}

export default PersonalInfo
