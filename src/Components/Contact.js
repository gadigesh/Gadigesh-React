const Contact = () => {
    return (
        <div>
            <h1 className="font-bold text-xl p-4 m-4">Contact US</h1>
            <form className="p-10">
                <input
                    className="p-2 m-2 border"
                    type="text"
                    placeholder="Name"
                ></input>
                <input
                    className="p-2 m-2 border"
                    type="text"
                    placeholder="Massage"
                ></input>
                <button className="bg-gray-200 font-sans font-semibold w-44 border m-3 p-3 border-black rounded-md">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Contact;
