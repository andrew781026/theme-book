import { createGlobalStyle } from "styled-components";
import mainFont from './assets/fonts/icomoon.woff';

export default createGlobalStyle`
  @font-face {
    font-family: 'icomoon';
    src: url(${mainFont}) format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }

  [class^="icon-"], [class*=" icon-"] {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'icomoon' !important;
    speak: never;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;

    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-book .path1:before {
    content: "\\e942";
    color: rgb(218, 74, 84);
  }

  .icon-book .path2:before {
    content: "\\e943";
    margin-left: -1em;
    color: rgb(195, 36, 48);
  }

  .icon-book .path3:before {
    content: "\\e944";
    margin-left: -1em;
    color: rgb(195, 36, 48);
  }

  .icon-book .path4:before {
    content: "\\e945";
    margin-left: -1em;
    color: rgb(223, 234, 239);
  }

  .icon-book .path5:before {
    content: "\\e946";
    margin-left: -1em;
    color: rgb(244, 221, 69);
  }

  .icon-book .path6:before {
    content: "\\e947";
    margin-left: -1em;
    color: rgb(223, 234, 239);
  }

  .icon-book .path7:before {
    content: "\\e948";
    margin-left: -1em;
    color: rgb(195, 36, 48);
  }

  .icon-book .path8:before {
    content: "\\e949";
    margin-left: -1em;
    color: rgb(102, 94, 102);
  }

  .icon-book .path9:before {
    content: "\\e94a";
    margin-left: -1em;
    color: rgb(102, 94, 102);
  }

  .icon-toy .path1:before {
    content: "\\e94b";
    color: rgb(255, 222, 118);
  }

  .icon-toy .path2:before {
    content: "\\e94c";
    margin-left: -1em;
    color: rgb(255, 182, 65);
  }

  .icon-toy .path3:before {
    content: "\\e94d";
    margin-left: -1em;
    color: rgb(255, 182, 65);
  }

  .icon-toy .path4:before {
    content: "\\e94e";
    margin-left: -1em;
    color: rgb(255, 182, 65);
  }

  .icon-toy .path5:before {
    content: "\\e94f";
    margin-left: -1em;
    color: rgb(56, 72, 74);
  }

  .icon-toy .path6:before {
    content: "\\e950";
    margin-left: -1em;
    color: rgb(255, 182, 65);
  }

  .icon-doctor .path1:before {
    content: "\\e900";
    color: rgb(79, 109, 143);
  }

  .icon-doctor .path2:before {
    content: "\\e901";
    margin-left: -1em;
    color: rgb(79, 109, 143);
  }

  .icon-doctor .path3:before {
    content: "\\e902";
    margin-left: -1em;
    color: rgb(79, 109, 143);
  }

  .icon-doctor .path4:before {
    content: "\\e903";
    margin-left: -1em;
    color: rgb(189, 216, 252);
  }

  .icon-doctor .path5:before {
    content: "\\e904";
    margin-left: -1em;
    color: rgb(189, 216, 252);
  }

  .icon-doctor .path6:before {
    content: "\\e905";
    margin-left: -1em;
    color: rgb(189, 216, 252);
  }

  .icon-doctor .path7:before {
    content: "\\e906";
    margin-left: -1em;
    color: rgb(79, 109, 143);
  }

  .icon-doctor .path8:before {
    content: "\\e907";
    margin-left: -1em;
    color: rgb(69, 94, 126);
  }

  .icon-doctor .path9:before {
    content: "\\e908";
    margin-left: -1em;
    color: rgb(234, 246, 255);
  }

  .icon-doctor .path10:before {
    content: "\\e909";
    margin-left: -1em;
    color: rgb(157, 199, 251);
  }

  .icon-knife .path1:before {
    content: "\\e90a";
    color: rgb(185, 128, 128);
  }

  .icon-knife .path2:before {
    content: "\\e90b";
    margin-left: -1em;
    color: rgb(174, 108, 108);
  }

  .icon-knife .path3:before {
    content: "\\e90c";
    margin-left: -1em;
    color: rgb(254, 100, 111);
  }

  .icon-knife .path4:before {
    content: "\\e90d";
    margin-left: -1em;
    color: rgb(239, 237, 239);
  }

  .icon-knife .path5:before {
    content: "\\e90e";
    margin-left: -1em;
    color: rgb(215, 208, 214);
  }

  .icon-knife .path6:before {
    content: "\\e90f";
    margin-left: -1em;
    color: rgb(254, 100, 111);
  }

  .icon-knife .path7:before {
    content: "\\e910";
    margin-left: -1em;
    color: rgb(253, 71, 85);
  }

  .icon-knife .path8:before {
    content: "\\e911";
    margin-left: -1em;
    color: rgb(239, 237, 239);
  }

  .icon-knife .path9:before {
    content: "\\e912";
    margin-left: -1em;
    color: rgb(253, 71, 85);
  }

  .icon-moon .path1:before {
    content: "\\e913";
    color: rgb(255, 217, 59);
  }

  .icon-moon .path2:before {
    content: "\\e914";
    margin-left: -1em;
    color: rgb(244, 197, 52);
  }

  .icon-moon .path3:before {
    content: "\\e915";
    margin-left: -1em;
    color: rgb(255, 216, 59);
  }

  .icon-moon .path4:before {
    content: "\\e916";
    margin-left: -1em;
    color: rgb(255, 216, 59);
  }

  .icon-rose .path1:before {
    content: "\\e917";
    color: rgb(255, 255, 237);
  }

  .icon-rose .path2:before {
    content: "\\e918";
    margin-left: -1em;
    color: rgb(255, 140, 157);
  }

  .icon-rose .path3:before {
    content: "\\e919";
    margin-left: -1em;
    color: rgb(255, 140, 157);
  }

  .icon-rose .path4:before {
    content: "\\e91a";
    margin-left: -1em;
    color: rgb(255, 140, 157);
  }

  .icon-rose .path5:before {
    content: "\\e91b";
    margin-left: -1em;
    color: rgb(255, 140, 157);
  }

  .icon-rose .path6:before {
    content: "\\e91c";
    margin-left: -1em;
    color: rgb(255, 140, 157);
  }

  .icon-rose .path7:before {
    content: "\\e91d";
    margin-left: -1em;
    color: rgb(255, 140, 157);
  }

  .icon-rose .path8:before {
    content: "\\e91e";
    margin-left: -1em;
    color: rgb(255, 140, 157);
  }

  .icon-rose .path9:before {
    content: "\\e91f";
    margin-left: -1em;
    color: rgb(255, 140, 157);
  }

  .icon-rose .path10:before {
    content: "\\e920";
    margin-left: -1em;
    color: rgb(255, 140, 157);
  }

  .icon-rose .path11:before {
    content: "\\e921";
    margin-left: -1em;
    color: rgb(255, 140, 157);
  }

  .icon-spy .path1:before {
    content: "\\e922";
    color: rgb(255, 223, 179);
  }

  .icon-spy .path2:before {
    content: "\\e923";
    margin-left: -1em;
    color: rgb(255, 204, 153);
  }

  .icon-spy .path3:before {
    content: "\\e924";
    margin-left: -1em;
    color: rgb(72, 100, 117);
  }

  .icon-spy .path4:before {
    content: "\\e925";
    margin-left: -1em;
    color: rgb(60, 77, 92);
  }

  .icon-spy .path5:before {
    content: "\\e926";
    margin-left: -1em;
    color: rgb(52, 127, 148);
  }

  .icon-spy .path6:before {
    content: "\\e927";
    margin-left: -1em;
    color: rgb(62, 104, 128);
  }

  .icon-spy .path7:before {
    content: "\\e928";
    margin-left: -1em;
    color: rgb(60, 77, 92);
  }

  .icon-spy .path8:before {
    content: "\\e929";
    margin-left: -1em;
    color: rgb(72, 100, 117);
  }

  .icon-spy .path9:before {
    content: "\\e92a";
    margin-left: -1em;
    color: rgb(72, 100, 117);
  }

  .icon-spy .path10:before {
    content: "\\e92b";
    margin-left: -1em;
    color: rgb(72, 100, 117);
  }

  .icon-spy .path11:before {
    content: "\\e92c";
    margin-left: -1em;
    color: rgb(60, 77, 92);
  }

  .icon-spy .path12:before {
    content: "\\e92d";
    margin-left: -1em;
    color: rgb(215, 235, 255);
  }

  .icon-spy .path13:before {
    content: "\\e92e";
    margin-left: -1em;
    color: rgb(189, 222, 255);
  }

  .icon-spy .path14:before {
    content: "\\e92f";
    margin-left: -1em;
    color: rgb(60, 77, 92);
  }

  .icon-sun .path1:before {
    content: "\\e930";
    color: rgb(240, 196, 25);
  }

  .icon-sun .path2:before {
    content: "\\e931";
    margin-left: -1em;
    color: rgb(240, 196, 25);
  }

  .icon-sun .path3:before {
    content: "\\e932";
    margin-left: -1em;
    color: rgb(240, 196, 25);
  }

  .icon-sun .path4:before {
    content: "\\e933";
    margin-left: -1em;
    color: rgb(240, 196, 25);
  }

  .icon-sun .path5:before {
    content: "\\e934";
    margin-left: -1em;
    color: rgb(240, 196, 25);
  }

  .icon-sun .path6:before {
    content: "\\e935";
    margin-left: -1em;
    color: rgb(240, 196, 25);
  }

  .icon-sun .path7:before {
    content: "\\e936";
    margin-left: -1em;
    color: rgb(240, 196, 25);
  }

  .icon-sun .path8:before {
    content: "\\e937";
    margin-left: -1em;
    color: rgb(240, 196, 25);
  }

  .icon-sun .path9:before {
    content: "\\e938";
    margin-left: -1em;
    color: rgb(240, 196, 25);
  }

  .icon-sun .path10:before {
    content: "\\e939";
    margin-left: -1em;
    color: rgb(240, 196, 25);
  }

  .icon-sun .path11:before {
    content: "\\e93a";
    margin-left: -1em;
    color: rgb(240, 196, 25);
  }

  .icon-sun .path12:before {
    content: "\\e93b";
    margin-left: -1em;
    color: rgb(240, 196, 25);
  }

  .icon-sun .path13:before {
    content: "\\e93c";
    margin-left: -1em;
    color: rgb(240, 196, 25);
  }

  .icon-sun .path14:before {
    content: "\\e93d";
    margin-left: -1em;
    color: rgb(240, 196, 25);
  }

  .icon-sun .path15:before {
    content: "\\e93e";
    margin-left: -1em;
    color: rgb(240, 196, 25);
  }

  .icon-sun .path16:before {
    content: "\\e93f";
    margin-left: -1em;
    color: rgb(240, 196, 25);
  }

  .icon-sun .path17:before {
    content: "\\e940";
    margin-left: -1em;
    color: rgb(240, 196, 25);
  }

  .icon-sun .path18:before {
    content: "\\e941";
    margin-left: -1em;
    color: rgb(237, 226, 27);
  }
`;
