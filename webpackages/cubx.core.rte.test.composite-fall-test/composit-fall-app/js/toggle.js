'strict mode';
// eslint-disable-next-line no-unused-vars
function toggle (elId, linkId) {
  var ele = document.getElementById(elId);
  var text = document.getElementById(linkId);
  if (ele.style.display === 'block') {
    ele.style.display = 'none';
    text.innerHTML = 'explanation <i class="fa fa-angle-double-down" aria-hidden="true"></i>';
  } else {
    ele.style.display = 'block';
    text.innerHTML = 'explanation <i class="fa fa-angle-double-up" aria-hidden="true"></i>';
  }
}
