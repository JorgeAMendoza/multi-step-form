import type { FormTotal } from '../components/Form/Confirmation.tsx'
import type { AddOns, GamingPlans } from '../types/redux.ts'
import type { FormStore, Prices } from '../types/redux.ts'

const calculateTotal = (
  addOns: FormStore['addOns'],
  subscription: 'monthly' | 'yearly',
  prices: Prices,
  plan: GamingPlans
): FormTotal => {
  let addOnTotal = 0
  const addOnList: Array<[AddOns, number]> = []
  const addOnNames: AddOns[] = Object.keys(addOns) as AddOns[]
  for (const key of addOnNames) {
    if (addOns[key]) {
      const addOnPrice =
        subscription === 'monthly'
          ? prices.addOns[key].monthly
          : prices.addOns[key].yearly
      addOnTotal += addOnPrice
      addOnList.push([key, addOnPrice])
    }
  }``

  const priceSummary: FormTotal = {
    addOnPrice: addOnList,
    planPrice:
      subscription === 'monthly'
        ? prices.plans[plan].monthly
        : prices.plans[plan].yearly,
    totalPrice:
      subscription === 'monthly'
        ? prices.plans[plan].monthly + addOnTotal
        : prices.plans[plan].yearly + addOnTotal,
  }

  return priceSummary
}

export default calculateTotal
