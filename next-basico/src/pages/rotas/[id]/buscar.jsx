import { useRouter } from "next/router"

export default function buscar() {
  const router = useRouter()
  const id = router.query.id

  return (
    <div>
      Rotas/{id}/Buscar
    </div>
  )
}