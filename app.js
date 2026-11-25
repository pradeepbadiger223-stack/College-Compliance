const CATEGORY_CONFIG = {
  Facilities: {
    department: "Campus Facilities & Estates",
    icon: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`
  },
  Academic: {
    department: "Office of Academic Affairs",
    icon: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`
  },
  Hostel: {
    department: "Residential Life & Hostel Office",
    icon: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`
  },
  Safety: {
    department: "Campus Security & Safety Desk",
    icon: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v4M12 16h.01"/></svg>`
  },
  Transport: {
    department: "Transport Services Office",
    icon: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6v6M15 6v6M2 12h19.6M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"/><circle cx="7" cy="18" r="2"/><circle cx="16" cy="18" r="2"/></svg>`
  },
  Other: {
    department: "Student Ombudsman Desk",
    icon: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>`
  }
};

const initialComplaints = [
  {
    id: "GRV-2026-7C19",
    category: "Facilities",
    title: "Intermittent HVAC cooling in Central Library Reading Wing",
    description: "The quiet study hall on the 3rd floor has been noticeably warm since yesterday afternoon, making extended study sessions difficult.",
    location: "Central Library · 3rd Floor",
    department: "Campus Facilities & Estates",
    priority: "High",
    status: "In Progress",
    submittedDate: "Nov 24, 2026",
    resolutionHours: null,
    timeline: [
      { title: "Submitted by student", desc: "Logged via Campus Care Portal", time: "Nov 24 · 09:15 AM", state: "completed" },
      { title: "Assigned to department", desc: "Routed to Campus Facilities & Estates", time: "Nov 24 · 10:02 AM", state: "completed" },
      { title: "Technician inspection underway", desc: "Chiller unit damper replacement scheduled", time: "Nov 25 · 11:30 AM", state: "current" },
      { title: "Resolved & verified", desc: "Awaiting final airflow confirmation", time: "Estimated today", state: "pending" }
    ]
  },
  {
    id: "GRV-2026-3E88",
    category: "Transport",
    title: "Evening campus shuttle 8:30 PM stop missed at North Gate",
    description: "Route B shuttle bypassed the North Gate pickup shelter twice this week despite students waiting at the designated bay.",
    location: "North Gate Shuttle Bay",
    department: "Transport Services Office",
    priority: "Medium",
    status: "Submitted",
    submittedDate: "Nov 23, 2026",
    resolutionHours: null,
    timeline: [
      { title: "Submitted by student", desc: "Logged via Campus Care Portal", time: "Nov 23 · 08:45 PM", state: "completed" },
      { title: "Queued for route coordinator", desc: "Transport Services reviewing GPS logs", time: "Nov 24 · 08:10 AM", state: "current" },
      { title: "Action & schedule update", desc: "Pending dispatcher follow-up", time: "Pending", state: "pending" },
      { title: "Resolved & verified", desc: "Final confirmation to student", time: "Pending", state: "pending" }
    ]
  },
  {
    id: "GRV-2026-5A03",
    category: "Hostel",
    title: "Water pressure drop in Oakridge Block B 3rd-floor washrooms",
    description: "Morning water flow between 7:00 AM and 8:30 AM has been very low on the west wing of Oakridge Hall.",
    location: "Oakridge Hostel · Block B",
    department: "Residential Life & Hostel Office",
    priority: "High",
    status: "Resolved",
    submittedDate: "Nov 19, 2026",
    resolutionHours: 16,
    timeline: [
      { title: "Submitted by student", desc: "Logged via Campus Care Portal", time: "Nov 19 · 07:50 AM", state: "completed" },
      { title: "Assigned to hostel plumbing unit", desc: "Residential Life & Hostel Office", time: "Nov 19 · 09:05 AM", state: "completed" },
      { title: "Booster valve replaced", desc: "Pressure restored and tested on Floor 3", time: "Nov 19 · 04:20 PM", state: "completed" },
      { title: "Resolved & verified", desc: "Closed after student confirmation", time: "Nov 19 · 11:50 PM", state: "completed" }
    ]
  },
  {
    id: "GRV-2026-2D61",
    category: "Academic",
    title: "Lab timetable clash between CS-304 and Elective Seminar",
    description: "Section B Wednesday afternoon lab overlaps with the Data Ethics seminar slot on the updated spring pre-registration sheet.",
    location: "Engineering Block · Room 210",
    department: "Office of Academic Affairs",
    priority: "Medium",
    status: "In Progress",
    submittedDate: "Nov 17, 2026",
    resolutionHours: null,
    timeline: [
      { title: "Submitted by student", desc: "Logged via Campus Care Portal", time: "Nov 17 · 02:18 PM", state: "completed" },
      { title: "Assigned to Academic Scheduling", desc: "Department advisor notified", time: "Nov 17 · 04:00 PM", state: "completed" },
      { title: "Drafting alternate lab slot", desc: "Coordinating with Prof. Menon", time: "Nov 22 · 01:15 PM", state: "current" },
      { title: "Resolved & verified", desc: "Updated timetable publish pending", time: "Pending", state: "pending" }
    ]
  },
  {
    id: "GRV-2026-1B94",
    category: "Safety",
    title: "Pathway bollard light out behind Arts Auditorium",
    description: "Two consecutive walkway lights along the east footpath are dark after dusk, reducing visibility near the steps.",
    location: "Arts Auditorium · East Path",
    department: "Campus Security & Safety Desk",
    priority: "Urgent",
    status: "Resolved",
    submittedDate: "Nov 14, 2026",
    resolutionHours: 11,
    timeline: [
      { title: "Submitted by student", desc: "Logged via Campus Care Portal", time: "Nov 14 · 06:40 PM", state: "completed" },
      { title: "Security patrol dispatched", desc: "Temporary floodlight placed on path", time: "Nov 14 · 07:12 PM", state: "completed" },
      { title: "Electrical team repaired wiring", desc: "LED bollards restored to full brightness", time: "Nov 15 · 05:30 AM", state: "completed" },
      { title: "Resolved & verified", desc: "Night patrol confirmed illumination", time: "Nov 15 · 05:45 AM", state: "completed" }
    ]
  }
];

const state = {
  complaints: [...initialComplaints],
  selectedCategory: "Facilities",
  selectedPriority: "Medium",
  activeFilter: "All",
  searchQuery: "",
  viewMode: "cards",
  uploadedImage: null,
  lastCreatedId: null,
  spotlightId: "GRV-2026-7C19"
};

// Elements
const els = {
  categoryChips: document.getElementById("categoryChips"),
  priorityGroup: document.getElementById("priorityGroup"),
  routingPreview: document.getElementById("routingPreview"),
  complaintForm: document.getElementById("complaintForm"),
  titleInput: document.getElementById("complaintTitle"),
  locationInput: document.getElementById("complaintLocation"),
  descInput: document.getElementById("complaintDescription"),
  descCounter: document.getElementById("descCounter"),
  titleError: document.getElementById("titleError"),
  locationError: document.getElementById("locationError"),
  descError: document.getElementById("descError"),
  uploadZone: document.getElementById("uploadZone"),
  imageInput: document.getElementById("complaintImage"),
  uploadPlaceholder: document.getElementById("uploadPlaceholder"),
  uploadPreview: document.getElementById("uploadPreview"),
  previewImg: document.getElementById("previewImg"),
  previewFileName: document.getElementById("previewFileName"),
  previewFileSize: document.getElementById("previewFileSize"),
  removeFileBtn: document.getElementById("removeFileBtn"),
  confirmationCard: document.getElementById("confirmationCard"),
  generatedRefCode: document.getElementById("generatedRefCode"),
  confirmDeptMsg: document.getElementById("confirmDeptMsg"),
  confirmCategory: document.getElementById("confirmCategory"),
  confirmPriority: document.getElementById("confirmPriority"),
  copyRefBtn: document.getElementById("copyRefBtn"),
  viewCreatedBtn: document.getElementById("viewCreatedBtn"),
  submitAnotherBtn: document.getElementById("submitAnotherBtn"),
  complaintsContainer: document.getElementById("complaintsContainer"),
  emptyState: document.getElementById("emptyState"),
  emptyStateDesc: document.getElementById("emptyStateDesc"),
  resetFiltersBtn: document.getElementById("resetFiltersBtn"),
  searchInput: document.getElementById("searchInput"),
  filterBar: document.querySelector(".filter-bar"),
  viewToggle: document.querySelector(".view-toggle"),
  countAll: document.getElementById("countAll"),
  countSubmitted: document.getElementById("countSubmitted"),
  countInProgress: document.getElementById("countInProgress"),
  countResolved: document.getElementById("countResolved"),
  metricTotal: document.getElementById("metricTotal"),
  metricInProgress: document.getElementById("metricInProgress"),
  metricResolved: document.getElementById("metricResolved"),
  metricAvgTime: document.getElementById("metricAvgTime"),
  spotlightCaseInfo: document.getElementById("spotlightCaseInfo"),
  spotlightTimeline: document.getElementById("spotlightTimeline"),
  inspectSpotlightBtn: document.getElementById("inspectSpotlightBtn"),
  drawerBackdrop: document.getElementById("drawerBackdrop"),
  detailDrawer: document.getElementById("detailDrawer"),
  drawerRef: document.getElementById("drawerRef"),
  drawerTitle: document.getElementById("drawerTitle"),
  drawerBody: document.getElementById("drawerBody"),
  closeDrawerBtn: document.getElementById("closeDrawerBtn"),
  notificationsBtn: document.getElementById("notificationsBtn"),
  notificationsPopover: document.getElementById("notificationsPopover"),
  markReadBtn: document.getElementById("markReadBtn"),
  notifDot: document.getElementById("notifDot"),
  notifList: document.getElementById("notifList"),
  profileBtn: document.getElementById("profileBtn"),
  profilePopover: document.getElementById("profilePopover"),
  heroRaiseBtn: document.getElementById("heroRaiseBtn"),
  fabRaiseBtn: document.getElementById("fabRaiseBtn"),
  toastRegion: document.getElementById("toastRegion")
};

function statusBadgeClass(status) {
  if (status === "Submitted") return "status-submitted";
  if (status === "In Progress") return "status-progress";
  return "status-resolved";
}

function generateReferenceId() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let suffix = "";
  for (let i = 0; i < 4; i++) {
    suffix += chars[Math.floor(Math.random() * chars.length)];
  }
  return `GRV-2026-${suffix}`;
}

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span class="toast-dot" aria-hidden="true"></span><span>${escapeHtml(message)}</span>`;
  els.toastRegion.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(6px)";
    toast.style.transition = "all 180ms ease";
    setTimeout(() => toast.remove(), 200);
  }, 3200);
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function scrollToSubmission() {
  if (!els.confirmationCard.hidden) {
    resetSubmissionView();
  }
  const submitSection = document.getElementById("submit-section");
  submitSection.scrollIntoView({ behavior: "smooth", block: "start" });
  setTimeout(() => els.titleInput.focus({ preventScroll: true }), 420);
}

