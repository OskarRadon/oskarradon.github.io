// window.addEventListener('load', function () {

  var btn = document.getElementById('info-toggle')
  btn.onclick = function() {
    var e = document.getElementsByClassName('more');
    for (i = 0; i < e.length; i++) {
       e[i].classList.toggle('showing');
    }
    if (e[0].classList.contains('showing')) {
      btn.innerHTML = '<b><a href="#">Less info?</a></b>'
    } else {
      btn.innerHTML = '<b><a href="#">More info?</a></b>'
    }
  }
// });

var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
    ],
    d, m, y, now, out_string;
now = new Date();
d = now.getDate();
m = now.getMonth();
y = now.getFullYear();


out_string = months[m] + ' ' + d + ', ' + y;

document.getElementById('date').innerHTML = out_string;
