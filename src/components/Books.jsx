import { useEffect, useState } from "react";


const Books = () => {

    const [books, setBooks] = useState(0);
	useEffect(() => {
        fetch("./bookReview.json")
        .then((res) => res.json())
        .then((data) => {setBooks(data)});
      }, []);
    
    return (
        <div>
            <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
                <div className="container p-6 mx-auto space-y-8">
                    <div className="space-y-2 text-center">
                        <h2 className="text-3xl font-bold">Books</h2>
                    </div>
                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                        <article className="flex flex-col dark:bg-gray-50">
                            <a aria-label="Te nulla oportere reprimique his dolorum">
                                <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://img1.wsimg.com/isteam/ip/840f51c6-3e11-43d2-89af-72a37efe3159/blob-ed78e74.png" />
                            </a>
                            <div className="flex flex-col flex-1 p-6">
                                <a  aria-label="Te nulla oportere reprimique his dolorum"></a>
                                <a  className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">Convenire</a>
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum {books.bookName} </h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                                    <span>June 1, 2020</span>
                                    <span>2.1K views</span>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Books;