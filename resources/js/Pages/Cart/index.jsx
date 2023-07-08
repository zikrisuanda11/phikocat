import IndexLayout from "@/Layouts/IndexLayout";
import React, { useEffect, useState } from "react";
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import RupiahFormat from "@/Helper/RupiahFormat"
import { IconTrash } from "@tabler/icons-react"
import CustomButton from "@/Components/Buttons/CustomButton";
import { Inertia } from "@inertiajs/inertia";
import RadioButton from "@/Components/RadioButton";
import toast, { Toaster } from 'react-hot-toast';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Cart({ flash, auth, carts, total_price, midtranClientKey, snapToken, status }) {

  const [typePayment, setTypePayment] = React.useState('cod');

  const handleDeleteCart = (id) => {
    Inertia.delete(`/cart/${id}`, { preserveScroll: true })
  }

  const handleIncrementCart = async (id) => {
    Inertia.put('/increment-cart', {
      product_id: id
    }, { preserveScroll: true })
  }

  const handleDecrementCart = (id) => {
    Inertia.put('/decrement-cart', {
      product_id: id
    }, { preserveScroll: true })
  }

  const handleCheckout = () => {
    Inertia.post('/checkout', {
      type_transaction_id: 1,
      type_payment: typePayment
    });
  }
  console.log(flash);
  useEffect(() => {
    if (flash.message) {
      toast(flash.message)
    }
    Inertia.post('/clear-flash')
  }, [flash.message])

  useEffect(() => {
    const snapSrcUrl = 'https://app.sandbox.midtrans.com/snap/snap.js';
    const myMidtransClientKey = midtranClientKey; //change this according to your client-key

    const script = document.createElement('script');
    script.src = snapSrcUrl;
    script.setAttribute('data-client-key', myMidtransClientKey);
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <>
      <IndexLayout auth={auth}>
        <Toaster />
        <div className="flex flex-col w-full items-center justify-center my-10">
          <h1 className="text-3xl font-serif">Cart</h1>
          <div className="w-full">
            <div className="flex gap-5 mx-56 justify-center  mt-10">
              <div className=" border shadow-md w-8/12 rounded-xl h-min-fit">
                <header className="flex justify-between my-2 items-center">
                  <div className="text-gray-500">
                    <Checkbox {...label} defaultChecked />
                    select all
                  </div>
                  <div className="text-gray-500 mx-5">
                    <button>Delete</button>
                  </div>
                </header>
                <Divider />
                {/* begin::product */}
                {carts.length > 0 ?
                  carts.map((cart, index) => {
                    return (
                      <React.Fragment key={cart.id}>
                        <div className="flex items-center my-2">
                          <div>
                            <Checkbox {...label} defaultChecked />
                          </div>
                          <img src={cart.product_pet.photo_product} className="w-32 h-auto" />
                          <div className="w-full">
                            <div className="flex justify-between items-center">
                              <div className="flex flex-col ml-2">
                                <div>
                                  {cart.product_pet.name_product}
                                </div>
                                <div className="text-xs text-primary mt-2">
                                  {RupiahFormat(cart.product_pet.price_product)}
                                </div>
                              </div>
                              <div className="mr-8 flex items-center gap-4">
                                <button onClick={() => { handleDeleteCart(cart.id) }}>
                                  <IconTrash size={'20'} />
                                </button>
                                <CustomButton
                                  title={'-'}
                                  variant={'outlined'}
                                  onClick={() => { handleDecrementCart(cart.product_id) }}
                                  customClass={"w-8 h-8"}
                                />
                                <div className="">
                                  {cart.quantity}
                                </div>
                                <CustomButton
                                  title={'+'}
                                  variant={'contained'}
                                  onClick={() => { handleIncrementCart(cart.product_id) }}
                                  customClass={"w-8 h-8"}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </React.Fragment>
                    )
                  })
                  : (
                    <div className="text-center mt-16">😞 Keranjang Kosong</div>
                  )
                }

                {/* end::product */}
              </div>
              <div className="h-fit flex flex-col border shadow-md w-4/12 p-5 rounded-xl">
                <div>
                  <div className="text-gray-500 text-sm">Payment Method.</div>
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
                {/* {typePayment === 'cod' &&
              } */}
                {status === 'success' &&
                  <>
                    <div id="snap-container"></div>
                    {window.snap.pay({ snapToken })}
                  </>
                }
                <div>
                  <CustomButton
                    title={'Checkout (' + carts.length + ')'}
                    onClick={() => { handleCheckout() }}
                    variant={"contained"}
                    customClass={"w-full py-1 mt-3"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </IndexLayout>
    </>
  )
}