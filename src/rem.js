initpage()
function initpage()
{
  var view_width = document.getElementsByTagName('html')[0].getBoundingClientRect().width;
  var _html = document.getElementsByTagName('html')[0];
  view_width>750?_html.style.fontSize='200px':_html.style.fontSize =view_width/750*200+'px';
}
export {
 initpage
}