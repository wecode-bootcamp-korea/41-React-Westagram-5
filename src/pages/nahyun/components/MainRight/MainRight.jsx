import React from 'react';
import './MainRight.scss';

const storyList = [
  {
    id: 12,
    name: '김광휘',
    time: '23분 전',
  },
  {
    id: 22,
    name: '김가은',
    time: '1분 전',
  },
  {
    id: 32,
    name: '강서윤',
    time: '2시간 전',
  },
  {
    id: 42,
    name: '김승수',
    time: '1일 전',
  },
  {
    id: 52,
    name: '이민규',
    time: '57초 전',
  },
  {
    id: 62,
    name: '하평안',
    time: '2일 전',
  },
  {
    id: 72,
    name: '배경민',
    time: '1일 전',
  },
];
const likeList = [
  {
    id: 1,
    name: 'Hello',
    otherName: '_lejend_a님 외 2명이 ...',
  },
  {
    id: 2,
    name: '아무거나',
    otherName: '모르쇠님 외 10명이 ...',
  },
  {
    id: 3,
    name: '이름뭐라고짓지?',
    otherName: '이름님 외 2명이 ...',
  },
  {
    id: 4,
    name: '김똥개',
    otherName: '박똥개님 외 18명이 ...',
  },
  {
    id: 5,
    name: '아무개',
    otherName: '이무개님 외 1명이 ...',
  },
  {
    id: 6,
    name: '룰루',
    otherName: '몰라님 외 104명이 ...',
  },
  {
    id: 7,
    name: '권나현',
    otherName: '아무나님 외 9k명이 ...',
  },
];

export default function MainRight() {
  return (
    <>
      <div className="main-right">
        <div className="main-right-person">
          <div className="main-right-person-pofile"></div>
          <div className="main-right-person-name">
            wecode_bootcamp
            <span className="main-right-name-span">wecode | 위코드</span>
          </div>
        </div>
        <div className="main-right-story">
          <div className="main-right-nav">
            <div className="story">스토리</div>
            <div className="every">모두 보기</div>
          </div>

          {storyList.map(item => {
            return (
              <div className="main-right-story-profile-div" key={item.id}>
                <div className="main-right-story-profile"></div>
                <div className="main-right-story-name">
                  {item.name}
                  <span className="main-right-story-span">{item.time}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="main-right-like">
          <div className="main-right-nav">
            <div className="story">회원님을 위한 추천</div>
            <div className="every">모두 보기</div>
          </div>
          {likeList.map(item => {
            return (
              <div className="main-right-like-div" key={item.id}>
                <div className="main-right-like-box">
                  <div className="main-right-like-profile"></div>
                  <div className="main-right-like-name">
                    <div className="like-name-bold">
                      {item.name}
                      <span className="main-right-like-span">
                        {item.otherName}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="follow">팔로우</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
