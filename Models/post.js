"use strict";

// 포스트 관련 클래스
export default class post {
  constructor() {
    this._urlRecentPost5 = "/data/recentPost5";
    this.recentPost5 = [];
  }

  // 최근 포스트 5개를 가져오는 메서드.
  async getRecentPost() {
    const response = await fetch(this._urlRecentPost5);

    // 스테이터스 코드에 따른 리턴 처리
    if (response.status != 200)
      throw new Error(`${response.status} - getRecentPost`);

    const responseValue = response.json();

    return responseValue;
  }
}
