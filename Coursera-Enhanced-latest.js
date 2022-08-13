// ==UserScript==
// @name                Coursera-Enhanced
// @name:zh-CN          Coursera-Enhanced
// @description         Auto-hide sidebar, bigger small window
// @description:zh-TW   自動隱藏側邊欄，更大的小窗
// @description:zh-HK   自動隱藏側邊欄，更大的小窗
// @description:zh-CN   自动隐藏侧边栏，更大的小窗
// @description:en-US   Auto-hide sidebar, bigger small window
// @description:en-UK   Auto-hide sidebar, bigger small window

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
  } catch (e) {
    console.warn("脚本错误:\n", e);
  }
})();
