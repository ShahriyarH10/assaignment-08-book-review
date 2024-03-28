import { useLoaderData } from "react-router-dom";


const BookDetails = () => {

    const books = useLoaderData()
    return (
        <div>
            <div>
                <div className="border-2">
                    <img src={books.image} alt="" />
                </div>
                <div>
                    <h1> {books.bookName} zdfgdfgdf</h1>
                </div>
                
            </div>
        </div>
    );
};

export default BookDetails;