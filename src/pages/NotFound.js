import { Link } from "react-router-dom"
function NotFound() {
    return (
        <div className="container">
            <h1>Error 404.Page not Found</h1>
            <p>
                <Link to={'/my-project/'}>Go To Home Page </Link>
            </p>
        </div>
    )
}

export default NotFound