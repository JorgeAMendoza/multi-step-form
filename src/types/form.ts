import { AddOns, GamingPlans } from './redux.ts'

interface HookForm {
  name: string
  email: string
  phoneNumber: string
  plan: GamingPlans
  subscription: 'monthly' | 'yearly'
}

export type MultiStepForm = HookForm & { [Key in AddOns]: boolean }
