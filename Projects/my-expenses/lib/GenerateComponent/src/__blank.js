module.exports = function __blankFile(filename, styles) {
  return `import React from 'react'
import styles from './${styles}.module.scss'

const ${filename} = () => {
  return (
    <div>${filename}</div>
  )
}

export default ${filename}
  `;
};
