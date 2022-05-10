import { useRouter } from "next/router"

export default function params() {
  const router = useRouter()
  const nome = router.query.nome
  const id = router.query.id

  return (
    <div>
      Rotas/params<br />
      {nome} <br /> {id}
    </div>
  )
}