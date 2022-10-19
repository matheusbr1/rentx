import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/contexts/useAuth';
import * as S from './styles'

export interface AppBarProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
}

const AppBar: React.FC<AppBarProps> = ({ title, ...rest }) => {
  const { push } = useHistory()

  const { isAuthenticated } = useAuth()

  const handleSignOut = () => {
    push('/')
  }

  return (
    <S.AppBarContainer {...rest}>
      <S.AppBarContent>
        <S.AppBarTitle>
          {title}
        </S.AppBarTitle>
  
        {!isAuthenticated ? (
          <S.AppBarUserSession>
            <Link to='/' >
              <p>Faça Login</p>
            </Link>
  
            <S.AppBarUserAvatar>
              <img src='/assets/Perfil.svg' alt="Foto do usuário" />
            </S.AppBarUserAvatar>
          </S.AppBarUserSession>
        ) : (
          <S.AppBarLogoutButton onClick={handleSignOut} >
            <img src='/assets/Sair.svg' alt="Ícone de desligar" />
          </S.AppBarLogoutButton>
        )}
      </S.AppBarContent>
    </S.AppBarContainer>
  )
} 

export { AppBar } 