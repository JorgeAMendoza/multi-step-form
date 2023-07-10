import { SubmitHandler, useForm } from 'react-hook-form'
import PlanInput from '../../FormInput/PlanInput.tsx'
import PlanType from '../../FormInput/PlanType.tsx'
import type { MultiStepForm } from '@/src/types/form.ts'

export type PlanForm = Pick<MultiStepForm, 'plan' | 'subscription'>

const PlanSection = () => {
  const { control, handleSubmit } = useForm<PlanForm>({
    defaultValues: {
      plan: 'arcade',
      subscription: 'monthly',
    },
    mode: 'onChange',
  })

  const onSubmit: SubmitHandler<PlanForm> = (data) => {
    console.log(data)
  }
  return (
    <div>
      <h2>Select your plan</h2>
      <p>You have the option of monthly or yearly billing.</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <PlanInput control={control} value="arcade" name="plan" />
          <PlanInput control={control} value="advanced" name="plan" />
          <PlanInput control={control} value="pro" name="plan" />
        </div>

        <div>
          <PlanType />
        </div>
      </form>

      <div>
        <button type="button">Go Back</button>
        <button type="button">Next</button>
      </div>
    </div>
  )
}

export default PlanSection
