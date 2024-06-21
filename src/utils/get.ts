// https://gist.github.com/andrewchilds/30a7fb18981d413260c7a36428ed13da?permalink_comment_id=4433741#gistcomment-4433741
type GetReturnType<T> = T | undefined
type ValueType = Record<string | number, unknown>

export const get = <T>(
  value: unknown,
  query: string | Array<string | number>,
  defaultVal: GetReturnType<T> = undefined
): GetReturnType<T> => {
  const splitQuery = Array.isArray(query)
    ? query
    : query
        .replace(/(\[(\d)\])/g, '.$2')
        .replace(/^\./, '')
        .split('.')

  if (!splitQuery.length || splitQuery[0] === undefined) return value as T

  const key = splitQuery[0]

  if (
    typeof value !== 'object' ||
    value === null ||
    !(key in value) ||
    (value as ValueType)[key] === undefined
  ) {
    return defaultVal
  }

  return get((value as ValueType)[key], splitQuery.slice(1), defaultVal)
}
