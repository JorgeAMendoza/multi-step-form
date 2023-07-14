import { SubmitHandler, useForm } from 'react-hook-form'
import type { MultiStepForm } from '@/src/types/form.ts'
import AddOnInput from '../../FormInput/AddOnInput.tsx'
import { useAppDispatch, useAppSelector } from '@/src/redux/hooks.tsx'
import { updateAddOns, updateStep } from '@/src/redux/reducer.ts'

export type AddOnForm = Pick<
  MultiStepForm,
  'onlineService' | 'largerStorage' | 'customProfile'
>

const AddOnSection = () => {
  const { subscription } = useAppSelector((state) => state.form)
  const dispatch = useAppDispatch()
  const { control, handleSubmit } = useForm<AddOnForm>({
    defaultValues: {
      onlineService: false,
      largerStorage: false,
      customProfile: false,
    },
  })

  const onSubmit: SubmitHandler<AddOnForm> = (data) => {
    dispatch(updateAddOns(data))
    dispatch(updateStep('confirmation'))
  }
  return (
    <div>
      <h2>Pick add-ons</h2>
      <p>Add-ons help enhance your gaming experience.</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <AddOnInput
          control={control}
          name="onlineService"
          addOnTitle="Online Service"
          addOnDesc="Access to multiplayer games"
          addOnPrice={subscription === 'monthly' ? '+$1/mo' : '+$10/yr'}
        />
        <AddOnInput
          control={control}
          name="largerStorage"
          addOnTitle="Larger storage"
          addOnDesc="Extra 1TB of cloud save"
          addOnPrice={subscription === 'monthly' ? '+$2/mo' : '+$20/yr'}
        />
        <AddOnInput
          control={control}
          name="customProfile"
          addOnTitle="Customizable profile"
          addOnDesc="Custom theme on your profile"
          addOnPrice={subscription === 'monthly' ? '+2/mo' : '+$20/yr'}
        />

        <div>
          <button type="button">Go Back</button>
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  )
}

export default AddOnSection