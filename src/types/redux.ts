export type GamingPlans = 'arcade' | 'advanced' | 'pro'
export type FormStep = 'personalInfo' | 'plan' | 'addOns' | 'confirmation'
export type AddOns = 'onlineService' | 'largerStorage' | 'customProfile'

export interface FormStore {
  step: FormStep
  name: string
  email: string
  phoneNumber: string
  plan: GamingPlans
  subscription: 'monthly' | 'yearly'
  addOns: { [Key in AddOns]: boolean }
}

export interface Prices {
  plans: { [Key in GamingPlans]: { monthly: number; yearly: number } }
  addOns: { [Key in AddOns]: { monthly: number; yearly: number } }
}
