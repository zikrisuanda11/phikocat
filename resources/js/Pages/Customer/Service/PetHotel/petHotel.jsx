import React from "react";
import IndexLayout from "@/Layouts/IndexLayout";
import RadioButton from "@/Components/RadioButton";
import RupiahFormat from "@/Helper/RupiahFormat";
import CustomButton from "@/Components/Buttons/CustomButton";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function grooming({ auth, total_price = 12000, count_product }) {
  const [typePayment, setTypePayment] = React.useState('cod');
  const handleCheckout = () => {
    // Inertia.post('/checkout', {
    //   type_transaction_id: 1,
    //   type_payment: typePayment
    // });
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
                    <DateCalendar />
                  </LocalizationProvider>
                </div>
              </div>
              <div className="border shadow-md p-5 rounded-xl w-4/12 flex flex-col items-center justify-center">
                <h3 className="text-gray-500">Check-OUT</h3>
                <div>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar />
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
                    // title={'Checkout (' + carts.length + ')'}
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