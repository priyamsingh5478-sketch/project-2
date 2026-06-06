// ======================= DATA MODELS =======================
const stages = [
  { name: 'New Lead', color: '#64748b', deals: [{ name: 'Brightfield AI', val: '$45K', prob: '15%', rep: 'JK' }, { name: 'Orion Health', val: '$32K', prob: '20%', rep: 'PN' }, { name: 'ClearPath SaaS', val: '$28K', prob: '10%', rep: 'TW' }] },
  { name: 'Qualified', color: '#6366f1', deals: [{ name: 'Nexus Retail', val: '$88K', prob: '35%', rep: 'JK' }, { name: 'Stratagen Corp', val: '$65K', prob: '40%', rep: 'AT' }, { name: 'BluePoint Tech', val: '$52K', prob: '45%', rep: 'PN' }] },
  { name: 'Proposal', color: '#3b82f6', deals: [{ name: 'Meridian Bank', val: '$120K', prob: '55%', rep: 'JK' }, { name: 'Titan Logistics', val: '$75K', prob: '60%', rep: 'TW' }] },
  { name: 'Negotiation', color: '#10b981', deals: [{ name: 'GlobalEdge Inc', val: '$95K', prob: '75%', rep: 'PN' }, { name: 'CoreSystems', val: '$140K', prob: '80%', rep: 'JK' }] },
  { name: 'Closed Won', color: '#a855f7', deals: [{ name: 'Apex Digital', val: '$185K', prob: '100%', rep: 'AT' }, { name: 'SolarTech EU', val: '$200K', prob: '100%', rep: 'JK' }] }
];

let leads = [
  { name: 'Rachel Torres', company: 'Vertex AI', source: 'LinkedIn', score: 92, status: 'qualified', rep: 'James Kim', date: 'Jun 1' },
  { name: 'Marcus Chen', company: 'Datastream', source: 'Website', score: 78, status: 'contacted', rep: 'Priya Nair', date: 'Jun 2' },
  { name: 'Sophie Laurent', company: 'CloudNine', source: 'Referral', score: 85, status: 'new', rep: 'Tom Walsh', date: 'Jun 3' },
  { name: 'Ahmed Hassan', company: 'FinTech Pro', source: 'Cold Outreach', score: 61, status: 'new', rep: 'Aiko Tanaka', date: 'Jun 4' },
  { name: 'Lena Kovacs', company: 'MedTech EU', source: 'Website', score: 73, status: 'contacted', rep: 'James Kim', date: 'Jun 5' },
  { name: 'Derek Okafor', company: 'BuildFast', source: 'LinkedIn', score: 89, status: 'qualified', rep: 'Priya Nair', date: 'Jun 5' }
];

const customers = [
  { name: 'Apex Digital', mrr: '$18,500', industry: 'SaaS', health: 95, tier: 'Enterprise', csm: 'Priya Nair', since: 'Jan 2023' },
  { name: 'SolarTech EU', mrr: '$22,000', industry: 'Energy', health: 88, tier: 'Enterprise', csm: 'James Kim', since: 'Mar 2023' }
];

const activities = [
  { type: 'email', icon: '📧', color: '#3b82f618', text: 'Sent proposal to Rachel Torres', time: '2 min ago' },
  { type: 'call', icon: '📞', color: '#10b98118', text: 'Discovery call with Marcus Chen', time: '1h ago' }
];

const performers = [
  { name: 'James Kim', deals: 14, rev: '$412K', quota: 92, rep: 'JK', color: '#6366f130' },
  { name: 'Priya Nair', deals: 11, rev: '$335K', quota: 78, rep: 'PN', color: '#10b98130' }
];

const team = [
  { name: 'Sarah Lin', role: 'Admin', dept: 'Sales Leadership', perms: 'Full Access', last: 'Now', status: 'active' },
  { name: 'James Kim', role: 'Sales Manager', dept: 'Enterprise', perms: 'Manager', last: '5m ago', status: 'active' }
];

