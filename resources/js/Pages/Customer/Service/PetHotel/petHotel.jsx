import React, { useEffect, useState } from "react";
import IndexLayout from "@/Layouts/IndexLayout";
import RadioButton from "@/Components/RadioButton";
import RupiahFormat from "@/Helper/RupiahFormat";
import CustomButton from "@/Components/Buttons/CustomButton";
import DateFormat from "@/Helper/DateFormat";
import { Inertia } from "@inertiajs/inertia";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import dayjs from "dayjs";
import toast, { Toaster } from 'react-hot-toast';
import TextArea from "@/Components/TextArea/Index";
import { usePage } from "@inertiajs/inertia-react";

export default function grooming({ flash }) {
  const [typePayment, setTypePayment] = React.useState('cod');
  const [dateCheckin, setDateCheckin] = useState(new Date().toISOString().split('T')[0]);
  const [dateCheckout, setDateCheckout] = useState(new Date().toISOString().split('T')[0]);
  const [dateService, setDateService] = useState();
  const [note, setNote] = useState();
  const total_price = flash.data == null ? 0 : flash.data
  console.log(dateService);
  console.log(dateCheckout);

  useEffect(() => {
    if (flash.message) {
      toast.message(flash.message)
    }
    if (flash.error) {
      toast.error(flash.error)
    }
    Inertia.post('/clear-flash')
  }, [flash.message, flash.error])

  const handleOnDateChange = () => {
    Inertia.post('/services/transaction/pet-hotel', {
      date_checkin: dateCheckin,
      date_checkout: dateCheckout,
    })
  }
  useEffect(() => {
    handleOnDateChange();
  }, [dateCheckin, dateCheckout])

  const handleCheckout = () => {
    Inertia.post('/checkout/pet-hotel', {
      type_transaction_id: 2,
      type_payment: typePayment,
      date_checkin: dateCheckin,
      date_checkout: dateCheckout,
      date_service: dateService,
      description: note,
    });
  }

  return (
    <IndexLayout>
      <div>
        <Toaster position="center-bottom" />
        <div className="flex flex-col w-full items-center justify-center my-10">
          <h1 className="text-3xl font-serif">Pet Hotel</h1>
          <div className="w-full">
            <div className="flex gap-5 mx-12 justify-center  mt-10">
              <div className="h-fit border shadow-md p-5 rounded-xl w-3/12 flex flex-col items-center justify-center">
                <h3 className="text-gray-500">Check-IN</h3>
                <div>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar
                      onChange={(newValue) => {
                        const formattedDate = DateFormat(newValue.$d);
                        setDateCheckin(formattedDate);
                      }}
                    />
                  </LocalizationProvider>
                </div>
              </div>
              <div className="h-fit border shadow-md p-5 rounded-xl w-3/12 flex flex-col items-center justify-center">
                <h3 className="text-gray-500">Check-OUT</h3>
                <div>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar
                      onChange={(newValue) => {
                        const formattedDate = DateFormat(newValue.$d);
                        setDateCheckout(formattedDate);
                      }}
                    />
                  </LocalizationProvider>
                </div>
              </div>
              <div className="w-3/12 h-full">
                <div className="h-full">
                  <div className="h-fit flex flex-col border shadow-md p-5 rounded-xl gap-5">
                    <label className="text-gray-500 text-sm" htmlFor="">Pilih tanggal & jam penjemputan</label>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <MobileDateTimePicker
                        onChange={(newValue) => {setDateService(dayjs(newValue).format('YYYY-MM-DDTHH:mm:ss.SSSZ'))}}
                        label="Pilih tanggal & jam"
                        format="DD/MM/YYYY HH:mm:ss"
                      />
                    </LocalizationProvider>
                  </div>
                  <div className="mt-5 h-full">
                    <div className=" flex flex-col border shadow-md p-5 rounded-xl gap-5">
                      <p className="text-gray-500 text-sm">Kondisi kesehatan hewan peliharaan</p>
                      <TextArea
                        id={"description_pet"}
                        value={note}
                        onChange={(e) => {
                          setNote(e.target.value)
                        }}
                        placeholder={"Masukkan deskripsi disini.."}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-3/12 ">
                <div className="">
                  <div className="h-fit flex flex-col border shadow-md p-5 rounded-xl">
                    <div>
                      <div className="text-gray-500">Payment Method.</div>
                      <div>
                        <RadioButton
                          value={typePayment}
                          setValue={setTypePayment}
                        />
                      </div>
                    </div>
                    <div className="flex justify-between mt-5">
                      <h3 className="">Subtotal</h3>
                      <p className="text-primary font-bold text-xs">{RupiahFormat(total_price)}</p>
                    </div>
                    <div>
                      <CustomButton
                        title={'Checkout'}
                        onClick={() => { handleCheckout() }}
                        variant={"contained"}
                        customClass={"w-full py-1 mt-3"}
                      />
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </IndexLayout>
  )
}