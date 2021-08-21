import React, { Component } from "react";
import axios from 'axios';



export default class PortfolioDetail extends Component {
  constructor(props) {
    super( props);

    this.state = {
      portfolioItem: {}
    }
  }

  componentWillMount() {
      this.getPortfolioItem();
  }

  getPortfolioItem() {
    axios
      .get(
        `https://tylerstwertnik.devcamp.space/portfolio/portfolio_items/${
          this.props.match.params.slug
        }`,
        { withCredentials: true }
      )
      .then(response => {
        this.setState({
          portfolioItem: response.data.portfolio_item,
          thumbImage: response.data.thumb_image_url
        })
      })
      .catch(error => {
        console.log("getportfolioitem error", error);
      });
  }

  render() {
    const {
      category,
      description,
      logo_url,
      name,
      thumb_image_url,
      url
    } = this.state.portfolioItem;



    return (
      <div className="portfolio-detail-content-wrapper">
          <div className="header-wrapper">
            <div className="title-wrapper">
              <h1>
                  {name}
              </h1>
            </div>

            <div className="fixed-wrapper">

              <div className="category-wrapper">
                <h5>Category: {category}</h5>
              </div>

              <a href={url} className="url-wrapper">
                <h3>Visit: {name}</h3>
              </a>
            </div>
          </div>

        <div className="center-wrapper">
          <div className="thumb-image-detail-wrapper">
            <img src={thumb_image_url} />
          </div>

          <div className="logo-detail-wrapper">
            <img src={logo_url} />
          </div>
        </div>

        <div className="footer-wrapper">
          <div className="description-wrapper">
            <p>
              {description}
            </p>
          </div>

          
        </div>
      </div>
    );
  }
}