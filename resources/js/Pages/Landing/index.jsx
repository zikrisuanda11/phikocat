import Buttons from "@/Components/Buttons/Index"
import { KeyboardArrowRight } from "@mui/icons-material";
import { InertiaLink, usePage } from "@inertiajs/inertia-react"
import { Button, Divider } from "@mui/material";
import IndexLayout from "@/Layouts/IndexLayout";
import { useRef } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { BiLogoFacebookCircle, BiCopyright } from 'react-icons/bi';

function Landing({ flash }) {
  console.log(flash)
  const { auth } = usePage().props
  const service = useRef(null)
  const about = useRef(null)
  const handleSerivceClicked = () => {
    service.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handleAbout = () => {
    about.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (flash.message) {
      toast.success(flash.message)
    }
    if (flash.error) {
      toast.error(flash.error)
    }
    Inertia.post('/clear-flash')
  }, [flash.message, flash.error])

  return (
    <IndexLayout>
      {/* header section */}
      <div className="flex flex-col">
        <Toaster position="center-bottom" />
        <header className="h-[70vh] grid grid-cols-2 content-center px-24 py-3 mt-20">
          <div className="flex flex-col gap-5 my-auto">
            <h1 className="text-4xl">
              Perawatan bermutu <br />
              untuk peliharaanmu dirumah!
            </h1>
            <p className="text-lg">Menjaga kesehatan peliharaan sangat penting</p>
            <div>
              <Buttons onClick={handleSerivceClicked} variant={'contained'} size={'large'} title={'Layanan Kami'} backgroundColor={'#124C5F'} endIcon={<KeyboardArrowRight />} />
            </div>
          </div>
          <div className=" relative flex items-center justify-center">
            <img src='/assets/img/cat2.png' alt="header-image" className="w-[25rem] mx-auto  absolute" />
            {/* <img src='/assets/img/cat_shadow.png' alt="header-image" className="w-[25rem] mx-auto  absolute" /> */}
            {/* <div className="h-96 w-96 rounded-full bg-yellow-300 absolute z-10"></div>
            <img src='/assets/img/cat.png' alt="header-image" className="w-[25rem] mx-auto z-30 " /> */}
          </div>
        </header>
        <div className="mx-24  relative  h-fit" ref={about}>
          <div className="flex flex-col gap-10  absolute z-20 top-36 ">
            <div className="flex gap-3">
              <p className="text-5xl flex gap-3 ">
                Phikocat Shop
              </p>
              <img src="/assets/img/glow.png" alt="" className="w-8 h-8" />
            </div>
            <div className="w-8/12 text-lg">Phiko cat adalah sebuah toko atau tempat yang menyediakan berbagai kebutuhan hewan peliharaan, seperti makanan, perlengkapan, mainan, dan perawatan untuk hewan-hewan peliharaan seperti kucing, anjing, burung, ikan, dan hewan-hewan kecil lainnya. Petshop juga sering menyediakan layanan grooming, vaksinasi, dan perawatan kesehatan untuk hewan peliharaan.</div>
          </div>
          <div className="relative  z-10">
            <img src="/assets/img/image3.png" alt="" className="" />
          </div>
        </div>
        <section className="px-10 py-28" ref={service} id="target">
          <h4 className="text-3xl text-center my-10">Pelayanan Servis Kami</h4>
          <div className="flex flex-wrap justify-center gap-20">
            <div className="w-[20rem] h-auto hover:shadow-lg p-6 rounded-lg text-black bg-white flex flex-col gap-5">
              <p className="font-semibold text-2xl h-16 my-auto">Produk Makanan Peliharaan</p>
              <p className="h-32">
                Produk yang kami jual adalah produk yang memiliki kualitas terbaik untuk di konsumsi peliharaan kamu
                dalam hal ini kami telah memastikan kualitasnya dan telah di konsumsi oleh banyak berbagai macam jenis peliharaan
              </p>
              <InertiaLink href={route('product.index')} className="grid">
                <Button variant="contained" color="primary" disableElevation sx={{ marginTop: 1, textTransform: 'capitalize' }}>Klik untuk lihat produk</Button>
              </InertiaLink>
            </div>
            <div className="w-[20rem] h-auto hover:shadow-lg p-6 rounded-lg text-black bg-white flex flex-col gap-5">
              <p className="font-semibold text-2xl h-16 my-auto">Pets Grooming & Pet Hotel</p>
              <p className="h-32">
                proses perawatan dan perbaikan penampilan fisik hewan peliharaan, seperti anjing, kucing, dan hewan peliharaan lainnya.
              </p>
              <Button href="services" variant="contained" color="primary" disableElevation sx={{ marginTop: 1, textTransform: 'capitalize' }}>Pesan pets Grooming</Button>
            </div>
          </div>
        </section>
        <div className="mx-28 flex my-10">
          <div className="w-6/12">
            <div className="font-medium">
              Follow on social
            </div>
            <div className="text-primary">
              <a href="https://www.facebook.com/pages/Phiko%20Cat%20Shop/255564441588977/" target="blank">
                <BiLogoFacebookCircle size={55} />
              </a>
            </div>
          </div>
          <div className="w-6/12 flex flex-col gap-2">
            <h3 className="font-bold">Hubungi Phiko Cat Shop</h3>
            <h2 className="text-xl text-primary font-medium">0853-9107-8790</h2>
            <p className="w-6/12">Jl. Karang Jati Dalam RT 16 No. 1, Mekar Sari, Balikpapan Barat, Mekar Sari, Kec. Balikpapan Tengah, Kota Balikpapan, Kalimantan</p>
          </div>
        </div>
        <Divider />
        <div className="mx-28 my-5 flex">
          <div className="flex items-center gap-3 w-6/12">
            <BiCopyright/> all rights reserved
          </div>
          <div className="flex w-6/12 gap-20">
            <div className="hover:cursor-pointer" onClick={handleSerivceClicked}>our service</div>
            <div className="hover:cursor-pointer" onClick={handleAbout}>About us</div>
            <div className="hover:cursor-pointer">Contact</div>
          </div>
        </div>
      </div>
    </IndexLayout>
  )
}

export default Landing;