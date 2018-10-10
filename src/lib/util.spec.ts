import { unwrap } from './util'

test('unwrap works well', () => {
  expect(() => unwrap(undefined)).toThrow(ReferenceError)
})
