import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance'
import importLogos from './importLogos'

const styles = () => ({
  small: {
    fontSize: 20,
    width: 20,
    height: 20
  },
  medium: {
    width: 30,
    height: 30
  }
})

const InstitutionIcon = ({
  classes,
  className,
  institution,
  size
}) => {
  if (importLogos[institution]) {
    return (
      <img
        src={`${importLogos[institution]}`}
        alt={institution}
        className={`${[classes[size], className].join(' ')}`}
      />
    )
  }
  return <AccountBalanceIcon className={`${[classes[size], className].join(' ')}`} />
}

InstitutionIcon.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  institution: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired
}

InstitutionIcon.defaultProps = {
  className: undefined
}

export default withStyles(styles)(InstitutionIcon)