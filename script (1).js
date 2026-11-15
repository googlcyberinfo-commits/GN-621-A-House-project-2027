/* ===== HOUSE PROJECT 2027 - Application Logic ===== */
(function () {
  'use strict';

  // ---------- i18n ----------
  const i18n = {
    ta: {
      'nav.dashboard': 'முகப்பு',
      'nav.new': 'புதிய விண்ணப்பம்',
      'nav.list': 'அனைத்து விண்ணப்பங்கள்',
      'dash.total': 'மொத்த விண்ணப்பங்கள்',
      'dash.today': 'இன்று',
      'dash.landYes': 'சொந்த நிலம்',
      'dash.noHouse': 'முழுமையான வீடு இல்லை',
      'dash.recent': 'சமீபத்திய விண்ணப்பங்கள்',
      'btn.newApp': 'புதிய விண்ணப்பம் சேர்க்க',
      'btn.export': 'காப்புப்பிரதி ஏற்றுமதி (JSON)',
      'btn.import': 'காப்புப்பிரதி இறக்குமதி',
      'btn.cancel': 'ரத்து',
      'btn.save': 'விண்ணப்பத்தை சேமி',
      'btn.reset': 'மீட்டமை',
      'btn.back': '← பின்செல்',
      'btn.print': '🖨️ அச்சிடு / PDF',
      'btn.edit': 'திருத்து',
      'btn.delete': 'நீக்கு',
      'btn.confirm': 'உறுதிப்படுத்து',
      'form.title': 'புதிய விண்ணப்பம்',
      'form.editTitle': 'விண்ணப்பத்தை திருத்து',
      'sec.a': 'பிரிவு அ: அடிப்படை தகவல்',
      'sec.b': 'பிரிவு ஆ: வீடு மற்றும் அடிப்படை வசதிகள்',
      'sec.c': 'பிரிவு இ: விண்ணப்பதாரர் உறுதிமொழி',
      'sec.d': 'பிரிவு ஈ: அலுவலக பயன்பாட்டிற்கு மட்டும் (கிராம நிலாதாரி)',
      'a.registered': '1. விண்ணப்பதாரர் நிரந்தர வாக்காளர் பதிவேட்டில் பதிவு செய்யப்பட்டுள்ளாரா?',
      'a.voterNo': '2. வாக்காளர் பதிவு எண் / முகவரி',
      'a.fullName': '3. குடும்பத் தலைவரின் முழுப் பெயர்',
      'a.nic': '4. தேசிய அடையாள அட்டை எண் (NIC)',
      'a.address': '5. நிரந்தர முகவரி',
      'a.phone': '6. தொலைபேசி எண்',
      'a.whatsapp': '7. WhatsApp எண்',
      'b.ownLand': '1. விண்ணப்பதாரருக்கு குடியிருப்பு நிலம் உள்ளதா?',
      'b.landNature': 'நிலத்தின் தன்மை:',
      'b.deed': 'உரிமைப் பத்திரம்',
      'b.permit': 'அனுமதிப்பத்திரம்',
      'b.other': 'ஏனையவை',
      'b.houseCondition': '2. தற்போதைய வீட்டு நிலை:',
      'b.cond1': 'முழுமையான வீடு இல்லை (வாடகை வீடு / உறவினர் வீடு)',
      'b.cond2': 'பகுதியாக கட்டப்பட்ட வீடு',
      'b.cond3': 'பகுதியாக சேதமடைந்த வீடு',
      'b.cond4': 'முழுமையாக கட்டப்பட்ட வீடு உள்ளது',
      'b.toilet': '3. கழிப்பறை வசதி உள்ளதா?',
      'b.electricity': '4. மின்சார வசதி உள்ளதா?',
      'b.notes': '5. கூடுதல் தேவைகள் / சிறப்பு குறிப்புகள்',
      'c.declaration': 'மேலே குறிப்பிடப்பட்டுள்ள தகவல்கள் அனைத்தும் எனது அறிவுக்கு எட்டிய வரையில் உண்மையானவையும், சரியானவையும் என உறுதிப்படுத்துகிறேன்.',
      'c.date': 'திகதி',
      'c.signature': 'குடும்பத் தலைவர் கையொப்பம்',
      'd.verification': 'மேலே விபரங்கள் சரிபார்க்கப்பட்டன.',
      'd.date': 'திகதி',
      'd.signature': 'கிராம நிலாதாரி கையொப்பம்',
      'd.stamp': 'அதிகாரப்பூர்வ முத்திரை இடம்',
      'yes': 'ஆம்',
      'no': 'இல்லை',
      'list.title': 'அனைத்து விண்ணப்பங்கள்',
      'list.search': 'பெயர், NIC அல்லது முகவரி மூலம் தேடுங்கள்...',
      'list.noResults': 'விண்ணப்பங்கள் எதுவும் இல்லை.',
      'msg.saved': 'விண்ணப்பம் வெற்றிகரமாக சேமிக்கப்பட்டது!',
      'msg.updated': 'விண்ணப்பம் புதுப்பிக்கப்பட்டது!',
      'msg.deleted': 'விண்ணப்பம் நீக்கப்பட்டது.',
      'msg.exported': 'காப்புப்பிரதி ஏற்றுமதி செய்யப்பட்டது.',
      'msg.imported': 'காப்புப்பிரதி இறக்குமதி செய்யப்பட்டது.',
      'msg.confirmDelete': 'இந்த விண்ணப்பத்தை நீக்க விரும்புகிறீர்களா?',
      'msg.noData': 'தரவு இல்லை.',
      'print.title': 'HOUSE PROJECT 2027',
      'print.subtitle': 'வீட்டுத் தேவைகள் மற்றும் அடிப்படை வசதிகள் தகவல் அமைப்பு',
      'print.gn': 'கிராம நிலாதாரி பிரிவு: 621/A நுரைச்சோலை',
      'print.ds': 'பிரதேச செயலகப் பிரிவு: கற்பிட்டி',
      'created': 'உருவாக்கப்பட்ட திகதி'
    },
    si: {
      'nav.dashboard': 'උපකරණ පුවරුව',
      'nav.new': 'නව අයදුම්පත',
      'nav.list': 'සියලු අයදුම්පත්',
      'dash.total': 'මුළු අයදුම්පත්',
      'dash.today': 'අද',
      'dash.landYes': 'අයිති ඉඩම',
      'dash.noHouse': 'සම්පූර්ණ නිවස නැත',
      'dash.recent': 'මෑත අයදුම්පත්',
      'btn.newApp': 'නව අයදුම්පත එකතු කරන්න',
      'btn.export': 'උපස්ථ නිර්යාත (JSON)',
      'btn.import': 'උපස්ථ ආයාත',
      'btn.cancel': 'අවලංගු',
      'btn.save': 'අයදුම්පත සුරකින්න',
      'btn.reset': 'නැවත සකසන්න',
      'btn.back': '← ආපසු',
      'btn.print': '🖨️ මුද්‍රණය / PDF',
      'btn.edit': 'සංස්කරණය',
      'btn.delete': 'මකන්න',
      'btn.confirm': 'තහවුරු කරන්න',
      'form.title': 'නව අයදුම්පත',
      'form.editTitle': 'අයදුම්පත සංස්කරණය',
      'sec.a': 'කොටස අ: මූලික තොරතුරු',
      'sec.b': 'කොටස ආ: නිවස සහ මූලික පහසුකම්',
      'sec.c': 'කොටස ඇ: අයදුම්කරුගේ ප්‍රකාශය',
      'sec.d': 'කොටස ඈ: කාර්යාල භාවිතය සඳහා පමණි (ග්‍රාම නිලධාරී)',
      'a.registered': '1. අයදුම්කරු ස්ථිර මැතිවරණ ලේඛනයේ ලියාපදිංචි වී තිබේද?',
      'a.voterNo': '2. ඡන්දදායක ලියාපදිංචි අංකය / ලිපිනය',
      'a.fullName': '3. ගෘහ මූලිකයාගේ සම්පූර්ණ නම',
      'a.nic': '4. ජාතික හැඳුනුම්පත් අංකය (NIC)',
      'a.address': '5. ස්ථිර ලිපිනය',
      'a.phone': '6. දුරකථන අංකය',
      'a.whatsapp': '7. WhatsApp අංකය',
      'b.ownLand': '1. අයදුම්කරුට නේවාසික ඉඩමක් තිබේද?',
      'b.landNature': 'ඉඩමේ ස්වභාවය:',
      'b.deed': 'ඔප්පුව',
      'b.permit': 'අවසර පත්‍රය',
      'b.other': 'වෙනත්',
      'b.houseCondition': '2. වර්තමාන නිවසේ තත්ත්වය:',
      'b.cond1': 'සම්පූර්ණ නිවසක් නැත (කුලී නිවස / ඥාති නිවස)',
      'b.cond2': 'අර්ධ වශයෙන් සම්පූර්ණ කළ නිවස',
      'b.cond3': 'අර්ධ වශයෙන් හානි වූ නිවස',
      'b.cond4': 'සම්පූර්ණයෙන් සම්පූර්ණ කළ නිවස තිබේ',
      'b.toilet': '3. වැසිකිළි පහසුකම තිබේද?',
      'b.electricity': '4. විදුලි පහසුකම තිබේද?',
      'b.notes': '5. අමතර අවශ්‍යතා / විශේෂ සටහන්',
      'c.declaration': 'ඉහත සඳහන් කර ඇති සියලු තොරතුරු මගේ දැනුමට ඇති පරිදි සත්‍ය හා නිවැරදි බව මම තහවුරු කරමි.',
      'c.date': 'දිනය',
      'c.signature': 'ගෘහ මූලිකයාගේ අත්සන',
      'd.verification': 'ඉහත විස්තර පරීක්ෂා කරන ලදී.',
      'd.date': 'දිනය',
      'd.signature': 'ග්‍රාම නිලධාරී අත්සන',
      'd.stamp': 'නිල මුද්‍රාව සඳහා ස්ථානය',
      'yes': 'ඔව්',
      'no': 'නැත',
      'list.title': 'සියලු අයදුම්පත්',
      'list.search': 'නම, NIC හෝ ලිපිනය අනුව සොයන්න...',
      'list.noResults': 'අයදුම්පත් හමු නොවීය.',
      'msg.saved': 'අයදුම්පත සාර්ථකව සුරකින ලදී!',
      'msg.updated': 'අයදුම්පත යාවත්කාලීන කරන ලදී!',
      'msg.deleted': 'අයදුම්පත මකා දමන ලදී.',
      'msg.exported': 'උපස්ථ නිර්යාත කරන ලදී.',
      'msg.imported': 'උපස්ථ ආයාත කරන ලදී.',
      'msg.confirmDelete': 'මෙම අයදුම්පත මකා දැමීමට අවශ්‍යද?',
      'msg.noData': 'දත්ත නැත.',
      'print.title': 'HOUSE PROJECT 2027',
      'print.subtitle': 'නිවාස අවශ්‍යතා සහ මූලික පහසුකම් තොරතුරු පද්ධතිය',
      'print.gn': 'ග්‍රාම නිලධාරී කොට්ඨාසය: 621/A නුරෙයිච්චෝලෙයි',
      'print.ds': 'ප්‍රාදේශීය ලේකම් කොට්ඨාසය: කල්පිටිය',
      'created': 'සාදන ලද දිනය'
    },
    en: {
      'nav.dashboard': 'Dashboard',
      'nav.new': 'New Application',
      'nav.list': 'All Applications',
      'dash.total': 'Total Applications',
      'dash.today': 'Today',
      'dash.landYes': 'Own Land',
      'dash.noHouse': 'No Completed House',
      'dash.recent': 'Recent Applications',
      'btn.newApp': 'Add New Application',
      'btn.export': 'Export Backup (JSON)',
      'btn.import': 'Import Backup',
      'btn.cancel': 'Cancel',
      'btn.save': 'Save Application',
      'btn.reset': 'Reset',
      'btn.back': '← Back',
      'btn.print': '🖨️ Print / PDF',
      'btn.edit': 'Edit',
      'btn.delete': 'Delete',
      'btn.confirm': 'Confirm',
      'form.title': 'New Application',
      'form.editTitle': 'Edit Application',
      'sec.a': 'SECTION A: BASIC INFORMATION',
      'sec.b': 'SECTION B: HOUSE AND BASIC FACILITIES INFORMATION',
      'sec.c': 'SECTION C: APPLICANT DECLARATION',
      'sec.d': 'SECTION D: OFFICE USE ONLY (GRAMANILADHARI)',
      'a.registered': '1. Has the applicant been registered in the permanent electoral register?',
      'a.voterNo': '2. Voter Registration Number / Address',
      'a.fullName': '3. Full Name of Head of Household',
      'a.nic': '4. National Identity Card Number (NIC)',
      'a.address': '5. Permanent Address',
      'a.phone': '6. Telephone Number',
      'a.whatsapp': '7. WhatsApp Number',
      'b.ownLand': '1. Does the applicant own residential land?',
      'b.landNature': 'Nature of land:',
      'b.deed': 'Deed',
      'b.permit': 'Permit',
      'b.other': 'Other',
      'b.houseCondition': '2. Current House Condition:',
      'b.cond1': 'No completed house (rented house / relative\'s house)',
      'b.cond2': 'House partially completed',
      'b.cond3': 'House partially damaged',
      'b.cond4': 'Fully completed house available',
      'b.toilet': '3. Is toilet facility available?',
      'b.electricity': '4. Is electricity facility available?',
      'b.notes': '5. Additional Needs / Special Notes',
      'c.declaration': 'I hereby confirm that all the information mentioned above is true and correct to the best of my knowledge.',
      'c.date': 'Date',
      'c.signature': 'Head of Household Signature',
      'd.verification': 'The above details have been verified.',
      'd.date': 'Date',
      'd.signature': 'Grama Niladhari Signature',
      'd.stamp': 'Official Stamp Area',
      'yes': 'Yes',
      'no': 'No',
      'list.title': 'All Applications',
      'list.search': 'Search by name, NIC or address...',
      'list.noResults': 'No applications found.',
      'msg.saved': 'Application saved successfully!',
      'msg.updated': 'Application updated!',
      'msg.deleted': 'Application deleted.',
      'msg.exported': 'Backup exported successfully.',
      'msg.imported': 'Backup imported successfully.',
      'msg.confirmDelete': 'Are you sure you want to delete this application?',
      'msg.noData': 'No data available.',
      'print.title': 'HOUSE PROJECT 2027',
      'print.subtitle': 'HOUSING NEEDS & BASIC FACILITIES INFORMATION SYSTEM',
      'print.gn': 'Grama Niladhari Division: 621/A Nuraichcholai',
      'print.ds': 'Divisional Secretariat Division: Kalpitiya',
      'created': 'Created Date'
    }
  };

  let currentLang = localStorage.getItem('hp2027_lang') || 'ta';
  let applications = [];
  let currentDetailId = null;
  let pendingDeleteId = null;

  // ---------- Helpers ----------
  function t(key) {
    return (i18n[currentLang] && i18n[currentLang][key]) || i18n.en[key] || key;
  }

  function showToast(msg, type = '') {
    const el = document.getElementById('toast');
    el.textContent = msg;
    el.className = 'toast show ' + type;
    setTimeout(() => el.classList.remove('show'), 2800);
  }

  function generateId() {
    return 'app_' + Date.now() + '_' + Math.random().toString(36).slice(2, 9);
  }

  function formatDate(iso) {
    if (!iso) return '—';
    const d = new Date(iso);
    return d.toLocaleDateString(currentLang === 'ta' ? 'ta-LK' : currentLang === 'si' ? 'si-LK' : 'en-GB');
  }

  function todayISO() {
    return new Date().toISOString().slice(0, 10);
  }

  // ---------- Storage ----------
  function loadApps() {
    try {
      const raw = localStorage.getItem('hp2027_applications');
      applications = raw ? JSON.parse(raw) : [];
    } catch (e) {
      applications = [];
    }
  }

  function saveApps() {
    localStorage.setItem('hp2027_applications', JSON.stringify(applications));
  }

  // ---------- Language ----------
  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('hp2027_lang', lang);
    document.body.className = 'lang-' + lang;
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = t(key);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      el.placeholder = t(key);
    });

    // Special static labels in header
    const titles = {
      ta: { title: 'HOUSE PROJECT 2027', sub: 'வீட்டுத் தேவைகள் மற்றும் அடிப்படை வசதிகள் தகவல் அமைப்பு', gn: 'கிராம நிலாதாரி பிரிவு: 621/A நுரைச்சோலை', ds: 'பிரதேச செயலகப் பிரிவு: கற்பிட்டி' },
      si: { title: 'HOUSE PROJECT 2027', sub: 'නිවාස අවශ්‍යතා සහ මූලික පහසුකම් තොරතුරු පද්ධතිය', gn: 'ග්‍රාම නිලධාරී කොට්ඨාසය: 621/A නුරෙයිච්චෝලෙයි', ds: 'ප්‍රාදේශීය ලේකම් කොට්ඨාසය: කල්පිටිය' },
      en: { title: 'HOUSE PROJECT 2027', sub: 'HOUSING NEEDS & BASIC FACILITIES INFORMATION SYSTEM', gn: 'Grama Niladhari Division: 621/A Nuraichcholai', ds: 'Divisional Secretariat Division: Kalpitiya' }
    };
    const tr = titles[lang] || titles.en;
    document.getElementById('app-title').textContent = tr.title;
    document.getElementById('app-subtitle').textContent = tr.sub;
    document.getElementById('office-gn').textContent = tr.gn;
    document.getElementById('office-ds').textContent = tr.ds;

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Refresh dynamic content
    renderDashboard();
    renderList();
  }

  // ---------- Views ----------
  function showView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById('view-' + viewId).classList.add('active');
    document.querySelectorAll('.nav-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.view === viewId);
    });
    window.scrollTo(0, 0);
  }

  // ---------- Dashboard ----------
  function renderDashboard() {
    const total = applications.length;
    const today = todayISO();
    const todayCount = applications.filter(a => a.createdAt && a.createdAt.startsWith(today)).length;
    const landYes = applications.filter(a => a.ownLand === 'yes').length;
    const noHouse = applications.filter(a => a.houseCondition && a.houseCondition.includes('no_house')).length;

    document.getElementById('stat-total').textContent = total;
    document.getElementById('stat-today').textContent = todayCount;
    document.getElementById('stat-land-yes').textContent = landYes;
    document.getElementById('stat-no-house').textContent = noHouse;

    const recent = [...applications].sort((a, b) => (b.createdAt || '').localeCompare(a.createdAt || '')).slice(0, 5);
    const listEl = document.getElementById('recent-list');
    if (recent.length === 0) {
      listEl.innerHTML = `<div class="empty-state">${t('msg.noData')}</div>`;
      return;
    }
    listEl.innerHTML = recent.map(app => cardHTML(app)).join('');
    bindCardButtons(listEl);
  }

  // ---------- List ----------
  function renderList(filter = '') {
    const q = filter.trim().toLowerCase();
    let filtered = applications;
    if (q) {
      filtered = applications.filter(a =>
        (a.fullName || '').toLowerCase().includes(q) ||
        (a.nic || '').toLowerCase().includes(q) ||
        (a.address || '').toLowerCase().includes(q)
      );
    }
    const listEl = document.getElementById('applications-list');
    const noRes = document.getElementById('no-results');
    if (filtered.length === 0) {
      listEl.innerHTML = '';
      noRes.style.display = 'block';
      return;
    }
    noRes.style.display = 'none';
    const sorted = [...filtered].sort((a, b) => (b.createdAt || '').localeCompare(a.createdAt || ''));
    listEl.innerHTML = sorted.map(app => cardHTML(app)).join('');
    bindCardButtons(listEl);
  }

  function cardHTML(app) {
    return `
      <div class="app-card" data-id="${app.id}">
        <div class="app-card-info">
          <h3>${escapeHtml(app.fullName || '—')}</h3>
          <p>NIC: ${escapeHtml(app.nic || '—')}</p>
          <p>${escapeHtml((app.address || '').slice(0, 60))}${(app.address || '').length > 60 ? '…' : ''}</p>
          <p style="font-size:0.78rem;color:#888;">${t('created')}: ${formatDate(app.createdAt)}</p>
        </div>
        <div class="app-card-actions">
          <button class="btn-view" data-action="view">${t('btn.print').replace('🖨️ ', '').slice(0, 8) || 'View'}</button>
          <button class="btn-edit" data-action="edit">${t('btn.edit')}</button>
          <button class="btn-del" data-action="delete">${t('btn.delete')}</button>
        </div>
      </div>`;
  }

  function bindCardButtons(container) {
    container.querySelectorAll('.app-card').forEach(card => {
      const id = card.dataset.id;
      card.querySelector('[data-action="view"]').addEventListener('click', e => {
        e.stopPropagation();
        openDetail(id);
      });
      card.querySelector('[data-action="edit"]').addEventListener('click', e => {
        e.stopPropagation();
        openEdit(id);
      });
      card.querySelector('[data-action="delete"]').addEventListener('click', e => {
        e.stopPropagation();
        confirmDelete(id);
      });
      card.addEventListener('click', () => openDetail(id));
    });
  }

  function escapeHtml(str) {
    const d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
  }

  // ---------- Form ----------
  function resetForm() {
    document.getElementById('application-form').reset();
    document.getElementById('edit-id').value = '';
    document.getElementById('voter-details-group').style.display = 'none';
    document.getElementById('land-nature-group').style.display = 'none';
    document.getElementById('land-other-group').style.display = 'none';
    document.getElementById('applicantDate').value = todayISO();
    document.getElementById('form-title').textContent = t('form.title');
  }

  function openNewForm() {
    resetForm();
    showView('form');
  }

  function openEdit(id) {
    const app = applications.find(a => a.id === id);
    if (!app) return;
    resetForm();
    document.getElementById('edit-id').value = app.id;
    document.getElementById('form-title').textContent = t('form.editTitle');

    // Section A
    const reg = document.querySelector(`input[name="electoralRegistered"][value="${app.electoralRegistered}"]`);
    if (reg) reg.checked = true;
    if (app.electoralRegistered === 'yes') {
      document.getElementById('voter-details-group').style.display = 'block';
      document.getElementById('voterRegNo').value = app.voterRegNo || '';
    }
    document.getElementById('fullName').value = app.fullName || '';
    document.getElementById('nic').value = app.nic || '';
    document.getElementById('address').value = app.address || '';
    document.getElementById('phone').value = app.phone || '';
    document.getElementById('whatsapp').value = app.whatsapp || '';

    // Section B
    const land = document.querySelector(`input[name="ownLand"][value="${app.ownLand}"]`);
    if (land) land.checked = true;
    if (app.ownLand === 'yes') {
      document.getElementById('land-nature-group').style.display = 'block';
      const nature = document.querySelector(`input[name="landNature"][value="${app.landNature}"]`);
      if (nature) nature.checked = true;
      if (app.landNature === 'other') {
        document.getElementById('land-other-group').style.display = 'block';
        document.getElementById('landOtherText').value = app.landOtherText || '';
      }
    }
    if (app.houseCondition) {
      app.houseCondition.forEach(v => {
        const cb = document.querySelector(`input[name="houseCondition"][value="${v}"]`);
        if (cb) cb.checked = true;
      });
    }
    const toilet = document.querySelector(`input[name="toilet"][value="${app.toilet}"]`);
    if (toilet) toilet.checked = true;
    const elec = document.querySelector(`input[name="electricity"][value="${app.electricity}"]`);
    if (elec) elec.checked = true;
    document.getElementById('notes').value = app.notes || '';

    // Section C
    document.getElementById('applicantDate').value = app.applicantDate || todayISO();
    document.getElementById('applicantSignature').value = app.applicantSignature || '';

    // Section D
    document.getElementById('gnDate').value = app.gnDate || '';
    document.getElementById('gnSignature').value = app.gnSignature || '';

    showView('form');
  }

  function collectFormData() {
    const form = document.getElementById('application-form');
    const fd = new FormData(form);
    const houseCondition = [];
    form.querySelectorAll('input[name="houseCondition"]:checked').forEach(cb => houseCondition.push(cb.value));

    return {
      electoralRegistered: fd.get('electoralRegistered') || '',
      voterRegNo: fd.get('voterRegNo') || '',
      fullName: (fd.get('fullName') || '').trim(),
      nic: (fd.get('nic') || '').trim(),
      address: (fd.get('address') || '').trim(),
      phone: (fd.get('phone') || '').trim(),
      whatsapp: (fd.get('whatsapp') || '').trim(),
      ownLand: fd.get('ownLand') || '',
      landNature: fd.get('landNature') || '',
      landOtherText: (fd.get('landOtherText') || '').trim(),
      houseCondition,
      toilet: fd.get('toilet') || '',
      electricity: fd.get('electricity') || '',
      notes: (fd.get('notes') || '').trim(),
      applicantDate: fd.get('applicantDate') || '',
      applicantSignature: (fd.get('applicantSignature') || '').trim(),
      gnDate: fd.get('gnDate') || '',
      gnSignature: (fd.get('gnSignature') || '').trim()
    };
  }

  function saveApplication(e) {
    e.preventDefault();
    const data = collectFormData();
    if (!data.fullName || !data.nic || !data.address) {
      showToast('Required fields missing', 'error');
      return;
    }
    const editId = document.getElementById('edit-id').value;
    if (editId) {
      const idx = applications.findIndex(a => a.id === editId);
      if (idx !== -1) {
        applications[idx] = { ...applications[idx], ...data, updatedAt: new Date().toISOString() };
        saveApps();
        showToast(t('msg.updated'), 'success');
      }
    } else {
      const newApp = {
        id: generateId(),
        ...data,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      applications.push(newApp);
      saveApps();
      showToast(t('msg.saved'), 'success');
    }
    resetForm();
    showView('dashboard');
    renderDashboard();
  }

  // ---------- Detail / Print ----------
  function openDetail(id) {
    const app = applications.find(a => a.id === id);
    if (!app) return;
    currentDetailId = id;
    const area = document.getElementById('print-area');
    area.innerHTML = buildPrintHTML(app);
    showView('detail');
  }

  function yesNo(val) {
    if (val === 'yes') return t('yes');
    if (val === 'no') return t('no');
    return '—';
  }

  function landNatureLabel(val, other) {
    if (val === 'deed') return t('b.deed');
    if (val === 'permit') return t('b.permit');
    if (val === 'other') return t('b.other') + (other ? ': ' + other : '');
    return '—';
  }

  function houseCondLabels(arr) {
    if (!arr || !arr.length) return '—';
    const map = {
      no_house: t('b.cond1'),
      partial: t('b.cond2'),
      damaged: t('b.cond3'),
      completed: t('b.cond4')
    };
    return arr.map(v => map[v] || v).join('; ');
  }

  function buildPrintHTML(app) {
    return `
      <div class="print-header">
        <h1>${t('print.title')}</h1>
        <div class="sub">${t('print.subtitle')}</div>
      </div>
      <div class="print-office">
        ${t('print.gn')}<br>
        ${t('print.ds')}
      </div>

      <div class="print-section">
        <h3>${t('sec.a')}</h3>
        <div class="print-row"><span class="print-label">${t('a.registered')}</span><span class="print-value">${yesNo(app.electoralRegistered)}</span></div>
        ${app.electoralRegistered === 'yes' ? `<div class="print-row"><span class="print-label">${t('a.voterNo')}</span><span class="print-value">${escapeHtml(app.voterRegNo || '—')}</span></div>` : ''}
        <div class="print-row"><span class="print-label">${t('a.fullName')}</span><span class="print-value">${escapeHtml(app.fullName || '—')}</span></div>
        <div class="print-row"><span class="print-label">${t('a.nic')}</span><span class="print-value">${escapeHtml(app.nic || '—')}</span></div>
        <div class="print-row"><span class="print-label">${t('a.address')}</span><span class="print-value">${escapeHtml(app.address || '—')}</span></div>
        <div class="print-row"><span class="print-label">${t('a.phone')}</span><span class="print-value">${escapeHtml(app.phone || '—')}</span></div>
        <div class="print-row"><span class="print-label">${t('a.whatsapp')}</span><span class="print-value">${escapeHtml(app.whatsapp || '—')}</span></div>
      </div>

      <div class="print-section">
        <h3>${t('sec.b')}</h3>
        <div class="print-row"><span class="print-label">${t('b.ownLand')}</span><span class="print-value">${yesNo(app.ownLand)}</span></div>
        ${app.ownLand === 'yes' ? `<div class="print-row"><span class="print-label">${t('b.landNature')}</span><span class="print-value">${landNatureLabel(app.landNature, app.landOtherText)}</span></div>` : ''}
        <div class="print-row"><span class="print-label">${t('b.houseCondition')}</span><span class="print-value">${houseCondLabels(app.houseCondition)}</span></div>
        <div class="print-row"><span class="print-label">${t('b.toilet')}</span><span class="print-value">${yesNo(app.toilet)}</span></div>
        <div class="print-row"><span class="print-label">${t('b.electricity')}</span><span class="print-value">${yesNo(app.electricity)}</span></div>
        <div class="print-row"><span class="print-label">${t('b.notes')}</span><span class="print-value">${escapeHtml(app.notes || '—')}</span></div>
      </div>

      <div class="print-section">
        <h3>${t('sec.c')}</h3>
        <div class="print-declaration">${t('c.declaration')}</div>
        <div class="print-signature-row">
          <div class="print-sig-box">
            <div>${escapeHtml(app.applicantDate || '—')}</div>
            <div class="print-sig-line">${t('c.date')}</div>
          </div>
          <div class="print-sig-box">
            <div>${escapeHtml(app.applicantSignature || '—')}</div>
            <div class="print-sig-line">${t('c.signature')}</div>
          </div>
        </div>
      </div>

      <div class="print-section">
        <h3>${t('sec.d')}</h3>
        <div class="print-declaration">${t('d.verification')}</div>
        <div class="print-signature-row">
          <div class="print-sig-box">
            <div>${escapeHtml(app.gnDate || '—')}</div>
            <div class="print-sig-line">${t('d.date')}</div>
          </div>
          <div class="print-sig-box">
            <div>${escapeHtml(app.gnSignature || '—')}</div>
            <div class="print-sig-line">${t('d.signature')}</div>
          </div>
        </div>
        <div class="print-stamp">${t('d.stamp')}</div>
      </div>

      <div style="margin-top:20px;font-size:0.8rem;color:#666;text-align:right;">
        ${t('created')}: ${formatDate(app.createdAt)}
      </div>
    `;
  }

  // ---------- Delete ----------
  function confirmDelete(id) {
    pendingDeleteId = id;
    document.getElementById('modal-message').textContent = t('msg.confirmDelete');
    document.getElementById('modal').classList.add('show');
  }

  function doDelete() {
    if (!pendingDeleteId) return;
    applications = applications.filter(a => a.id !== pendingDeleteId);
    saveApps();
    showToast(t('msg.deleted'), 'success');
    document.getElementById('modal').classList.remove('show');
    pendingDeleteId = null;
    if (document.getElementById('view-detail').classList.contains('active')) {
      showView('list');
    }
    renderDashboard();
    renderList(document.getElementById('search-input').value);
  }

  // ---------- Export / Import ----------
  function exportJSON() {
    const data = {
      exportedAt: new Date().toISOString(),
      app: 'House Project 2027',
      office: { gn: '621/A Nuraichcholai', ds: 'Kalpitiya' },
      applications
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `HouseProject2027_Backup_${todayISO()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast(t('msg.exported'), 'success');
  }

  function importJSON(file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      try {
        const data = JSON.parse(e.target.result);
        if (data.applications && Array.isArray(data.applications)) {
          // Merge by id (avoid duplicates)
          const existingIds = new Set(applications.map(a => a.id));
          let added = 0;
          data.applications.forEach(app => {
            if (!existingIds.has(app.id)) {
              applications.push(app);
              added++;
            }
          });
          saveApps();
          showToast(t('msg.imported') + ` (+${added})`, 'success');
          renderDashboard();
          renderList();
        } else {
          showToast('Invalid backup file', 'error');
        }
      } catch (err) {
        showToast('Invalid JSON file', 'error');
      }
    };
    reader.readAsText(file);
  }

  // ---------- Event Listeners ----------
  function initEvents() {
    // Language
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
    });

    // Navigation
    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const view = btn.dataset.view;
        if (view === 'form') openNewForm();
        else if (view === 'list') {
          showView('list');
          renderList(document.getElementById('search-input').value);
        } else {
          showView(view);
          if (view === 'dashboard') renderDashboard();
        }
      });
    });

    // Dashboard buttons
    document.getElementById('btn-new-app').addEventListener('click', openNewForm);
    document.getElementById('btn-export-json').addEventListener('click', exportJSON);
    document.getElementById('btn-import-json').addEventListener('click', () => {
      document.getElementById('import-file').click();
    });
    document.getElementById('import-file').addEventListener('change', e => {
      if (e.target.files[0]) importJSON(e.target.files[0]);
      e.target.value = '';
    });

    // Form conditional fields
    document.querySelectorAll('input[name="electoralRegistered"]').forEach(r => {
      r.addEventListener('change', () => {
        document.getElementById('voter-details-group').style.display =
          r.value === 'yes' && r.checked ? 'block' : 'none';
      });
    });
    document.querySelectorAll('input[name="ownLand"]').forEach(r => {
      r.addEventListener('change', () => {
        const show = r.value === 'yes' && r.checked;
        document.getElementById('land-nature-group').style.display = show ? 'block' : 'none';
        if (!show) document.getElementById('land-other-group').style.display = 'none';
      });
    });
    document.querySelectorAll('input[name="landNature"]').forEach(r => {
      r.addEventListener('change', () => {
        document.getElementById('land-other-group').style.display =
          r.value === 'other' && r.checked ? 'block' : 'none';
      });
    });

    // Form actions
    document.getElementById('application-form').addEventListener('submit', saveApplication);
    document.getElementById('btn-cancel-form').addEventListener('click', () => {
      resetForm();
      showView('dashboard');
    });
    document.getElementById('btn-reset').addEventListener('click', resetForm);

    // Search
    document.getElementById('search-input').addEventListener('input', e => {
      renderList(e.target.value);
    });
    document.getElementById('btn-clear-search').addEventListener('click', () => {
      document.getElementById('search-input').value = '';
      renderList('');
    });

    // Detail actions
    document.getElementById('btn-back-list').addEventListener('click', () => {
      showView('list');
      renderList(document.getElementById('search-input').value);
    });
    document.getElementById('btn-print').addEventListener('click', () => window.print());
    document.getElementById('btn-edit-from-detail').addEventListener('click', () => {
      if (currentDetailId) openEdit(currentDetailId);
    });
    document.getElementById('btn-delete-from-detail').addEventListener('click', () => {
      if (currentDetailId) confirmDelete(currentDetailId);
    });

    // Modal
    document.getElementById('modal-confirm').addEventListener('click', doDelete);
    document.getElementById('modal-cancel').addEventListener('click', () => {
      document.getElementById('modal').classList.remove('show');
      pendingDeleteId = null;
    });
  }

  // ---------- Service Worker ----------
  function registerSW() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./service-worker.js')
        .then(() => console.log('SW registered'))
        .catch(err => console.log('SW failed', err));
    }
  }

  // ---------- Init ----------
  function init() {
    loadApps();
    applyLanguage(currentLang);
    initEvents();
    renderDashboard();
    document.getElementById('applicantDate').value = todayISO();
    registerSW();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
