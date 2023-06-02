import React, { useRef } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";
import Layout from "@/Layouts/Default";
import Buttons from "@/Components/Buttons/Index";
import Breadcrumb from '@/Components/Breadcrumb/Index'
import Popup from "@/Components/Alert/Popup";
import Modal from "@/Components/Modal/Delete";

export default function TypeProduct({ datas, flash }) {

  const modalContent = useRef({
    title: '',
    message: '',
    id: null,
    actionConfirm: null
  })

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOnClose = () => {
    setIsOpenModal(false)
    setIsOpen(false)
  }

  const openModal = () => {
    setIsOpenModal(true)
  }

  useEffect(() => {
    if (flash.message) {
      setIsOpen(true);
    }
  }, [flash.message]);

  const handleDelete = () => {
    Inertia.delete(`/type-products/${modalContent.current.id}`)
    handleOnClose();
  }

  const rows = datas.map((data, idx) => ({
    id: data.id,
    no: idx + 1,
    name_type: data.name_type,
  }))

  const columns = [
    { field: 'no', headerName: 'No', width: 120, headerAlign: 'center', align: 'center' },
    { field: 'name_type', headerName: 'Nama Product', width: 200 },
    {
      field: 'id',
      sortable: false,
      headerName: 'Action',
      headerAlign: 'center',
      align: 'center',
      width: 200,
      renderCell: (params) => {
        const isDeleteProduct = () => {
          modalContent.current = {
            title: 'Hapus Data',
            message: 'Yakin ingin menghapus data?',
            id: params.id,
            actionConfirm: handleDelete
          }
          openModal();
        }

        return (
          <>
            <div className="grid gap-3 grid-cols-2">
              <Buttons
                variant={'contained'}
                size={'medium'}
                title={'Edit'}
                backgroundColor={'#C7E7E1'}
                textColor={'#124C5F'}
                href={`/type-products/${params.id}/edit`}
              />
              <Buttons
                variant={'contained'}
                size={'small'}
                title={'Hapus'}
                textColor={'#B91C1C'}
                backgroundColor={'#FDE2E2'}
                onClick={isDeleteProduct}
              />
            </div>
          </>
        )
      }
    }
  ]

  return (
    <>
      <Layout>
        <Modal
          icon={(
            <span className="text-red-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            </span>

          )}
          title={modalContent.current.title}
          message="Apakah anda yakin ingin menghapus data?"
          isOpen={isOpenModal}
          onClose={handleOnClose}
          actionConfirm={modalContent.current.actionConfirm}
        />
        {flash.message && <Popup
          icon={(
            <span className="text-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          )}
          title={"Success"}
          message={flash.message}
          isOpen={isOpen}
          onClose={handleOnClose}
        />}
        <div className="container m-5">
          <div className="flex-col mr-8">
            <div className="flex justify-between">
              <div className="flex-col">
                <h1 className="text-lg font-semibold text-gray-900">Produk</h1>
                <Breadcrumb
                  breadcrumbs={[
                    { name: 'TypeProduct', href: '/type-products', color: 'inherit', key: '1' },
                    { name: 'Table', color: 'text.primary', key: '2' },
                  ]}
                />
              </div>
              <div >
                <Buttons
                  href={'/type-products/create'}
                  variant={'contained'}
                  size={'medium'}
                  title={'Tambah Data'}
                  backgroundColor={'#124C5F'}
                />
              </div>
            </div>
            <div className="mt-6 inline-block align-middle min-w-full">
              <div style={{ height: 480, width: '100%' }}>
                <DataGrid
                  getRowId={(row) => row.id}
                  rows={rows}
                  columns={columns}
                  initialState={{ pagination: { paginationModel: { pageSize: 25 } } }}
                  components={{ Toolbar: GridToolbar }}
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}