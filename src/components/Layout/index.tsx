import React, { HTMLAttributes, memo, ReactElement } from 'react';
import { AppBarProps } from '../AppBar';
import { SideMenu } from '../SideMenu';

import * as S from './styles';

interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
  appBarComponent?: ReactElement<AppBarProps>
}

const Layout: React.FC<LayoutProps> = ({ appBarComponent = '', children, ...rest }) => (
  <S.Container {...rest} >
    <SideMenu />
    
    {appBarComponent}

    <S.Content hasAppBar={!!appBarComponent} >
      {children}
    </S.Content>
  </S.Container>
)

const Memoized = memo(Layout)

export { Memoized as Layout } 