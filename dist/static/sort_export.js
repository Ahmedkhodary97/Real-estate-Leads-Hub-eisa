function sortVideos() {
  var select = document.getElementById('sortSelect');
  var grid = document.getElementById('videosGrid');
  var cards = Array.from(grid.getElementsByClassName('video-card'));
  var key = select.value;
  var getValue = v => {
    if(key === 'views') return parseInt(v.dataset.views) || 0;
    if(key === 'likes') return parseInt(v.dataset.likes) || 0;
    if(key === 'comments') return parseInt(v.dataset.comments) || 0;
    if(key === 'shares') return parseInt(v.dataset.reposts) || 0;
    if(key === 'saves') return parseInt(v.dataset.saves) || 0;
    if(key === 'date') return v.dataset.uploadDate || '';
    return 0;
  };
  if(key) {
    if(key === 'date') {
      cards.sort((a, b) => (getValue(b) > getValue(a) ? 1 : -1));
    } else {
      cards.sort((a, b) => getValue(b) - getValue(a));
    }
    cards.forEach(card => grid.appendChild(card));
  }
}

// إضافة دعم الفرز من أزرار التحليلات
window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.sort-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.getElementById('sortSelect').value = btn.dataset.sort;
      sortVideos();
    });
  });
});

function exportPDF() {
  window.print(); // حل سريع (يمكن استبداله لاحقًا بـ html2pdf)
}

function exportHTML() {
  var html = document.documentElement.outerHTML;
  var blob = new Blob([html], {type: 'text/html'});
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'tiktok_dashboard.html';
  a.click();
}
