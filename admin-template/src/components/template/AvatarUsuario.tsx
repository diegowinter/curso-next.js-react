import Image from "next/image";
import Link from "next/link";
import useAuth from "../../data/hook/useAuth";

interface AvatarUsuarioProps {
  className?: string
}

export default function AvatarUsuario(props: AvatarUsuarioProps) {
  const { usuario } = useAuth()

  return (
    <Link href='/perfil'>
      {/* <Image src={usuario?.imagemUrl ?? '/vercel.svg'} alt='Avatar do usuário' width={10} height={10} className={`h-10 w-10 rounded-full cursor-pointer ${props.className}`} /> */}
      <img src={usuario?.imagemUrl ?? '/vercel.svg'} alt='Avatar do usuário'
        className={`h-10 w-10 rounded-full cursor-pointer ${props.className}`} />
    </Link>
  )
}