import { useEffect, useState } from 'react'
import type { AddOns } from '@/src/types/redux.ts'
import { useAppSelector } from '@/src/redux/hooks.tsx'
import calculateTotal from '@/src/lib/calculateTotal.ts'

const Submission = () => {
  return (
    <div>
      <p>checkmark image</p>
      <h2>Thank You!</h2>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
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
  const [formTotal, setFormTotal] = useState<FormTotal | null>(null)

  useEffect(() => {
    const total = calculateTotal(addOns, subscription, prices, plan)
    setFormTotal(total)
  }, [addOns, plan, prices, subscription])

  if (!formTotal) return null

  return (
    <div>
      <h2>Finishing up</h2>
      <p>Double-check everything looks OK before confirming</p>

      <div>
        <div>
          <p>
            {plan} ({subscription})<button>Change</button>
          </p>

          <p>{formTotal.planPrice}</p>
        </div>

        {/* Add-ons */}
        <div>
          <ul>
            {formTotal.addOnPrice.map(([addOn, price]) => (
              <li key={addOn}>
                <p>
                  {addOn} <span>{price}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p>
        Total &#40;per {subscription === 'monthly' ? 'month' : 'year'}&#41;{' '}
        <span>{formTotal.totalPrice}</span>
      </p>

      <div>
        <button type="button">Go Back</button>
        <button type="button">Confirm</button>
      </div>
    </div>
  )
}

export default Confirmation
