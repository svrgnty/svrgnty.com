import React from "react"
import { slide as Menu } from "react-burger-menu"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faSquare, faTimes } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"

class MainMenu extends React.Component {
  showSettings(event) {
    event.preventDefault()
  }

  render() {
    return (
      <Menu
        right
        customBurgerIcon={
          <FontAwesomeIcon
            icon={faBars}
            mask={faSquare}
            transform="shrink-8"
          />
        }
        customCrossIcon={<FontAwesomeIcon icon={faTimes} />}
        disableAutoFocus
      >
        <Link to="/" className="menu-link">
          Bitcoin Resources
        </Link>
        <Link to="/tools/satoshis-converter" className="menu-link">
          SATS Converter
        </Link>
      </Menu>
    )
  }
}

export default MainMenu
