import { useEffect, useState } from 'react'
import type { AddOns } from '@/src/types/redux.ts'
import { useAppDispatch, useAppSelector } from '@/src/redux/hooks.tsx'
import calculateTotal from '@/src/lib/calculateTotal.ts'
import { resetForm, updateStep } from '@/src/redux/reducer.ts'
import convertToTitleCase from '@/src/lib/convertToTitleCase.ts'
import {
  AddOnInfo,
  ConfirmationInfo,
  ConfirmationStyled,
  ConfirmingFormStyled,
  PlanInfo,
  SubmissionStyled,
  TotalPrice,
} from './Confirmation.styled'
import { Container } from '@/src/styles/utils/Container.styled'
import {
  ButtonFormContainerTwo,
  ConfirmButton,
  PreviousButton,
} from '@/src/styles/utils/Button.styled'
import thankYouIcon from '@/src/assets/images/icon-thank-you.svg'

const Submission = () => {
  const dispatch = useAppDispatch()
  return (
    <SubmissionStyled data-testid="thankYouMessage">
      <Container>
        <img src={thankYouIcon} alt="checkmark" />
        <h2>Thank you!</h2>
        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
        <button
          type="button"
          onClick={() => {
            dispatch(resetForm())
          }}
        >
          Click here to start over!
        </button>
      </Container>
    </SubmissionStyled>
  )
}

const ConfirmingForm = () => {
  return (
    <ConfirmingFormStyled data-testid="confirmation">
      <Container>
        <div></div>
      </Container>
    </ConfirmingFormStyled>
  )
}

export type FormTotal = {
  planPrice: number
  totalPrice: number
  addOnPrice: Array<[AddOns, number]>
}

const Confirmation = () => {
  const { subscription, plan, addOns, prices } = useAppSelector(
    (state) => state.form
  )
  const dispatch = useAppDispatch()
  const [formTotal, setFormTotal] = useState<FormTotal | null>(null)
  const [submittingForm, setSubmittingForm] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  useEffect(() => {
    const total = calculateTotal(addOns, subscription, prices, plan)
    setFormTotal(total)
  }, [addOns, plan, prices, subscription])

  if (!formTotal) return null
  if (submittingForm) return <ConfirmingForm />
  if (formSubmitted) return <Submission />

  return (
    <ConfirmationStyled data-testid="confirmation">
      <Container>
        <h2>Finishing up</h2>
        <p>Double-check everything looks OK before confirming</p>

        <ConfirmationInfo>
          <PlanInfo data-testid="planInformation">
            <p>
              {plan} ({subscription})
              <button
                type="button"
                onClick={() => {
                  dispatch(updateStep('plan'))
                }}
              >
                Change
              </button>
            </p>

            <p>
              ${formTotal.planPrice}
              {subscription === 'monthly' ? '/mo' : '/yr'}
            </p>
          </PlanInfo>

          {/* Add-ons */}
          <AddOnInfo>
            <ul data-testid="addOnInformation">
              {formTotal.addOnPrice.map(([addOn, price]) => (
                <li key={addOn}>
                  <p data-testid={`${addOn}Price`}>
                    {convertToTitleCase(addOn)}{' '}
                  </p>

                  <p>
                    +${price}
                    {subscription === 'monthly' ? '/mo' : '/yr'}
                  </p>
                </li>
              ))}
            </ul>
          </AddOnInfo>
        </ConfirmationInfo>

        <TotalPrice data-testid="total">
          <p>
            Total &#40;per {subscription === 'monthly' ? 'month' : 'year'}&#41;
          </p>
          <p>
            +${formTotal.totalPrice}
            {subscription === 'monthly' ? '/mo' : '/yr'}
          </p>
        </TotalPrice>
      </Container>

      <ButtonFormContainerTwo>
        <PreviousButton
          type="button"
          onClick={() => {
            dispatch(updateStep('addOns'))
          }}
          data-testid="previousButton"
        >
          Go Back
        </PreviousButton>
        <ConfirmButton
          type="button"
          onClick={() => {
            setSubmittingForm(true)
            setTimeout(() => {
              setSubmittingForm(false)
              setFormSubmitted(true)
            }, 2000)
          }}
          data-testid="confirmButton"
        >
          Confirm
        </ConfirmButton>
      </ButtonFormContainerTwo>
    </ConfirmationStyled>
  )
}

export default Confirmation
