import { useDispatch } from 'react-redux'
import { useState } from 'react'
import Loader from '../Loader'

import { useGetHomeQuery } from '../../Services/api'
import { add, open } from '../../store/reducers/cart'

import Close from '../../assets/img_logo/fechar.png'
import Button from '../Button'

import { Card, Descricao, Modal, ModalContent, Title } from './styles'

type Props = {
  name: string
  description: string
  image: string
  id: number
  portion: string
  price: number
  items?: RestaurantType
}

interface ModalState {
  isVisible: boolean
}

const Perfil = ({ name, description, image, portion, price, id }: Props) => {
  const dispatch = useDispatch()
  const addToCart = () => {
    dispatch(
      add({
        id,
        nome: name,
        descricao: description,
        foto: image,
        porcao: portion,
        preco: price
      })
    )
    dispatch(open())
    closeModal()
  }

  const [modal, setModal] = useState<ModalState>({
    isVisible: false
  })
  const closeModal = () => {
    setModal({
      isVisible: false
    })
  }

  const { data: restaurantes } = useGetHomeQuery()

  if (!restaurantes) {
    return <Loader />
  }

  const getDescricao = (descricao: string) => {
    //Se descrição for maior que 95 corta (slice) a descrição, caso ao contrario retorna normalmente
    if (descricao.length > 100) {
      return `${descricao.slice(0, 230)}... Adicione para saber mais.`
    }
    return descricao
  }

  return (
    <>
      <Card>
        <img src={image} alt={name} />
        <div>
          <div className="titleCard">
            <div>
              <Title>{name}</Title>
            </div>
          </div>
          <Descricao>{getDescricao(description)}</Descricao>

          <Button
            onClick={() => {
              setModal({
                isVisible: true
              })
            }}
            type="button"
            title={`Clique aqui para saber mais detalhes do ${name}`}
          >
            Mais detalhes
          </Button>
        </div>
      </Card>
      {/* ////////////////////////////////////////// Modal */}
      <Modal className={modal.isVisible ? 'is-visible' : ''}>
        <ModalContent className="container">
          <div>
            <img className="imgItem" src={image} alt="Imagem do prato" />
          </div>
          <div>
            <div className="close">
              <img
                src={Close}
                alt="Icone de fechar"
                // Para fechar o modal com o clique em qualquer parte da tela
                onClick={closeModal}
              />
            </div>
            <header>
              <h4>{name}</h4>
            </header>
            <p>{description}</p>
            <p>{portion}</p>
            <Button
              onClick={addToCart}
              type="button"
              title={`Adicione ${name} ao carrinho`}
            >
              {`Adicione ao carrinho - R$ ${price}`}
            </Button>
          </div>
        </ModalContent>
        <div
          // Para fechar o modal com o clique em qualquer parte da tela
          onClick={closeModal}
          className="overlay"
        ></div>
      </Modal>
    </>
  )
}

export default Perfil
