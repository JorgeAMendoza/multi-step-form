import { SubmitHandler, useForm } from 'react-hook-form'
import type { MultiStepForm } from '@/src/types/form.ts'
import AddOnInput from '../../FormInput/AddOnInput.tsx'

export type AddOnForm = Pick<
  MultiStepForm,
  'onlineService' | 'largerStorage' | 'customProfile'
>

const AddOnSection = () => {
  const { control, handleSubmit } = useForm<AddOnForm>({
    defaultValues: {
      onlineService: false,
      largerStorage: false,
      customProfile: false,
    },
  })

  const onSubmit: SubmitHandler<AddOnForm> = (data) => {
    console.log(data)
  }
  return (
    <div>
      <h2>Pick add-ons</h2>
      <p>Add-ons help enhance your gaming experience.</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <AddOnInput control={control} name="customProfile" />
        <AddOnInput control={control} name="largerStorage" />
        <AddOnInput control={control} name="onlineService" />

        <div>
          <button type="button">Go Back</button>
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  )
}

export default AddOnSection
