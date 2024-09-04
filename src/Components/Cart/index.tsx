import {
  CartContainer,
  CheckoutContainer,
  DelButton,
  ItemsContainer,
  Overlay,
  Sidebar,
  TotalContainer
} from './styles'
import removeButton from '../../Assets/remover.png'
import { ModalButton } from '../Menu/styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { formataPreco } from '../Menu'
import { useState } from 'react'

import {
  open,
  remove,
  checkout,
  payment,
  order
} from '../../store/reducers/cart'
import { colors } from '../../styles'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../services/api'

const Cart = () => {
  const { items, isOpen, isCheckout, isPayment, isOrder } = useSelector(
    (state: RootReducer) => state.cart
  )
  const [purchase, { isLoading, isError, data, isSuccess }] =
    usePurchaseMutation()

  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const getCheckout = () => {
    dispatch(checkout())
  }

  const getPayment = () => {
    dispatch(payment())
  }

  const getOrder = () => {
    dispatch(order())
  }

  const form = useFormik({
    initialValues: {
      deliveryName: '',
      deliveryAdress: '',
      deliveryCity: '',
      deliveryZIP: '',
      deliveryNumber: 0,
      deliveryComplemento: '',
      cardOwner: '',
      cardNumber: '',
      cardCode: 0,
      cardMonth: 0,
      cardYear: 0
    },
    validationSchema: Yup.object({
      deliveryName: Yup.string()
        .min(3, 'O campo precisa ter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      deliveryAdress: Yup.string()
        .min(5, 'O campo precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),

      deliveryCity: Yup.string()
        .min(5, 'O campo precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),

      deliveryZIP: Yup.string()
        .min(5, 'O campo precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),

      deliveryNumber: Yup.string()
        .min(1, 'O campo precisa ter pelo menos 1 caracter')
        .required('O campo é obrigatório'),
      deliveryComplemento: Yup.string().min(
        3,
        'O campo precisa ter pelo menos 3 caracteres'
      ),
      cardOwner: Yup.string()
        .min(5, 'O campo precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string()
        .min(6, 'O campo precisa ter pelo menos 6 caracteres')
        .required('O campo é obrigatório'),
      cardCode: Yup.string()
        .min(1, 'O campo precisa ter pelo menos 1 caracteres')
        .required('O campo é obrigatório'),
      cardMonth: Yup.string()
        .min(2, 'O campo precisa ter pelo menos 2 caracteres')
        .required('O campo é obrigatório'),
      cardYear: Yup.string()
        .min(2, 'O campo precisa ter pelo menos 2 caracteres')
        .required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.deliveryName,
          address: {
            description: values.deliveryAdress,
            city: values.deliveryCity,
            zipCode: values.deliveryZIP,
            number: values.deliveryNumber,
            complement: values.deliveryComplemento
          }
        },
        payment: {
          card: {
            name: values.cardOwner,
            number: values.cardNumber,
            code: values.cardCode,
            expires: {
              month: values.cardMonth,
              year: values.cardYear
            }
          }
        },
        products: [
          {
            id: 1,
            price: 10
          }
        ]
      })
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isError = fieldName in form.errors

    if (isTouched && isError) return message
    return ''
  }

  return (
    <>
      <CartContainer className={isOpen && !isCheckout ? 'isOpen' : ''}>
        <Overlay onClick={openCart} />
        <Sidebar>
          <ul>
            {items.map((item) => (
              <ItemsContainer key={item.id}>
                <img src={item.foto} alt="Produto" />
                <div>
                  <h4>{item.nome}</h4>
                  <span>{formataPreco(item.preco)}</span>
                  <DelButton
                    src={removeButton}
                    alt="Remover"
                    onClick={() => removeItem(item.id)}
                  />
                </div>
              </ItemsContainer>
            ))}
          </ul>
          <TotalContainer>
            <span>Valor total</span>
            <span>{formataPreco(getTotalPrice())}</span>
          </TotalContainer>
          <ModalButton onClick={getCheckout}>
            Continuar com a entrega
          </ModalButton>
        </Sidebar>
      </CartContainer>
      <form onSubmit={form.handleSubmit}>
        <CartContainer className={isCheckout && !isPayment ? 'isOpen' : ''}>
          <Overlay onClick={getCheckout} />
          <Sidebar>
            <CheckoutContainer>
              <span
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: `${colors.amarelo}`,
                  marginBottom: 16
                }}
              >
                Entrega
              </span>
              <label htmlFor="deliveryName">Quem irá receber</label>
              <input
                id="deliveryName"
                type="text"
                name="deliveryName"
                value={form.values.deliveryName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />

              <label htmlFor="deliveryAdress">Endereço</label>
              <input
                id="deliveryAdress"
                type="text"
                name="deliveryAdress"
                value={form.values.deliveryAdress}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />

              <label htmlFor="deliveryCity">Cidade</label>
              <input
                id="deliveryCity"
                type="text"
                name="deliveryCity"
                value={form.values.deliveryCity}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />

              <div>
                <label htmlFor="deliveryZIP">CEP</label>
                <label htmlFor="deliveryNumber">Número</label>
                <input
                  id="deliveryZIP"
                  type="text"
                  name="deliveryZIP"
                  value={form.values.deliveryZIP}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />

                <input
                  id="deliveryNumber"
                  type="text"
                  name="deliveryNumber"
                  value={form.values.deliveryNumber}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </div>
              <label htmlFor="deliveryComplemento">
                Complemento (opcional)
              </label>
              <input
                id="deliveryComplemento"
                type="text"
                name="deliveryComplemento"
                value={form.values.deliveryComplemento}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </CheckoutContainer>
            <ModalButton type="submit" onClick={getPayment}>
              Continuar com o pagamento
            </ModalButton>
            <ModalButton type="button" onClick={getCheckout}>
              Voltar para o carrinho
            </ModalButton>
          </Sidebar>
        </CartContainer>
        <CartContainer className={isPayment && !isOrder ? 'isOpen' : ''}>
          <Overlay onClick={getPayment} />
          <Sidebar>
            <CheckoutContainer>
              <span
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: `${colors.amarelo}`,
                  marginBottom: 16
                }}
              >
                Pagamento - Valor a pagar {formataPreco(getTotalPrice())}
              </span>
              <label htmlFor="cardOwner">Nome no cartão</label>
              <input
                id="cardOwner"
                type="text"
                name="cardOwner"
                value={form.values.cardOwner}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage('cardOwner', form.errors.cardOwner)}
              </small>
              <div className="cardGrid">
                <label htmlFor="cardNumber">Número do cartão</label>
                <label htmlFor="cardCode">CVV</label>
                <input
                  id="cardNumber"
                  type="text"
                  name="cardNumber"
                  value={form.values.cardNumber}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />

                <input
                  id="cardCode"
                  type="text"
                  name="cardCode"
                  value={form.values.cardCode}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </div>
              <div>
                <label htmlFor="cardMonth">Mês de vencimento</label>
                <label htmlFor="cardYear">Ano de vencimento</label>
                <input
                  id="cardMonth"
                  type="text"
                  name="cardMonth"
                  value={form.values.cardMonth}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />

                <input
                  id="cardYear"
                  type="text"
                  name="cardYear"
                  value={form.values.cardYear}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </div>
            </CheckoutContainer>
            <ModalButton type="submit" onClick={getOrder}>
              Finalizar pagamento
            </ModalButton>
            <ModalButton type="button" onClick={getPayment}>
              Voltar para a edição de endereço
            </ModalButton>
          </Sidebar>
        </CartContainer>
      </form>
      {isSuccess ? (
        <CartContainer className={isOrder ? 'isOpen' : ''}>
          <Overlay onClick={getOrder} />
          <Sidebar>
            <CheckoutContainer>
              <span
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: `${colors.amarelo}`,
                  marginBottom: 16
                }}
              >
                Pedido realizado - {data.orderId}
              </span>
              <p>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
                <br />
                <br />
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras. <br />
                <br /> Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
                <br />
                <br />
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>
            </CheckoutContainer>
            <ModalButton type="button" onClick={getOrder}>
              Concluir
            </ModalButton>
          </Sidebar>
        </CartContainer>
      ) : (
        ''
      )}
    </>
  )
}

export default Cart
