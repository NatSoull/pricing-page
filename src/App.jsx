/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import "./app.css"

const App = () => {

    const [toggle, setToggle] = useState(false)

    return (
        <div className=' text-center'>
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
            <div className=' flex justify-center items-center mt-20'>
                <div className=' bg-slate-400 w-[20%]'>
                    <p>Professional</p>
                    <h1></h1>
                </div>
                <div className=' bg-purple-500 w-[20%] rounded-lg text-white py-10 px-10'>
                    <p className=' mb-4'>Professional</p>
                    <h1 className=' text-6xl font-bold'>$24.99</h1>
                    <hr />
                    <p>1TB Storage</p>
                    <hr />
                    <p>$ Users Allowed</p>
                    <hr />
                    <p>Send up to 10 GB</p>
                </div>
                <div className=' bg-slate-400 w-[20%]'>
                    <p>Professional</p>
                    <h1></h1>
                </div>
            </div>
        </div>
    )
}

export default App
