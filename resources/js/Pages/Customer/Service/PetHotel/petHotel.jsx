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

export default function grooming({ flash, price_service }) {
  const [typePayment, setTypePayment] = React.useState('cod');
  const [dateCheckin, setDateCheckin] = useState(DateFormat(new Date()));
  const [dateCheckout, setDateCheckout] = useState(DateFormat(new Date()));
  const  total_price = flash.data == null ? price_service : flash.data
  console.log(total_price);

  const handleOnDateChange = () => {
    Inertia.post('/services/transaction/pet-hotel', {
      date_checkin: dateCheckin,
      date_checkout: dateCheckout
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
      date_checkout: dateCheckout
    });
  }

  return (
    <IndexLayout>
      <div>
        <div className="flex flex-col w-full items-center justify-center my-10">
          <h1 className="text-3xl font-serif">Pet Hotel</h1>
          <div className="w-full">
            <div className="flex gap-5 mx-56 justify-center  mt-10">
              <div className="border shadow-md p-5 rounded-xl w-4/12 flex flex-col items-center justify-center">
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
              <div className="border shadow-md p-5 rounded-xl w-4/12 flex flex-col items-center justify-center">
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
              <div className="h-fit flex flex-col border shadow-md w-4/12 p-5 rounded-xl">
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
    </IndexLayout>
  )
}