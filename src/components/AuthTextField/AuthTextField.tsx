import { FC, ReactNode } from 'react'
import classNames from 'classnames'
import TextField, { TextFieldProps } from '@/components/TextFiled'

export interface AuthTextFieldProps extends TextFieldProps {
  showIcon?: boolean
  children?: ReactNode
}

const AuthTextField: FC<AuthTextFieldProps> = ({
  type,
  id,
  value,
  onChange,
  placeholder,
  showIcon = false,
  children = undefined,
}: AuthTextFieldProps) => {
  const inputShowIconPadding = classNames({
    'pl-4 pr-9': showIcon,
    'px-4': !showIcon,
  })

  return (
    <div className="relative mb-6">
      <TextField
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={inputShowIconPadding}
      />
      {showIcon && children}
    </div>
  )
}

export default AuthTextField
