
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                  <img src="https://img1.wsimg.com/isteam/ip/840f51c6-3e11-43d2-89af-72a37efe3159/blob-ed78e74.png" className="max-w-sm rounded-lg" />
                  <div className="space-y-10">
                    <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
                    <button className="btn bg-green-500">View The List</button>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;