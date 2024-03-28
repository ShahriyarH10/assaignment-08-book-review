import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                    <img src="https://img1.wsimg.com/isteam/ip/840f51c6-3e11-43d2-89af-72a37efe3159/blob-ed78e74.png" className="max-w-sm rounded-lg" />
                    <div>
                        <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
                        <Link to='/listing-books'><a><button className="btn bg-green-500 my-6">View The List</button></a></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;