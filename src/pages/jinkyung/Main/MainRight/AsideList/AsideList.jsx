import React from 'react';
// import '../../../../../../public/data/Data.js';
import { ASIDE_LIST } from '../../../../../data/Data';
import '../AsideList/AsideList.scss';

function AsideList() {
  return (
    <div id="listWrap">
      {ASIDE_LIST.map(info => {
        return (
          <>
            <div id="list" key={info.id}>
              {info.title}
            </div>
            <span id="dot">⋅</span>
          </>
        );
      })}
    </div>
  );
}

export default AsideList;
