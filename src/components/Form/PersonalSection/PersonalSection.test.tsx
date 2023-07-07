import { test } from 'vitest'
import { render } from 'test/utilities.ts'
import PersonalSection from './PersonalSection.tsx'
import { Provider } from 'react-redux'
import { createStore } from '@/src/redux/store.ts'

test('personal info section should render wrapped in the redux provider', () => {
  render(<PersonalSection />, {
    wrapper: ({ children }) => (
      <Provider store={createStore()}>{children}</Provider>
    ),
  })
})
