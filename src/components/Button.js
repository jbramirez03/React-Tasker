import PropTypes from 'prop-types'


const Button = ({ title, styling }) => {
    return (
        <button className={styling}>{title}</button>
    )
}

Button.defaultProps = {
    styling: 'btn col-lg-1 btn-info'
}

Button.propTypes = {
    text: PropTypes.string,
    styling: PropTypes.string
}

export default Button
