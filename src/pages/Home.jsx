import { useEffect } from "react";
import { useState } from "react";
import Banner from "../components/Banner";
import Books from "../components/Books";

const Home = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch("./bookReview.json")
            .then((res) => res.json())
            .then((data) => { setBooks(data) });
    }, []);
    return (
        <div className="container mx-auto">
            <Banner />
            <h2 className="text-3xl font-bold text-center">Books</h2>
            <br />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {
                    books.map((bk) => <Books books={bk} />)
                }
            </div>
        </div>
    );
};

export default Home;
