import PropTypes from 'prop-types'

function Header({day}) {
  return (
    <header  >
        <div className="container">
            <h1>Shopping List {day && 'for'} {day}</h1>
        </div>



    </header>
  )
}

Header.defaultProps = {
    day: 'Today',
}


Header.propTypes = {
    day: PropTypes.string
}

export default Header