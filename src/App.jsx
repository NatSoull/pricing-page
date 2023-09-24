/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import "./app.css"

const App = () => {

    const [toggle, setToggle] = useState(false)

    return (
        <div className=' text-center tracking-wide'>
            <div className=' mt-14'>
                <div className=' text-4xl font-bold mb-10'>Our Pricing</div>
                <div className=' flex items-center justify-center gap-8'>
                    <p>Annually</p>
                    <div onClick={() => setToggle(!toggle)}>
                        <div className={`toggle ${toggle === true ? "active" : null}`}></div>
                    </div>
                    <p>Monthly</p>
                </div>
            </div>
            <div className=' flex justify-center items-center mt-16'>
                <div className=' bg-white w-[20%] card-shadow py-8 px-10 text-secondary'>
                    <p className=' mb-6 font-bold'>Basic</p>
                    <h1 className=' text-6xl font-bold mb-10'>$19.99</h1>
                    <div className=' flex flex-col gap-3 mb-10'>
                        <hr />
                        <p className=' font-bold'>500 GB Storage</p>
                        <hr />
                        <p className=' font-bold'>2 Users Allowed</p>
                        <hr />
                        <p className=' font-bold'>Send up to 3 GB</p>
                        <hr />
                    </div>
                    <button className=' bg-secondary-gradient w-[100%] p-2 text-white rounded-md shadow-md font-medium tracking-wide'>Learn More</button>
                </div>
                <div className=' bg-primary-gradient w-[20%] rounded-lg text-white py-14 px-10'>
                    <p className=' mb-6 font-bold'>Professional</p>
                    <h1 className=' text-6xl font-bold mb-10'>$24.99</h1>
                    <div className=' flex flex-col gap-3 mb-10'>
                        <hr />
                        <p className=' font-bold'>1 TB Storage</p>
                        <hr />
                        <p className=' font-bold'>5 Users Allowed</p>
                        <hr />
                        <p className=' font-bold'>Send up to 10 GB</p>
                        <hr />
                    </div>
                    <button className=' bg-white w-[100%] p-2 text-black rounded-sm shadow-md font-medium tracking-wide'>Learn More</button>
                </div>
                <div className=' bg-white w-[20%] card-shadow py-8 px-10 text-secondary'>
                    <p className=' mb-6 font-bold'>Master</p>
                    <h1 className=' text-6xl font-bold mb-10'>$39.99</h1>
                    <div className=' flex flex-col gap-3 mb-10'>
                        <hr />
                        <p className=' font-bold'>2 TB Storage</p>
                        <hr />
                        <p className=' font-bold'>30 Users Allowed</p>
                        <hr />
                        <p className=' font-bold'>Send up to 20 GB</p>
                        <hr />
                    </div>
                    <button className=' bg-secondary-gradient w-[100%] p-2 text-white rounded-md shadow-md font-medium tracking-wide'>Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default App
