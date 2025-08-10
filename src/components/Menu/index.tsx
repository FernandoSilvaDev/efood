import { useEffect, useState } from 'react'
import { Card, Descricao, Modal, ModalContent, Title } from './styles'
import Button from '../Button'
import { RestaurantType } from '../../pages/Home'
import Close from '../../assets/img_logo/fechar.png'

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

const Menu = ({ name, description, image, portion, price }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false
  })
  const closeMOdal = () => {
    setModal({
      isVisible: false
    })
  }
  const [restaurantes, setRestaurantes] = useState<RestaurantType[]>([])

  useEffect(() => {
    fetch('https://ebac-fake-api.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  // const restaurante = restaurantes.find(() => name)

  if (!restaurantes) {
    return <h3>Carregando...</h3>
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
            title="Adicionar ao carrinho"
          >
            Mais detalhes
          </Button>
        </div>
      </Card>
      {/* ////////////////////////////////////////// Modal */}
      <Modal className={modal.isVisible ? 'visivel' : ''}>
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
                onClick={() => {
                  closeMOdal()
                }}
              />
            </div>
            <header>
              <h4>{name}</h4>
            </header>
            <p>{description}</p>
            <p>{portion}</p>
            <Button type="button" to="#" title="Saiba mais">
              {`Adicione ao carrinho - R$ ${price}`}
            </Button>
          </div>
        </ModalContent>
        <div
          // Para fechar o modal com o clique em qualquer parte da tela
          onClick={() => {
            closeMOdal()
          }}
          className="overlay"
        ></div>
      </Modal>
    </>
  )
}

export default Menu
