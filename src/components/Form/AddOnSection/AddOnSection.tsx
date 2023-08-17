import { SubmitHandler, useForm } from 'react-hook-form'
import type { MultiStepForm } from '@/src/types/form.ts'
import AddOnInput from '../../FormInput/AddOnInput/AddOnInput.tsx'
import { useAppDispatch, useAppSelector } from '@/src/redux/hooks.tsx'
import { updateAddOns, updateStep } from '@/src/redux/reducer.ts'
import { useEffect } from 'react'
import { AddOnsForm, AddOnsStyled } from './AddOnSection.styled.tsx'
import { Container } from '@/src/styles/utils/Container.styled.tsx'
import {
  ButtonFormContainerTwo,
  NextButton,
  PreviousButton,
} from '@/src/styles/utils/Button.styled.tsx'

export type AddOnForm = Pick<
  MultiStepForm,
  'onlineService' | 'largerStorage' | 'customProfile'
>

const AddOnSection = () => {
  const { subscription, addOns } = useAppSelector((state) => state.form)
  const dispatch = useAppDispatch()
  const { control, handleSubmit, reset } = useForm<AddOnForm>({
    defaultValues: {
      onlineService: false,
      largerStorage: false,
      customProfile: false,
    },
  })

  useEffect(() => {
    reset(addOns)
  }, [addOns, reset])

  const onSubmit: SubmitHandler<AddOnForm> = (data) => {
    dispatch(updateAddOns(data))
    dispatch(updateStep('confirmation'))
  }
  return (
    <AddOnsStyled data-testid="addOns">
      <Container>
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience.</p>

        <AddOnsForm onSubmit={handleSubmit(onSubmit)}>
          <AddOnInput
            control={control}
            name="onlineService"
            addOnTitle="Online service"
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
        </AddOnsForm>
      </Container>

      <ButtonFormContainerTwo>
        <PreviousButton
          type="button"
          data-testid="previousButton"
          onClick={() => {
            dispatch(updateStep('plan'))
          }}
        >
          Go Back
        </PreviousButton>
        <NextButton
          type="submit"
          data-testid="nextButton"
          onClick={() => handleSubmit(onSubmit)()}
        >
          Next Step
        </NextButton>
      </ButtonFormContainerTwo>
    </AddOnsStyled>
  )
}

export default AddOnSection
