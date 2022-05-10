import { useRouter } from "next/router"

export default function Buscar() {
  const router = useRouter()
  const id = router.query.id

  return (
    <div>
      Rotas/{id}/Buscar
    </div>
  )
}