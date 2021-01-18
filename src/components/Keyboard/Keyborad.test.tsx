import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import { IKeycap } from 'keycap'
import { Keyboard, Keycap } from '@components'

describe('<Keyboard>', () => {
  const mock: IKeycap[] = [{ text: 'A', size: '1' }]

  it('should render layout correctly', () => {
    const wrapper = shallow(<Keyboard layout={mock} />)
    const child = wrapper.children()
    expect(child.type()).toBe(Keycap)
    expect(child.length).toBe(1)
  })

  it('should match snapshot', () => {
    const tree = renderer.create(<Keyboard layout={mock} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
