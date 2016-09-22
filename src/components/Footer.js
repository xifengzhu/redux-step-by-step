import React, { Component, PropTypes } from 'react'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'


const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
}

class Footer extends Component {

  renderFilterLink(filter) {
    const title = FILTER_TITLES[filter]
    const {filter: selectFilter, onShow } = this.props

    return (
      <a onClick={ ()=> onShow(filter)}>{title}</a>
    );
  }

  render() {
    return (
      <footer>
        <ul className="filters">
          {[ SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED ].map(filter =>
            <li key={filter}>
              {this.renderFilterLink(filter)}
            </li>
          )}
        </ul>
      </footer>
    );
  }
}

Footer.propTypes = {
  filter: PropTypes.string.isRequired,
  onShow: PropTypes.func.isRequired
}

export default Footer
