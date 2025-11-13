import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import React, { useState } from 'react'

function CheckOutForm({ showLable }) {
    return (
        <>
            <div className='bg-orange-50 shadow-sub border-t-3 border-solid border-orange-600 rounded-b-3xl  lg:w-auto py-8 px-6'>
                <form action="#">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-x-5'>
                        <div className='mb-8'>
                            <input type="text" className='w-full border-b-1 border-neutral-600 outline-none' placeholder='First Name' />
                        </div>
                        <div className='mb-8'>
                            <input type="text" className='w-full border-b-1 border-neutral-600 outline-none' placeholder='Last Name' />
                        </div>
                        <div className='mb-8'>
                            <input type="text" className='w-full border-b-1 border-neutral-600 outline-none' placeholder='Email' />
                        </div>
                        <div className='mb-8'>
                            <input type="text" className='w-full border-b-1 border-neutral-600 outline-none' placeholder='Phone Number' />
                        </div>
                        <div className='mb-8'>
                            <input type="text" className='w-full border-b-1 border-neutral-600 outline-none' placeholder='Country' />
                        </div>
                        <div className='mb-8'>
                            <input type="text" className='w-full border-b-1 border-neutral-600 outline-none' placeholder='State / County' />
                        </div>
                        <div className='mb-8'>
                            <input type="text" className='w-full border-b-1 border-neutral-600 outline-none' placeholder='House no and street name' />
                        </div>
                        <div className='mb-8'>
                            <input type="text" className='w-full border-b-1 border-neutral-600 outline-none' placeholder='Apartment, suite, (optional)' />
                        </div>
                    </div>

                    <FormGroup>
                        <FormControlLabel control={<Checkbox
                            icon={<CheckBoxOutlineBlankIcon sx={{
                                stroke: '#EC7755',
                                fill: 'none',
                            }} />}
                        />} label={showLable} sx={{
                            '& .MuiFormControlLabel-label': {
                                fontFamily: 'RobotoSerif Bold'
                            }
                        }
                        } />
                    </FormGroup>

                </form>
            </div>
        </>
    )
}

export default CheckOutForm