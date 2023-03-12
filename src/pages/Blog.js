import BlogItem from "../components/BlogItem"
import PartnersItem from "../components/PartnersItem"
import blogTitle from './../data/blockTitle.json'
import { useEffect, useState } from "react"
import { API_KEY } from "../config"
import axios from "axios"
import { toast } from "../helpers"
// import Pagination from "../components/Pagination"


function Blog() {
    const [newsList, setNewsList] = useState([])
    const [total, setTotal] = useState(0)



    console.log(total);
    useEffect(() => {
        axios.get(`http://api.mediastack.com/v1/news?access_key=${API_KEY}&categories=technology&languages=en`)
            .then((resp) => {
                
                setNewsList(resp.data.data)
                setTotal(resp.data.pagination.total)
        })
            .catch((resp) => {
                // debugger
                 toast.danger(resp.data.error.message)
                
        })
    }, [])

    // const handlerPrevPage = () => {
    //     if (page === 1) {
    //         return false
    //     }
    //     setPage(page - 1)
    // }
    // const handlerNextPage = () => {
    //     if (page === total) {
    //         return false
    //     }
    //     setPage(page + 1)
    // }




    return (
            <section id="blog">
                <div className="pt"></div>
                <div className="container">
                    <h2 className="section-title">{blogTitle.blog.title}</h2>
                    <div className="blog-wrap">
                        {newsList.map((itemNews,index) => <BlogItem key={index} item={itemNews} />)}
                    </div>
                        {/* <Pagination total={total} page={page} gotoHandler={ (newPage)=>{setPage(newPage)}} /> */}
                        <PartnersItem/>
                </div>
            </section>
    )
}
export default Blog