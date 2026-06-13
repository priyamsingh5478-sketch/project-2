// ================ DATA MODELS (Enhanced) ===================
const stages = [
  { name: 'New Lead', color: '#64748b', deals: [{ name: 'Brightfield AI', val: '$45K', prob: '15%', rep: 'JK' }, { name: 'Orion Health', val: '$32K', prob: '20%', rep: 'PN' }, { name: 'ClearPath SaaS', val: '$28K', prob: '10%', rep: 'TW' }] },
  { name: 'Qualified', color: '#6366f1', deals: [{ name: 'Nexus Retail', val: '$88K', prob: '35%', rep: 'JK' }, { name: 'Stratagen Corp', val: '$65K', prob: '40%', rep: 'AT' }, { name: 'BluePoint Tech', val: '$52K', prob: '45%', rep: 'PN' }] },
  { name: 'Proposal', color: '#3b82f6', deals: [{ name: 'Meridian Bank', val: '$120K', prob: '55%', rep: 'JK' }, { name: 'Titan Logistics', val: '$75K', prob: '60%', rep: 'TW' }] },
  { name: 'Negotiation', color: '#10b981', deals: [{ name: 'GlobalEdge Inc', val: '$95K', prob: '75%', rep: 'PN' }, { name: 'CoreSystems', val: '$140K', prob: '80%', rep: 'JK' }] },
  { name: 'Closed Won', color: '#a855f7', deals: [{ name: 'Apex Digital', val: '$185K', prob: '100%', rep: 'AT' }, { name: 'SolarTech EU', val: '$200K', prob: '100%', rep: 'JK' }] }
];

let leads = [
  { name: 'Rachel Torres', company: 'Vertex AI', source: 'LinkedIn', score: 92, status: 'qualified', rep: 'James Kim', date: 'Jun 1', email: 'rachel@vertex.ai', phone: '+1 (555) 123-4567', value: '$45K' },
  { name: 'Marcus Chen', company: 'Datastream', source: 'Website', score: 78, status: 'contacted', rep: 'Priya Nair', date: 'Jun 2', email: 'marcus@datastream.com', phone: '+1 (555) 234-5678', value: '$32K' },
  { name: 'Sophie Laurent', company: 'CloudNine', source: 'Referral', score: 85, status: 'new', rep: 'Tom Walsh', date: 'Jun 3', email: 'sophie@cloudnine.com', phone: '+1 (555) 345-6789', value: '$28K' },
  { name: 'Ahmed Hassan', company: 'FinTech Pro', source: 'Cold Outreach', score: 61, status: 'new', rep: 'Aiko Tanaka', date: 'Jun 4', email: 'ahmed@fintechpro.com', phone: '+1 (555) 456-7890', value: '$22K' },
  { name: 'Lena Kovacs', company: 'MedTech EU', source: 'Website', score: 73, status: 'contacted', rep: 'James Kim', date: 'Jun 5', email: 'lena@medtecheu.com', phone: '+1 (555) 567-8901', value: '$38K' },
  { name: 'Derek Okafor', company: 'BuildFast', source: 'LinkedIn', score: 89, status: 'qualified', rep: 'Priya Nair', date: 'Jun 5', email: 'derek@buildfast.com', phone: '+1 (555) 678-9012', value: '$67K' }
];

const customers = [
  { name: 'Apex Digital', mrr: '$18,500', industry: 'SaaS', health: 95, tier: 'Enterprise', csm: 'Priya Nair', since: 'Jan 2023' },
  { name: 'SolarTech EU', mrr: '$22,000', industry: 'Energy', health: 88, tier: 'Enterprise', csm: 'James Kim', since: 'Mar 2023' }
];

