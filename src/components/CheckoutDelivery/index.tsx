import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import Button from '../Button'
import Card from '../Card'

import { RootReducer } from '../../store'
import { closeDelivery, setDeliveryInfo } from '../../store/reducers/delivery'
import { open } from '../../store/reducers/cart'
import { openPayment } from '../../store/reducers/payment'

import * as S from './styles'

const Delivery = () => {
  const { isOpenDelivery } = useSelector((state: RootReducer) => state.delivery)

  const dispatch = useDispatch()

  ///////////////////////////////Fecha o delivery clicando no Overlay
  const closeOverlay = () => {
    dispatch(closeDelivery())
  }

  // Abrir o carrinho
  const openCart = () => {
    dispatch(open())
    dispatch(closeDelivery())
  }

  //Abrir o payment
  const openThePayment = async () => {
    const errors = await form.validateForm()

    if (Object.keys(errors).length > 0) {
      form.setTouched({
        fullName: true,
        address: true,
        city: true,
        zipCode: true,
        homeNumber: true,
        complement: true
      })
      console.warn('Formulário contém erros:', errors)
      return
    }

    //Executa o onSubmit manualmente
    form.submitForm()

    dispatch(openPayment())
    dispatch(closeDelivery())
  }

  // Avisos de formulario
  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      zipCode: '',
      homeNumber: '',
      complement: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string().required('O campo é obrigatório'),
      city: Yup.string().required('O campo é obrigatório'),
      zipCode: Yup.number()
        .min(10000000, 'O cep precisa ter pelo menos 8 numeros')
        .max(99999999, 'O cep precisa ter somente 8 numeros')
        .required('O campo é obrigatório'),
      homeNumber: Yup.string().required('O campo é obrigatório'),
      complement: Yup.string().optional()
    }),
    onSubmit: (values) => {
      dispatch(
        setDeliveryInfo({
          name: values.fullName,
          address: values.address,
          city: values.city,
          zipCode: Number(values.zipCode),
          homeNumber: values.homeNumber,
          complement: values.complement
        })
      )
    }
  })

  //Exibir na tela a mensagem de erro
  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message
    return ''
  }

  // Exibir a borda de erro no input
  const getInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  return (
    <S.CardContainer className={isOpenDelivery ? 'is-openDelivery' : ''}>
      <S.Overlay onClick={closeOverlay} />
      <S.Sidebar>
        <Card title="Entrega">
          <form onSubmit={form.handleSubmit}>
            <S.Row layout="block">
              <S.InputGroup>
                <label htmlFor="fullName">Nome completo</label>
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  value={form.values.fullName}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={getInputHasError('fullName') ? 'error' : ''}
                />
                <small>
                  {getErrorMessage('fullName', form.errors.fullName)}
                </small>
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="address">Endereço</label>
                <input
                  id="address"
                  type="text"
                  name="address"
                  value={form.values.address}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={getInputHasError('address') ? 'error' : ''}
                />
                <small>{getErrorMessage('address', form.errors.address)}</small>
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="city">Cidade</label>
                <input
                  id="city"
                  type="text"
                  name="city"
                  value={form.values.city}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={getInputHasError('city') ? 'error' : ''}
                />
                <small>{getErrorMessage('city', form.errors.city)}</small>
              </S.InputGroup>
            </S.Row>
            <S.Row layout="flex">
              <S.InputGroup maxWidth="155px">
                <label htmlFor="zipCode">CEP</label>
                <input
                  id="zipCode"
                  type="number"
                  name="zipCode"
                  value={form.values.zipCode}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={getInputHasError('zipCode') ? 'error' : ''}
                />
                <small>{getErrorMessage('zipCode', form.errors.zipCode)}</small>
              </S.InputGroup>
              <S.InputGroup maxWidth="155px">
                <label htmlFor="homeNumber">Número</label>
                <input
                  id="homeNumber"
                  type="text"
                  name="homeNumber"
                  value={form.values.homeNumber}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={getInputHasError('homeNumber') ? 'error' : ''}
                />
                <small>
                  {getErrorMessage('homeNumber', form.errors.homeNumber)}
                </small>
              </S.InputGroup>
            </S.Row>
            <S.Row layout="block">
              <S.InputGroup className="marginBottom">
                <label htmlFor="complement">Complemento (opcional)</label>
                <input
                  id="complement"
                  type="text"
                  name="complement"
                  value={form.values.complement}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={getInputHasError('complement') ? 'error' : ''}
                />
                <small>
                  {getErrorMessage('complement', form.errors.complement)}
                </small>
              </S.InputGroup>
            </S.Row>
            <S.ButtonCheckout
              onClick={openThePayment}
              type="submit"
              title="Continuar para pagamento"
            >
              Continuar com o pagamento
            </S.ButtonCheckout>
          </form>
        </Card>
        <Button onClick={openCart} type="button" title="Voltar para o carrinho">
          Voltar para o carrinho
        </Button>
      </S.Sidebar>
    </S.CardContainer>
  )
}

export default Delivery
