import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  branco: 'rgba(255, 248, 242, 1)',
  rosa: 'rgba(230, 103, 103, 1)'
}

export const GlobalCss = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sinzing: border-box;
  font-family: Roboto, sans-serif;
  }

body {
  background-color: ${cores.branco}
  color: ${cores.branco}
  }
`
export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`

/* esse seria o css geral, as informações daqui são exportadas*/
