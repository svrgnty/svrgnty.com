import React, { Component } from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faAngleRight } from "@fortawesome/free-solid-svg-icons"

class Breadcrumbs extends Component {
  render() {
    return (
      <div className="breadcrumbs">
        <div className="contain">
          <Link className="crumb" to="/">
            <FontAwesomeIcon icon={faHome} /> Bitcoin Resources
          </Link>
          <span className="crumb crumb-path">
            <FontAwesomeIcon icon={faAngleRight} />
          </span>
          <span className="crumb crumb-active nowrap">{this.props.title}</span>
        </div>
      </div>
    )
  }
}

export default Breadcrumbs

