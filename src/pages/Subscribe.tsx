import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { ReactLogo } from "../components/ReactLogo";
import { useCreateSubscriberMutation } from "../graphql/generated";


export function Subscribe() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const navigation = useNavigate()

  const [createSubscriber, { loading }] = useCreateSubscriberMutation()

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault()

    try {
      await createSubscriber({
        variables: {
          name,
          email
        }
      })

      setName('')
      setEmail('')

      navigation('/event')

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="min-h-screen relative flex flex-col item-center bg-gradient-to-t from-gray-50">
      <ReactLogo />
      {/* <img
        
        src="/src/assets/logo-react.svg"
        alt="Logo do React"
      /> */}

      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto z-10">
        <div className="max-w-[640px]">
          <Logo />

          <h1 className="mt-8 text-[2rem] text-gray-800 leading-tight">
            Construa uma
            <strong className="text-purple-700"> aplicação completa</strong>, do zero, com
            <strong className="text-purple-700"> React</strong>
          </h1>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>

        <div className="p-8 bg-gray-100 border border-purple-500 rounded">
          <strong className="text-xl mb-6 block">
            Inscreva-se gratuitamente
          </strong>

          <form
            className="flex flex-col gap-2 w-full"
            onSubmit={handleSubscribe}
          >
            <input
              className="bg-gray-200 rounded px-4 h-14"
              type="text"
              placeholder="Seu nome completo"
              onChange={event => setName(event.currentTarget.value)}
              value={name}
            />
            <input
              className="bg-gray-200 rounded px-4 h-14"
              type="email"
              placeholder="Digite seu e-mail"
              onChange={event => setEmail(event.currentTarget.value)}
              value={email}
            />

            <button
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-600 transition-colors disabled:opacity-40"
              type="submit"
              disabled={loading}
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>

      <img
        className="max-w-[1100px] mx-auto z-10"
        src="/src/assets/code-mockup.png"
        alt="" />
    </div>
  )
}
