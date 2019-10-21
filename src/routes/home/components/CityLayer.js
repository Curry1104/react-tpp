import React, { Component } from 'react';
import request from '../../../helpers/request';
import PropTypes from 'prop-types';
import './CityLayer.scss';

class CityLayer extends Component {
  state = {
    hot: [],
    all: {}
  }

  componentDidMount () {
    this.getData();
  }

  getData = async () => {
    const data = await request('/city');
    const { hot, all } = data;
    this.setState({
      hot,
      all
    });
  }

  render () {
    const { onClose, onSelect } = this.props;
    const { hot, all } = this.state;
    const alphabetKeys = Object.keys(all);
    return (
      <div className="cityLayer">
        <div className="cityLayer__title">
          <div className="cityLayer__close" onClick={onClose}>关闭</div>
          选择城市
        </div>
        <div className="cityLayer__content">
          <div className="cityBlock" id="定位">
            <div className="cityBlock__label">定位城市</div>
            <div className="cityBlock__wrap">
              <div className="cityBlock__item" onClick={() => onSelect('成都')}>成都</div>
            </div>
          </div>
          <div className="cityBlock" id="热门">
            <div className="cityBlock__label">热门城市</div>
            <div className="cityBlock__wrap">
              {
                hot.map(city => <div key={city.code} className="cityBlock__item" onClick={() => onSelect(city.name)}>{city.name}</div>)
              }
            </div>
          </div>
          {
            alphabetKeys.map(alphabet => {
              const citys = all[alphabet];
              return (
                <div key={alphabet} className="cityList" id={alphabet}>
                  <div className="cityList__label">{alphabet}</div>
                  <ul className="cityList__wrap">
                    {
                      citys.map( city => <li key={city.name} className="cityList__item" onClick={() => onSelect(city.name)}>{city.name}</li>)
                    }
                  </ul>
                </div>
              );
            })
          }
        </div>
        <div className="cityLayer__index cityIndex">
          <ul className="cityIndex__list">
            <li className="cityIndex__item"><a href="#定位">定位</a></li>
            <li className="cityIndex__item"><a href="#热门">热门</a></li>
            {
              alphabetKeys.map(alphabet => <li key={alphabet} className="cityIndex__item"><a href={`#${alphabet}`}>{alphabet}</a></li>)
            }
          </ul>
        </div>
      </div>
    );
  }
}
CityLayer.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default CityLayer;