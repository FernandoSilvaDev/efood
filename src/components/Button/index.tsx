import { ButtonContainer, ButtonLink, SecondaryButtonLink } from './styles'

type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
  variant?: 'primary' | 'secondary'
}

const Button = ({
  type,
  title,
  to,
  onClick,
  children,
  variant = 'primary'
}: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer type="button" title={title} onClick={onClick}>
        {children}
      </ButtonContainer>
    )
  }

  const LinkComponent =
    variant === 'secondary' ? SecondaryButtonLink : ButtonLink

  return (
    <LinkComponent to={to as string} title={title}>
      {children}
    </LinkComponent>
  )
}

export default Button
