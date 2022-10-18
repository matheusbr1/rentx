import React from 'react'
import { render, RenderResult } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../themes/default'

export const renderTheme = (children: React.ReactNode): RenderResult => {
  return render(
    <ThemeProvider theme={defaultTheme}>
      {children}
    </ThemeProvider>
  )
}