import React from 'react';
import { connect } from 'react-redux';
import { removeSeat } from '../actions/action';

import './SeatSelected.scss';

const SeatSelected = ({ data, onRemove }) => {
  if (!data.length) {
    return null;
  }
  return (
    <div className="seatSelected">
      <ul className="seatSelected__list">
        {
          data.map(seat => (
            <li key={seat.id} className="seatSelected__item movieTicket">
              <div className="movieTicket__detail">
                <div className="movieTicket__pos">{seat.rowIndex}排{seat.colIndex}座</div>
                <div className="movieTicket__price">
                  <i className="movieTicket__tag">卡</i>
                  33元
                </div>
              </div>
              <div className="movieTicket__close" onClick={()=>onRemove(seat.id)}/>
            </li>
          ))
        }
      </ul>
      <div className="seatSelected__buy">{33 * data.length}元 确认选座</div>
    </div>
  );

};



const mapStateToProps = state => {
  return {
    data: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRemove: id => {
      dispatch(removeSeat(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SeatSelected);