// Category selection
els.categoryChips.addEventListener("click", (e) => {
  const chip = e.target.closest(".cat-chip");
  if (!chip) return;
  state.selectedCategory = chip.dataset.category;
  els.categoryChips.querySelectorAll(".cat-chip").forEach((btn) => {
    const active = btn === chip;
    btn.classList.toggle("selected", active);
    btn.setAttribute("aria-checked", String(active));
  });
  els.routingPreview.textContent = CATEGORY_CONFIG[state.selectedCategory].department;
});

// Priority selection
els.priorityGroup.addEventListener("click", (e) => {
  const pill = e.target.closest(".priority-pill");
  if (!pill) return;
  state.selectedPriority = pill.dataset.priority;
  els.priorityGroup.querySelectorAll(".priority-pill").forEach((btn) => {
    const active = btn === pill;
    btn.classList.toggle("selected", active);
    btn.setAttribute("aria-checked", String(active));
  });
});

// Character counter & inline error clearing
els.descInput.addEventListener("input", () => {
  els.descCounter.textContent = `${els.descInput.value.length} / 500`;
  if (els.descInput.value.trim()) {
    els.descInput.classList.remove("invalid");
    els.descError.textContent = "";
  }
});

els.titleInput.addEventListener("input", () => {
  if (els.titleInput.value.trim()) {
    els.titleInput.classList.remove("invalid");
    els.titleError.textContent = "";
  }
});

