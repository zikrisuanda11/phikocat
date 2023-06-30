import { usePage } from "@inertiajs/inertia-react"
import Logo from "../../../../public/assets/logo/logo.png"
import Buttons from "../Buttons/Index"
import { Link } from "@inertiajs/react"

export default function Navbar({auth}){
  return (
    <nav className="flex justify-between content-center px-10 py-3">
        <div className="my-auto">
          <img src={Logo} className="w-10" />
        </div>
        <div className="flex gap-10 my-auto">
          <p className="hover:cursor-pointer">Pelayanan</p>
          <p className="hover:cursor-pointer">Kontak</p>
        </div>
        <div className="flex gap-5">
          {auth.user ? 
          <>
            <Link href={route('logout')} method="POST">
              <Buttons variant={'contained'} size={'medium'} title={'Keluar'} backgroundColor={'#124C5F'}/>
            </Link>
          </>
          :
          <div className="flex gap-3">
            <Link href={route('login')}>
              <Buttons variant={'contained'} size={'medium'} title={'Masuk'} backgroundColor={'#124C5F'}/>
            </Link>
            <Link href={route('register')}>
              <Buttons variant={'contained'} size={'medium'} title={'Daftar'} backgroundColor={'#C7E7E1'} textColor={'#124C5F'}/>
            </Link>
          </div>
          }
        </div>
      </nav>
  )
}