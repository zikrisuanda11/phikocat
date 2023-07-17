import React from "react";
import { BsGear } from 'react-icons/bs';
import { Inertia } from "@inertiajs/inertia";
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { BsBoxSeam, BsClockHistory } from 'react-icons/bs';
import { InertiaLink, Link, usePage } from '@inertiajs/inertia-react'
import { BiCategoryAlt, BiUser, BiLogOut, BiMoney } from 'react-icons/bi';
import { Divider } from "@mui/material";


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
    // { name: 'History Transactions', href: '/histories', icon: BsClockHistory, isActive: url === '/histories' },
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
    <div className="h-full flex ">
      <div className="h-full p-2 w-2/12 flex flex-col gap-5">
        <a href="/dashboard">
          <img src="/assets/logo/logo.png" alt="ini_logo" className='h-10 w-auto ml-4' />
        </a>
        <div>
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
          <button onClick={handleLogout} className="w-full rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 text-start flex items-center gap-5 px-4 py-2">
            <BiLogOut className="text-gray-400 group-hover:text-gray-500" size={21} />
            Sign-out
          </button>
        </div>
      </div>
      <div className="w-10/12 border-l-2 ">
        <div className="p-2">
          <a href="/dashboard">
            <img src="/assets/logo/logo.png" alt="ini_logo" className='h-10 w-auto ml-4' />
          </a>
        </div>
        <div className=" w-full">
          <div className="mb-10  ">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}