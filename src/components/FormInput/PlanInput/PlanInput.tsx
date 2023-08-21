import { UseControllerProps, useController } from 'react-hook-form'
import { PlanForm } from '../../Form/PlanSection/PlanSection.tsx'
import arcadeIcon from '@/src/assets/images/icon-arcade.svg'
import advancedIcon from '@/src/assets/images/icon-advanced.svg'
import proIcon from '@/src/assets/images/icon-pro.svg'
import { PlanInputStyled, PlanLabel } from './PlanInput.styled.tsx'

type PlanInputProps = UseControllerProps<PlanForm> & {
  value: PlanForm['plan']
  children: React.ReactNode
}

const PlanInput = (props: PlanInputProps) => {
  const { field } = useController(props)
  return (
    <PlanInputStyled
      data-testid={`${props.value}PlanInput`}
      checked={field.value === props.value ? true : false}
    >
      <PlanLabel>
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
        <span>{props.value}</span>
        {props.children}
      </PlanLabel>
    </PlanInputStyled>
  )
}

export default PlanInput
