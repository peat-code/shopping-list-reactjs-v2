import React from 'react'
import ListItem from "./ListItem"
import { useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PropTypes from 'prop-types'
import ListContext from '../context/ListContext'
import Spinner from './shared/Spinner'
function ShoppingList() {
    const { listData, isLoading } = useContext(ListContext)
    if (!isLoading && (!listData || listData.length === 0))
        return <p >Add Items to shopping List</p>
    return isLoading ? <Spinner /> :(
        <div className="wrapper">
            <AnimatePresence>

                {listData.map((item) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <ListItem key={item.id} item={item} />
                    </motion.div>))}

            </AnimatePresence>
        </div>
    )
}


export default ShoppingList