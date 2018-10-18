import React from 'react'
import ReactSpoiler from "../src/index"
import { shallow, mount, render } from 'enzyme'

it('renders ReactSpoiler', () => {
  const wrapper = shallow(<ReactSpoiler><h2>ReactSpoiler Text1</h2></ReactSpoiler>)

  expect(wrapper).toMatchSnapshot()
})

it('renders with Tag prop', () => {
  const wrapper = shallow(<ReactSpoiler tag='h2'>ReactSpoiler tag</ReactSpoiler>)

  expect(wrapper.type()).toBe('h2')
})

it('chains onClick, onMouseEnter, onMouseLeave methods', () => {
  const onClick = jest.fn()
  const onMouseEnter = jest.fn()
  const onMouseLeave = jest.fn()

  const wrapper = mount(
    <ReactSpoiler
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      ReactSpoiler Text
    </ReactSpoiler>
  )

  wrapper.simulate('click')
  expect(onClick).toHaveBeenCalled()
  expect(onMouseEnter).not.toHaveBeenCalled()
  expect(onMouseLeave).not.toHaveBeenCalled()

  wrapper.simulate('mouseenter')
  expect(onMouseEnter).toHaveBeenCalled()
  expect(onMouseLeave).not.toHaveBeenCalled()

  wrapper.simulate('mouseleave')
  expect(onMouseEnter).toHaveBeenCalled()
  expect(onMouseLeave).toHaveBeenCalled()
})

it('passes passed prop to Tag element', () => {
  const wrapper = mount(
    <ReactSpoiler
      className='dummy1'
      id='dummy2'
      style={{ color: 'red' }}
      tag='h2'
    >
      ReactSpoiler Text
    </ReactSpoiler>
  )

  expect(wrapper.prop('className')).toBe('dummy1')
  expect(wrapper.prop('style')).toEqual({color: 'red'})
  expect(wrapper.prop('id')).toBe('dummy2')
})

it('removes the blur value on click', () => {
  const wrapper = shallow(
    <ReactSpoiler
      blur={10}
      hoverBlur={10}
    >
      ReactSpoiler Text
    </ReactSpoiler>
  )

  expect(wrapper.prop('style').filter).toBe('blur(10px)')
  wrapper.simulate('click')
  expect(wrapper.prop('style').filter).not.toBeTruthy()
})

it('updates the blur value on hover', () => {
  const wrapper = shallow(
    <ReactSpoiler
      hoverBlur={10}
    >
      ReactSpoiler Text
    </ReactSpoiler>
  )

  expect(wrapper.prop('style').filter).toBe('blur(4px)')
  wrapper.simulate('mouseenter')
  expect(wrapper.prop('style').filter).toBe('blur(10px)')
  wrapper.simulate('mouseleave')
  expect(wrapper.prop('style').filter).toBe('blur(4px)')
})
