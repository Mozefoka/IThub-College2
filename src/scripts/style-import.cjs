console.log('FILE:', process.argv[2])
const fs = require('fs')
const path = require('path')

const filePath = process.argv[2]
if (!filePath) {
  console.error('Укажите путь к .vue файлу: node generate-bem.js src/components/Card.vue')
  process.exit(1)
}

const src = fs.readFileSync(filePath, 'utf-8')

const templateMatch = src.match(/<template>([\s\S]*?)<\/template>/)
if (!templateMatch) {
  console.error('В файле не найден <template>')
  process.exit(1)
}
const templateContent = templateMatch[1]

const classRegex = /class="([^"]+)"/g
const allClassSets = new Set()
let m
while ((m = classRegex.exec(templateContent)) !== null) {
  m[1]
    .split(/\s+/)
    .filter(Boolean)
    .forEach((cls) => allClassSets.add(cls))
}

if (allClassSets.size === 0) {
  console.log('Классы в template не найдены — нечего генерировать.')
  process.exit(0)
}

const blocks = new Map()

function ensureBlock(name) {
  if (!blocks.has(name)) {
    blocks.set(name, { modifiers: new Set(), elements: new Map() })
  }
  return blocks.get(name)
}

for (const cls of allClassSets) {
  const [beforeMod, mod] = cls.split('--')
  const [blockPart, elementPart] = beforeMod.split('__')

  const block = ensureBlock(blockPart)

  if (elementPart) {
    if (!block.elements.has(elementPart)) {
      block.elements.set(elementPart, new Set())
    }
    if (mod) block.elements.get(elementPart).add(mod)
  } else if (mod) {
    block.modifiers.add(mod)
  }
}

function generateScss() {
  let out = ''
  for (const [blockName, block] of blocks) {
    out += `.${blockName} {\n`

    for (const mod of block.modifiers) {
      out += `  &--${mod} {\n  }\n\n`
    }

    for (const [elName, mods] of block.elements) {
      out += `  &__${elName} {\n`
      for (const mod of mods) {
        out += `    &--${mod} {\n    }\n\n`
      }
      out += `  }\n\n`
    }

    out += `}\n\n`
  }
  return out.trim() + '\n'
}

const scssBlock = generateScss()

const styleRegex = /<style([^>]*)>([\s\S]*?)<\/style>/

if (styleRegex.test(src)) {
  const updated = src.replace(styleRegex, (full, attrs, content) => {
    const trimmed = content.trim()
    const separator = trimmed ? '\n\n' : ''
    return `<style${attrs}>\n${trimmed}${separator}${scssBlock}</style>`
  })
  fs.writeFileSync(filePath, updated, 'utf-8')
} else {
  const updated = src.trimEnd() + `\n\n<style lang="scss" scoped>\n${scssBlock}</style>\n`
  fs.writeFileSync(filePath, updated, 'utf-8')
}

console.log(`Готово: BEM-скелет добавлен в ${filePath}`)
