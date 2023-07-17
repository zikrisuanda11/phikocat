import Buttons from "@/Components/Buttons/Index"
import { KeyboardArrowRight } from "@mui/icons-material";
import HeaderImage from "../../../../public/header-img.png";
import { InertiaLink, usePage } from "@inertiajs/inertia-react"
import { Button } from "@mui/material";
import IndexLayout from "@/Layouts/IndexLayout";
import { useRef } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';

function Landing({flash}){
  console.log(flash)
  const {auth} = usePage().props
  const targetRef = useRef(null)
  const handleButtonClick = () => {
    targetRef.current.scrollIntoView({ behavior: 'smooth' });
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
        <Toaster position="center-bottom" />
        <header className="h-[70vh] grid grid-cols-2 content-center px-24 py-3">
          <div className="flex flex-col gap-5 my-auto">
            <h1 className="text-4xl">
              Perawatan bermutu <br/>
              untuk peliharaanmu dirumah!
            </h1>
            <p className="text-lg">Menjaga kesehatan peliharaan sangat penting</p>
            <div>
              <Buttons onClick={handleButtonClick} variant={'contained'} size={'large'} title={'Layanan Kami'} backgroundColor={'#124C5F'} endIcon={<KeyboardArrowRight />} />
            </div>
          </div>
          <div>
            <img src={HeaderImage} alt="header-image" className="w-[35rem] mx-auto" />
          </div>
        </header>

        <section className="px-10 py-28" ref={targetRef} id="target">
          <h4 className="text-3xl text-center my-10">Pelayanan Servis Kami</h4>
          <div className="flex flex-wrap justify-center gap-20">
            <div className="w-[20rem] h-auto hover:shadow-lg p-6 rounded-lg text-black bg-white flex flex-col gap-5">
              <p className="font-semibold text-2xl h-16 my-auto">Produk Makanan Peliharaan</p>
              <p className="h-32">
                Produk yang kami jual adalah produk yang memiliki kualitas terbaik untuk di konsumsi peliharaan kamu
                dalam hal ini kami telah memastikan kualitasnya dan telah di konsumsi oleh banyak berbagai macam jenis peliharaan
              </p>
              <InertiaLink href={route('product.index')} className="grid">
                <Button variant="contained" color="primary" disableElevation sx={{marginTop: 1, textTransform: 'capitalize'}}>Klik untuk lihat produk</Button>
              </InertiaLink>
            </div>
            <div className="w-[20rem] h-auto hover:shadow-lg p-6 rounded-lg text-black bg-white flex flex-col gap-5">
              <p className="font-semibold text-2xl h-16 my-auto">Pets Grooming & Pet Hotel</p>
              <p className="h-32">
                proses perawatan dan perbaikan penampilan fisik hewan peliharaan, seperti anjing, kucing, dan hewan peliharaan lainnya. 
              </p>
              <Button href="services" variant="contained" color="primary" disableElevation sx={{marginTop: 1, textTransform: 'capitalize'}}>Pesan pets Grooming</Button>
            </div>
          </div>
        </section>
      </IndexLayout>
  )
}

export default Landing;