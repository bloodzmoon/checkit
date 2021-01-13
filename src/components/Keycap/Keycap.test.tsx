import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import { Keycap } from '@components'
import { FiCheck } from 'react-icons/fi'

describe('<Keycap>', () => {
  it('should render <span>', () => {
    const wrapper = shallow(<Keycap />)
    expect(wrapper.find('span')).toHaveLength(1)
  })

  it('should render `string child` correctly', () => {
    const expectedText = 'Shift'
    const wrapper = shallow(<Keycap>{expectedText}</Keycap>)
    const child = wrapper.children()
    expect(child.text()).toBe(expectedText)
  })

  it('should render `icon child` correctly', () => {
    const wrapper = shallow(
      <Keycap>
        <FiCheck />
      </Keycap>
    )
    const child = wrapper.children()
    expect(child.type()).toBe(FiCheck)
  })

  it('should render class from props correctly', () => {
    const wrapper = shallow(<Keycap size="1.5" halfHeight />)
    expect(wrapper.hasClass('size1-5')).toBeTruthy()
    expect(wrapper.hasClass('half')).toBeTruthy()
    expect(wrapper.hasClass('gap')).toBeTruthy()
  })

  it('should match snapshot', () => {
    const tree = renderer
      .create(
        <Keycap size="1.15" halfHeight>
          Test
        </Keycap>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
