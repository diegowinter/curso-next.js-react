import Link from "next/link"
import { useRouter } from "next/router"

export default function IdENome() {
  const router = useRouter()
  const id = router.query.id
  const nome = router.query.nome

  return (
    <div>
      Rotas/{id}/{nome}
    </div>
  )
}