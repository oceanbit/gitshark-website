const sizeOfREM = 16

export const jsToCSS = htmlStyle =>
  htmlStyle.replace(/([A-Z])/g, m => `-${m.toLowerCase()}`)

export const classToCSS = elClass =>
  Object.entries(elClass)
    .map(([propName, value]) => {
      // Convert to REM
      if (["lineHeight", "fontSize"].includes(propName)) {
        value = `${Number(value) / sizeOfREM}rem`
      }
      return `${jsToCSS(propName)}: ${value};`
    })
    .join("\n")
