import PropTypes from 'prop-types'


const Button = ({ title, styling, onClick }) => {
    return (
        <button onClick={onClick} className={styling}>{title}</button>
    )
}

Button.defaultProps = {
    styling: 'btn col-lg-1 btn-info'
}

Button.propTypes = {
    text: PropTypes.string,
    styling: PropTypes.string,
    onClick: PropTypes.func
}

export default Button
