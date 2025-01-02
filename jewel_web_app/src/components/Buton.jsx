import PropTypes from "prop-types";

export default function Button({ children }) {
     return(
        <button className={`absolute w-[30rem] h-[3rem] mt-[30rem] bg-black border border-black rounded-md font-semibold text-primary-100 hover:text-glow hover:shadow-xl`}>
            {children}
        </button> 
     );
}

Button.propTypes = {
    children : PropTypes.node.isRequired,
}
