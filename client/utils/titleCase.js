export function titleCase(str) {
  console.log(str)
  return str
    .split('/')[0]
    .split('-')
    .map(function (word) {
      return word.replace(word[0], word[0]?.toUpperCase())
    })
    .join(' ')
}
