import Wrapper from "./shared/Wrapper"

function ShoppingStats({list}) {

    let  totalLeft = list.reduce((acc,curr)=>{
        return acc + curr.qty
   },0 )
  return (
    <Wrapper>
        <div className="stats">
        <span>{list.length} items pending.  </span> 
        <span>{totalLeft} qty pending.</span>
        </div>
    </Wrapper>
  )
}

export default ShoppingStats