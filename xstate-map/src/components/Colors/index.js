import React from 'react';
import './Colors.css';
import ColorsContext from '../../machines/colors'
import Colors from './Colors'

export default class ColorsHOC extends React.Component {
  render() {
    return (
      <ColorsContext.Provider>
        <ColorsContext.Consumer>
          {props => <Colors {...props} />}
        </ColorsContext.Consumer>
      </ColorsContext.Provider>
    );
  }
}
