import React from 'react'
import { render } from '@testing-library/react'
import Message from '../Message.template'

test('Render Message test.', () => {
  render(<Message />)
})