let activities = [
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

let emails = [
  { to: 'Rachel Torres', subject: 'Proposal for Vertex AI', status: 'Opened', opens: 3, time: '10:22 AM' }
];

// ======================= ENHANCED FUNCTIONS =======================
function showNotification(message, type = 'success') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <div style="position:fixed;top:20px;right:20px;background:${type === 'success' ? '#10b981' : '#ef4444'};color:white;padding:12px 20px;border-radius:8px;z-index:1000;animation:slideIn 0.3s ease">
      ${message}
    </div>
  `;
  document.body.appendChild(notification);
  setTimeout(() => notification.remove(), 3000);
}

function saveToLocalStorage() {
  localStorage.setItem('crm_leads', JSON.stringify(leads));
  localStorage.setItem('crm_activities', JSON.stringify(activities));
  showNotification('Data saved successfully!');
}

function loadFromLocalStorage() {
  const savedLeads = localStorage.getItem('crm_leads');
  const savedActivities = localStorage.getItem('crm_activities');
  if (savedLeads) leads = JSON.parse(savedLeads);
  if (savedActivities) activities = JSON.parse(savedActivities);
}

// Export functionality
function exportToCSV() {
  const headers = ['Name', 'Company', 'Source', 'Score', 'Status', 'Rep', 'Date', 'Email', 'Phone', 'Value'];
  const csvData = leads.map(lead => [
    lead.name, lead.company, lead.source, lead.score, 
    lead.status, lead.rep, lead.date, lead.email || '', 
    lead.phone || '', lead.value || ''
  ]);
  
  const csvContent = [headers, ...csvData].map(row => row.join(',')).join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `crm_leads_${new Date().toISOString().split('T')[0]}.csv`;
  a.click();
  URL.revokeObjectURL(url);
  showNotification('CSV exported successfully!');
}

// Search functionality
function searchLeads(query) {
  if (!query) return renderLeads('all');
  const filtered = leads.filter(lead => 
    lead.name.toLowerCase().includes(query.toLowerCase()) ||
    lead.company.toLowerCase().includes(query.toLowerCase()) ||
    lead.email?.toLowerCase().includes(query.toLowerCase())
  );
  const tbody = document.getElementById('leads-tbody');
  tbody.innerHTML = filtered.map(l => renderLeadRow(l)).join('');
}

function renderLeadRow(l) {
  return `<tr>
    <td><div style="display:flex;align-items:center;gap:8px"><div class="avatar" style="width:26px;height:26px;background:#6366f120">${l.name[0]}</div>${l.name}</div></td>
    <td>${l.company}</td><td><span class="badge badge-gray">${l.source}</span></td>
    <td><div class="score-wrap"><div class="score-bar"><div class="score-fill" style="width:${l.score}%;background:#10b981"></div></div>${l.score}</div></td>
    <td><span class="badge badge-blue">${l.status}</span></td><td>${l.rep}</td><td>${l.date}</td>
    <td><button class="btn btn-ghost" onclick="editLead('${l.name}')" style="padding:3px 8px">Edit</button>
      <button class="btn btn-ghost" onclick="deleteLead('${l.name}')" style="padding:3px 8px;color:#ef4444">Delete</button></td>
  </tr>`;
}

function editLead(name) {
  const lead = leads.find(l => l.name === name);
  if (lead) {
    document.getElementById('leadFirstName').value = lead.name.split(' ')[0];
    document.getElementById('leadLastName').value = lead.name.split(' ')[1] || '';
    document.getElementById('leadCompany').value = lead.company;
    document.getElementById('leadEmail').value = lead.email || '';
    document.getElementById('leadPhone').value = lead.phone || '';
    document.getElementById('leadSource').value = lead.source;
    document.getElementById('leadValue').value = lead.value || '';
    document.getElementById('leadAssign').value = lead.rep;
    openModal();
    // Remove old lead, add updated one on save
    window.editingLead = name;
  }
}

function deleteLead(name) {
  if (confirm(`Are you sure you want to delete ${name}?`)) {
    leads = leads.filter(l => l.name !== name);
    renderLeads('all');
    saveToLocalStorage();
    showNotification(`${name} deleted successfully!`);
  }
}

// Enhanced revenue chart with tooltips
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
    bar.title = `${months[i]}: $${v}K`;
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
      s.deals.map(d => `<div class="deal-card" onclick="moveDeal('${d.name}')"><div class="deal-name">${d.name}</div><div class="deal-meta"><span class="deal-value">${d.val}</span><span class="deal-prob">${d.prob}</span><div class="deal-avatar" style="background:${s.color}20">${d.rep}</div></div></div>`).join('');
    board.appendChild(col);
  });
}

function moveDeal(dealName) {
  const newStage = prompt('Move to stage: (New Lead, Qualified, Proposal, Negotiation, Closed Won)');
  if (newStage) {
    showNotification(`${dealName} moved to ${newStage}`, 'success');
  }
}

function renderLeads(filter = 'all') {
  const filtered = filter === 'all' ? leads : leads.filter(l => l.status === filter);
  const tbody = document.getElementById('leads-tbody');
  tbody.innerHTML = filtered.map(l => renderLeadRow(l)).join('');
  updateStats();
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
  container.innerHTML = emails.map(e => `<div style="padding:10px 0;border-bottom:1px solid var(--border)"><div><strong>${e.to}</strong> <span class="badge badge-green">${e.status}</span> <span style="font-size:11px">Opens: ${e.opens}</span></div><div style="font-size:11px">${e.subject}</div><div style="font-size:10px;color:var(--text3)">${e.time}</div></div>`).join('');
}

function renderPerfTable() {
  const tbody = document.getElementById('perf-tbody');
  tbody.innerHTML = perfData.map(p => `<tr><td>${p.name}</td><td>${p.won}</td><td>${p.rev}</td><td>${p.quota}%</td><td>${p.avg}</td><td>${p.win}%</td><td><span class="badge badge-green">${p.status}</span></td></tr>`).join('');
}

function renderTeam() {
  const tbody = document.getElementById('team-tbody');
  tbody.innerHTML = team.map(t => `<tr><td>${t.name}</td><td>${t.role}</td><td>${t.dept}</td><td>${t.perms}</td><td>${t.last}</td><td><span class="badge badge-green">${t.status}</span></td></tr>`).join('');
}

function updateStats() {
  const totalLeads = leads.length;
  const qualifiedLeads = leads.filter(l => l.status === 'qualified').length;
  const avgScore = Math.round(leads.reduce((sum, l) => sum + l.score, 0) / totalLeads);
  
  const statsContainer = document.querySelector('#page-leads .filter-bar');
  if (statsContainer && !statsContainer.querySelector('.lead-stats')) {
    const statsSpan = document.createElement('span');
    statsSpan.className = 'lead-stats';
    statsSpan.style.marginLeft = 'auto';
    statsSpan.innerHTML = `<strong>${totalLeads}</strong> total | <strong>${qualifiedLeads}</strong> qualified | avg score: <strong>${avgScore}</strong>`;
    statsContainer.appendChild(statsSpan);
  }
}

// ======================= ENHANCED LEAD CREATION =======================
function openModal() { 
  document.getElementById('modal').classList.add('open');
  window.editingLead = null;
}

function closeModal() { 
  document.getElementById('modal').classList.remove('open');
  // Clear form
  document.getElementById('leadFirstName').value = '';
  document.getElementById('leadLastName').value = '';
  document.getElementById('leadCompany').value = '';
  document.getElementById('leadEmail').value = '';
  document.getElementById('leadPhone').value = '';
  document.getElementById('leadValue').value = '';
}

function addNewLead() {
  const firstName = document.getElementById('leadFirstName').value;
  const lastName = document.getElementById('leadLastName').value;
  const company = document.getElementById('leadCompany').value;
  const email = document.getElementById('leadEmail').value;
  const phone = document.getElementById('leadPhone').value;
  const value = document.getElementById('leadValue').value;
  
  if (!firstName || !company) {
    showNotification('Please fill in required fields (First Name and Company)', 'error');
    return;
  }
  
  const fullName = `${firstName} ${lastName}`.trim();
  
  if (window.editingLead) {
    // Update existing lead
    const index = leads.findIndex(l => l.name === window.editingLead);
    if (index !== -1) {
      leads[index] = {
        ...leads[index],
        name: fullName,
        company: company,
        source: document.getElementById('leadSource').value,
        rep: document.getElementById('leadAssign').value,
        email: email,
        phone: phone,
        value: value
      };
      showNotification(`${fullName} updated successfully!`);
    }
    window.editingLead = null;
  } else {
    // Add new lead
    const newLead = {
      name: fullName,
      company: company,
      source: document.getElementById('leadSource').value,
      score: Math.floor(Math.random() * 40) + 50,
      status: 'new',
      rep: document.getElementById('leadAssign').value,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      email: email,
      phone: phone,
      value: value || '$0'
    };
    leads.unshift(newLead);
    
    // Add activity log
    activities.unshift({
      type: 'note',
      icon: '📝',
      color: '#f59e0b18',
      text: `New lead added: ${fullName} from ${company}`,
      time: 'Just now'
    });
    
    showNotification(`${fullName} added successfully!`);
  }
  
  renderLeads('all');
  renderRecentActivity();
  saveToLocalStorage();
  closeModal();
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
  if (page === 'leads') {
    actionBtn.innerText = '+ Add Lead';
    actionBtn.onclick = openModal;
  } else if (page === 'activities') {
    actionBtn.innerText = '+ Log Activity';
    actionBtn.onclick = () => showNotification('Activity logging feature coming soon!');
  } else {
    actionBtn.innerText = '+ Create';
    actionBtn.onclick = openModal;
  }
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

// Search functionality
const searchInput = document.querySelector('.search-box input');
if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    if (document.getElementById('page-leads').classList.contains('active')) {
      searchLeads(e.target.value);
    }
  });
}

// Export button
const exportBtn = document.getElementById('importBtn');
if (exportBtn) {
  exportBtn.innerHTML = '📊 Export';
  exportBtn.onclick = exportToCSV;
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.key === 'n') {
    e.preventDefault();
    openModal();
  }
  if (e.ctrlKey && e.key === 's') {
    e.preventDefault();
    saveToLocalStorage();
  }
});

document.getElementById('dynamic-action-btn').addEventListener('click', openModal);
document.getElementById('confirmAddLead').addEventListener('click', addNewLead);
document.getElementById('modal').addEventListener('click', (e) => { if (e.target === document.getElementById('modal')) closeModal(); });

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  .deal-card {
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .deal-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    cursor: pointer;
  }
  .btn {
    transition: all 0.2s;
  }
  .btn:hover {
    transform: translateY(-1px);
  }
  .stat-card {
    transition: transform 0.2s;
  }
  .stat-card:hover {
    transform: translateY(-2px);
  }
`;
document.head.appendChild(style);

// ======================= INIT =======================
loadFromLocalStorage();
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
updateStats();

console.log('CRM Enhanced Edition loaded! Use Ctrl+N for new lead, Ctrl+S to save');
