import React, { Component } from 'react';
import BaseInfo from './components/BaseInfo';
import ScoreSummary from './components/ScoreSummary';
import CollapsibleText from '../../components/CollapsibleText';
import Artist from './components/Artist';
import Comment from './container/Comment';
import LineLink from '../../components/LineLink';
import ImageSlider from './container/ImageSlider';
import { Link } from 'react-router-dom';

import request from '../../helpers/request';

import './Detail.scss';

class Detail extends Component {

  state = {
    artist: [],
    showImage: false
  }
  componentDidMount () {
    this.getArtist();
  }

  getArtist = async () => {
    const data = await request('/artist');
    if(data && data.length) {
      this.setState({
        artist:data
      });
    }
  }

  toggleImage = () => {
    this.setState({
      showImage: !this.state.showImage
    });
  }

  render () {
    const {artist} = this.state;
    return (
      <div className="detail">
        <div className="detail__top">
          <div className="tOperator">
            <div className="tOperator__icon tOperator__icon--back" onClick={() => {window.history.back();}} />
            <div className="tOperator__icon tOperator__icon--share" />
          </div>
          <BaseInfo onShowImage={this.toggleImage} />
        </div>
        <div className="detail__content">
          <div className="detail__module">
            <ScoreSummary />
          </div>
          <div className="detail__module">
            <CollapsibleText height={84}>
              <div className="detail__overview">
                天赋异禀的结巴少年秦风（刘昊然 饰）警校落榜，被姥姥遣送泰国找远房表舅——号称“唐人街第一神探”，实则猥琐的大叔唐仁（王宝强 饰）散心。不想一夜花天酒地后，唐仁沦为离奇凶案嫌疑人，不得不和秦风亡命天涯……穷追不舍的警探黄兰登（陈赫 饰）、无敌幸运的警察坤泰（肖央 饰）、穷凶极恶的匪帮三人组、高深莫测的唐人街教父、美艳风骚的老板娘阿香（佟丽娅 饰）等悉数登场！七天！唐仁、秦风必须取长补短、同仇敌忾！他们能否躲避警察追捕、匪帮追杀、黑帮围剿，在短短七天内，完成找到失落的黄金并查明真凶，为自己洗清罪名这些逆天的任务？
              </div>
            </CollapsibleText>
          </div>
          <div className="detail__module">
            <h3 className="detail__moduleTitle">演职人员</h3>
            <Artist data={artist} />
          </div>
          <div className="detail__module">
            <h3 className="detail__moduleTitle">热门评论</h3>
            <Comment />
          </div>
          <div className="detail__module">
            <h3 className="detail__moduleTitle">影片资料</h3>
            <div>
              <LineLink href="#" title="幕后花絮" />
              <LineLink href="#" title="台词精选" />
              <LineLink href="#" title="出品发行" />
            </div>
          </div>
        </div>
        <Link to="/seat" className="detail__buyBtn">选座购票</Link>
        { this.state.showImage && <ImageSlider onClose={this.toggleImage} /> }
      </div>
    );
  }

}

export default Detail;