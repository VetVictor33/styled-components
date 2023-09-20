import Wrapper from "../Wrapper";
import { Button } from "./components/Button";
import Form from "./components/Form";
import Input from "./components/Input";



export default function LoginForm() {
  return (
    <Form>
      <Input type="text" placeholder="Nome" />
      <Input type="number" placeholder="Idade" />
      <Input type="text" placeholder="Profissão" />
      <Input type="email" placeholder="E-mail" />

      <Wrapper $centered>
        <Button $primary >Enviar</Button>
        <Button>Cancelar</Button>
      </Wrapper>

    </Form>
  )
}
