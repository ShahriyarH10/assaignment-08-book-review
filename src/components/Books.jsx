
const Books = ({ books }) => {

    return (
        <div className="mx-auto">
            <div className="card w-96 h-[500px] bg-base-100 border-2">
                <figure className="px-10 pt-10">
                    <img src={books.image} alt="" className="rounded-xl w-60 p-10" />
                </figure>
                <div className="py-0">
                    <p className="flex text-green-500 list-none justify-evenly">{books.tags.map((tag, index) => <li>{tag}</li> )}</p>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{books.bookName}</h2>
                    <p>By: {books.author}</p>
                    <p>{books.category}</p>
                </div>
                <div className="flex">
                    
                </div>
            </div>
        </div>
    );
};

export default Books;