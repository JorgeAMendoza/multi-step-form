import { UseControllerProps, useController } from 'react-hook-form'
import { PlanForm } from '../Form/PlanSection/PlanSection.tsx'
import arcadeIcon from '@/src/assets/images/icon-arcade.svg'
import advancedIcon from '@/src/assets/images/icon-advanced.svg'
import proIcon from '@/src/assets/images/icon-pro.svg'

type PlanInputProps = UseControllerProps<PlanForm> & {
  value: PlanForm['plan']
  children: React.ReactNode
}

const PlanInput = (props: PlanInputProps) => {
  const { field } = useController(props)
  return (
    <div data-testid={`${props.value}PlanInput`}>
      <label>
        <img
          src={
            props.value === 'arcade'
              ? arcadeIcon
              : props.value === 'advanced'
              ? advancedIcon
              : proIcon
          }
          alt={`icon for ${props.value} plan`}
        />
        <input
          {...field}
          value={props.value}
          name={props.name}
          type="radio"
          checked={field.value === props.value ? true : false}
        />
        <p>{props.value}</p>
        <div>{props.children}</div>
      </label>
    </div>
  )
}

export default PlanInput
