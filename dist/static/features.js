// شريط مميزات متحرك أعلى الصفحة
window.addEventListener('DOMContentLoaded', function() {
  const features = [
    'فلترة متقدمة وذكية للفيديوهات',
    'ترتيب فوري حسب أي إحصائية',
    'تصدير PDF وHTML بضغطة زر',
    'وضع ليلي وداكن عصري',
    'أزرار نسخ ومشاركة سريعة',
    'تفاصيل فيديو كاملة مثل يوتيوب',
    'رسوم بيانية تفاعلية للإحصائيات',
    'دعم اللغة العربية والـRTL',
    'واجهة متجاوبة لجميع الشاشات',
    'حفظ تفضيلات المستخدم تلقائياً'
  ];
  let i = 0;
  setInterval(() => {
    document.getElementById('features-bar').innerText = features[i++ % features.length];
  }, 2500);
});
