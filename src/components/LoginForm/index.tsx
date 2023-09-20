import { ChangeEvent, FormEvent, useState } from "react";
import Wrapper from "../Wrapper";
import { Button } from "./components/Button";
import Form from "./components/Form";
import Input from "./components/Input";
import userSchema, { userSchemaType } from '../../schemas/user'
import Warning from "./components/Warning";



export default function LoginForm() {

  const [user, setUser] = useState<userSchemaType>({
    name: '', age: 0, profession: '', email: ''
  })
  const [feedBackMessage, setFeedBackMessage] = useState<string>(null!)
  const [error, setError] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFeedBackMessage('');
    setError(false);
    const { name, value } = e.target;
    setUser((oldUser) => {
      const transformedValue = name === 'age' ? +value : value
      const newUser = { ...oldUser, [name]: transformedValue };
      return newUser;
    })
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log(user)
      userSchema.parse(user)
      setFeedBackMessage('Tudo certo!')

      setUser({ name: '', age: 0, profession: '', email: '' })
    } catch (error) {
      const { issues } = error;
      setFeedBackMessage(issues[0].message)
      setError(true)
    }

  }

  return (
    <Form onSubmit={onSubmit}>
      <Input name="name" type="text" placeholder="Nome" onChange={onChange} value={user?.name} />
      <Input name="age" type="number" placeholder="Idade" onChange={onChange} value={user?.age} />
      <Input name="profession" type="text" placeholder="Profissão" onChange={onChange} value={user?.profession} />
      <Input name="email" type="email" placeholder="E-mail" onChange={onChange} value={user?.email} />

      {!!feedBackMessage && <Warning $severity={error ? 'error' : 'success'}>{feedBackMessage}</Warning >}

      <Wrapper $centered>
        <Button $primary >Enviar</Button>
        <Button>Cancelar</Button>
      </Wrapper>

    </Form>
  )
}
