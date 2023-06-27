import { FC } from 'react'
import classNames from 'classnames'

export enum Variant {
  AuthDefault,
}

type LabelProps = {
  label: string
  htmlFor: string
  variant?: Variant
}

const Label: FC<LabelProps> = ({ label, htmlFor, variant = Variant.AuthDefault }) => (
  <label
    htmlFor={htmlFor}
    className={classNames(
      'block',
      'leading-5',
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      variant === Variant.AuthDefault && ['text-textColorBlack', 'font-medium', 'mb-0.5']
    )}
  >
    {label}
  </label>
)

export default Label
