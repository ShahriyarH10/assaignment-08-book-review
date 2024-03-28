import { useEffect, useState } from "react";
import BookList from "../components/BookList";

const ListedBooks = () => {

    const [bookList, setBookList] = useState([]);
    useEffect(() => {
        fetch("./bookReview.json")
            .then((res) => res.json())
            .then((data) => { setBookList(data) });
    }, []);
    return (
        <div className="container mx-auto">
            <div className="flex justify-center">
                <div className="bg-base-300 w-1/2 rounded-lg p-8 text-center">
                    <p className="font-bold">Books</p>
                </div>
            </div>
            <div className="dropdown flex justify-center">
                <div tabIndex={0} role="button" className="btn m-1 bg-green-500">Sort by</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Rating</a></li>
                    <li><a>Number of pages</a></li>
                    <li><a>Publisher year</a></li>
                </ul>
            </div>
            <div role="tablist" className="tabs tabs-lifted">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-10">
                    <div className="grid grid-cols-1 gap-5">
                        {
                            bookList.map((bkl) => <BookList bookList={bkl} />)
                        }
                    </div>
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Books" checked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 2</div>
            </div>
        </div>
    );
};

export default ListedBooks;