const perfData = [
  { name: 'James Kim', won: 14, rev: '$412,000', quota: 92, avg: '$29.4K', win: 74, status: 'On Track' },
  { name: 'Priya Nair', won: 11, rev: '$335,000', quota: 78, avg: '$30.5K', win: 69, status: 'On Track' }
];

const emails = [
  { to: 'Rachel Torres', subject: 'Proposal', status: 'Opened', opens: 3, time: '10:22 AM' }
];

// ======================= RENDER FUNCTIONS =======================
function renderRevenueChart() {
  const revenue = [142, 168, 195, 183, 221, 248, 210, 265, 241, 274, 284];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'];
  const container = document.getElementById('revenue-chart');
  container.innerHTML = '';
  const max = Math.max(...revenue);
  revenue.forEach((v, i) => {
    const bar = document.createElement('div');
    bar.className = 'bar';
    bar.style.height = Math.max(8, (v / max) * 90) + 'px';
    bar.style.background = '#6366f1';
    bar.innerHTML = `<span class="bar-label">${months[i]}</span>`;
    container.appendChild(bar);
  });
}

function renderPipeline() {
  const board = document.getElementById('pipeline-board');
  board.innerHTML = '';
  stages.forEach(s => {
    const col = document.createElement('div');
    col.className = 'pipeline-col';
    col.innerHTML = `<div class="pipeline-col-header"><span style="color:${s.color}">${s.name}</span><span class="stage-count">${s.deals.length}</span></div>` +
      s.deals.map(d => `<div class="deal-card"><div class="deal-name">${d.name}</div><div class="deal-meta"><span class="deal-value">${d.val}</span><span class="deal-prob">${d.prob}</span><div class="deal-avatar" style="background:${s.color}20">${d.rep}</div></div></div>`).join('');
    board.appendChild(col);
  });
}

function renderLeads(filter = 'all') {
  const filtered = filter === 'all' ? leads : leads.filter(l => l.status === filter);
  const tbody = document.getElementById('leads-tbody');
  tbody.innerHTML = filtered.map(l => `<tr>
    <td><div style="display:flex;align-items:center;gap:8px"><div class="avatar" style="width:26px;height:26px;background:#6366f120">${l.name[0]}</div>${l.name}</div></td>
    <td>${l.company}</td><td><span class="badge badge-gray">${l.source}</span></td>
    <td><div class="score-wrap"><div class="score-bar"><div class="score-fill" style="width:${l.score}%;background:#10b981"></div></div>${l.score}</div></td>
    <td><span class="badge badge-blue">${l.status}</span></td><td>${l.rep}</td><td>${l.date}</td>
    <td><button class="btn btn-ghost" style="padding:3px 8px">Edit</button></td>
  </tr>`).join('');
}

function renderCustomers() {
  const tbody = document.getElementById('customers-tbody');
  tbody.innerHTML = customers.map(c => `<tr><td>${c.name}</td><td>${c.mrr}</td><td>${c.industry}</td><td><div class="score-bar"><div class="score-fill" style="width:${c.health}%"></div></div></td><td>${c.tier}</td><td>${c.csm}</td><td>${c.since}</td></tr>`).join('');
}

function renderPerformers() {
  const container = document.getElementById('performers');
  container.innerHTML = performers.map(p => `<div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--border)"><div class="avatar" style="background:${p.color}">${p.rep}</div><div style="flex:1"><div>${p.name}</div><div class="score-bar"><div class="score-fill" style="width:${p.quota}%"></div></div></div><div>${p.rev}</div></div>`).join('');
}

function renderRecentActivity() {
  const container = document.getElementById('recent-activity');
  container.innerHTML = activities.slice(0, 3).map(a => `<div class="activity-item"><div class="activity-icon" style="background:${a.color}">${a.icon}</div><div><div>${a.text}</div><div class="activity-time">${a.time}</div></div></div>`).join('');
}

function renderActivityLog(filter = 'all') {
  const filtered = filter === 'all' ? activities : activities.filter(a => a.type === filter);
  const container = document.getElementById('activity-log');
  container.innerHTML = filtered.map(a => `<div class="activity-item"><div class="activity-icon" style="background:${a.color}">${a.icon}</div><div><div>${a.text}</div><div class="activity-time">${a.time}</div></div></div>`).join('');
}

