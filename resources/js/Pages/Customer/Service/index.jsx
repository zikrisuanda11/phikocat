import React from "react";
import IndexLayout from "@/Layouts/IndexLayout";
import { InertiaLink } from "@inertiajs/inertia-react";
import { Button } from "@mui/material";
import { Inertia } from "@inertiajs/inertia";

export default function index({ auth, services, count_product }) {
  const url = {
    grooming: 'service.transaction.grooming',
    pet_hotel: 'service.transaction.pet_hotel'
  }

  console.log(services);

  const handleGrooming = (id) => {
    Inertia.get(`/services/transaction/grooming/${id}`)
  }

  return (
    <IndexLayout>
      <div className="flex flex-col items-center w-full">
        <h4 className="text-3xl text-center my-16">Pelayanan Kami</h4>
        <div className="flex gap-20 flex-wrap justify-center mx-28">
          {services.map((service, index) => {
            return (
              <div className="flex gap-20" key={index}>
                <div className="w-[20rem] h-auto hover:shadow-lg p-6 rounded-lg text-black bg-white flex flex-col gap-5 justify-between">
                  <div className="flex flex-col gap-5">
                    <p className="font-semibold text-2xl h-16  text-start">{service.name_service}</p>
                    <p className="h-auto ">{service.description_service}</p>
                  </div>
                  <div className="">
                    {/* kirim id service_pets */}
                    {/* <Button href={route(service.type_service === 'grooming' ? url.grooming : url.pet_hotel)} variant="contained" color="primary" disableElevation sx={{ marginTop: 1, textTransform: 'capitalize' }}>Klik untuk pesan layanan</Button> */}
                    <Button href={service.type_service === 'grooming' ? `/services/transaction/grooming/${service.id}` : route(url.pet_hotel)} variant="contained" color="primary" disableElevation sx={{ marginTop: 1, textTransform: 'capitalize' }}>Klik untuk pesan layanan</Button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </IndexLayout>
  )
}