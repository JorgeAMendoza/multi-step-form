import { SubmitHandler, useForm } from 'react-hook-form'
import PlanInput from '../../FormInput/PlanInput.tsx'
import PlanTypeInput from '../../FormInput/PlanTypeInput.tsx'
import type { MultiStepForm } from '@/src/types/form.ts'
import { useAppDispatch, useAppSelector } from '@/src/redux/hooks.tsx'
import { updatePlan, updateStep } from '@/src/redux/reducer.ts'
import { useEffect } from 'react'

export type PlanForm = Pick<MultiStepForm, 'plan' | 'subscription'>

const PlanSection = () => {
  const dispatch = useAppDispatch()
  const { plan, subscription } = useAppSelector((state) => state.form)
  const { control, handleSubmit, watch, reset, getValues } = useForm<PlanForm>({
    defaultValues: {
      plan: 'arcade',
      subscription: 'monthly',
    },
    mode: 'onChange',
  })

  useEffect(() => {
    if (!plan && !subscription) return
    reset({
      plan,
      subscription,
    })
  }, [plan, subscription, reset])

  const onSubmit: SubmitHandler<PlanForm> = (data) => {
    dispatch(updatePlan(data.plan, data.subscription))
    dispatch(updateStep('addOns'))
  }

  const currentSub = watch('subscription')

  return (
    <div>
      <h2>Select your plan</h2>
      <p>You have the option of monthly or yearly billing.</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <PlanInput control={control} value="arcade" name="plan">
            <>
              <p>{currentSub === 'monthly' ? '$9/mo' : '$90/yr'}</p>
              {currentSub === 'yearly' ? <p>2 months free</p> : null}
            </>
          </PlanInput>
          <PlanInput control={control} value="advanced" name="plan">
            <>
              <p>{currentSub === 'monthly' ? '$12/mo' : '$120/yr'}</p>
              {currentSub === 'yearly' ? <p>2 months free</p> : null}
            </>
          </PlanInput>
          <PlanInput control={control} value="pro" name="plan">
            <>
              <p>{currentSub === 'monthly' ? '$15/mo' : '$150/yr'}</p>
              {currentSub === 'yearly' ? <p>2 months free</p> : null}
            </>
          </PlanInput>
        </div>

        <div>
          <PlanTypeInput
            control={control}
            value="monthly"
            name="subscription"
          />
          <PlanTypeInput control={control} value="yearly" name="subscription" />
        </div>

        <div>
          <button
            type="button"
            onClick={() => {
              dispatch(updatePlan(getValues('plan'), getValues('subscription')))
              dispatch(updateStep('personalInfo'))
            }}
            data-testid="previousButton"
          >
            Go Back
          </button>
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  )
}

export default PlanSection
