import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSeat, removeSeat } from '../actions/action';
import { data } from '../mock/seat';

const SEAT_WIDTH = 50;
const SEAT_HEIGHT = 50;
const ratio = window.devicePixelRatio;
const DRAW_SEAT_WIDTH = SEAT_WIDTH * ratio;
const DRAW_SEAT_HEIGHT = SEAT_HEIGHT * ratio;

const lastSeat = data[data.length - 1];
const CANVAS_WIDTH = lastSeat.colIndex * DRAW_SEAT_WIDTH;
const CANVAS_HEIGHT = lastSeat.rowIndex * DRAW_SEAT_HEIGHT;

// let col = 1;
// let row = 1;
// const CANVAS_WIDTH = data.forEach(seat => {
//   if(seat.rowIndex > row) {
//     row = seat.rowIndex;
//   }
//   if(seat.colIndex > col) {
//     col = seat.colIndex;
//   }
// });

class SeatSelector extends Component {

  componentDidMount () {
    this.ctx = this.refs.canvas.getContext('2d');
    this.ctx.font = `${10 * ratio}px Arial`;
    this.ctx.fillStyle = '#fff';
    this.ctx.textAlign = 'center';
    const emptyImage = new Image();
    const selectImage = new Image();
    const soldImage = new Image();
    let count = 0;

    const loadCallback = () => {
      count ++;
      if(count === 3) {
        this.emptyImage = emptyImage;
        this.selectImage = selectImage;
        this.soldImage = soldImage;
        this.drawAllSeat();
      }
    };

    emptyImage.onload = loadCallback;
    selectImage.onload = loadCallback;
    soldImage.onload = loadCallback;

    emptyImage.src = '/source/seat-empty.png';
    selectImage.src = '/source/seat-selected.png';
    soldImage.src = '/source/seat-sold.png';
  }

  drawAllSeat = () => {
    const seatData = data;
    for(let i = 0; i < seatData.length; i ++){
      const { isSold, xPos, yPos } = seatData[i];
      const offsetLeft = (xPos - 1) * DRAW_SEAT_WIDTH;
      const offsetTop = (yPos - 1) * DRAW_SEAT_HEIGHT;

      if (isSold) {
        // 绘制已售
        this.ctx.drawImage(this.soldImage, offsetLeft, offsetTop, DRAW_SEAT_WIDTH, DRAW_SEAT_HEIGHT );
      } else {
        // 绘制空座
        this.ctx.drawImage(this.emptyImage, offsetLeft, offsetTop, DRAW_SEAT_WIDTH, DRAW_SEAT_HEIGHT );
      }
    }
  }

  componentDidUpdate () {
    this.ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    this.drawAllSeat();
    this.drawSelectSeat();
  }

  drawSelectSeat = () => {
    const { selectedSeat } = this.props;
    for(let i = 0; i < selectedSeat.length; i ++) {
      const { xPos, yPos, rowIndex, colIndex } = selectedSeat[i];
      const offsetLeft = (xPos - 1) * DRAW_SEAT_WIDTH;
      const offsetTop = (yPos - 1) * DRAW_SEAT_HEIGHT;
      this.ctx.drawImage(this.selectImage, offsetLeft, offsetTop, DRAW_SEAT_WIDTH, DRAW_SEAT_HEIGHT );
      this.ctx.fillText(`${rowIndex}排`, offsetLeft + DRAW_SEAT_WIDTH / 2, offsetTop + DRAW_SEAT_HEIGHT / 2.5);
      this.ctx.fillText(`${colIndex}座`, offsetLeft + DRAW_SEAT_WIDTH / 2, offsetTop + DRAW_SEAT_HEIGHT * 2 / 3);
    }
  }

  clickSeat = (e) => {
    const offset = this.refs.canvas.getBoundingClientRect();
    const clickX = e.pageX - offset.left;
    const clickY = e.pageY - offset.top;
    const xPos = Math.ceil(clickX / SEAT_WIDTH);
    const yPos = Math.ceil(clickY / SEAT_HEIGHT);
    // 点击的座位
    const seat = data.find(seat => seat.xPos === xPos && seat.yPos === yPos);
    // 如果未找到或者座位已售，不响应
    // 如果已经选择，需要取消，反之选择该座位
    // 如果已经选了四个座位，则不能继续选
    if(!seat || seat.isSold) {
      return;
    }

    const seatIndex = this.props.selectedSeat.findIndex(item => item.id === seat.id);

    if(seatIndex > -1) {
      // 如果已经选择，需要取消，反之选择该座位
      this.props.onRemove(seat.id);
    } else {
      // 如果已经选了四个座位，则不能继续选
      if(this.props.selectedSeat.length >= 4){
        alert('不能超过四个座位');
      } else {
        this.props.onAdd(seat);
      }
    }
  }

  render () {
    return (
      <canvas ref="canvas" 
        onClick={this.clickSeat}
        style={{width: CANVAS_WIDTH / ratio, height: CANVAS_HEIGHT / ratio}}
        width={CANVAS_WIDTH} height={CANVAS_HEIGHT} 
      />
    );
  }

}

const mapStateToProps = state => {
  return {
    selectedSeat: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAdd: seat => {
      dispatch(addSeat(seat));
    },
    onRemove: id => {
      dispatch(removeSeat(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SeatSelector);