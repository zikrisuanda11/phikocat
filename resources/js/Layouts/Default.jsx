import React from "react";
import { usePage } from '@inertiajs/react'
import { InertiaLink } from '@inertiajs/inertia-react'
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { BsBoxSeam, BsClockHistory } from 'react-icons/bs';
import { BiCategoryAlt, BiUser } from 'react-icons/bi';
import { BsGear } from 'react-icons/bs';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Layout({ children }) {
  const { url } = usePage();
  console.log(url);

  const id = url.split('/').slice(1);

  const navigationAdmin = [
    { name: 'Dashboard', href: '/dashboard', icon: MdOutlineSpaceDashboard, isActive: url === '/dashboard' },
    {
      name: 'Product', href: '/products', icon: BsBoxSeam,
      isActive: url === '/products' ||
        url === '/products/create' ||
        url === `/products/${parseInt(id[1])}/edit`
    },
    {
      name: 'Type Product', href: '/type-products', icon: BiCategoryAlt,
      isActive:
        url === '/type-products' ||
        url === '/type-products/create' ||
        url === `/type-products/${parseInt(id[1])}/edit`
    },
    {
      name: 'History Transactions', href: '/histories', icon: BsClockHistory,
      isActive:
        url === '/histories' ||
        url === '/histories/create' ||
        url === `/histories/${parseInt(id[1])}/edit`
    },
    {
      name: 'Service Pets', href: '/services', icon: BsGear,
      isActive:
        url === '/services' ||
        url === '/services/create' ||
        url === `/services/${parseInt(id[1])}/edit`
    },
    {
      name: 'User', href: '/users', icon: BiUser,
      isActive:
        url === '/users' ||
        url === '/users/create' ||
        url === `/users/${parseInt(id[1])}/edit`
    },
  ]

  const navigation = navigationAdmin

  return (
    <div className="grid grid-cols-5">
      {/* begin::sidebard */}
      <div className="flex-col px-4">
        <div className="items-center flex h-16">
          <a href="/">
            <img src="" alt="ini_logo" className='h-10 w-auto ml-4' />
          </a>
        </div>
        <div className="col-span-1 min-h-screen">
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
        </div>
      </div>
      {/* end::sidebar */}
      <div className="col-span-4 min-h-screen">
        {/* begin::header */}
        <header aria-label="Site Header" className="border-b border-gray-100">
          <div
            className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8"
          >
            <div className="flex items-center gap-4">

              <a href="/" className="flex">
                <span className="sr-only">Logo</span>
                <img src="" alt="ini_logo" className='inline-block h-10 w-32' />
              </a>
            </div>

            <div className="flex flex-1 items-center justify-end gap-8">
              <div className="flex items-center">
                <div className="flex items-center border-gray-100">
                  <a
                    href="#"
                    className="grid h-16 w-16 place-content-center border-b-4 border-transparent text-gray-500  hover:text-gray-700"
                  >
                    <svg
                      className="h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <span className="sr-only"> Account </span>
                  </a>

                </div>
              </div>
            </div>
          </div>
        </header>
        {/* end::header */}
        <div className="bg-white overflow-hidden shadow rounded-lg min-h-screen">
          <div className="px-4 py-5 sm:p-6">{children}</div>
        </div>
      </div>
    </div>
  )
}