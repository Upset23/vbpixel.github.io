for(var btns=document.querySelectorAll(".btn"),i=0;i<btns.length;i++)btns[i].addEventListener("mouseleave",function(t){t.currentTarget.setAttribute("class","btn btn-lg"),t.currentTarget.removeAttribute("aria-label")});function showTooltip(t,e){t.setAttribute("class","btn btn-lg tooltipped tooltipped-s"),t.setAttribute("aria-label",e)}function fallbackMessage(t){var e="cut"===t?"X":"C";return/iPhone|iPad/i.test(navigator.userAgent)?"No support :(":/Mac/i.test(navigator.userAgent)?"Press ⌘-"+e+" to "+t:"Press Ctrl-"+e+" to "+t}hljs.initHighlightingOnLoad();