els.locationInput.addEventListener("input", () => {
  if (els.locationInput.value.trim()) {
    els.locationInput.classList.remove("invalid");
    els.locationError.textContent = "";
  }
});

// Image upload handling
function handleFileSelection(file) {
  if (!file || !file.type.startsWith("image/")) {
    showToast("Please select a valid image file (PNG or JPG).");
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    state.uploadedImage = {
      name: file.name,
      size: `${Math.max(1, Math.round(file.size / 1024))} KB`,
      dataUrl: reader.result
    };
    els.previewImg.src = reader.result;
    els.previewFileName.textContent = file.name;
    els.previewFileSize.textContent = state.uploadedImage.size;
    els.uploadPlaceholder.hidden = true;
    els.uploadPreview.hidden = false;
  };
  reader.readAsDataURL(file);
}

function clearUploadedImage() {
  state.uploadedImage = null;
  els.imageInput.value = "";
  els.uploadPlaceholder.hidden = false;
  els.uploadPreview.hidden = true;
}

els.uploadZone.addEventListener("click", (e) => {
  if (e.target.closest("#removeFileBtn")) return;
  els.imageInput.click();
});

els.imageInput.addEventListener("change", (e) => {
  if (e.target.files?.[0]) handleFileSelection(e.target.files[0]);
});

