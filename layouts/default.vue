<template>
  <div>
    <nuxt></nuxt>
  </div>
</template>

<script>

</script>

<style>


  @font-face {
      font-family: "fira";
      src: url("~assets/fonts/fira.ttf");
      font-weight: normal;
      font-style: normal;
  }

  :root {
      --main: #fff;
      --link: #a56596;
      --header-bg: #4e2f49;
      --button: #451e24;
      --button-lighter: #442443;
      --background: #151317;
      --text: #fff;
      --dark-text: #ccc;
    }

  /* mini reset */
  html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal}ul{list-style:none}button,input,select,textarea{margin:0}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}iframe{border:0}table{border-collapse:collapse;border-spacing:0}td,th{padding:0;text-align:left}
  /* input[type="number"] remove arrows */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type=number] {
    -moz-appearance: textfield;
  }


  /* styles begin here */

  a:focus {
      outline:0;
  }

  a:active,
  a:hover {
      outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: "fira";
    margin: 0;
    padding: 0;
    width: 100%;
    background: var(--background);
    color: var(--text);
    height: calc(100vh - 64px);
    top: 64px;
    font-size: 18px;
    text-shadow: 1px 1px rgba(0,0,0,0.05);
    line-height: 1.5em;
    position: relative;
  }

  .vc-chrome {
    font-family: "fira" !important;
  }

  a {
    color: var(--link);
    text-decoration: none;
    transition: 0.5s all;
    display: inline-block;
  }

  a:hover {
    color: var(--link);
    opacity: 0.5;
    cursor: pointer;
  }

  h1 {
    font-size: 52px;
    margin-bottom: 1.2em;
  }

  h2 {
    font-size: 32px;
    margin-bottom: 0.6em;
  }

  h3 {
    font-size: 24px;
    margin-bottom: 0.6em;
  }

  p {
    margin-bottom: 1.2em;
  }

  input {
    color: var(--text);
  }

  .text-ellipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 75%;
    display: inline-block;
  }

  .center-container {
    width: 60%;
    margin: auto;
    top: 128px;
    position: relative;
  }

  .admin-toolbar, .secondary-toolbar {
    padding-left: 20%;
    padding-right: 20%;
  }

  .secondary-toolbar {
    background: #eee;
    border-bottom: 1px solid rgba(0,0,0,0.09);
    width: 100%;
    margin: auto;
    position: fixed;
    top: 128px;
    height: 122px;
    z-index: 5;
  }



  .site-logo-wrapper {
    width: 256px;
    float:left;
  }

  .right {
    float: right;
  }

  .text-right {
    text-align: right;
  }

  .banner {
    padding: 6px;
    background: rgba(0,0,0,0.05);
    font-size: 12px;
    border-radius: 4px;
    z-index: 1;
  }

  .large-icon {
    font-size: 26px;
    color: black;
    line-height: 64px;
  }

  .tiny {
    font-size: 9px;
  }

  .small {
    font-size: 11px;
  }

  .medium {
    font-size: 13px;
  }

  .large {
    font-size: 22px;
  }

  .huge {
    font-size: 28px;
  }

  .massive {
    font-size: 36px;
  }

  .bold, .strong {
    font-weight: 700;
  }

  .fileuploader {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }

  .small-button {
    font-size: 12px;
    padding: 4px;
    margin: 0px;
  }

  .disabled-button label:hover {
    cursor: not-allowed;
  }

  .radio-buttons {
    border-radius: 4px;
    border: 1px solid rgba(0,0,0,0.15);
    background: rgba(0,0,0,0.05);
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .radio-button {
    flex-grow: 1;
    background: rgba(0,0,0,0.05);
    border: none;
    padding: 0px;
    border-radius: 0px;
    box-shadow: none;
    border-right: 1px solid rgba(0,0,0,0.05);
    transition: 0.5s all;
  }

  .radio-button:last-child {
    border-right:none;
  }

  .radio-button label {
    width: auto;
    padding: 12px;
    font-size: 16px;
    text-align: center;
    color: black;
  }


  .radio-button:not(.radio-button-selected):hover {
    cursor: pointer;
    background: rgba(0,0,0,0.1);
  }

  .radio-button input[type="radio"]{
    display: none;
  }

  .radio-button-selected {
    background: var(--button-lighter);
  }

  .secondary-radio-button {
  }

  .ma {
    margin: 16px;
  }

  .ml {
    margin-left: 16px;
  }

  .mr {
    margin-right: 16px;
  }

  .mt {
    margin-top: 16px;
  }

  .mb {
    margin-bottom: 16px;
  }

  .mx {
    margin: 64px;
  }

  .mtm {
    margin-top: 32px;
  }

  .mbm {
    margin-bottom: 32px;
  }

  .mtx {
    margin-top: 64px;
  }

  .mbx {
    margin-bottom: 64px;
  }

  .mlx {
    margin-left: 64px;
  }

  .mrx {
    margin-right: 64px;
  }


  .pl {
    margin-left: 16px;
  }

  .pr {
    margin-right: 16px;
  }

  .pt {
    margin-top: 8px;
  }

  .pb {
    margin-bottom: 8px;
  }

  .ptm {
    margin-top: 16px;
  }

  .pbm {
    margin-bottom: 16px;
  }

  .ptx {
    margin-top: 32px;
  }

  .pbx {
    padding-bottom: 32px;
  }

  .px {
    padding: 32px;
  }

  .bt {
    border-top: 1px solid rgba(0,0,0,0.1);
  }

  .br {
    border-right: 1px solid rgba(0,0,0,0.1);
  }

  .bb {
    border-bottom: 1px solid rgba(0,0,0,0.1);
  }

  .bl {
    border-left: 1px solid rgba(0,0,0,0.1);
  }

  .ba {
    border: 1px solid rgba(0,0,0,0.1);
  }

  .reduced-lh {
    line-height: 50%;

  }


  .fh {
    height: 100%;
  }

  .flex-wrapper {
    display: flex;
  }

  .flex-column {
    flex-direction: column;
  }

  .flex-item {
    flex: 1;
  }

  .flex-item-25 {
    flex: 1;
  }

  .flex-item-50 {
    flex: 2;
  }

  .flex-item-75 {
    flex: 3;
  }

  .flex-item-100 {
    flex: 3;
  }

  .flex-grid {
    display: flex;
    flex-wrap: wrap;
    column-gap: 8px;
    row-gap: 8px;
  }

  .flex-grid-item {
    flex-grow: 1;
  }

  .row {
    float: left;
    width: 100%;
  }

  .force-row {
    width: 100% !important;
  }

  .vcenter {
    vertical-align: bottom;
  }

  .relative {
    position: relative;
  }


  .site-header {
    padding: 8px;
    background: #eee;
    width: 69px;
    margin-bottom: 16px;
    white-space: nowrap;
  }

  .navigation-links {
    display: inline-block;
    float: left;
  }

  .navigation-links .link {
    font-size: 18px;
    line-height: 64px;
    display: inline-block;
    color: black;
    padding: 0px 8px;
    float:left;
    outline: none;
  }

  .navigation-links .link:hover {
    text-shadow: 0px 0px 18px rgba(0,0,0,0.7);
  }

  .site-logo .nuxt-link-active {
    filter:brightness(1) !important;
  }

  .fixed-bottom {
    bottom: 0;
    position: fixed;
    left: 0;
  }

  .inline-block {
    display: inline-block;
  }

  .fade {
    opacity: 0.4;
  }

  .strong {
    font-weight: 700;
  }

  .auto {
    width: auto;
  }

  .c5 {
    width: 5%;
    float:left;

  }
  .c6 {
    width: 6.25%;
    float:left;
  }
  .c7 {
    width: 7%;
    float:left;
  }
  .c8 {
    width: 8%;
    float:left;
  }
  .c9 {
    width: 9%;
    float:left;
  }

  .c10 {
    width: 10%;
    float:left;
  }

  .c12 {
    width: 12%;
    float:left;
  }

  .c14 {
    width: 14%;
    float:left;
  }

  .c15 {
    width: 15%;
    float:left;
  }

  .c16 {
    width: 16%;
    float:left;
  }

  .c18 {
    width: 18%;
    float:left;
  }

  .c20 {
    width: 20%;
    float:left;
  }


  .c22 {
    width: 22%;
    float:left;
  }

  .c23 {
    width: 23%;
    float:left;
  }


  .c24 {
    width: 24%;
    float:left;
  }

  .c25 {
    width: 25%;
    float:left;
  }

  .c28 {
    width: 28%;
    float:left;
  }

  .c33 {
    width: 33%;
    float:left;
  }

  .c30 {
    width: 30%;
    float:left;
  }

  .c40 {
    width: 40%;
    float: left;
  }

  .c41 {
    width: 41%;
    float: left;
  }

  .c42 {
    width: 42%;
    float: left;
  }

  .c43 {
    width: 43%;
    float: left;
  }

  .c44 {
    width: 44%;
    float: left;
  }

  .c45 {
    width: 45%;
    float: left;
  }

  .c46 {
    width: 46%;
    float: left;
  }

  .c47 {
    width: 47%;
    float: left;
  }

  .c48 {
    width: 48%;
    float: left;
  }

  .c50 {
    width: 50%;
    float:left;
  }


  .c58 {
    width: 58%;
    float:left;
  }

  .c57 {
    width: 57%;
    float:left;
  }

  .c60 {
    width: 60%;
    float:left;
  }

  .c67 {
    width: 67%;
    float: left;
  }

  .c70 {
    width: 70%;
    float:left;
  }

  .c75 {
    width: 75%;
    float:left;
  }

  .c80 {
    width: 80%;
    float:left;
  }

  .c90 {
    width: 90%;
    float:left;
  }

  .c95 {
    width: 95%;
    float:left;
  }

  .c98 {
    width: 98%;
    float:left;
  }

  .c100 {
    width: 100%;
    float:left;
  }

  .c-offset {
    left: -17.5%;
  }

  .pad {
    padding: 16px;
  }

  .lesspad {
    padding: 8px;
  }


  .nopad {
    padding: 0px;
  }

  .cta {
    border: none;
  }

  .green {
    color: #288e3b;
  }
  .red {
    color: #b51d13;
  }

  .red-cta {
    background: #b51d13;
    color: white;
    border-radius: 4px;
  }

  .orange-cta {
    background: #c87132;
    color: white;
    border-radius: 4px;
  }

  .blue-cta {
    background: #137bb5;
    color: white;
    border-radius: 4px;
  }

  .purple-cta {
    background: #573183;
    color: white;
    border-radius: 4px;
  }

  .green-cta {
    background: #288e3b;
    color: white;
    border-radius: 4px;
  }

  .order {
    border: 1px solid;
    border-radius: 4px;
  }

 .pt {
   padding-top: 8px;
 }

 .pt2 {
   padding-top: 16px;
 }

 .pr {
   padding-right: 8px;
 }

 .pr2 {
   padding-right: 16px;
 }

 .pr3 {
   padding-right: 32px;
 }

 .pl {
   padding-left: 8px;
 }

 .pl2 {
   padding-left: 16px;
 }

 .pl3 {
   padding-left: 32px;
 }

 .svg-align-left {
   position: absolute;
   top: 0;
   left: 0;
 }

 .svg-align-right {
   margin-top: 4px;
   position: absolute;
   top: 0;
   right: 0;
 }

 .checkbox {
   width: auto;
   display: inline;
   padding: 8px;
   outline: none;
 }

  input, textarea, .StripeElement, .input-field {
    padding: 16px;
    border: 0;
    outline: 0;
    width: calc(100% - 16px);
    font-family: "fira";
    background: rgba(0,0,0,0.015);
    border: 1px solid rgba(0,0,0,0.087);
    font-size: 16px;
    border-radius: 4px;
    transition: 0.4s all;
  }

  input:focus, textarea:focus, .input-field:focus {
    background: rgba(0,0,0,0.03);
    color: var(--text);
    border: 1px solid 1px solid rgba(0,0,0,0.5);
  }

  .ProseMirror-focused {
    outline: none;
  }

  select {
    width: 100%;
    border: 1px solid rgba(0,0,0,0.08);
    padding: 6px;
    outline: none;
  }

  option {
    outline: none;
  }

  textarea {
    resize: vertical;
    outline: none;
    transition: none;
  }

  button:not(.verte__model, .verte__submit, .uppy-DashboardContent-back, .uppy-DashboardContent-addMore, .uppy-u-reset, .editor-button, .pswp__button, .plyr__controls__item ,.plyr__control ) {
    padding: 16px;
    border: 0;
    outline: 0;
    font-family: "fira";
    font-weight: normal;
    background: var(--button);
    border:  1px solid rgba(0,0,0,0.2);
    border-radius: 3px;
    text-align: left;
    width: auto;
    font-size: 16px;
    color: var(--text);
    transition: 0.5s all;
  }

  button:hover:not(.secondary-button):not(:disabled) {
    cursor: pointer;
    opacity: 0.66;
  }

  button::-moz-focus-inner {
    border: 0;
  }

  button.absolute-center {
    background: black;
    border: none;
    color: white;
  }

  .button-container {
    font-size: 0px;
  }

  .button-container button {
    border-radius: 0px;
  }

  .button-container button:nth-child(odd) {
    background: rgba(0,0,0,0.2);
    border-color: rgba(0,0,0,0.2);
    color: black;
  }

  .secondary-button {
    background:  white !important;
    border: 1px solid rgba(0, 0, 0, 0.6) !important;
    min-width: 36px !important;
    min-height: 36px !important;
    padding: 12px !important;
    background: linear-gradient(rgba(0,0,0,0.02) 0%, rgba(255,255,255,0) 100% ) !important;
    transition: 1s all;
  }

  .secondary-button:not(:disabled):hover {
    opacity: 0.4;
    cursor: pointer;
  }


  .cta-button {
    background: white !important;
    position: relative !important;
    transition: 0.2s all !important;
    transition-delay: 0.2s !important;

  }

  .cta-button:hover:not(.secondary-button):not(:disabled) {
    cursor: pointer !important;
    transform: scale(1) !important;
    padding-right: 48px !important;
    background-image: linear-gradient(45deg, #ffffff 25%, #fafafa 25%, #fafafa 50%, #ffffff 50%, #ffffff 75%, #fafafa 75%, #fafafa 100%) !important;
    background-size: 22.63px 22.63px  !important;
    animation: button-animated-bg 5s infinite linear !important;
  }

  .cta-button:not(.secondary-button):not(:disabled) .button-hidden-icon {
    transition: 0.4s all !important;
    transition-delay: 0.2s !important;
    opacity: 0 !important;
  }

  .cta-button:hover:not(.secondary-button):not(:disabled) .button-hidden-icon {
    top: 16px !important;
    right: 8px !important;
    opacity: 1 !important;
  }

  .button-hidden-icon {
    top: -32px;
    right: 0px;
    position: absolute;
  }

  @keyframes button-animated-bg {
      0%   {background-position: 0px 0px;}
      100% {background-position: 128px 0px;}
  }

  .no-shadow {
    box-shadow: none;
  }

  .extra-height {
    min-height: 256px;
  }

  .nudge-top {
    top: 156px;
  }

  label {
    width: 100%;
    font-size: 14px;
    margin-bottom: 4px;
    opacity:0.7;
    display: inline-block;
  }

  .right {
    float: right;
  }

  .grid {
    display: grid;
    grid-gap: 16px;
    grid-template-columns: 1fr 1fr 1fr;
  }

   .grid-table {
    display: grid;
  }

  .input-grid {
    display: grid;
    grid-template-columns: 4fr 4fr 1fr 1fr;
    grid-gap: 8px;
  }


  .asymetrical-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr 1fr 2fr);
  }

  .three-grid {
    display: grid;
    grid-template-columns: 6fr 2fr 1fr;
  }

  .grid-table-item {
    display: grid;
    grid-template-columns: 5% 30% 25% 35% 5%;
    line-height: 64px;
  }

  .grid-table-item:nth-child(even) {
    background: rgba(0,0,0,0.03);
  }


  .grid-table-item button {
    margin-top: 8px;
    margin-right: 8px;
  }

  .fileuploader-label {
    margin: 0;
    padding: 16px;
    border: 0;
    outline: 0;
    width: 100%;
    font-family: "fira";
    background: rgba(0,0,0,0.08);
    border-bottom: 4px solid black;
    border-style: inset;
    font-size: 16px;
    text-align: center;
    border-radius: 2px;
    transition: 0.4s all;
    color: rgba(0,0,0,0.5);
    height: 184px;
    display:inline-block;
    position: relative;
    overflow: hidden;
  }

  .input-item {
    width: 100%;
  }

  .capitalise {
    text-transform: capitalize;
  }

  .fileuploader-label img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    background-position: center;
  }

  .fileuploader-label:hover {
    cursor: pointer;
  }

  .fileuploader-label svg {
    height:100%;
    transform: scale(2.5);
    opacity: 0.4;
    transition: "opacity" 0.3s;
  }

  .fileuploader-label:hover svg {
    opacity: 0.7;
    cursor: pointer;
  }


  .small-file-uploader .fileuploader-label{
    height: 75px;
  }

  .small-file-uploader .fileuploader-label svg{
    transform: scale(1.5);
  }



  .grey-bg {
    background: rgba(0,0,0,0.05);
  }

  .white-bg {
    background: white;
  }

  .grey {
    background: rgba(0,0,0,0.02);
    border-color: rgba(0,0,0,0.05);
    color: rgba(0,0,0,0.6);
  }

  .dashed-border {
    border: 1px dashed rgba(0,0,0,0.3);
    border-radius: 2px;
  }

  .dashed-bg {
    background-image: linear-gradient(45deg, #ffffff 25%, #fafafa 25%, #fafafa 50%, #ffffff 50%, #ffffff 75%, #fafafa 75%, #fafafa 100%) !important;
    background-size: 22.63px 22.63px ;
  }

  .submit-project label {
    font-weight: 600;
  }

  /*
  .small-number-indicator {
    font-size: 12px;
    background: var(--second-hex);
    opacity: 0.4;
    position: absolute;
    text-align: center;
    height: 16px;
    width: auto;
    padding-left: 4px;
    padding-right: 4px;
    color: white;
    line-height: 16px;
    z-index: 100;
  }*/

  .small-number-indicator {
    font-size: 10px;
    position: absolute;
    text-align: center;
    height: 16px;
    top: 17px;
    width: 24px;
    left: 6px;
    padding-left: 4px;
    padding-right: 4px;
    color: white;
    line-height: 16px;
    z-index: 100;
  }
  .cart-indicator svg {
    position: relative;
    font-size: 26px;
  }

  .modal-inner h2 {
    font-size: 22px;
  }

  .tags input {
    font-size: 11px;
    border-radius: 0px;
  }

  .tags button svg {
    opacity: 0.7;
    transform: scale(0.8);
    top: 6px;
    position: absolute;
  }

  .tags .tag {
    display: inline;
    padding: 6px;
    font-size: 12px;
    line-height: 12px;
    color: rgba(0,0,0,0.6);
    background: rgba(0,0,0,0.05);
    border-radius: 6px;
    margin-right: 8px;
    position: relative;
    text-transform: full-width;
  }

  .tags .tag:hover {
    cursor: pointer;
  }

  .tag-delete, .delete-cta {
    position: absolute;
    top: -5px;
    text-align: center;
    right: -5px;
    border-radius: 50%;
    background: rgb(167, 67, 49);
    width: 12px;
    height: 12px;
    display: inline-block;
    font-size: 12px;
    color: white;
  }

  .tag-delete:hover, .delete-cta:hover{
    background: rgb(212, 74, 49);
    cursor: pointer;
  }

  .tag-selected {
    opacity: 0.4;
  }


  .tag-red {
    background: rgb(240, 140, 77) !important;
  }

  .tag-purple {
    background: rgb(149, 129, 158) !important;
  }

  .tag-blue {
    background: rgb(91, 139, 171) !important;
  }

  .tag-green {
    background: rgb(192, 227, 186) !important;
  }

  .photoswipe-image {
  }

  .checkout-items-sidebar {
    height: calc(100vh - 264px);
    overflow: auto;
  }

  .order-item-image {
    width: 64px;
    height: 64px;
    overflow: hidden;
  }

  .order-item {
    border: 1px solid rgba(0,0,0,0.08);
    background: rgba(0,0,0,0.015);
    box-shadow: inset 0px 0px 64px rgba(0,0,0,0.025);
    border-radius: 4px;
    float: left;
  }

  .cart-item {
    border: 1px solid rgba(0,0,0,0.08);
    background: rgba(0,0,0,0.015);
    box-shadow: inset 0px 0px 64px rgba(0,0,0,0.025);
    border-radius: 4px;
    float: left;
  }

  .cart-summary {
    border: 1px solid rgba(0,0,0,0.08);
    background: rgba(0,0,0,0.015);
    box-shadow: inset 0px 0px 64px rgba(0,0,0,0.025);
    border-radius: 4px;
  }

  .order-item-quantity {
    position: absolute;
    top: 0;
    right: 0;
    background: black;
    color: white;
    width: 16px;
    height: 16px;
    text-align: center;
    line-height: 16px;
    font-size: 12px;
  }

  .absolute-top-right {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
  }

  .absolute-bottom-right {
    position: absolute;
    bottom: 0;
    right: 0;
  }

  .absolute-right {
    position: absolute;
    right: 0;
  }

  .absolute-center {
    position: absolute;
    text-align: center;
    width: 50%;
    height: 20%;
    top: 50%;
    left: 25%;
    z-index: 999;
  }

  .z-index-2 {
    z-index: 2;
  }



  .icon.absolute-center {
    top: 35%;
    left: 20%;
  }

  .absolute-bottom {
    position: absolute;
    bottom: 0;
  }

  .absolute-top {
    position: absolute;
    top: 0;
  }

  .absolute-top-left {
    position: absolute;
    top: 0;
    left: 0;
  }

  .absolute-bottom-left {
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .min-height {
    min-height: 64px;
  }

  .modal-min-height {
    min-height: 25vh;
  }

  .max-height {
    max-height: 250px;
    overflow: hidden;
  }

  .offset-image {
    top: -50px;
  }

  .vc-chrome-toggle-btn, .vc-chrome-alpha-wrap {
    display: none !important;
  }

  .vc-chrome-hue-wrap .vc-hue-picker, .vc-chrome-alpha-wrap .vc-alpha-picker {
    width: 17px !important;
    height: 17px !important;
    border-radius: 8px !important;
  }

  .vc-chrome-hue-wrap {
    height: 16px !important;
  }

  .nuxt-link-exact-active {
    text-shadow: none;
    filter: brightness(0.6);
  }

  .nuxt-link-exact-active:hover {
    text-shadow: 0px 0px transparent !important;
    opacity: 1;
    filter: brightness(0.6);
    cursor: default;
  }

  .tabs {
    position: relative;
    bottom: -1px;
  }

  .tab {
    display: inline-block;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }


  .tab:hover {
    cursor: pointer;
  }

  .tab-selected {
    outline: none;
    background: white;
    border-top: 3px solid orange;
    border-left: 1px solid rgba(0,0,0,0.1);
    border-right: 1px solid rgba(0,0,0,0.1);
    border-bottom: 1px solid white !important;
  }

  .selected-order-step {
    background: rgba(var(--second-r),var(--second-g),var(--second-b),0.20);
    color: var(--second-hex);
    white-space: nowrap;
    padding-left: 3px;
    padding-right: 3px;
    border-radius: 3px;
    font-weight: 700;
    font-size: 26px;
    top: 3px;
    position: relative;
  }

  .message {
    padding: 8px;
    background: rgba(0,0,0,0.02);
    border: 1px solid rgba(0,0,0,0.05);
    display: inline-block;
    border-radius: 2px;
  }

  .no-bg {
    float: left;
    background: none !important;
    width: auto;
    padding: 0px;
  }


  .swatch-style {
    width: 100% !important;
    display: inline-block;
  }

  .flex {
    display: flex;
  }

  .flex-wrap {
    flex-wrap: wrap;
  }

  .flex-fill-height {
    display: flex;
    align-self: normal;
    flex-flow: row wrap;
    justify-content: flex-start;
  }

  .scroll-horizontal {
    width: 100%;
    overflow-x: scroll;
  }
  .scroll-vertical {
    height: 100%;
    overflow-y: scroll;
  }

  .admin-toolbar .breadcrumb {
    width: 75%;
  }

  .breadcrumb-toolbar {
    font-size: 0px;
    display: flex;
  }

  .breadcrumb-toolbar .admin-toolbar-item {
    font-size: 0px;
    flex: 1;
    margin-right: 0px;
    text-align: center;
  }

  .horizontal-rule {
    width: 100%;
    height: 2px;
    background: #dbd6c4;
  }

  .box-shadow {
    box-shadow: inset 0px 0px 384px #f6f5f0;
  }

  .editor-button {
    width: auto;
    border: none;
    padding: 3px;
    min-width: 32px;
    line-height: 32px;
    text-align: center;
    border-radius: 0px;
    background: none;
    display: inline-block;
  }

  .is-active {
    font-weight: 700;
    background: #eee;
  }


  .uppercase {
    text-transform: uppercase;
  }


  .lds-ellipsis {
      display: inline-block;
      position: relative;
      width: 64px;
      height: 10px;
  }


    .v--modal {
      background: rgba(255,255,255,0.97) !important;
      transition: 0.5s all;
      border-radius: 8px !important;
    }


    .text-center {
      text-align: center;
    }

  .lds-ellipsis div {
      position: absolute;
      top: 1px;
      width: 11px;
      height: 11px;
      border-radius: 50%;
      background: rgba(0,0,0,0.15);
      animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  .lds-ellipsis div:nth-child(1) {
      left: 6px;
      animation: lds-ellipsis1 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(2) {
      left: 6px;
      animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(3) {
      left: 26px;
      animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(4) {
      left: 45px;
      animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
      0% {
          transform: scale(0);
     }
      100% {
          transform: scale(1);
     }
  }
  @keyframes lds-ellipsis3 {
      0% {
          transform: scale(1);
     }
      100% {
          transform: scale(0);
     }
  }
  @keyframes lds-ellipsis2 {
      0% {
          transform: translate(0, 0);
     }
      100% {
          transform: translate(19px, 0);
     }
  }

  .desktop-navigation {
    display: inline-block;
    float: left;
  }

  .mobile-navigation {
    display: none;
    z-index: 999999;
  }

  iframe {
    min-height: 300px;
  }

    .disabled-button, button[disabled] {
      opacity: 0.45;
    }

    .disabled-button:hover, button[disabled] {
      cursor: not-allowed;
      opacity: 0.45;
    }



  .hooper-next, .hooper-prev {
    top: 150px !important;
    background-color: white !important;
  }
  .hooper-prev{
    left: 5% !important;
  }

  .hooper-next{
    right: 5% !important;
  }

  @media (max-width: 1950px){
    .desktop-navigation .mrx {
      margin-right: 32px;
    }
  }

  @media (min-width: 1796px){

    iframe {
      height: 430px;
    }

    .site-logo {
      width: 374px;
    }

    .center-container {
      width: 60%
    }

    .site-logo-wrapper {
      width: 384px;
    }



  }



  @media (max-width: 1600px){

    .center-container {
      width: 80%;
    }

    .admin-toolbar, .secondary-toolbar {
      padding-left: 10%;
      padding-right: 10%;
    }

    .desktop-navigation .mrx {
      margin-right: 16px;
    }


  }

  @media (max-width: 1300px){
    .desktop-navigation .mrx {
      margin-right: 8px;
      font-size: 14px;
    }

    .navigation-links .link {
      font-size: 14px;
    }

  }

  /* MOBILE STARTS HERE */
  @media (max-width: 1200px){

    iframe {
      min-height: 420px;
    }

    .center-container {
      width: 85%;
    }

    .admin-toolbar, .secondary-toolbar {
      padding-left: 7.5%;
      padding-right: 7.5%;
    }


  }



  @media (max-width: 1000px){





    .product-image {
      width: 100%;
    }

    .photoswipe-image {
      width: 100%;
    }

    .c50 {
      margin-top: 16px;
      margin-bottom: 16px;
    }

    iframe {
      min-height: 380px;
    }

    h1 {
      background: none;
      margin-bottom: 0;
      margin-top: -8px;
      margin-left: -12px;
    }

    h2 {
      background: none;
    }


    .center-container {
      width: 95%;
      top: 32px;
    }

    .admin-toolbar, .secondary-toolbar {
      padding-left: 2.5%;
      padding-right: 2.5%;
    }

    .site-logo-wrapper {
      width: 256px;
    }

    .site-logo {
      width: 256px;
    }


    .c50 {
      width: 100%;
    }

    .c12 {
      width: 25%;
    }

    .desktop-navigation {
      display: none;
    }
    .mobile-navigation {
      display: inline-block;
    }

  }

  @media (max-width: 900px){
    body {
      font-size: 16px;
      overflow: auto;
    }

    h1 {
      width: 23%;
      font-size: 32px;
    }

    h2 {
      width: 23%;
    }

    .audio-block {
      width: 100%;
    }

    iframe {
      width: 100%;
    }

    .c33 {
      width: 100%;
      margin-bottom: 8px;
    }

    .c33.ml.mr {
      margin-left: 0px;
      margin-right: 0px;
    }

    .inline-image.c44 {
      width: 100%;
      margin-right: 0px;
      margin-bottom: 8px;
    }

    .pricing-block.c16 {
      display: none;
    }

    .pricing-block.c28 {
      width: 100%;
    }

    .submit-project.center-container {
      padding-bottom: 32px;
    }

    .submit-project.center-container .mt.c33 .row.mlx {
      margin-left: 0px;
    }

    .submit-project.center-container .c50.mt.pbx {
      padding-bottom: 0px;
    }

    .category-product {
      width: 100% !important;
    }

    .flex-wrapper.mt {
      display: inline-block;
    }

    .filters {
      display: none;
    }

    .explore  .product-image {
      width: 100%;
    }

    .explore  .products .product {
      display: inline-block;
    }

    .explore  .products .product-text {
      width: 100%;
    }

    .explore  .products .product-text .massive {
      font-size: 20px;
      margin-bottom: 16px;
      display: inline-block;
      width: calc(100% - 32px);
    }

    .add-to-cart {
      position: fixed;
      background: white;
      border-top: 1px solid rgba(0,0,0,0.5);
      width: 100%;
      bottom: 0;
      left: 0;
    }

    .add-to-cart-button {
      width: 100%;
    }

    .pdp .c40 {
      width: 100%;
    }

    .cart .c67, .checkout .c67, .payment .c67, .cart .c67 {
      width: 100%;
    }

    .cart img, .checkout img, .payment img, .cart img {
      display: none;
    }

    .cart .c30, .checkout .c30, .payment .c30, .cart .c30 {
      display: none;
    }

    .cart .c70, .checkout .c70, .payment .c70, .cart .c70 {
      width: 100%;

    }

    .cart .c25, .checkout .c25, .payment .c25, .cart .c25 {
      width: 50%;
    }

    .cart .c75, .checkout .c75, .payment .c75, .cart .c75 {
      width: 50%;
    }

    .cart-cta, .checkout-cta, .payment-cta {
      display: inline-block !important;
      width: 100%;
      background: #eee;
      position: fixed;
      bottom: 0;
      left: 0;
      margin-left: 0px;
    }

    .pdp .mtx {
      margin-top: 8px;
    }

    .product-recommendations .c25 {
      width: 100%;
    }

      .product-recommendations .product:nth-child(odd) {
        background: rgba(0,0,0,0.05);
        border-radius: 3px;
      }

    .explore  .products .product-text button, .explore  .products .product-text a  {
      width: calc(100% - 16px);
      margin-top: 8px;
      margin-bottom: 8px;
    }

    .product-detail .flex-item-50 {
      width: 100%;
      margin-left: 0px;
    }

    .cart-items.mt.c58 {
      width: 100%;
    }

    h1, h2 { white-space: normal; width: 100%; line-height: 32px;}


  }

  @media (max-width: 700px){

    .center-container {
        padding-left: 32px;
        padding-right: 32px;
    }

    .admin-toolbar {
      padding-left: 32px;
      padding-right: 32px;
    }


    .explore-filters .ml {
      margin-left: 0px;
    }

  }



</style>
