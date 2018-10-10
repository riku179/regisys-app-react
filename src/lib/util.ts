export const unwrap = <T> (val: T | null | undefined): T => {
  if (!val) { throw new ReferenceError(`accessed ${val}`)}
  return val
}
