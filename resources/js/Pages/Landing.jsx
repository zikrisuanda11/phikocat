import Buttons from "@/Components/Buttons/Index"
import { KeyboardArrowRight } from "@mui/icons-material";
import HeaderImage from "../../../public/header-img.png";


function Landing(){
  return (
    <div>
      
      {/* navbar section */}
      <nav className="flex justify-between content-center px-10 py-3">
        <div className="my-auto">
          <p>Logo</p>
        </div>
        <div className="flex gap-10 my-auto">
          <p className="hover:cursor-pointer">Pelayanan</p>
          <p className="hover:cursor-pointer">Produk</p>
          <p className="hover:cursor-pointer">Pet Care</p>
          <p className="hover:cursor-pointer">Kontak</p>
        </div>
        <div className="flex gap-5">
          <Buttons variant={'contained'} size={'medium'} title={'Masuk'} backgroundColor={'#124C5F'}/>
          <Buttons variant={'contained'} size={'medium'} title={'Daftar'} backgroundColor={'#C7E7E1'} textColor={'#124C5F'}/>
        </div>
      </nav>

      {/* header section */}
      <header className="h-[70vh] grid grid-cols-2 content-center px-24 py-3">
        <div className="flex flex-col gap-5 my-auto">
          <h1 className="text-4xl">
            Perawatan bermutu <br/>
            untuk peliharaanmu dirumah!
          </h1>
          <p className="text-lg">Menjaga kesehatan peliharaan sangat penting</p>
          <div>
            <Buttons variant={'contained'} size={'large'} title={'Layanan Kami'} backgroundColor={'#124C5F'} endIcon={<KeyboardArrowRight />} />
          </div>
        </div>
        <div>
          <img src={HeaderImage} alt="header-image" className="w-[35rem] mx-auto" />
        </div>
      </header>

      <section className="px-10 py-20">
        <h4 className="text-lg">Service Category</h4>
      </section>

    </div>
  )
}

export default Landing;