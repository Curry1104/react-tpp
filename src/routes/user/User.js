import React from 'react';
import LineLink from '../../components/LineLink';
import TabMenu from '../../components/TabMenu';
import './User.scss';

const User = () => {
    return (
      <div className="user">
        <div className="user__top">
          <div className="tOperator">
            <div className="tOperator__icon tOperator__icon--setting"></div>
            <div className="tOperator__icon tOperator__icon--message"></div>
          </div>
          <div className="user__info">
          <div className="user__avatar" style={{ backgroundImage: 'url("/source/avatar.jpeg")'}}/>
            <div className="user__detail">
              <div className="user__name">周杰伦</div>
              <div>
                <span className="user__follow">关注 100</span>
                <span className="user__fans">被关注 10</span>
              </div>
              <div className="user__level">黄金会员</div>
            </div>
          </div>
        </div>
        <div className="user__content">
          <LineLink title='收藏的电影' extra='20' href='#' />
          <LineLink title='看过的电影' extra='60' href='#' />
        </div>
        <TabMenu current="user"/>
      </div>
    );
};

export default User;