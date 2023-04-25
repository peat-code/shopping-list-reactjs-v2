import Wrapper from "./shared/Wrapper"
import { useContext } from "react"
import ListContext from "../context/ListContext"


function ShoppingStats() {
  const {listData} = useContext(ListContext)
    let  totalLeft = listData.reduce((acc,curr)=>{
        return acc + curr.qty
   },0 )
  return (
    <Wrapper>
        <div className="stats">
        <span>{listData.length} items pending.  </span> 
        <span>{totalLeft} qty pending.</span>
        </div>
    </Wrapper>
  )
}

export default ShoppingStats