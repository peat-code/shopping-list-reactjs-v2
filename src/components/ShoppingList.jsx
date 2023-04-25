import React from 'react'
import ListItem from "./ListItem"
import {motion,AnimatePresence} from 'framer-motion'
import PropTypes from 'prop-types'
function ShoppingList({listData,handleDeleteApp}) {
    if(!listData || listData.length===0) 
        return <p >Add Items to shopping List</p>
  return (
    <div className="wrapper">
    <AnimatePresence>
        
    {listData.map((item) => (
        <motion.div 
        key={item.id}
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
    >
        <ListItem key={item.id} item={item} handleDelete={(id)=>handleDeleteApp(id)}/>
       </motion.div>) )}
   
    </AnimatePresence>
    </div>
  )
}

ShoppingList.propTypes= {
    listData:PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            name:PropTypes.string.isRequired,
            qty:PropTypes.number.isRequired,
        })
    )
}


export default ShoppingList