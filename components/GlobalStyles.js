import React from 'react'
import { createGlobalStyle } from 'styled-components'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle`
  body {
    -webkit-tap-highlight-color: ${theme`colors.transparent`};
    ${tw`antialiased bg-gray-50`};
  }

  * {
    font-family: 'Inter', sans-serif;
  }

  [data-reach-dialog-content] {
    ${tw`w-full p-0 m-0 min-h-screen bg-gray-50`}
  }
`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles