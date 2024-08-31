import React from "react";
import { slide as Menu } from 'react-burger-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link } from "gatsby"


class MainMenu extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }
  
  render () {
    return (
      <Menu right customBurgerIcon={ <FontAwesomeIcon icon={solid('bars')} mask={solid('square')} transform="shrink-8" /> } customCrossIcon={ <FontAwesomeIcon icon={solid('times')} /> } disableAutoFocus>
          <Link to="/" className="menu-link">
            Bitcoin Resources
        </Link>
        <Link to="/tools/satoshis-converter" className="menu-link">
            SATS Converter
        </Link>
      </Menu>
    );
  }
}

export default MainMenu;
