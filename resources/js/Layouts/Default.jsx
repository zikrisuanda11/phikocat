import React from "react";
import { BsGear } from 'react-icons/bs';
import { Inertia } from "@inertiajs/inertia";
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { BsBoxSeam, BsClockHistory } from 'react-icons/bs';
import { InertiaLink, Link, usePage } from '@inertiajs/inertia-react'
import { BiCategoryAlt, BiUser, BiLogOut, BiMoney } from 'react-icons/bi';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Layout({ children }) {
  const props = usePage().props

  const { url } = usePage();

  const id = url.split('/').slice(1);

  const navigationAdmin = [
    { name: 'Dashboard', href: '/dashboard', icon: MdOutlineSpaceDashboard, isActive: url === '/dashboard' },
    {
      name: 'Product', href: '/admin/products', icon: BsBoxSeam,
      isActive: url === '/admin/products' ||
        url === '/admin/products/create' ||
        url === `/admin/products/${parseInt(id[1])}/edit`
    },
    {
      name: 'Type Product', href: '/admin/type-products', icon: BiCategoryAlt,
      isActive:
        url === '/admin/type-products' ||
        url === '/admin/type-products/create' ||
        url === `/admin/type-products/${parseInt(id[1])}/edit`
    },
    { name: 'History Transactions', href: '/histories', icon: BsClockHistory, isActive: url === '/histories' },
    {
      name: 'Confirm Payment', href: '/admin/confirm', icon: BiMoney,
      isActive:
        url === '/admin/confirm' ||
        url === '/admin/confirm/create' ||
        url === `/admin/confirm/${parseInt(id[1])}/edit`
    },
    {
      name: 'Service Pets', href: '/admin/services', icon: BsGear,
      isActive:
        url === '/admin/services' ||
        url === '/admin/services/create' ||
        url === `/admin/services/${parseInt(id[1])}/edit`
    },
    {
      name: 'User', href: '/admin/users', icon: BiUser,
      isActive:
        url === '/admin/users' ||
        url === '/admin/users/create' ||
        url === `/admin/users/${parseInt(id[1])}/edit`
    },
  ]

  const navigationManager = [
    { name: 'Dashboard', href: '/dashboard', icon: MdOutlineSpaceDashboard, isActive: url === '/dashboard' },
    { name: 'History', href: '/histories', icon: BsBoxSeam, isActive: url === '/histories' },
  ]

  const isAdmin = props.auth.roles;
  const navigation = isAdmin ? navigationAdmin : navigationManager

  const handleLogout = () => {
    Inertia.post('/logout')
  }

  return (
    <div className="grid grid-cols-5 border">
      {/* begin::sidebard */}
      <div className="flex-col px-4 border">
        <div className="items-center flex h-fit py-4 ">
          <a href="/">
            <img src="/assets/logo/logo.png" alt="ini_logo" className='h-10 w-auto ml-4' />
          </a>
        </div>
        <div className="col-span-1 max-h-full flex flex-col justify-between">
          <nav aria-label="Main Nav" className="flex flex-col space-y-1">
            {navigation.map((item) => (
              <InertiaLink
                key={item.name}
                href={item.href}
                className={classNames(
                  item.isActive
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                  'flex items-center gap-2 rounded-lg  px-4 py-2'
                )}
                aria-current={item.isActive ? 'page' : undefined}
              >
                <item.icon
                  className={classNames(
                    item.isActive
                      ? 'text-gray-500'
                      : 'text-gray-400 group-hover:text-gray-500',
                    'mr-3 h-6 w-6'
                  )}
                />
                {item.name}
              </InertiaLink>
            ))}
          </nav>
          <button onClick={handleLogout} className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 text-start flex items-center gap-5 px-4 py-2">
            <BiLogOut size={21}/>
            Sign-out
          </button>
        </div>
      </div>
      {/* end::sidebar */}
      <div className="col-span-4 ">
        {/* begin::header */}
        <header aria-label="Site Header" className="border-b border-gray-100">
          <div
            className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8"
          >
            <div className="flex items-center gap-4">

              <a href="/dashboard" className="flex">
                {/* <span className="sr-only">Logo</span> */}
                <img src="/assets/logo/logo.png" alt="ini_logo" className='inline-block h-10 w-auto' />
              </a>
            </div>

            <div className="flex flex-1 items-center justify-end gap-8">
              <div className="flex items-center">
                <div className="flex items-center border-gray-100">
                  {/* <Buttons onClick={handleLogout} variant={'contained'} size={'medium'} title={'Keluar'} backgroundColor={'#124C5F'} /> */}
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* end::header */}
        <div className="bg-white overflow-hidden shadow rounded-lg h-fit">
          <div className="px-4 py-5 sm:p-6">{children}</div>
        </div>
      </div>
    </div>
  )
}