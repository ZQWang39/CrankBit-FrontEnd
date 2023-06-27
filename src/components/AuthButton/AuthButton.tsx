import { FC } from 'react'
import Button, { Size, Props as ButtonProps } from '@/components/Button'

export interface InputProps extends ButtonProps {
  onClick?: () => void
}

const AuthButton: FC<InputProps> = ({ variant, children = '', onClick = undefined }) => (
  <Button variant={variant} size={Size.Undefined} type="submit" block className="py-3 font-bold" onClick={onClick}>
    {children}
  </Button>
)

export default AuthButton
