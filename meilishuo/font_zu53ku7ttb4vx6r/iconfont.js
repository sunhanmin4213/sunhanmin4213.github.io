;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-zhaoxiangji" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M512 292.571429c-141.357714 0-256 114.642286-256 256s114.642286 256 256 256 256-114.642286 256-256S653.357714 292.571429 512 292.571429zM512 713.142857c-90.750171 0-164.571429-73.821257-164.571429-164.571429s73.821257-164.571429 164.571429-164.571429 164.571429 73.821257 164.571429 164.571429S602.750171 713.142857 512 713.142857z"  ></path>'+
      ''+
      '<path d="M841.142857 292.571429c-20.214857 0-36.571429 16.356571-36.571429 36.571429s16.356571 36.571429 36.571429 36.571429 36.571429-16.356571 36.571429-36.571429S861.357714 292.571429 841.142857 292.571429z"  ></path>'+
      ''+
      '<path d="M950.857143 182.857143 750.999771 182.857143l-62.2848-93.429029C681.929143 79.250286 670.500571 73.142857 658.285714 73.142857L365.714286 73.142857c-12.214857 0-23.643429 6.107429-30.429257 16.285257L273.000229 182.857143 73.142857 182.857143c-40.321829 0-73.142857 32.821029-73.142857 73.142857l0 585.142857c0 40.321829 32.821029 73.142857 73.142857 73.142857l877.714286 0c40.321829 0 73.142857-32.821029 73.142857-73.142857L1024 256C1024 215.678171 991.178971 182.857143 950.857143 182.857143zM73.142857 841.142857 73.142857 256l219.428571 0c12.214857 0 23.643429-6.107429 30.429257-16.285257L385.285486 146.285714l253.429029 0 62.2848 93.429029C707.786971 249.892571 719.215543 256 731.428571 256l219.428571 0 0.071314 585.142857L73.142857 841.142857z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-xiaoxi" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M270.730814 850.384958C342.162917 890.395226 425.273611 912 512 912 758.967883 912 960 737.027602 960 520 960 302.972398 758.967883 128 512 128 265.032117 128 64 302.972398 64 520 64 600.612458 91.866325 677.534006 142.925869 742.320131L112.798751 892.860227C110.252254 905.58464 123.115962 915.888192 134.977321 910.624782L270.730814 850.384958ZM173.922966 730.407771C173.401066 729.358581 172.755029 728.350762 171.982797 727.404702 122.774691 667.120106 96 595.285835 96 520 96 321.709469 281.793859 160 512 160 742.206141 160 928 321.709469 928 520 928 718.290531 742.206141 880 512 880 428.536914 880 348.804947 858.685474 280.977285 819.39501 276.525579 816.241243 270.573354 815.445765 265.224635 817.819229L121.997996 881.375218 144.176567 899.139773 175.725387 741.495672C176.515597 737.547125 175.778954 733.64735 173.922966 730.407771Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-gouwu" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M228.261 312.952c-31.351 0-56.749-25.545-56.749-56.889 0-31.45 25.398-56.889 56.749-56.889 31.373 0 56.749 25.439 56.749 56.889C285.01 287.406 259.632 312.952 228.261 312.952L228.261 312.952zM795.748 312.952c-31.351 0-56.749-25.545-56.749-56.889 0-31.45 25.398-56.889 56.749-56.889 31.373 0 56.749 25.439 56.749 56.889C852.497 287.406 827.12 312.952 795.748 312.952L795.748 312.952zM909.246 1024 114.763 1024C52.145 1024 1.266 973.015 1.266 910.223L1.266 113.777C1.266 51.068 52.145 0 114.763 0l794.482 0c62.638 0 113.497 51.069 113.497 113.777l0 796.444C1022.743 973.015 971.884 1024 909.246 1024L909.246 1024zM965.995 113.777c0-31.386-25.419-56.889-56.749-56.889L114.763 56.888c-31.309 0-56.749 25.503-56.749 56.889l0 796.444c0 31.408 25.44 56.889 56.749 56.889l794.482 0c31.331 0 56.749-25.482 56.749-56.889L965.995 113.777 965.995 113.777zM512.005 568.889c-172.126 0-312.055-140.318-312.055-312.826 0-15.725 12.646-28.508 28.311-28.508 15.686 0 28.438 12.783 28.438 28.508 0 141.123 114.489 255.937 255.306 255.937 140.837 0 255.433-114.815 255.433-255.937 0-15.725 12.646-28.508 28.311-28.508 15.686 0 28.438 12.783 28.438 28.508C824.186 428.571 684.151 568.889 512.005 568.889L512.005 568.889z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-shouye" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M992 499.2 595.2 96C576 76.8 544 64 512 64c-32 0-64 12.8-89.6 32l-128 128L294.4 166.4c0-32-32-64-64-64-38.4 0-64 25.6-64 64l0 185.6 0 6.4L32 499.2c-44.8 44.8-44.8 115.2 0 153.6 6.4 6.4 6.4 6.4 12.8 12.8l121.6 0c0 0 0 0 0 0l0 217.6c0 70.4 57.6 128 128 128l428.8 0c70.4 0 128-57.6 128-128l0-217.6c0 0 0 0 0 0l0 0 128 0c6.4 0 6.4-6.4 12.8-6.4C1036.8 614.4 1030.4 544 992 499.2L992 499.2 992 499.2z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
