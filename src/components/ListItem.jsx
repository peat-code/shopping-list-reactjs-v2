import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'
import {FaPlus,FaMinus} from 'react-icons/fa'


function ListItem({item,handleDelete}) {
    const [number,setNumber] = useState(item.qty)

    const addClick = () =>{
        setNumber(number+1)
    }
    const subClick = () =>{
        if(number === 0 ){ handleDelete(item.id)
            return}
        setNumber(number-1)
    }

  return (
    <>
    <li className="listItem"><span > {item.name} </span> <span className='operAnds'> <button className=' btn-oper' onClick={subClick}><FaMinus/></button>  <span >{number}</span> <button className=' btn-oper' onClick={addClick}><FaPlus/></button> </span> </li>

    </>
  )
}

ListItem.propTypes={
    item: PropTypes.object.isRequired
}


export default ListItem