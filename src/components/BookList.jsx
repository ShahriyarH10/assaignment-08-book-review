

const BookList = ({ bookList }) => {
    return (
        <div>
            <div className="flex border-2 rounded-lg">
                <figure className="px-10 pt-10">
                    <img src={bookList.image} alt="" className="rounded-xl w-60 p-10" />
                </figure>
                <div className="flex flex-col justify-center">
                    <h2 className="text-2xl font-bold"> {bookList.bookName} </h2>
                    <p>Author: {bookList.author}</p>
                </div>
            </div>
        </div>
    );
};

export default BookList;