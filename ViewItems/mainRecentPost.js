"use strict";

export default class RecentPost {
  constructor() {}

  createItemUI(clickUrl, title) {
    // 배경 a 태그
    const wrapper = document.createElement("a");
    href: wrapper.href = clickUrl;
    // 제목 들어가는 h5
    const titleView = document.createElement("h5");
    className: titleView.className = "highlight";
    text: titleView.innerHTML = title;
    // 자식으로 넣어주기
    wrapper.appendChild(titleView);

    return wrapper;
  }
}
