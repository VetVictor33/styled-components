import { z } from 'zod'

const emptyField = "é campo obrigatório"
const fieldTooBig = "deve conter no máximo 20 caracteres"

const userSchema = z.object({
  name: z.string().nonempty({ message: `Nome ${emptyField}` })
    .max(20, { message: `Nome ${fieldTooBig}` }),
  age: z.number().nonnegative({ message: 'Idade não pode ser número negativo' }),
  profession: z.string().nonempty({ message: `Profissão ${emptyField}` })
    .max(20, { message: `Profissão ${fieldTooBig}` }),
  email: z.string().email({ message: 'Formato de email inválido' }).nonempty({ message: `Email ${emptyField}` })
    .max(20, { message: `Email ${fieldTooBig}` })
})

export type userSchemaType = z.infer<typeof userSchema>

export default userSchema;