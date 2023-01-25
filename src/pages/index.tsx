import Head from 'next/head'
import { Button } from '~/common/components'

export default function Home() {
  return (
    <>
      <Head>
        <title>Lib - Biblioteca de Componentes</title>
        <meta name="description" content="Exemplo de publicação de componentes como pacote" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Button>Meu botão</Button>
      </main>
    </>
  )
}
