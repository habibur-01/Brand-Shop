import pic from "../../../assets/AG-Women's-Soccer-Cleats.png"


const ChooseUs = () => {

    return (
        <div className="my-32 h-fit">
            <div>
                <div className="mb-20 text-center space-y-3">
                    <h1 className="text-3xl font-semibold ">Why Choose Us</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, voluptatum!</p>
                </div>
                <div className="lg:h-[450px] grid grid-cols-1 lg:flex rounded-lg ">
                    <div className="lg:w-1/2">
                        <img className="w-full h-[450px] rounded-lg object-fill brightness-50" src={pic} alt="" />

                    </div>
                    <div className="w-full h-auto lg:h-[450px] lg:w-1/2 space-y-8 p-4 lg:px-10 ">
                        <div className="collapse collapse-plus bg-base-200">
                            <input type="radio" name="my-accordion-3" checked="checked" />
                            <div className="collapse-title text-xl font-medium">
                                Find worlds best brand in together
                            </div>
                            <div className="collapse-content">
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium voluptate voluptatum veniam numquam consectetur. Quia repudiandae porro deserunt asperiores soluta!</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-base-200">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">
                                No compromise with product
                            </div>
                            <div className="collapse-content">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto maxime aliquam laudantium tempora itaque iure, earum ipsam quas. Qui, impedit?</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-base-200">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">
                                Always care about our customer
                            </div>
                            <div className="collapse-content">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, error? Totam non, nostrum tenetur error optio consequuntur sapiente quisquam est.</p>
                            </div>

                        </div>
                        <div className="collapse collapse-plus bg-base-200">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">
                                Return your product
                            </div>
                            <div className="collapse-content">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, error? Totam non, nostrum tenetur error optio consequuntur sapiente quisquam est.</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default ChooseUs;