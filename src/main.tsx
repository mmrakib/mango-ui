import React from 'react'
import ReactDOM from 'react-dom/client'
import Canvas from './Canvas.tsx'
import { createGlobalStyle } from 'styled-components'

import { InvertedButton } from '../lib/main.tsx'

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    box-sizing: border-box;
  }
`

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <Canvas>
      <InvertedButton>This is a button</InvertedButton>
    </Canvas>
  </React.StrictMode>,
)
