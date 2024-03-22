import React, { useCallback, useRef, useState } from 'react'
import './home.css'


const Home = () => {


    const [password, setPassword] = useState('');

    const sliderref = useRef(8);
    const upperref = useRef(false)
    const lowerref = useRef(false)
    const numref = useRef(false)
    const charref = useRef(false)



    const slider = useCallback(
        function pass() {

            let charset = "";

            // charset += upperref.current.checked ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";  // it works both ways

            charset += lowerref.current.checked ? 'abcdefghijklmnopqrstuvwxyz' : "";
            charset += numref.current.checked ? '0123456789' : "";
            charset += charref.current.checked ? '!@#$%^&*()?{}[]' : "";

            upperref.current.checked ? charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : ""; //works for this too

            let str = '';

            for (let i = 0; i < sliderref.current.value; i++) {
                let x = Math.floor(Math.random() * charset.length)
                str += charset.charAt(x);
            }

            setPassword(str);
            console.log(charset);
        }, [sliderref.current.value]
    )



    return (
        <>
            <main>
            <h1>Safe Password Generator</h1>

                <div className='res'>
                    <div className="display">
                        <p>
                            {password}
                        </p>
                        <button className='copy' onClick={() => {
                            navigator.clipboard.writeText(password)
                        }}>COPY</button>
                    </div>
                    <div className='length'>
                        <label className='range' htmlFor="" >{sliderref.current.value}</label>
                        <input ref={sliderref} type="range" name="" id="" min={8} max={32} onChange={() => {

                            (upperref.current.checked || lowerref.current.checked || numref.current.checked || charref.current.checked) ? slider() : alert('Check one CheckBox')

                            // slider();
                        }} />
                    </div>
                </div>

                <div className='checks'>
                    <div>
                        <input ref={upperref} type="checkbox" name="" id="" />
                        <label htmlFor="">UpperCase</label>
                    </div>
                    <div>
                        <input ref={lowerref} type="checkbox" name="" id="" />
                        <label htmlFor="">LoweCase</label>
                    </div>
                    <div>
                        <input ref={numref} type="checkbox" name="" id="" />
                        <label htmlFor="">Numbers</label>
                    </div>
                    <div>
                        <input ref={charref} type="checkbox" name="" id="" />
                        <label htmlFor="">Characters</label>
                    </div>

                </div>
                <button onClick={() => {
                    (upperref.current.checked || lowerref.current.checked || numref.current.checked || charref.current.checked) ? slider() : alert('Check one CheckBox')
                }}>Generate</button>
            </main>
        </>
    )
}

export default Home
