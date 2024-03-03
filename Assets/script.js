const headerBtn = document.querySelector(".mobile-btn");
const headerMenu = document.querySelector(".fixed-header > .menu");

headerBtn.addEventListener("click", () => {
  headerMenu.classList.toggle("show");
});

const fixedHeaderSet = () => {
  if (document.documentElement.clientWidth <= 767) {
    document.querySelector(".fixed-header").classList.add("mobile");
  } else {
    document.querySelector(".fixed-header").classList.remove("mobile");
  }
};

document.addEventListener("DOMContentLoaded", fixedHeaderSet);

window.addEventListener("resize", fixedHeaderSet);

const blogUrl =
  "https://www.googleapis.com/blogger/v3/blogs/2399953/posts/bypath?path=/2011/08/latest-updates-august-1st.html&key=AIzaSyCNHLGddjqvCrzOIBF_jjW11YhDQjkMwRw";

window.onload = function () {
  document.querySelector(".background-img").classList.add("show");

  var returnData = fetchBlog(blogUrl);
  console.log(returnData);
};

const fetchBlog = async (url) => {
  let response = await fetch(url);
  let data = await response.json();
  return data;
};
