import { formatDate } from "../helpers"


function BlogItem(props) {
  const { item } = props
  
   const image = item.image
        ? <img src={item.image} alt={item.title} onError={(e) => e.target.src = '/assets/imgs/no-image.png'} />
        :<img src="/assets/imgs/no-image.png" alt={item.title} />
    return (
         <div className="blog-card">
        <div className="img-wrap">
          {image}
         </div>
          <div className="date">{formatDate(item.published_at)}</div>
            <div className="title">{item.title}</div>
          <a href={item.url} target="_blank" rel="noreferrer" className="btn-transparent">Read more<span className="icon-arrow_right"></span></a>
        </div>
    )
}
export default BlogItem