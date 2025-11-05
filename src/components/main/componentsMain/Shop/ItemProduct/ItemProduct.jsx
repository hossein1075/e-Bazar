import React from 'react'

function ItemProduct() {
    return (
        <>
            <div>
                <img src="/images/Products/p-1.png" className='size-30 rounded-sm' alt="product" />
            </div>
            <div className='flex flex-row sm:flex-col justify-around gap-2 items-center sm:h-[120px] mb-2.5 sm:mb-0 mt-5 sm:mt-0'>
                <h5>Item:</h5>
                <span className='font-bold font-Lato-Bold'>benana</span>
            </div>
            <div className='flex flex-row w-full sm:w-auto sm:flex-col justify-between sm:justify-around gap-2 items-center sm:h-[120px] mb-2.5 sm:mb-0'>
                <h5>Price</h5>
                <span className='font-bold font-Lato-Bold'>$50</span>
            </div>
            <div className='flex flex-row w-full flex-wrap sm:w-auto sm:flex-col justify-between sm:justify-around gap-2 items-center sm:h-[120px] mb-2.5 sm:mb-0'>
                <h5>Quantity</h5>
                <div>

                    <ul className='flex *:rounded-10px *:size-10 gap-2 font-bold font-Lato-Bold'>
                        <li className='bg-zinc-50 flexCenter shadow-sub text-xl'>
                            <button>
                                -
                            </button>
                        </li>

                        <li className='bg-orange-600 flexCenter shadow-sub text-xl text-zinc-50'>
                            <button>
                                1
                            </button>
                        </li>

                        <li className='bg-zinc-50 flexCenter shadow-sub text-xl'>
                            <button>
                                +
                            </button>
                        </li>
                    </ul>

                </div>
            </div>
            <div className='flex flex-row w-full sm:w-auto sm:flex-col justify-between sm:justify-around gap-2 items-center sm:h-[120px] mb-2.5 sm:mb-0'>
                <h5>Sub Total</h5>
                <span className='font-bold font-Lato-Bold'>$50</span>
            </div>
        </>
    )
}

export default ItemProduct