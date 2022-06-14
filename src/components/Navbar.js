import React from 'react'
export default function Navbar(){  // export
    return(  
    // chú ý đoạn import vào thằng app.js xong thằng app.js lại được render trong index.js
    // index.js kết nối với index.html; chắc chắn nó phải được nhũng trong đây
        <div className='h-24 bg-slate-900 text-white text-center leading-[6rem] text-3xl'>
            <i class="fa-brands fa-spotify mr-5"></i>
            Sportify 
        </div>
    )
}