

const Error = () => {
    return (
        <>
        
            <div className="w-[100%] h-screen flex justify-center items-center">
                <div className="h-3/5 text-center">

                    <div>
                        <h1 className="text-7xl font-semibold">404</h1>
                        <p className="text-4xl uppercase">OOPs! Page not found</p>
                        <p className="text-2xl my-4">Sorry! the page you are looking for dose not exist.</p>
                        <p><a href="/"><button className="btn btn-primary px-4">Back to home</button></a></p>

                    </div>

                </div>
            </div>

        </>
    );
};

export default Error;