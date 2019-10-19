import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import seatSelect from './reducers/reducer';
import MovieInfo from './components/MovieInfo';
import SeatSelected from './components/SeatSelected';
import SeatSelector from './container/SeatSelector';
import './Seat.scss';

let store = createStore(seatSelect);

class Seat extends Component {
  // state = {
  //   selectedSeat: []
  // }

  // addSeat = (seat) => {
  //   this.setState(prevState => ({
  //     selectedSeat: [...prevState.selectedSeat, seat]
  //   }));
  // }

  // removeSeat = id => {
  //   this.setState({
  //     selectedSeat: this.state.selectedSeat.filter(seat => seat.id !== id)
  //   });
  // }

  render () {
    // const {selectedSeat} = this.state;
    return (
      <Provider store={store}>
        <div className="seat">
          <div className="tOperator">
            <i className="tOperator__icon tOperator__icon--blackback" onClick={() => {window.history.back();}}/>
            万达影院
            <i className="tOperator__icon tOperator__icon--blackshare" />
          </div>
          <MovieInfo />
          <div className="seat__main">
            <div className="seat__tip" />
            <div className="seat__graph">
              <div className="seat__screen">B13屏幕</div>
              <div className="seat__map">
                <SeatSelector 
                  // selectedSeat={selectedSeat}
                  // onAdd={this.addSeat} onRemove={this.removeSeat}
                />
              </div>
            </div>
          </div>
          <SeatSelected />
        </div>
      </Provider>
    );
  }

}

export default Seat;