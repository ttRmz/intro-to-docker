import React from 'react'
import { render } from 'react-testing-library'
import Student from './Student'

describe('<Student />', () => {
  it('should render a student with a class', () => {
    const { container } = render(
      <Student data={{ name: 'Foo', family_name: 'Bar', class: 'A1' }} />,
    )
    expect(container).toMatchSnapshot()
  })
  it('should render a student without class, then show "NA" instead', () => {
    const { container } = render(
      <Student data={{ name: 'Foo', family_name: 'Bar' }} />,
    )
    expect(container).toMatchSnapshot()
  })
})
