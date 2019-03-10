import React, { Component } from 'react';

import { getLectureList } from '../../api';

import Header from '../../components/header/Header';
import LectureThumbnail from '../../components/lectureThumbnail/LectureThumbnail';
import Filters from '../../components/filters/Filters';

export default class Home extends Component {

  state = {
    lectures: getLectureList(),
  }

  setStateLectures = (filters = []) => {
    this.setState({ lectures: getLectureList(filters) });
  }

  render() {
    const { lectures } = this.state;

    return (
      <React.Fragment>
        <Header category="Vefforritun" title="Fyrirlestrar" />
        <Filters filter={this.setStateLectures}/>
          <div className="list">
              <div className="list__row">
                {lectures.map((element, i) => {
                  return (<LectureThumbnail key={i} lecture={element} />)
                })}
              </div>
          </div>
      </React.Fragment>
    );
  }
}
