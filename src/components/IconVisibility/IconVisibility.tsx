import { FC } from 'react'
import classNames from 'classnames'

export enum Variant {
  PasswordIconVisibility,
}

export type IconVisibilityProps = {
  visibleIcon: JSX.Element
  invisibleIcon: JSX.Element
  toBeVisible: boolean
  togglePasswordVisibility: () => void
  handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void
  variant?: Variant
}

const IconVisibility: FC<IconVisibilityProps> = ({
  visibleIcon,
  invisibleIcon,
  toBeVisible,
  togglePasswordVisibility,
  handleKeyDown,
  variant = Variant.PasswordIconVisibility,
}: IconVisibilityProps) => (
  <div
    className={classNames(
      'cursor-pointer',
      'absolute',
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      variant === Variant.PasswordIconVisibility && ['top-1/2', 'right-3', 'transform', '-translate-y-1/2']
    )}
    onClick={togglePasswordVisibility}
    onKeyDown={handleKeyDown}
    tabIndex={0}
    role="button"
  >
    {toBeVisible ? visibleIcon : invisibleIcon}
  </div>
)

export default IconVisibility
