import React from 'react';
import PropTypes from 'prop-types';
import './TagList.scss';

const TagList = ({data, current, onClick}) => {
  return (
    <div className="tagList">
      {
        data.map(tag => <span key={tag.text} 
            className={`tagList__item ${current === tag.text && 'tagList__item--active'}`}
            onClick={() => onClick(tag.text) }
          >
            {tag.text} {tag.count}
          </span>)
      }
    </div>
  );
};

TagList.propTypes = {
  data: PropTypes.array.isRequired,
  current: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default TagList;