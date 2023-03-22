import BlogItem from "../components/BlogItem"
import blogTitle from './../data/blockTitle.json'
import { useEffect, useState } from "react"
import { API_KEY } from "../config"
import axios from "axios"
import { toast } from "../helpers"
import PartnersItem from "../components/PartnersItem"

function Blog() {
    const [newsList, setNewsList] = useState([])
    const [total, setTotal] = useState(0)

    console.log(total);
    useEffect(() => {
        axios.get(`https://api.mediastack.com/v1/news?access_key=${API_KEY}&categories=technology&languages=en`)
            .then((resp) => {
                
                setNewsList(resp.data.data)
                setTotal(resp.data.pagination.total)
        })
            .catch((resp) => {
                 toast.danger(resp.data.error.message)
                
        })
    }, [])

    return (
            <section id="blog">
                <div className="pt"></div>
                <div className="container">
                    <h2 className="section-title">{blogTitle.blog.title}</h2>
                    <div className="blog-wrap">
                        {newsList.map((itemNews,index) => <BlogItem key={index} item={itemNews} />)}
                    </div>
                    <PartnersItem/>
                </div>
            </section>
    )
}
export default Blog