els.uploadZone.addEventListener("dragover", (e) => {
  e.preventDefault();
  els.uploadZone.classList.add("dragover");
});

els.uploadZone.addEventListener("dragleave", () => {
  els.uploadZone.classList.remove("dragover");
});

els.uploadZone.addEventListener("drop", (e) => {
  e.preventDefault();
  els.uploadZone.classList.remove("dragover");
  if (e.dataTransfer.files?.[0]) handleFileSelection(e.dataTransfer.files[0]);
});

els.removeFileBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  clearUploadedImage();
});

// Form submission
els.complaintForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let hasError = false;

  const title = els.titleInput.value.trim();
  const location = els.locationInput.value.trim();
  const description = els.descInput.value.trim();

  if (title.length < 4) {
    els.titleInput.classList.add("invalid");
    els.titleError.textContent = "Please enter a brief title (at least 4 characters).";
    hasError = true;
  }
  if (location.length < 2) {
    els.locationInput.classList.add("invalid");
    els.locationError.textContent = "Please specify where on campus this occurred.";
    hasError = true;
  }
  if (description.length < 10) {
    els.descInput.classList.add("invalid");
    els.descError.textContent = "Please provide a short description (at least 10 characters).";
    hasError = true;
  }

  if (hasError) return;

  const refId = generateReferenceId();
  const department = CATEGORY_CONFIG[state.selectedCategory].department;
  const nowLabel = "Nov 25, 2026";
  const newComplaint = {
    id: refId,
    category: state.selectedCategory,
    title,
    description,
    location,
    department,
    priority: state.selectedPriority,
    status: "Submitted",
    submittedDate: nowLabel,
    resolutionHours: null,
    image: state.uploadedImage?.dataUrl || null,
    isNew: true,
    timeline: [
      { title: "Submitted by student", desc: "Logged via Campus Care Portal", time: "Just now", state: "completed" },
      { title: "Assigned to department", desc: `Routed to ${department}`, time: "Awaiting officer review", state: "current" },
      { title: "Resolution in progress", desc: "Updates will appear here", time: "Pending", state: "pending" },
      { title: "Resolved & verified", desc: "Final confirmation to student", time: "Pending", state: "pending" }
    ]
  };

  state.complaints.unshift(newComplaint);
  state.lastCreatedId = refId;
  state.spotlightId = refId;

  // Populate confirmation card
  els.generatedRefCode.textContent = refId;
  els.confirmDeptMsg.textContent = `Routed to ${department}. You will receive updates as soon as an officer picks up the case.`;
  els.confirmCategory.textContent = state.selectedCategory;
  els.confirmPriority.textContent = state.selectedPriority;

  els.complaintForm.hidden = true;
  els.confirmationCard.hidden = false;

  renderAll();
  showToast(`Complaint ${refId} submitted to ${department}.`);
});

function resetSubmissionView() {
  els.complaintForm.reset();
  els.descCounter.textContent = "0 / 500";
  clearUploadedImage();
  els.confirmationCard.hidden = true;
  els.complaintForm.hidden = false;
}

els.submitAnotherBtn.addEventListener("click", () => {
  resetSubmissionView();
  els.titleInput.focus();
});

