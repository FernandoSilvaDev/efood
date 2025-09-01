import Loader from '../Loader'
import Restaurant from '../Restaurant'

import { Container, List } from './styles'

export type Props = {
  perfis?: RestaurantType[]
  isLoading?: boolean
}

const RestaurantList = ({ perfis, isLoading }: Props) => {
  //Colocar ou não a Tag de Destaque no Perfil do restaurante
  // Função para renderizar as Tags
  const getDestaqueTag = (perfil: RestaurantType): string => {
    return perfil.destacado ? 'Destaque da semana' : ''
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <Container>
      <div className="container">
        <List>
          {perfis &&
            perfis.map((perfil) => (
              <li key={perfil.id}>
                <Restaurant
                  id={perfil.id}
                  description={perfil.descricao}
                  image={perfil.capa}
                  type={perfil.tipo}
                  grade={perfil.avaliacao}
                  title={perfil.titulo}
                  destacado={getDestaqueTag(perfil)}
                />
              </li>
            ))}
        </List>
      </div>
    </Container>
  )
}

export default RestaurantList
