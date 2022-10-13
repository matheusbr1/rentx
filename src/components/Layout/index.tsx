import React, { HTMLAttributes, memo, ReactElement } from 'react';
import { useLocation } from 'react-router-dom';
import { AppBarProps } from '../AppBar';
import { SideMenu } from '../SideMenu';

import * as S from './styles';

interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
  appBarComponent?: ReactElement<AppBarProps>
}

const Layout: React.FC<LayoutProps> = ({ appBarComponent = '', children, ...rest }) => {
  const { pathname } = useLocation()

  return (
    <S.Container hasAppBar={!!appBarComponent} {...rest} >
      <SideMenu pathname={pathname} />
      
      {appBarComponent}
  
      <S.Content hasAppBar={!!appBarComponent} >
        {children}
      </S.Content>
    </S.Container>
  )
} 

const Memoized = memo(Layout)

export { Memoized as Layout } 