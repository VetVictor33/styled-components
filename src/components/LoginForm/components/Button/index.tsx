import styled, { css } from "styled-components"


export const Button = styled.button<{ $primary?: boolean }>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${({ theme }) => theme.color.tertiary};
  color: #BF4F74;
  margin: 0.5rem 1rem;
  padding: 0.25rem 1rem;

  ${props => props.$primary && css`
    background: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.secondary};
  ` || !props.$primary && css`
  background: ${({ theme }) => theme.color.secondary};
    color: ${({ theme }) => theme.color.primary};
  `}
`;