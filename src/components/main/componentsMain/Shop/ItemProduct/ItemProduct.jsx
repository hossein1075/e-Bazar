import React, { useContext } from 'react'
import { ProductsContext } from '../../../../../Contexts/ProductsContext'

function ItemProduct({ item }) {
    const contextData = useContext(ProductsContext)
    return (
        <>
            <div className='flex w-full mx-auto max-w-[500px] md:max-w-none flex-col md:flex-row items-center justify-between border-t-3 border-solid border-orange-600 bg-orange-100 rounded-b-3xl shadow-sub mb-8 p-4'>
            <div>
                <img src={item.img} className='size-30 rounded-sm' alt="product" />
            </div>
            <div className='flex flex-row md:flex-col justify-around gap-2 items-center md:h-[120px] mb-2.5 md:mb-0 mt-5 md:mt-0'>
                <h5>Item:</h5>
                <span className='font-bold font-Lato-Bold'>{item.title}</span>
            </div>
            <div className='flex flex-row w-full md:w-auto md:flex-col justify-between md:justify-around gap-2 items-center md:h-[120px] mb-2.5 md:mb-0'>
                <h5>Price</h5>
                <span className='font-bold font-Lato-Bold'>${item.price}</span>
            </div>
            <div className='flex flex-row w-full flex-wrap md:w-auto md:flex-col justify-between md:justify-around gap-2 items-center md:h-[120px] mb-2.5 md:mb-0'>
                <h5>Quantity</h5>
                <div>

                    <ul className='flex *:rounded-10px *:size-10 gap-2 font-bold font-Lato-Bold'>
                        <li className='bg-zinc-50 flexCenter shadow-sub text-xl'>
                            <button className='w-full' onClick={() => contextData.decreaseCount(item.id)}>
                                -
                            </button>
                        </li>

                        <li className='bg-orange-600 flexCenter shadow-sub text-xl text-zinc-50'>
                               {item.count}
                        </li>

                        <li className='bg-zinc-50 flexCenter shadow-sub text-xl'>
                            <button className='w-full' onClick={() => contextData.increaseCount(item.id)}>
                                +
                            </button>
                        </li>
                    </ul>

                </div>
            </div>
            <div className='flex flex-row w-full md:w-auto md:flex-col justify-between md:justify-around gap-2 items-center md:h-[120px] mb-2.5 md:mb-0'>
                <h5>Sub Total</h5>
                <span className='font-bold font-Lato-Bold'>${item.price * item.count}</span>
            </div>
        </div >
        </>
    )
}

export default ItemProduct