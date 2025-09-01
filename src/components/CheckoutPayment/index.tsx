import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import InputMask from 'react-input-mask'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import Button from '../Button'
import QRCode from '../../assets/img_logo/QRCode.jpg'
import Card from '../Card'
import { RootReducer } from '../../store'
import { closePayment } from '../../store/reducers/payment'
import { openDelivery } from '../../store/reducers/delivery'
import { openOrder, setOrderData } from '../../store/reducers/order'
import { usePurchaseMutation } from '../../Services/api'
import { clear } from '../../store/reducers/cart'
import * as S from './styles'

const Checkout = () => {
  const { isOpenPayment } = useSelector((state: RootReducer) => state.payment)

  // a info do onSubmit do Delivery
  const infoDelivery = useSelector((state: RootReducer) => state.delivery.info)

  // o map do(s) item(s) no carrinho
  const cartItems = useSelector((state: RootReducer) => state.cart.items)

  const dispatch = useDispatch()

  ///////////////////////////////Fecha o delivery clicando no Overlay
  const closeOverlay = () => {
    dispatch(closePayment())
  }

  // Abrir o order
  const openTheOrder = () => {
    if (!form.isValid) {
      return
    }

    if (!form.dirty) {
      return
    }
    dispatch(openOrder())
    dispatch(closePayment())
  }

  // Voltar para delivery
  const backDelivery = () => {
    dispatch(openDelivery())
    dispatch(closePayment())
  }
  // Selecionar o cartão
  const [payWithCard, setPayWithCard] = useState(false)

  // Validar o formulario do cartão
  const getValidationSchema = (payWithCard: boolean) => {
    const requiredIfCard = (fieldName: string) =>
      payWithCard ? Yup.string() : Yup.string().required(`Insira ${fieldName}`)

    return Yup.object({
      cardOwner: requiredIfCard('nome no cartão'),
      cardNumber: requiredIfCard('número do cartão')
        .min(16, 'Insira os 16 numeros do cartão')
        .transform((value) => value.replace(/[^\d]/g, '')) // Remove tudo que não é número
        .required('O campo é obrigatório'),
      cardCode: requiredIfCard('CVV')
        .min(3, 'Código')
        .transform((value) => value.replace(/[^\d]/g, ''))
        .required('O campo é obrigatório'),
      cardMonthExpires: requiredIfCard('mês de vencimento')
        .min(2, 'Insira o mês de expiração')
        .transform((value) => value.replace(/[^\d]/g, ''))
        .required('O campo é obrigatório'),
      cardYearExpires: requiredIfCard('ano de vencimento')
        .min(2, 'Insira o ano de expiração')
        .transform((value) => value.replace(/[^\d]/g, ''))
        .required('O campo é obrigatório')
    })
  }

  // Avisos de formulario
  const form = useFormik({
    initialValues: {
      cardOwner: '',
      cardNumber: '',
      cardCode: '',
      cardMonthExpires: '',
      cardYearExpires: ''
    },
    validationSchema: getValidationSchema(payWithCard),
    onSubmit: async (values) => {
      console.log('Itens do carrinho:', cartItems)

      const payload = {
        delivery: infoDelivery,
        products: cartItems.map((item) => ({
          id: item.id,
          price: item.preco
        })),
        payment: {
          card: {
            active: payWithCard,
            owner: {
              name: values.cardOwner
            },
            cardNumber: values.cardNumber,
            cardCode: Number(values.cardCode),
            expires: {
              month: Number(values.cardMonthExpires),
              year: Number(values.cardYearExpires)
            }
          }
        }
      }

      try {
        const response = await purchase(payload).unwrap()

        dispatch(setOrderData(response)) // salva os dados no Redux
        dispatch(openOrder()) // abre o componente Order
        dispatch(closePayment()) // fecha o modal de pagamento
      } catch (error) {
        console.error('Erro ao finalizar compra:', error)
        // aqui você pode exibir um toast ou mensagem de erro
      }

      purchase(payload)
    }
  })

  const [purchase, { isLoading, isSuccess }] = usePurchaseMutation()

  //Exibir na tela a mensagem de erro
  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message
    return ''
  }

  // Exibir a borda de erro no input
  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  return (
    <S.CardContainer className={isOpenPayment ? 'is-openPayment' : ''}>
      <S.Overlay onClick={closeOverlay} />
      <S.Sidebar>
        <Card title="Pagamento - Valor a pagar R$ 190,90">
          <form onSubmit={form.handleSubmit}>
            <div>
              <S.TabButton
                onClick={() => setPayWithCard(false)}
                isActive={!payWithCard}
                type="button"
                title="Cartão"
              >
                Cartão
              </S.TabButton>
              <S.TabButton
                onClick={() => setPayWithCard(true)}
                isActive={payWithCard}
                type="button"
                title="Pix"
              >
                Pix
              </S.TabButton>
            </div>
            {payWithCard ? (
              <S.Pix>
                <img src={QRCode} alt="QRCode" />
                <p>
                  Aponte a camera do seu celular no QRCode ou copie e cole o
                  código abaixo no app da sua instituição financeira para
                  finalizar a compra
                </p>
                <S.LinkPix>
                  <p>
                    000201021226820014br.gov.bcb.pix2560.stone.co
                    m.br/pix/v2/383dd5d0-c440-47bd-74a4-42b5-b816-c78ff3ae1f8627600016BR
                  </p>
                  <Button
                    type="button"
                    className="active"
                    title="Copiar e colar"
                  >
                    Copiar código
                  </Button>
                </S.LinkPix>
              </S.Pix>
            ) : (
              <>
                <S.Row layout="block">
                  <S.InputGroup>
                    <label htmlFor="cardOwner">Nome no cartão</label>
                    <input
                      id="cardOwner"
                      type="text"
                      name="cardOwner"
                      value={form.values.cardOwner}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('cardOwner') ? 'error' : ''}
                    />
                    <small>
                      {getErrorMessage('cardOwner', form.errors.cardOwner)}
                    </small>
                  </S.InputGroup>
                </S.Row>
                <S.Row layout="flex">
                  <S.InputGroup maxWidth="262px">
                    <label htmlFor="cardNumber">Numero do cartão</label>
                    <InputMask
                      id="cardNumber"
                      type="text"
                      name="cardNumber"
                      value={form.values.cardNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('cardNumber') ? 'error' : ''
                      }
                      mask="9999 9999 9999 9999"
                    />
                    <small>
                      {getErrorMessage('cardNumber', form.errors.cardNumber)}
                    </small>
                  </S.InputGroup>
                  <S.InputGroup maxWidth="48px">
                    <label htmlFor="cardCode">CVV</label>
                    <InputMask
                      id="cardCode"
                      type="text"
                      name="cardCode"
                      value={form.values.cardCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('cardCode') ? 'error' : ''}
                      mask="999"
                    />
                    <small>
                      {getErrorMessage('cardCode', form.errors.cardCode)}
                    </small>
                  </S.InputGroup>
                </S.Row>
                <S.Row layout="flex">
                  <S.InputGroup maxWidth="155px">
                    <label htmlFor="cardMonthExpires">Mês de vencimento</label>
                    <InputMask
                      id="cardMonthExpies"
                      type="text"
                      name="cardMonthExpires"
                      value={form.values.cardMonthExpires}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('cardMonthExpires') ? 'error' : ''
                      }
                      mask="99"
                    />
                    <small>
                      {getErrorMessage(
                        'cardMonthExpires',
                        form.errors.cardMonthExpires
                      )}
                    </small>
                  </S.InputGroup>
                  <S.InputGroup maxWidth="155px">
                    <label htmlFor="cardYearExpires">Ano de vencimento</label>
                    <InputMask
                      id="cardYearExpires"
                      type="text"
                      name="cardYearExpires"
                      value={form.values.cardYearExpires}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('cardYearExpires') ? 'error' : ''
                      }
                      mask="99"
                    />
                    <small>
                      {getErrorMessage(
                        'cardYearExpires',
                        form.errors.cardYearExpires
                      )}
                    </small>
                  </S.InputGroup>
                </S.Row>
              </>
            )}
            <S.ButtonCheckout
              onClick={openTheOrder}
              type="submit"
              title="Finalizar pagamento"
              disabled={isLoading}
            >
              {isLoading ? 'Finalizando compra...' : 'Finalizar compra'}
            </S.ButtonCheckout>
          </form>
        </Card>
        <Button
          onClick={backDelivery}
          type="button"
          title="Voltar para a edição de endereço"
        >
          Voltar para a edição de endereço
        </Button>
      </S.Sidebar>
    </S.CardContainer>
  )
}

export default Checkout
