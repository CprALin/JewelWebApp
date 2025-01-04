import PropTypes from "prop-types";

export default function Button({type , children , onClick}) {
     return(
        <button onClick={onClick} type={type ? `${type}` : ''} className={`absolute w-[30rem] h-[3rem] mt-[30rem] bg-black border border-black rounded-md font-semibold text-primary-100 hover:text-glow hover:shadow-xl`}>
            {children}
        </button> 
     );
}

Button.propTypes = {
    children : PropTypes.node.isRequired,
    type : PropTypes.string,
    onClick : PropTypes.func
}
