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
      hide();
      document.querySelector("body").appendChild(btn);
      addScrollListener(document.querySelector(".ItemPageLayout_content_body"));
    }, 5000);

    function addScrollListener(ele) {
      ele.addEventListener("scroll", () => {
        if (ele.scrollTop >= 677) {
          document.body.classList.add("enabled-userscript");
        } else if (ele.scrollTop < 460) {
          document.body.classList.remove("enabled-userscript");
        }
      });
    }

    function hide() {
      side === "none"
        ? ((side = "block"), (btn.textContent = "H"))
        : ((side = "none"), (btn.textContent = "S"));

      document.querySelector(
        ".ItemPageLayout_content_navigation"
      ).style.display = side;
    }

    // CSS
    const style = document.createElement("style");
    style.innerHTML = `

    .enabled-userscript .rc-VideoMiniPlayer.mini .rc-VideoMiniControls, .rc-VideoMiniPlayer.mini .video-main-player-container {
      width: 820px;
    }

    .enabled-userscript .ItemPageLayout_content_body {
      margin-left: -170px
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
