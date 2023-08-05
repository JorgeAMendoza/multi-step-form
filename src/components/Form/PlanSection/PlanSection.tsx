import { SubmitHandler, useForm } from 'react-hook-form'
import PlanInput from '../../FormInput/PlanInput/PlanInput.tsx'
import PlanTypeInput from '../../FormInput/PlanTypeInput/PlanTypeInput.tsx'
import type { MultiStepForm } from '@/src/types/form.ts'
import { useAppDispatch, useAppSelector } from '@/src/redux/hooks.tsx'
import { updatePlan, updateStep } from '@/src/redux/reducer.ts'
import { useEffect } from 'react'
import {
  PlanForm,
  PlanStyled,
  SubscriptionType,
  SubscriptionTypeToggle,
} from './PlanSection.styled.tsx'
import { Container } from '@/src/styles/utils/Container.styled.tsx'
import {
  ButtonFormContainerTwo,
  NextButton,
  PreviousButton,
} from '@/src/styles/utils/Button.styled.tsx'

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
    <PlanStyled data-testid="selectPlan">
      <Container>
        <h2>Select your plan</h2>
        <p>You have the option of monthly or yearly billing.</p>

        <PlanForm onSubmit={handleSubmit(onSubmit)}>
          <div>
            <PlanInput control={control} value="arcade" name="plan">
              <>
                <span>{currentSub === 'monthly' ? '$9/mo' : '$90/yr'}</span>
                {currentSub === 'yearly' ? <span>2 months free</span> : null}
              </>
            </PlanInput>
            <PlanInput control={control} value="advanced" name="plan">
              <>
                <span>{currentSub === 'monthly' ? '$12/mo' : '$120/yr'}</span>
                {currentSub === 'yearly' ? <span>2 months free</span> : null}
              </>
            </PlanInput>
            <PlanInput control={control} value="pro" name="plan">
              <>
                <span>{currentSub === 'monthly' ? '$15/mo' : '$150/yr'}</span>
                {currentSub === 'yearly' ? <span>2 months free</span> : null}
              </>
            </PlanInput>
          </div>

          <SubscriptionType>
            <PlanTypeInput
              control={control}
              value="monthly"
              name="subscription"
            />
            <SubscriptionTypeToggle monthly={currentSub === 'monthly'}>
              <span></span>
            </SubscriptionTypeToggle>
            <PlanTypeInput
              control={control}
              value="yearly"
              name="subscription"
            />
          </SubscriptionType>
        </PlanForm>
      </Container>

      <ButtonFormContainerTwo>
        <PreviousButton
          type="button"
          onClick={() => {
            dispatch(updatePlan(getValues('plan'), getValues('subscription')))
            dispatch(updateStep('personalInfo'))
          }}
          data-testid="previousButton"
        >
          Go Back
        </PreviousButton>
        <NextButton
          type="button"
          data-testid="nextButton"
          onClick={() => {
            handleSubmit(onSubmit)()
          }}
        >
          Next Step
        </NextButton>
      </ButtonFormContainerTwo>
    </PlanStyled>
  )
}

export default PlanSection
