import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  background-color: blue;

  width: 80%;
  height: 40.0rem;

  gap: ${({ theme }) => theme.size.sm};

  border-radius: ${({ theme }) => theme.size.sm};
  padding: ${({ theme }) => theme.size.sm};
`

export default Form