els.viewCreatedBtn.addEventListener("click", () => {
  state.activeFilter = "All";
  state.searchQuery = "";
  els.searchInput.value = "";
  syncFilterPills();
  renderComplaints();
  document.getElementById("track-section").scrollIntoView({ behavior: "smooth" });
});

els.copyRefBtn.addEventListener("click", async () => {
  const code = els.generatedRefCode.textContent;
  try {
    await navigator.clipboard.writeText(code);
  } catch {
    // Fallback ignored cleanly for non-HTTPS contexts
  }
  showToast(`Reference ${code} copied to clipboard.`);
});

// Filtering & Searching
function syncFilterPills() {
  els.filterBar.querySelectorAll(".filter-pill").forEach((pill) => {
    const active = pill.dataset.filter === state.activeFilter;
    pill.classList.toggle("active", active);
    pill.setAttribute("aria-selected", String(active));
  });
}

els.filterBar.addEventListener("click", (e) => {
  const pill = e.target.closest(".filter-pill");
  if (!pill) return;
  state.activeFilter = pill.dataset.filter;
  syncFilterPills();
  renderComplaints();
});

els.searchInput.addEventListener("input", () => {
  state.searchQuery = els.searchInput.value.trim().toLowerCase();
  renderComplaints();
});

els.resetFiltersBtn.addEventListener("click", () => {
  state.activeFilter = "All";
  state.searchQuery = "";
  els.searchInput.value = "";
  syncFilterPills();
  renderComplaints();
  showToast("Filters reset.");
});

els.viewToggle.addEventListener("click", (e) => {
  const btn = e.target.closest(".view-btn");
  if (!btn) return;
  state.viewMode = btn.dataset.view;
  els.viewToggle.querySelectorAll(".view-btn").forEach((b) => {
    const active = b === btn;
    b.classList.toggle("active", active);
    b.setAttribute("aria-pressed", String(active));
  });
  renderComplaints();
});

function getFilteredComplaints() {
  return state.complaints.filter((item) => {
    const matchesStatus = state.activeFilter === "All" || item.status === state.activeFilter;
    if (!matchesStatus) return false;
    if (!state.searchQuery) return true;
    const haystack = `${item.id} ${item.title} ${item.location} ${item.department} ${item.category}`.toLowerCase();
    return haystack.includes(state.searchQuery);
  });
}

function renderMiniStepper(status) {
  if (status === "Submitted") {
    return `
      <div class="mini-stepper" aria-label="Progress: 1 of 3 stages">
        <span class="mini-step done"></span>
        <span class="mini-step"></span>
        <span class="mini-step"></span>
      </div>`;
  }
  if (status === "In Progress") {
    return `
      <div class="mini-stepper" aria-label="Progress: 2 of 3 stages">
        <span class="mini-step done"></span>
        <span class="mini-step current"></span>
        <span class="mini-step"></span>
      </div>`;
  }
  return `
    <div class="mini-stepper" aria-label="Progress: 3 of 3 stages">
      <span class="mini-step done-green"></span>
      <span class="mini-step done-green"></span>
      <span class="mini-step done-green"></span>
    </div>`;
}

