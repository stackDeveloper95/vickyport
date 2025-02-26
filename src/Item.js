import React from 'react'

const Item = () => {
    const items=[ {id:1,
                 status:"Digital Branding", 
                 contt:"we make your brande name as solide by Digital marketing"},{id:2,
                    status:"Team Management", 
                    contt:"we have a proper team"},{id:3,
                        status:"Crative", 
                        contt:"creative profile"} ]
  return (
    <div className='itom'>
        
    {items.map((item)=>(
        <div class="item"><h1>0{item.id}</h1><h3>{item.status}</h3><p>{item.contt}</p></div>
    ))}

    </div>
  )
}

export default Item