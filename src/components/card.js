import * as PropTypes from "prop-types"
import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleChevronRight, faArrowRightLong } from "@fortawesome/free-solid-svg-icons"
// chevron-circle-right is not in FA 6; faCircleRight is the closest.
// long-arrow-alt-right is now faArrowRightLong in FA 6.

class Card extends React.Component {
  static propTypes = {
    card: PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.object,
    }).isRequired,
    class: PropTypes.string,
  }

  render() {
    const { title, url, description, pills, image, details } = this.props.card

    let showPill = ""
    if (pills !== null) {
      showPill = (
        <ul className="pills">
          {pills.map((pill, i) => (
            <li key={i}>
              <span className={"pill " + pill.color}>{pill.pill}</span>
            </li>
          ))}
        </ul>
      )
    }

    let cardClass, cardDetails
    if (this.props.class === "extended") {
      cardClass = "card card--" + this.props.class
      if (details !== null) {
        cardDetails = (
          <div className={"card-details card-details--" + details.length}>
            {details.map((detail, i) => (
              <div className="card-detail" key={i}>
                <h3>{detail.label}</h3>
                <p className={"category " + detail.category}>
                  {parse(detail.description)}
                </p>
              </div>
            ))}
          </div>
        )
      }
    } else {
      cardClass = "card"
      cardDetails = ""
    }

    const lens = parse(description)

    return (
      <div className={cardClass}>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <div className="card-context">
            <div className="card-image-outer-wrapper">
              <GatsbyImage
                image={image.childImageSharp.gatsbyImageData}
                alt=""
                className="card-image"
              />
            </div>
            <div className="card-context--feedback">
              <FontAwesomeIcon icon={faCircleChevronRight} size="4x" />
            </div>
            {showPill}
          </div>

          <div className="card-lens">
            <h2>{title}</h2>
            <p>{lens}</p>
            <FontAwesomeIcon icon={faArrowRightLong} />
          </div>
        </a>
        {cardDetails}
      </div>
    )
  }
}

export default Card

export const CardFragment = graphql`
  fragment Card_details on ResourcesJson {
    links {
      title
      url
      description
      pills {
        pill
        color
      }
      details {
        label
        description
        category
      }
      image {
        childImageSharp {
          gatsbyImageData(
            width: 420
            height: 220
            placeholder: NONE
            layout: CONSTRAINED
          )
        }
      }
    }
  }
`
