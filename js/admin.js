/**
 * Stumari Admin Dashboard Controller
 */

document.addEventListener("DOMContentLoaded", () => {
  initAdminDashboard();
});

const MOCK_ADMIN_SIGNUPS = [
  { host: "Nino Kapanadze", email: "nino@tbilisiheritage.ge", date: "Apr 12, 2026", status: "Active", properties: 3 },
  { host: "Mariam Chikovani", email: "mariam.c@seastays.com", date: "Apr 10, 2026", status: "Active", properties: 2 },
  { host: "David Giorgadze", email: "david@kazbegilodges.com", date: "Apr 8, 2026", status: "Active", properties: 4 },
  { host: "Ana Tsertsvadze", email: "ana.t@sololakilofts.ge", date: "Apr 5, 2026", status: "Active", properties: 1 },
  { host: "Giorgi Beridze", email: "giorgi@batumibay.ge", date: "Apr 1, 2026", status: "Active", properties: 2 }
];

function initAdminDashboard() {
  const tableBody = document.getElementById("admin-signups-body");
  if (!tableBody) return;

  tableBody.innerHTML = MOCK_ADMIN_SIGNUPS.map(s => `
    <tr>
      <td>
        <div class="host-cell">
          <div style="width:32px; height:32px; border-radius:50%; background:#127c56; color:#fff; display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:700;">
            ${s.host[0]}
          </div>
          <div>
            <div>${s.host}</div>
            <div style="font-size:11px; color:#64748b; font-family:monospace;">${s.email}</div>
          </div>
        </div>
      </td>
      <td>${s.date}</td>
      <td><span class="badge badge-published">${s.status}</span></td>
      <td><strong>${s.properties}</strong> properties</td>
      <td>
        <button class="btn btn-secondary btn-sm" onclick="Stumari.showToast('Impersonating ${s.host}...')">Impersonate</button>
      </td>
    </tr>
  `).join("");
}
