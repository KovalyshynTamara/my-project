import NumberItem from "./common/NumberItem"
import numItem from "./../data/numItem.json"
import blockTitle from "./../data/blockTitle.json"

function Numbers() {
    return (
         <section id="section-3">
   <div className="container">
          <h2 className="section-title">{blockTitle.num.title}</h2>
    <div className="sq-wrap">
        {numItem.map((item, index) => {
            return (<NumberItem num={item.num} title={item.title} key={index} />)
      })}
        
    </div>
   </div>
  </section>
    )
}

export default Numbers