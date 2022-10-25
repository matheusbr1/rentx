import { Layout } from '.'
import { renderTheme } from '../../styles/test/renderTheme'
import { expect, it, vi } from 'vitest'

vi.mock('react-router-dom', () => ({
  useLocation: () => ({
    pathname: '/cars'
  }),
  Link: () => 'Link'
}))

const setup = {
  AppBarComponent: (() => <p>Testing</p>) as any
}

describe('Layout Component', () => {
  it('should be able to render with appBarComponent', () => {
    const { getByText } = renderTheme(
      <Layout appBarComponent={setup.AppBarComponent()} />
    )
    expect(getByText('Testing')).toBeTruthy()
  })

  it('should be able to render without appBarComponent', () => {
    const { queryByText } = renderTheme(
      <Layout />
    )
    expect(queryByText('Testing')).not.toBeTruthy()
  })
})