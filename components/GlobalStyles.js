import React from 'react'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'
import { Global, css } from '@emotion/react'

const customStyles = css({
  body: {
    WebkitTapHighlightColor: theme`colors.transparent`,
    ...tw`antialiased bg-gray-50`,
  },

  "*": {
    fontFamily: "'Inter', sans-serif",
  },

  "div[data-reach-dialog-content]": {
    ...tw`w-full p-0 m-0 min-h-screen bg-gray-50`
  }
})

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
)

export default GlobalStyles