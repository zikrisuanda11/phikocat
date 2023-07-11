import React from 'react';
import { InertiaLink, Link, usePage } from '@inertiajs/inertia-react'
import Logo from "../../../../public/assets/logo/logo.png"
import Buttons from "../Buttons/Index"
import { Inertia } from "@inertiajs/inertia";
import { IconShoppingCart } from "@tabler/icons-react"
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function Navbar() {
  const { count_product, auth } = usePage().props;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleLogout = () => {
    Inertia.post('/logout')
  }

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfile = () => {
    Inertia.get('/profile')
    setAnchorEl(null);
  };
  const handleSignOut = () => {
    Inertia.post('/logout')
    setAnchorEl(null);
  };

  return (
    <nav className="sticky top-0 z-10 bg-white/80 shadow-md backdrop-blur-xl flex justify-between content-center px-10 py-3">
      <div className="my-auto">
        <a href='/'>
          <img src={Logo} className="w-10" />
        </a>
      </div>
      <div className="flex gap-10 my-auto font-sans">
        <p className="hover:cursor-pointer">Pelayanan</p>
        <p className="hover:cursor-pointer">Kontak</p>
        <a href="/product">Product</a>
        <a href="/services">Service</a>
      </div>
      <div className="flex gap-2">
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
            {/* <Buttons onClick={handleLogout} variant={'contained'} size={'medium'} title={'Keluar'} backgroundColor={'#124C5F'} /> */}
            {auth && (
              <div className='mt-0.5'>
                <IconButton
                  size="small"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="primary"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleProfile}>Profile</MenuItem>
                  <MenuItem onClick={handleSignOut}>Sign out</MenuItem>
                </Menu>
              </div>
            )}
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