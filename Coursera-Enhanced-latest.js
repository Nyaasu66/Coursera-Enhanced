// ==UserScript==
// @name                Coursera-Enhanced
// @name:zh-CN          Coursera-Enhanced
// @description         User Script for better layout.
// @description:zh-TW   User Script for better layout.
// @description:zh-HK   User Script for better layout.
// @description:zh-CN   User Script for better layout.

// @namespace    https://github.com/Nyaasu66/Coursera-Enhanced
// @version      0.0.1
// @author       Nyaasu
// @match        http*://www.coursera.org/learn/*
// @run-at       document-end
// @grant        none
// @license      CC-BY-NC-3.0
// @supportURL   https://github.com/Nyaasu66/Coursera-Enhanced/issues
// @date         08/14/2022
// ==/UserScript==

(function () {
  "use strict";
  try {
    let side = "block";
    const btn = document.createElement("button");
    const btnStyle = {
      position: "fixed",
      top: "1px",
      left: "1px",
      zIndex: 99999,
      width: "20px",
      height: "20px",
      fontSize: "6px",
      padding: "1px",
    };
    Object.assign(btn.style, btnStyle);

    btn.textContent = "H";
    btn.onclick = hide;

    setTimeout(() => {
      document.querySelector("body").appendChild(btn);
    }, 8000);
    function hide() {
      side == "none"
        ? ((side = "block"), (btn.textContent = "H"))
        : ((side = "none"), (btn.textContent = "S"));
      if (location.host === "lanhuapp.com") {
        document.querySelector("#prototypeSidebar").style.display = side;
      } else if (location.host === "www.coursera.org") {
        document.querySelector(
          ".ItemPageLayout_content_navigation"
        ).style.display = side;
      }
    }

    // CSS
    const style = document.createElement("style");
    style.innerHTML = `
    .ItemPageLayout_content_navigation {
    }
  `;
    document.head.appendChild(style);
    // resize();
    // setTimeout(() => {
    //   resize();
    // }, 800);
    // 屏宽适配

    // function resize() {
    //   var result1 = window.matchMedia("(min-width:1220px)");
    //   var result2 = window.matchMedia("(min-width:1020px)");
    //   if (result1.matches) {
    //     console.log("大屏宽，恢复原样式");
    //   } else if (result2.matches) {
    //     console.log("中屏宽，减小mainBox宽度");
    //   } else {
    //     console.log("小屏宽，隐藏右侧信息栏，mainBox居中");
    //   }
    // }
    // window.addEventListener("resize", function () {
    //   resize();
    // });
  } catch (e) {
    console.warn("脚本错误:\n", e);
  }
})();
