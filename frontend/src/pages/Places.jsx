import React from 'react'
import { Link, useParams } from 'react-router-dom'

function Places() {

    const {action} = useParams()
    console.log(action);
    return (
        <div>
                    { action !== "new" &&
            
            ( <div className="text-center">
                                <Link className="bg-primary text-white py-2 px-4 rounded-full" to="account/places/new">Add new Place</Link>
                            </div>)
            
                    }
                    {
                        action ===  "new" && (
                        <div>
                            <form action="">
                                <h2>Basic Info</h2>
                                <input type="text" name="title" placeholder='title' />    
                                <input type="text" name='addres' placeholder='address' />
                                <h2>photos</h2>
                                <div className='flex gap-2'>
                                    <input type="text" placeholder='add using a link  ...jpg'/>
                                    <button className='bg-gray-200 grow px-4 rounded-2xl'>add&nbsp;photo</button>
                                </div>
                                <div className='mt-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
                                    <button className='border bg-transparent rounded-2xl p-8 text-gray-600'>Upload from device</button>

                                </div>
                                <textarea className='w-full border my-1 py-2 px-3 rounded-2xl' placeholder='description'></textarea>
                                <div className='grid gap-2 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 border p-2' >
                                    <label className='border p-4'>
                                        <input type="checkbox" name=""/>
                                        <span>Wifi</span>
                                    </label>
                                    <label className='border p-4'>
                                        <input type="checkbox" name=""/>
                                        <span>Free parking spot</span>
                                    </label>
                                    <label className='border p-4'>
                                        <input type="checkbox" name=""/>
                                        <span>Tv</span>
                                    </label>
                                    <label className='border p-4'>
                                        <input type="checkbox" name=""/>
                                        <span>Pets</span>
                                    </label>
                                    <label className='border p-4'>
                                        <input type="checkbox" name=""/>
                                        <span>Private interance</span>
                                    </label>
                                </div>
                                
                                <textarea className='w-full border my-1 py-2 px-3 rounded-2xl' placeholder='Extra Info'></textarea>
                                <div className='grid gap-2 sm:grid-cols-3'>
                                    <div className='mt-2 -mb-1'>
                                        <h3>CheckIn time</h3>
                                        <input type="text" name=""/>
                                    </div>
                                    <div className='mt-2 -mb-1'>
                                        <h3>CheckOut Time</h3>
                                        <input type="text" name=""/>
                                    </div>
                                    <div className='mt-2 -mb-1'>
                                        <h3>Max Number of Guests</h3>
                                        <input type="text" name=""/>
                                    </div>
                                </div>
                            </form>
                        </div>
                        )
                    }
        </div>
  )
}

export default Places