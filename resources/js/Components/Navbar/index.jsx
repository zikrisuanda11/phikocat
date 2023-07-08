// import { usePage, Link, InertiaLink } from "@inertiajs/inertia-react"
import { InertiaLink, Link } from '@inertiajs/inertia-react'
import Logo from "../../../../public/assets/logo/logo.png"
import Buttons from "../Buttons/Index"
// import {  } from "@inertiajs/react"
import { Inertia } from "@inertiajs/inertia";
import { IconShoppingCart } from "@tabler/icons-react"

export default function Navbar({ auth, count_product }) {

  const handleLogout = () => {
    Inertia.post('/logout')
  }

  return (
    <nav className="sticky top-0 bg-white/80 shadow-md backdrop-blur-xl flex justify-between content-center px-10 py-3">
      <div className="my-auto">
        <a href='/'>
          <img src={Logo} className="w-10" />
        </a>
      </div>
      <div className="flex gap-10 my-auto font-sans">
        <p className="hover:cursor-pointer">Pelayanan</p>
        <p className="hover:cursor-pointer">Kontak</p>
        <a href="/product">product</a>
      </div>
      <div className="flex gap-5">
        {auth.user ?
          <>
            {/* TODO tampilkan untuk user dengan role customer saja */}
            <div className="mt-1.5 mr-2 text-primary">
              <InertiaLink href="/cart">
                <div className="flex items-center">
                  <IconShoppingCart />
                  <div className="text-sm">
                    {count_product}
                  </div>
                </div>
              </InertiaLink>
            </div>
            {/* <InertiaLink href='logout' method='post'> */}
            <Buttons onClick={handleLogout} variant={'contained'} size={'medium'} title={'Keluar'} backgroundColor={'#124C5F'} />
            {/* </InertiaLink> */}
          </>
          :
          <div className="flex gap-3">
            <InertiaLink href={route('login')}>
              <Buttons variant={'contained'} size={'medium'} title={'Masuk'} backgroundColor={'#124C5F'} />
            </InertiaLink>
            <InertiaLink href={route('register')}>
              <Buttons variant={'contained'} size={'medium'} title={'Daftar'} backgroundColor={'#C7E7E1'} textColor={'#124C5F'} />
            </InertiaLink>
          </div>
        }
      </div>
    </nav>
  )
}