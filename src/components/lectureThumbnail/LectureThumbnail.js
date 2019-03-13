import React, { Component } from 'react';

import './LectureThumbnail.scss';

export default class LectureThumbnail extends Component {
  
  state = {
    checkSymbol: '\u2713',
  }

  render() {
    const { lecture } = this.props;
    const { checkSymbol } = this.state;

    return (
      <React.Fragment>
        <div className="list__col">
          <a className="listItem" href={"lecture/" + lecture.slug}>
              <div className="listItem__image">
                  <img src={lecture.thumbnail} alt="Lecture" />
              </div>
              <div className="listItem__bottom">
                  <div className="listItem__texts">
                      <span className="listItem__category"> {lecture.category} </span>
                      <h2 className="listItem__title"> {lecture.title} </h2>
                  </div>
                  {lecture.finished && <div className="listItem__finished">{checkSymbol}</div>}
              </div>
          </a>
        </div>
      </React.Fragment>
    );
  }

}