import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './LectureThumbnail.scss';

export default class LectureThumbnail extends Component {

  static propTypes = {
    lecture: PropTypes.object,
  }

  render() {
    const { lecture } = this.props;

    return (
      <React.Fragment>
        <div className="list__col">
          <a className="listItem" href={lecture.slug}>
              <div className="listItem__image">
                  <img src={lecture.thumbnail} alt="Lecture" />
              </div>
              <div className="listItem__bottom">
                  <div className="listItem_texts">
                      <span className="listItem__category"> {lecture.category} </span>
                      <h2 className="listItem__title"> {lecture.title} </h2>
                  </div>
              </div>
          </a>
        </div>
      </React.Fragment>
    );
  }

}