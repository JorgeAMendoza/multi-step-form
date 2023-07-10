import { AddOns, FormStore, GamingPlans, FormStep } from '../types/redux.ts'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppDispatch } from './store.ts'

const initalState: FormStore = {
  name: '',
  email: '',
  phoneNumber: '',
  plan: 'arcade',
  subscription: 'monthly',
  addOns: {
    onlineService: false,
    largerStorage: false,
    customProfile: false,
  },
  step: 'personalInfo',
}

const formSlice = createSlice({
  name: 'multiStepForm',
  initialState: initalState,
  reducers: {
    updateName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
      return state
    },
    updateEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload
      return state
    },
    updatePhoneNumber: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload
      return state
    },
    updatePlan: (state, action: PayloadAction<GamingPlans>) => {
      state.plan = action.payload
      return state
    },
    updateSubscription: (
      state,
      action: PayloadAction<'monthly' | 'yearly'>
    ) => {
      state.subscription = action.payload
      return state
    },
    updateAddOns: (
      state,
      action: PayloadAction<{ addOn: AddOns; selected: boolean }>
    ) => {
      if (state.addOns[action.payload.addOn] === action.payload.selected) {
        return state
      } else {
        state.addOns[action.payload.addOn] = action.payload.selected
        return state
      }
    },
    updateStep: (state, action: PayloadAction<FormStep>) => {
      state.step = action.payload
      return state
    },
    resetForm: (state) => {
      state = initalState
      return state
    },
  },
})

export default formSlice.reducer

// reducer helper functions
export const updatePersonalInformation = (info: {
  name: string
  email: string
  phoneNumber: string
}) => {
  return (dispatch: AppDispatch) => {
    dispatch(formSlice.actions.updateName(info.name))
    dispatch(formSlice.actions.updateEmail(info.email))
    dispatch(formSlice.actions.updatePhoneNumber(info.phoneNumber))
  }
}

export const updatePlan = (plan: GamingPlans, sub: 'yearly' | 'monthly') => {
  return (dispatch: AppDispatch) => {
    dispatch(formSlice.actions.updatePlan(plan))
    dispatch(formSlice.actions.updateSubscription(sub))
  }
}

export const updateAddOns = (services: {
  onlineService: boolean
  largerStorage: boolean
  customProfile: boolean
}) => {
  return (dispatch: AppDispatch) => {
    dispatch(
      formSlice.actions.updateAddOns({
        addOn: 'onlineService',
        selected: services.onlineService,
      })
    )
    dispatch(
      formSlice.actions.updateAddOns({
        addOn: 'largerStorage',
        selected: services.largerStorage,
      })
    )
    dispatch(
      formSlice.actions.updateAddOns({
        addOn: 'customProfile',
        selected: services.customProfile,
      })
    )
  }
}

export const updateStep = (step: FormStep) => {
  return (dispatch: AppDispatch) => {
    dispatch(formSlice.actions.updateStep(step))
  }
}