function renderEmailTracker() {
  const container = document.getElementById('email-tracker');
  container.innerHTML = emails.map(e => `<div style="padding:10px 0;border-bottom:1px solid var(--border)"><div><strong>${e.to}</strong> <span class="badge badge-green">${e.status}</span></div><div style="font-size:11px">${e.subject}</div></div>`).join('');
}

function renderPerfTable() {
  const tbody = document.getElementById('perf-tbody');
  tbody.innerHTML = perfData.map(p => `<tr><td>${p.name}</td><td>${p.won}</td><td>${p.rev}</td><td>${p.quota}%</td><td>${p.avg}</td><td>${p.win}%</td><td><span class="badge badge-green">${p.status}</span></td></tr>`).join('');
}

function renderTeam() {
  const tbody = document.getElementById('team-tbody');
  tbody.innerHTML = team.map(t => `<tr><td>${t.name}</td><td>${t.role}</td><td>${t.dept}</td><td>${t.perms}</td><td>${t.last}</td><td><span class="badge badge-green">${t.status}</span></td></tr>`).join('');
}

// ======================= NAVIGATION =======================
const pageTitles = { dashboard: 'Dashboard', pipeline: 'Pipeline', leads: 'Leads', customers: 'Customers', performance: 'Performance', activities: 'Activities', roles: 'Team & Roles' };

function navigateTo(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById(`page-${page}`).classList.add('active');
  document.querySelector(`.nav-item[data-page="${page}"]`).classList.add('active');
  document.getElementById('page-title').innerText = pageTitles[page];
  const actionBtn = document.getElementById('dynamic-action-btn');
  if (page === 'leads') actionBtn.innerText = '+ Add Lead';
  else actionBtn.innerText = '+ Create';
}

// ======================= MODAL & LEAD CREATION =======================
function openModal() { document.getElementById('modal').classList.add('open'); }
function closeModal() { document.getElementById('modal').classList.remove('open'); }

function addNewLead() {
  const firstName = document.getElementById('leadFirstName').value;
  const lastName = document.getElementById('leadLastName').value;
  const company = document.getElementById('leadCompany').value;
  if (!firstName || !company) return;
  const newLead = {
    name: `${firstName} ${lastName}`,
    company: company,
    source: document.getElementById('leadSource').value,
    score: Math.floor(Math.random() * 40) + 50,
    status: 'new',
    rep: document.getElementById('leadAssign').value,
    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  };
  leads.unshift(newLead);
  renderLeads('all');
  closeModal();
  document.querySelector('[data-lead-filter="all"]').click();
  document.getElementById('leadFirstName').value = '';
  document.getElementById('leadLastName').value = '';
  document.getElementById('leadCompany').value = '';
}

// ======================= EVENT LISTENERS =======================
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', () => navigateTo(item.dataset.page));
});

document.querySelectorAll('.view-link').forEach(link => {
  link.addEventListener('click', () => navigateTo(link.dataset.page));
});

document.querySelectorAll('[data-lead-filter]').forEach(tab => {
  tab.addEventListener('click', (e) => {
    document.querySelectorAll('[data-lead-filter]').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderLeads(tab.dataset.leadFilter);
  });
});

document.querySelectorAll('[data-activity-filter]').forEach(tab => {
  tab.addEventListener('click', (e) => {
    document.querySelectorAll('[data-activity-filter]').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderActivityLog(tab.dataset.activityFilter);
  });
});

document.getElementById('dynamic-action-btn').addEventListener('click', openModal);
document.getElementById('confirmAddLead').addEventListener('click', addNewLead);
document.getElementById('modal').addEventListener('click', (e) => { if (e.target === document.getElementById('modal')) closeModal(); });

// ======================= INIT =======================
renderRevenueChart();
renderPipeline();
renderLeads();
renderCustomers();
renderPerformers();
renderRecentActivity();
renderActivityLog();
renderEmailTracker();
renderPerfTable();
renderTeam();