const fs = require('fs')
const path = require('path')

let dict = fs.readFileSync(path.resolve(__dirname, 'dict.md'), 'utf-8')
dict = dict.split('\n')
dict = dict.filter(item => {
  if (item) {
    return item
  }
}).map(item => {
  if (item) {
    let data = item.match(/([a-zA-Z．.／/]+\s?)+/gi)
    if (data) {
      // console.log(`${data[data.length - 1].replace(/\s$/gi, '')}|${item.substr(data[0].length)}`)
      return `${data[0].replace(/\s$/gi, '')}|${item.substr(data[0].length)}`
    }
  }
})
dict = `export default [\n  '${dict.join('\',\n  \'')}'\n]\n`

fs.writeFileSync(path.resolve(__dirname, 'dict.js'), dict, 'utf-8')
