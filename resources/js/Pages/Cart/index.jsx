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

export default function Cart({ flash, auth, carts, total_price, status }) {
  const label = { inputProps: carts.id }

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

  useEffect(() => {
    if (flash.message) {
      toast(flash.message)
    }
    Inertia.post('/clear-flash')
  }, [flash.message])

  return (
    <>
      <IndexLayout>
        <Toaster />
        <div className="flex flex-col w-full items-center justify-center my-10">
          <h1 className="text-3xl font-serif">Cart</h1>
          <div className="w-full">
            <div className="flex gap-5 mx-56 justify-center  mt-10 ">
              <div className=" border shadow-md w-8/12 rounded-xl h-min-fit">
              <h1 className="text-xl text-center my-3 font-medium text-gray-500">Keranjang</h1>
                {/* begin::product */}
                {carts.length > 0 ?
                  carts.map((cart, index) => {
                    return (
                      <React.Fragment key={cart.id}>
                        <div className="flex items-center my-2">
                          <div className="w-3/12  flex justify-center">
                            <img src={cart.product_pet.photo_product} className="object-contain h-32 w-auto" />
                          </div>
                          <div className="w-9/12">
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
                              <div className="text-xs text-gray-500">Tersisa {cart.product_pet.stock_product} buah</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <Divider /> */}
                      </React.Fragment>
                    )
                  })
                  : (
                    <div className="text-center mt-20">😞 Keranjang Kosong</div>
                  )
                }

                {/* end::product */}
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