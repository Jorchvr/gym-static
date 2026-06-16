// Injects the shared navbar styled exactly like the app's header buttons
(function () {
  const navHTML = `
  <nav class="navbar">
    <a href="dashboard.html" class="nav-brand">
      <div class="logo-box">🐍</div>
      GymMamba 2.0
    </a>
    <ul class="nav-links">
      <li><a href="dashboard.html"  data-page="dashboard">🏠 Dashboard</a></li>
      <li><a href="clientes.html"   data-page="clientes">👥 Clientes</a></li>
      <li><a href="registro.html"   data-page="registro">➕ Registro</a></li>
      <li><a href="backoffice.html" data-page="backoffice">📦 Backoffice</a></li>
      <li><a href="ventas.html"     data-page="ventas">🛒 Ventas Ext.</a></li>
      <li><a href="historial.html"  data-page="historial">📋 Historial</a></li>
      <li><a href="corte.html"      data-page="corte">📊 Corte</a></li>
    </ul>
    <div class="nav-right">
      <div class="nav-user">
        <span style="color:var(--text-aa); font-size:14px;">admin</span>
      </div>
      <a href="index.html" class="btn btn-ghost btn-sm">Salir</a>
    </div>
  </nav>`;

  document.getElementById('nav-placeholder').innerHTML = navHTML;

  const page = document.body.dataset.page;
  if (page) {
    const link = document.querySelector(`[data-page="${page}"]`);
    if (link) link.classList.add('active');
  }
})();
