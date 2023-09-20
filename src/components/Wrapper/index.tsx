import styled, { css } from "styled-components";

const Wrapper = styled.div<{ $centered?: boolean, $column?: boolean }>`
  display: flex;

  ${props => props.$column && css`
  flex-direction: column;
  `}

  ${props => props.$centered && css`
  align-items: center;
  justify-content: center;
  `}
`

export default Wrapper;