function renderComplaints() {
  const items = getFilteredComplaints();

  if (items.length === 0) {
    els.complaintsContainer.innerHTML = "";
    els.emptyState.hidden = false;
    els.emptyStateDesc.textContent = state.searchQuery
      ? `No complaints matched "${els.searchInput.value}". Try another keyword or reset your filters.`
      : `You currently have no complaints in the "${state.activeFilter}" stage.`;
    return;
  }

  els.emptyState.hidden = true;

  if (state.viewMode === "table") {
    els.complaintsContainer.innerHTML = `
      <div class="table-wrap">
        <table class="complaints-table">
          <thead>
            <tr>
              <th>Reference</th>
              <th>Complaint</th>
              <th>Location</th>
              <th>Department</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${items
              .map(
                (item) => `
              <tr data-id="${escapeHtml(item.id)}" tabindex="0">
                <td><span class="ref-pill">${escapeHtml(item.id)}</span></td>
                <td>
                  <div class="table-title-cell">
                    <span class="cat-badge-icon" aria-hidden="true">${CATEGORY_CONFIG[item.category].icon}</span>
                    <span>${escapeHtml(item.title)}</span>
                  </div>
                </td>
                <td>${escapeHtml(item.location)}</td>
                <td>${escapeHtml(item.department)}</td>
                <td>${escapeHtml(item.submittedDate)}</td>
                <td><span class="status-badge ${statusBadgeClass(item.status)}">${escapeHtml(item.status)}</span></td>
              </tr>`
              )
              .join("")}
          </tbody>
        </table>
      </div>`;
    return;
  }

  els.complaintsContainer.innerHTML = items
    .map(
      (item) => `
    <article class="complaint-item ${item.isNew ? "newly-added" : ""}" data-id="${escapeHtml(item.id)}" tabindex="0" role="button" aria-label="Inspect complaint ${escapeHtml(item.id)}">
      <div class="complaint-top">
        <div class="complaint-id-group">
          <span class="cat-badge-icon" aria-hidden="true">${CATEGORY_CONFIG[item.category].icon}</span>
          <div>
            <span class="ref-pill">${escapeHtml(item.id)}</span>
            <h3 class="complaint-title">${escapeHtml(item.title)}</h3>
          </div>
        </div>
        <span class="status-badge ${statusBadgeClass(item.status)}">${escapeHtml(item.status)}</span>
      </div>

      <div class="complaint-meta">
        <span class="meta-piece">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          ${escapeHtml(item.submittedDate)}
        </span>
        <span class="meta-piece">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          ${escapeHtml(item.location)}
        </span>
        <span class="meta-piece">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4"/></svg>
          ${escapeHtml(item.department)}
        </span>
      </div>

      <div class="complaint-progress-row">
        ${renderMiniStepper(item.status)}
        <span class="view-timeline-link">
          View timeline
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
        </span>
      </div>
    </article>`
    )
    .join("");
}

function renderMetricsAndSpotlight() {
  const total = state.complaints.length;
  const submitted = state.complaints.filter((c) => c.status === "Submitted").length;
  const inProgress = state.complaints.filter((c) => c.status === "In Progress").length;
  const resolvedList = state.complaints.filter((c) => c.status === "Resolved");
  const resolved = resolvedList.length;

  els.countAll.textContent = total;
  els.countSubmitted.textContent = submitted;
  els.countInProgress.textContent = inProgress;
  els.countResolved.textContent = resolved;

  els.metricTotal.textContent = total;
  els.metricInProgress.textContent = inProgress;
  els.metricResolved.textContent = resolved;

  const avgHours = resolved
    ? (resolvedList.reduce((sum, c) => sum + (c.resolutionHours || 16), 0) / resolved).toFixed(1)
    : "—";
  els.metricAvgTime.textContent = resolved ? `${avgHours} hrs` : "—";

  const spotlight =
    state.complaints.find((c) => c.id === state.spotlightId) || state.complaints[0];
  if (!spotlight) return;

  els.spotlightCaseInfo.innerHTML = `
    <div class="spotlight-case-top">
      <span class="ref-pill">${escapeHtml(spotlight.id)}</span>
      <span class="status-badge ${statusBadgeClass(spotlight.status)}">${escapeHtml(spotlight.status)}</span>
    </div>
    <p class="spotlight-case-title">${escapeHtml(spotlight.title)}</p>
  `;

  els.spotlightTimeline.innerHTML = spotlight.timeline
    .map(
      (step) => `
    <li class="timeline-step ${step.state}">
      <span class="timeline-node" aria-hidden="true"></span>
      <div class="timeline-title">${escapeHtml(step.title)}</div>
      <div class="timeline-desc">${escapeHtml(step.desc)}</div>
      <div class="timeline-time">${escapeHtml(step.time)}</div>
    </li>`
    )
    .join("");
}

