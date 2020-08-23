"use strict";

// 포스트 모델 클래스
import post from "../Models/post.js";
// 포스트 서브뷰 클래스
import mainRecentPost from "../ViewItems/mainRecentPost.js";

// 선언부
const postModel = new post();
const recentViewItem = new mainRecentPost();

const initData = async () => {
  const data = await postModel.getRecentPost();
  return data;
};

const addRecentPost = (data) => {
  const { posts } = data;
  posts.map((item) => {
    const subView = recentViewItem.createItemUI("./", item.title);

    const recentWrapper = document.querySelector(".main__content--postWrapper");
    recentWrapper.appendChild(subView);
  });
};

const lifeCycle = async () => {
  const data = await initData();
  addRecentPost(data);
};

lifeCycle();

//# sourceMappingURL=index.js.map
