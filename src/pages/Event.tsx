import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { Videos } from '../components/Vidos'

export const Event = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex flex-1'>
        <Videos />
        <Sidebar />
      </main>
    </div>
  )
}
