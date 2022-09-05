import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-tr from-purple-900 to-blue-500
    `}>
      <span className='text-4xl'>Texto</span>
    </div>
  )
}

export default Home
