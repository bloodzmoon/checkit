import React from 'react'
import { render } from '@testing-library/react'
import { Key } from './index'

describe('<Key>', () => {
  it('should render <span>', () => {
    const { container } = render(<Key />)
    const element = container.querySelector('span')
    expect(element).toBeVisible()
  })

  it('should render child correctly', () => {
    const expectedText = 'Shift'
    const { container } = render(<Key>{expectedText}</Key>)
    const element = container.firstChild
    expect(element?.textContent).toBe(expectedText)
  })
})
