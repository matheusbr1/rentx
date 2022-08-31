import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles'

const isLogged = false

interface AppBarProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
}

const AppBar: React.FC<AppBarProps> = ({ title, ...rest }) => (
  <S.AppBarContainer {...rest}>
    <S.AppBarContent>
      <S.AppBarTitle>
        {title}
      </S.AppBarTitle>

      {!isLogged ? (
        <S.AppBarUserSession>
          <Link to='/' >
            <p>Faça Login</p>
          </Link>

          <S.AppBarUserAvatar>
            <img src='/assets/Perfil.svg' alt="Foto do usuário" />
          </S.AppBarUserAvatar>
        </S.AppBarUserSession>
      ) : (
        <S.AppBarLogoutButton>
          <img src='/assets/Sair.svg' alt="Ícone de desligar" />
        </S.AppBarLogoutButton>
      )}
    </S.AppBarContent>
  </S.AppBarContainer>
)

const Memoized = memo(AppBar)

export { Memoized as AppBar } 