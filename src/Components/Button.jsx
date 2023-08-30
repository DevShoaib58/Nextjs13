
const Button = ({ label, iconURL }) => {
    return (
        <button className=" flex justify-center items-center bg-coral-red text-white border font-bold py-2 px-4 rounded">
            {label}
            <img src={iconURL}
                alt="Arrow right icon"
                className="ml-2 rounded-full w-5 h-5" />
        </button>
    );
};

export default Button;