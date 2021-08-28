import React from 'react'
import './index.scss'

import InformationOperation from '../informationLast/components/operation';
import InformationLastComments from '../informationLast/components/comments';
import InformationLastCommentsList from '../informationLast/components/commentsList';
import InformationLastRelevant from '../informationLast/components/relevant';
import InformationLastCar from '../informationLast/components/car';

import VideoDetail from './components/videoDetail';
import HotVideo from './components/hotVideo';

class VideoLast extends React.Component {
  render() {
    return (
      <div className="video-last-container">
        <div className="video-last-content">
          <div className='video-last-wrapper'>
            {/* 视频内容 */}
            <VideoDetail />

            {/* 点赞内容 */}
            <InformationOperation />

            {/* 评论内容 */}
            <InformationLastComments />

            {/* 评论列表 */}
            <InformationLastCommentsList />

            {/* 相关资讯 */}
            <InformationLastRelevant />
          </div>

          <div className="video-last-news">
            <InformationLastCar />
            <HotVideo />
          </div>
        </div>
      </div>
    )
  }
}

export default VideoLast