function openDetailDrawer(id) {
  const item = state.complaints.find((c) => c.id === id);
  if (!item) return;

  state.spotlightId = item.id;
  renderMetricsAndSpotlight();

  els.drawerRef.textContent = item.id;
  els.drawerTitle.textContent = item.title;
  els.drawerBody.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;">
      <span class="status-badge ${statusBadgeClass(item.status)}">${escapeHtml(item.status)}</span>
      <span style="font-size:0.8rem;color:var(--text-muted);">Priority: <strong style="color:var(--navy);">${escapeHtml(item.priority)}</strong></span>
    </div>

    <div class="drawer-info-grid">
      <div class="drawer-info-item">
        <span>Category</span>
        <strong>${escapeHtml(item.category)}</strong>
      </div>
      <div class="drawer-info-item">
        <span>Submitted</span>
        <strong>${escapeHtml(item.submittedDate)}</strong>
      </div>
      <div class="drawer-info-item">
        <span>Location</span>
        <strong>${escapeHtml(item.location)}</strong>
      </div>
      <div class="drawer-info-item">
        <span>Assigned Office</span>
        <strong>${escapeHtml(item.department)}</strong>
      </div>
    </div>

    <div>
      <h3 class="drawer-section-title">Description</h3>
      <p class="drawer-desc">${escapeHtml(item.description)}</p>
    </div>

    ${
      item.image
        ? `<div>
            <h3 class="drawer-section-title">Attached Photo</h3>
            <img src="${item.image}" alt="Attachment for ${escapeHtml(item.id)}" class="drawer-attachment" />
          </div>`
        : ""
    }

    <div>
      <h3 class="drawer-section-title">Resolution Timeline</h3>
      <ol class="timeline">
        ${item.timeline
          .map(
            (step) => `
          <li class="timeline-step ${step.state}">
            <span class="timeline-node" aria-hidden="true"></span>
            <div class="timeline-title">${escapeHtml(step.title)}</div>
            <div class="timeline-desc">${escapeHtml(step.desc)}</div>
            <div class="timeline-time">${escapeHtml(step.time)}</div>
          </li>`
          )
          .join("")}
      </ol>
    </div>
  `;

  els.drawerBackdrop.hidden = false;
  els.detailDrawer.hidden = false;
  document.body.style.overflow = "hidden";
  els.closeDrawerBtn.focus();
}

function closeDetailDrawer() {
  els.drawerBackdrop.hidden = true;
  els.detailDrawer.hidden = true;
  document.body.style.overflow = "";
}

els.complaintsContainer.addEventListener("click", (e) => {
  const row = e.target.closest("[data-id]");
  if (row) openDetailDrawer(row.dataset.id);
});

els.complaintsContainer.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    const row = e.target.closest("[data-id]");
    if (row) {
      e.preventDefault();
      openDetailDrawer(row.dataset.id);
    }
  }
});

els.inspectSpotlightBtn.addEventListener("click", () => {
  openDetailDrawer(state.spotlightId);
});

els.closeDrawerBtn.addEventListener("click", closeDetailDrawer);
els.drawerBackdrop.addEventListener("click", closeDetailDrawer);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeDetailDrawer();
    closePopovers();
  }
});

// Topbar Popovers
function closePopovers() {
  els.notificationsPopover.hidden = true;
  els.profilePopover.hidden = true;
  els.notificationsBtn.setAttribute("aria-expanded", "false");
  els.profileBtn.setAttribute("aria-expanded", "false");
}

els.notificationsBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  const next = els.notificationsPopover.hidden;
  closePopovers();
  els.notificationsPopover.hidden = !next;
  els.notificationsBtn.setAttribute("aria-expanded", String(next));
});

els.profileBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  const next = els.profilePopover.hidden;
  closePopovers();
  els.profilePopover.hidden = !next;
  els.profileBtn.setAttribute("aria-expanded", String(next));
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".popover-anchor")) {
    closePopovers();
  }
});

els.markReadBtn.addEventListener("click", () => {
  els.notifList.querySelectorAll(".notif-item.unread").forEach((el) => el.classList.remove("unread"));
  els.notifDot.classList.add("hidden");
  showToast("All notifications marked as read.");
});

els.notifList.addEventListener("click", (e) => {
  const item = e.target.closest(".notif-item");
  if (!item) return;
  item.classList.remove("unread");
  if (!els.notifList.querySelector(".notif-item.unread")) {
    els.notifDot.classList.add("hidden");
  }
  closePopovers();
  openDetailDrawer(item.dataset.ref);
});

// Nav active link & Raise buttons
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".nav-link").forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});

els.heroRaiseBtn.addEventListener("click", scrollToSubmission);
els.fabRaiseBtn.addEventListener("click", scrollToSubmission);

function renderAll() {
  renderMetricsAndSpotlight();
  renderComplaints();
}

renderAll();

