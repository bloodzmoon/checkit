import React from 'react'
import { render } from '@testing-library/react'
import { Keycap } from './index'

describe('<Keycap>', () => {
  it('should render <span>', () => {
    const { container } = render(<Keycap />)
    const element = container.querySelector('span')
    expect(element).toBeVisible()
  })

  it('should render child correctly', () => {
    const expectedText = 'Shift'
    const { container } = render(<Keycap>{expectedText}</Keycap>)
    const element = container.firstChild
    expect(element?.textContent).toBe(expectedText)
  })
})
