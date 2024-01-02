
import React, { useState } from 'react'
function C() {
    const [msg,setCounter]=useState("");
    function show()
    {
       setCounter('HELLO WORLD')
    }
    function hide()
    {
        setCounter('')
    }
  return (
    <div class=" p-5 m-5"style={{border:'solid 1px blue'}}>
<img src="https://i.gifer.com/origin/be/be03b4119b4b5bf98069a967546a8a91_w200.webp"></img>
<div id="result">

    <h3 class="text-success">{msg}</h3></div>
        <div className="row d-flex">
            <div className="col-2"></div>
            <div className="col-4">
                <button class="border border-none bg-success text-light p-2 text-center"onClick={show}>SHOW</button>
            </div>
            <div className="col-4">
                <button class="border border-none bg-danger text-light p-2 text-center"onClick={hide}>HIDE</button>
            </div>
            <div className="col-2"></div>
        </div>
    </div>

  )
}

export default C
