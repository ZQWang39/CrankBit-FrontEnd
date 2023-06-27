import { FC } from 'react'
import classNames from 'classnames'

export enum Variant {
  AuthTextFiled,
}

export type TextFieldProps = {
  type: string
  id: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  variant?: Variant
  className?: string
}

const TextFiled: FC<TextFieldProps> = ({
  type,
  id,
  value,
  onChange,
  placeholder,
  variant = Variant.AuthTextFiled,
  className = undefined,
}: TextFieldProps) => (
  <input
    type={type}
    id={id}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={classNames(
      'w-full',
      'text-base',
      'border',
      'border-secondary',
      'rounded-md',
      'py-2',
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      variant === Variant.AuthTextFiled && ['bg-white', 'text-textColorBlack', 'leading-5', 'placeholder-opacity-40'],
      className
    )}
  />
)

export default TextFiled
