import IndexLayout from "@/Layouts/IndexLayout";
import React from "react";
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import RupiahFormat from "@/Helper/RupiahFormat"
import { IconTrash } from "@tabler/icons-react"
import Buttons from "@/Components/Buttons/Index";
import CustomButton from "@/Components/Buttons/CustomButton";
import { Inertia } from "@inertiajs/inertia";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Cart({ auth, carts }) {
  console.log(carts);

  const handleDeleteCart = (id) => {
    Inertia.delete(`/cart/${id}`)
  }

  const handleIncrementCart = (id) => {
    Inertia.post('/increment-cart', {
      product_id: id
    })
  }

  const handleDecrementCart = (id) => {
    Inertia.post('/decrement-cart', {
      product_id: id
    })
  }

  return (
    <IndexLayout auth={auth}>
      <div className="flex flex-col w-full items-center justify-center my-10">
        <h1 className="text-3xl font-serif">Phikopets</h1>
        <div className="w-full">
          <div className="flex gap-5 mx-56 justify-center  mt-10">
            <div className=" border shadow-md w-8/12">
              <header className="flex justify-between my-2 items-center">
                <div>
                  <Checkbox {...label} defaultChecked />
                  Select All
                </div>
                <div className="mx-5">Delete</div>
              </header>
              <Divider />
              {/* begin::product */}
              {carts.map((cart, index) => {
                return (
                  <React.Fragment key={cart.id}>
                    <div className="flex items-center my-2">
                      <div>
                        <Checkbox {...label} defaultChecked />
                      </div>
                      <img src={cart.product_pet.photo_product} className="w-32 h-auto" />
                      <div className="w-full">
                        <div className="flex justify-between items-center">
                          <div className="flex flex-col">
                            <div>
                              {cart.product_pet.name_product}
                            </div>
                            <div className="text-xs text-primary mt-2">
                              {RupiahFormat(cart.product_pet.price_product)}
                            </div>
                          </div>
                          <div className="mr-8 flex items-center gap-4">
                            <button onClick={() => {handleDeleteCart(cart.id)}}>
                              <IconTrash size={'20'} />
                            </button>
                            <CustomButton
                              title={'-'}
                              variant={'outlined'}
                              onClick={() => {handleDecrementCart(cart.id)}}
                            />
                            <div className="">
                              {cart.quantity}
                            </div>
                            <CustomButton
                              title={'+'}
                              variant={'contained'}
                              onClick={() => {handleIncrementCart(cart.id)}}
                            />
                          </div>
                        </div>
                      </div>
                      <div>

                      </div>
                    </div>
                  </React.Fragment>
                  
                )
              })}
              {/* end::product */}
            </div>
            <div className="border shadow-md w-4/12">
              disini tempat rincian harga cuy ril
            </div>
          </div>
        </div>
      </div>
    </IndexLayout>
  )
}