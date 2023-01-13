import React, {Component} from 'react';
import { Link } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

class Breadcrumbs extends Component {
  render() {
    return (
      <div className="breadcrumbs">
        <div className="contain">
          <Link className="crumb" to="/"><FontAwesomeIcon icon={solid('home')} /> Bitcoin Resources</Link><span className="crumb crumb-path"> <FontAwesomeIcon icon={solid('angle-right')} /> </span><span className="crumb crumb-active nowrap">{this.props.title}</span>
        </div>
      </div>
    )
  }
}

export default Breadcrumbs;
