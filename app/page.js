"use client";

import { useState, useRef, useEffect } from 'react';

import { currencyFormatter} from '@/lib/utils'

import KategoriPengeluaran from '@/components/KategoriPengeluaran';
import Modal from '@/components/Modal';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DUMMY_DATA = [
  {
    id: 1,
    title: "Cat 1",
    color: '#e63946',
    amount: 1000
  },
  {
    id: 2,
    title: "Cat 2",
    color: '#588157',
    amount: 2000
  },
  {
    id: 3,
    title: "Cat 3",
    color: '#669bbc',
    amount: 3000
  },
  {
    id: 4,
    title: "Cat 4",
    color: '#ffbe0b',
    amount: 4000
  }
]

export default function Home() {
  const [showAddIncomeModal, setShowAddIncomeModal] = useState(true);

  return (

  <>
    {/* Add Income Modal */}
    <Modal show={showAddIncomeModal} onClose={setShowAddIncomeModal}>
      <form className='flex flex-col gap-4 '>

        <div className='input-group'>  
          <label>Jumlah Pemasukan</label>
          <input 
            type='number' 
            name='amount'
            min={100} 
            step={100} 
            placeholder='Masukkan jumlah pemasukan'
            required
          />
        </div>

        <div className='input-group'>  
          <label htmlFor='description'>Deskripsi</label>
          <input 
            type='text' 
            name='description' 
            placeholder='Masukkan deskripsi pemasukan'
            required
          />
        </div>

        <button type='submit' className='btn btn-primary'>
          Tambahkan
        </button>

      </form>
    </Modal>
      
    <main className='container max-w-2xl px-6 mx-auto'>
    
      <section className='py-3'>
        <small className='text-gray-400 text-md'>Uang ku segini: </small>
        <h2 className='text-4xl font-bold'>{ currencyFormatter(10000000) }</h2>
      </section>

      <section className='flex items-center gap-2 py-3'>
        <button onClick={() => {  }} className='btn btn-primary'>+ Pengeluaran</button>
        <button onClick={() => { setShowAddIncomeModal(true) }} className='btn btn-primary-outline'>+ Pemasukan</button>
      </section>

      {/* pengeluaran */}
      <section className='py-6'>
        <h3 className='text-2xl'>Pengeluaranku</h3>
        <div className='flex flex-col gap-4 mt-6'>

          {/* kategori pengeluaran */}
          {DUMMY_DATA.map(pengeluaran => {
            return (
              
              <KategoriPengeluaran 
                color={pengeluaran.color}
                title={pengeluaran.title}
                amount={pengeluaran.amount}
              />
            )

          })}
          
        </div>
      </section>

      {/* chart */}
      <section className='py-6'>
          <h3 className='text-2xl'>Stats</h3>
          <div className='w-1/2 mx-auto'>
            <Doughnut data={{
              labels: DUMMY_DATA.map(pengeluaran => pengeluaran.title),
              datasets: [
                {
                  label: "Pengeluaran",
                  data: DUMMY_DATA.map(pengeluaran => pengeluaran.amount),
                  backgroundColor: DUMMY_DATA.map(pengeluaran => pengeluaran.color),
                  borderColor: [`#18181b`],
                  borderWidth: 2
                }
              ]
            }} />
          </div>
      </section>

    </main>

  </>

  );
}
