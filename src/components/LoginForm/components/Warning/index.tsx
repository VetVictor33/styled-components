import styled from "styled-components";

type Severity = 'error' | 'success'

const Warning = styled.p<{ $severity: Severity }>`
  font-size: ${props => props.theme.size.sl};
  color: ${props => props.$severity === 'error' ? 'red' : 'green'};
`

export default Warning;