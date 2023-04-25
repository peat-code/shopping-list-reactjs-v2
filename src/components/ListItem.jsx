import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'
import {FaPlus,FaMinus} from 'react-icons/fa'
import { useContext } from 'react'
import ListContext from '../context/ListContext'


function ListItem({item}) {
    const [number,setNumber] = useState(item.qty)
    const {deleteItem,renameItem,updateItem} = useContext(ListContext)
    const addClick = () =>{
        setNumber(number+1)
        item.qty = number
        updateItem(item.id,item)
    }
    const subClick = () =>{
        if(number === 0 ){ deleteItem(item.id)
            return}
        setNumber(number-1)
        item.qty = number
        updateItem(item.id,item)
    }

  return (
    <>
    <li className="listItem"><span onClick={() => renameItem(item)}> {item.name} </span> <span className='operAnds'> <button className=' btn-oper' onClick={subClick}><FaMinus/></button>  <span >{number}</span> <button className=' btn-oper' onClick={addClick}><FaPlus/></button> </span> </li>

    </>
  )
}

ListItem.propTypes={
    item: PropTypes.object.isRequired
}


export default ListItem