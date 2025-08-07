document.addEventListener("DOMContentLoaded", () => {
  console.log("📄 Horario cargado y listo para usar.")

  // Schedule data for mobile view - Optimized
  const scheduleData = {
    lunes: [
      {
        clave: "Clave 3-4",
        time: "9:35 - 10:45",
        class: {
          name: "Taller De BD",
          type: "Cátedra",
          code: "INF3541-1",
          room: "SIB 3-2",
          icon: "fas fa-database",
          className: "db",
        },
      },
      {
        clave: "Clave 5-6",
        time: "11:00 - 12:10",
        class: {
          name: "Ing. de Software",
          type: "Cátedra",
          code: "INF2237-1",
          room: "IBC 2-1",
          icon: "fas fa-cogs",
          className: "software",
        },
      },
      // Eliminado: Inglés 3 (Ay. Taller)
      {
        clave: "Clave 11-12",
        time: "15:50 - 17:00",
        conflict: [
          {
            name: "Optimización",
            type: "Cátedra",
            code: "INF3136-2",
            room: "SIB 3-1",
            icon: "fas fa-chart-line",
            className: "optimizacion",
          },
          // Eliminado: Inglés 3 (Cátedra)
        ],
      },
    ],
    martes: [
      {
        clave: "Clave 3-4",
        time: "9:35 - 10:45",
        class: {
          name: "Álgebra Lineal",
          type: "Cátedra",
          code: "MAT1004-17",
          room: "FIN 3-5",
          icon: "fas fa-calculator",
          className: "algebra",
        },
      },
      {
        clave: "Clave 5-6",
        time: "11:00 - 12:10",
        class: {
          name: "Álgebra Lineal",
          type: "Taller",
          code: "MAT1004-17",
          room: "FIN 3-5",
          icon: "fas fa-calculator",
          className: "algebra",
        },
      },
      {
        clave: "Clave 11-12",
        time: "15:50 - 17:00",
        conflict: [
          {
            name: "Ing. Web y Móvil",
            type: "Taller",
            code: "INF3245-1",
            room: "FIN 3-3",
            icon: "fas fa-code",
            className: "web",
          },
          {
            name: "Ing. Web y Móvil",
            type: "Ay. Cátedra",
            code: "INF3245-1",
            room: "FIN 3-3",
            icon: "fas fa-code",
            className: "web",
          },
        ],
      },
    ],
    miercoles: [
      {
        clave: "Clave 3-4",
        time: "9:35 - 10:45",
        class: {
          name: "Taller De BD",
          type: "Taller",
          code: "INF3541-1",
          room: "SIB 3-2",
          icon: "fas fa-database",
          className: "db",
        },
      },
      {
        clave: "Clave 5-6",
        time: "11:00 - 12:10",
        conflict: [
          {
            name: "Ing. de Software",
            type: "Cátedra",
            code: "INF2237-1",
            room: "IBC 2-1",
            icon: "fas fa-cogs",
            className: "software",
          },
          {
            name: "Ing. Web y Móvil",
            type: "Cátedra",
            code: "INF3245-1",
            room: "IBC 2-5",
            icon: "fas fa-code",
            className: "web",
          },
        ],
      },
      {
        clave: "Clave 11-12",
        time: "15:50 - 17:00",
        conflict: [
          {
            name: "Ing. de Software",
            type: "Taller",
            code: "INF2237-1",
            room: "IBC 2-1",
            icon: "fas fa-cogs",
            className: "software",
          },
          {
            name: "Ing. de Software",
            type: "Ay. Taller",
            code: "INF2237-1",
            room: "Por confirmar",
            icon: "fas fa-cogs",
            className: "software",
          },
        ],
      },
      {
        // Nueva clave 13-14 para Legislación
        clave: "Clave 13-14",
        time: "17:10 - 18:20",
        class: {
          name: "Legislación",
          type: "Cátedra",
          code: "INF4459-1",
          room: "Por confirmar",
          icon: "fas fa-gavel",
          className: "legislacion",
        },
      },
    ],
    jueves: [
      {
        clave: "Clave 3-4",
        time: "9:35 - 10:45",
        class: {
          name: "Álgebra Lineal",
          type: "Cátedra",
          code: "MAT1004-17",
          room: "FIN 3-5",
          icon: "fas fa-calculator",
          className: "algebra",
        },
      },
      {
        // Legislación movida aquí
        clave: "Clave 11-12",
        time: "15:50 - 17:00",
        class: {
          name: "Legislación",
          type: "Cátedra",
          code: "INF4459-1",
          room: "Por confirmar",
          icon: "fas fa-gavel",
          className: "legislacion",
        },
      },
    ],
    viernes: [
      {
        clave: "Clave 3-4",
        time: "9:35 - 10:45",
        class: {
          name: "Ing. Web y Móvil",
          type: "Cátedra",
          code: "INF3245-1",
          room: "IBC 2-1",
          icon: "fas fa-code",
          className: "web",
        },
      },
      {
        clave: "Clave 5-6",
        time: "11:00 - 12:10",
        class: {
          name: "Optimización",
          type: "Ay. Cátedra",
          code: "INF3136-2",
          room: "IBC 2-1",
          icon: "fas fa-chart-line",
          className: "optimizacion",
        },
      },
      {
        clave: "Clave 7-8",
        time: "12:20 - 13:30",
        class: {
          name: "Optimización",
          type: "Cátedra",
          code: "INF3136-2",
          room: "SIB 3-1",
          icon: "fas fa-chart-line",
          className: "optimizacion",
        },
      },
      // Eliminado: Inglés 3 (Taller)
    ],
  }

  // Cache DOM elements
  const tableViewBtn = document.getElementById("table-view")
  const mobileViewBtn = document.getElementById("mobile-view")
  const mobileContent = document.getElementById("mobile-content")
  const body = document.body

  let currentView = "table"
  let currentDay = "lunes"

  // Optimized view toggle
  function switchView(view) {
    if (currentView === view) return // Avoid unnecessary work

    currentView = view

    if (view === "mobile") {
      body.classList.add("mobile-view-active")
      mobileViewBtn.classList.add("active")
      tableViewBtn.classList.remove("active")
      updateMobileContent()
    } else {
      body.classList.remove("mobile-view-active")
      tableViewBtn.classList.add("active")
      mobileViewBtn.classList.remove("active")
    }
  }

  // Optimized day selection
  function selectDay(day) {
    if (currentDay === day) return // Avoid unnecessary work

    currentDay = day

    // Update day buttons efficiently
    document.querySelectorAll(".day-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.day === day)
    })

    updateMobileContent()
  }

  // Optimized mobile content update
  function updateMobileContent() {
    const dayData = scheduleData[currentDay] || []

    if (dayData.length === 0) {
      mobileContent.innerHTML = `
        <div class="no-class">
          <i class="fas fa-calendar-times"></i>
          <p>No hay clases programadas para este día</p>
        </div>`
      return
    }

    // Build HTML more efficiently
    const html = dayData
      .map((slot) => {
        if (slot.conflict) {
          const conflictHtml = slot.conflict
            .map(
              (cls) => `
          <div class="mobile-class-cell ${cls.className}" style="margin-bottom: 0.5rem;">
            <div class="class-name">
              <i class="${cls.icon}"></i>
              ${cls.name}
            </div>
            <div class="class-type">${cls.type}</div>
            <div class="class-code">${cls.code} - ${cls.room}</div>
          </div>`,
            )
            .join("")

          return `
          <div class="mobile-time-slot">
            <div class="mobile-time-header">
              <div class="mobile-time-info">
                <div class="clave">${slot.clave}</div>
                <div class="time">${slot.time}</div>
              </div>
              <i class="fas fa-clock" style="color: var(--text-secondary);"></i>
            </div>
            <div style="margin-bottom: 0.5rem;">
              <div style="color: #f59e0b; font-size: 0.8rem; font-weight: 500; display: flex; align-items: center; gap: 0.5rem;">
                <span style="width: 8px; height: 8px; background: #f59e0b; border-radius: 50%;"></span>
                Conflicto de horario
              </div>
            </div>
            ${conflictHtml}
          </div>`
        } else {
          return `
          <div class="mobile-time-slot">
            <div class="mobile-time-header">
              <div class="mobile-time-info">
                <div class="clave">${slot.clave}</div>
                <div class="time">${slot.time}</div>
              </div>
              <i class="fas fa-clock" style="color: var(--text-secondary);"></i>
            </div>
            <div class="mobile-class-cell ${slot.class.className}">
              <div class="class-name">
                <i class="${slot.class.icon}"></i>
                ${slot.class.name}
              </div>
              <div class="class-type">${slot.class.type}</div>
              <div class="class-code">${slot.class.code} - ${slot.class.room}</div>
            </div>
          </div>`
        }
      })
      .join("")

    mobileContent.innerHTML = html
  }

  // Event listeners with passive option for better performance
  tableViewBtn.addEventListener("click", () => switchView("table"), { passive: true })
  mobileViewBtn.addEventListener("click", () => switchView("mobile"), { passive: true })

  // Delegate event handling for day buttons
  document.addEventListener(
    "click",
    (e) => {
      if (e.target.classList.contains("day-btn") || e.target.closest(".day-btn")) {
        const btn = e.target.classList.contains("day-btn") ? e.target : e.target.closest(".day-btn")
        selectDay(btn.dataset.day)
      }
    },
    { passive: true },
  )

  // Throttled resize handler
  let resizeTimeout
  function handleResize() {
    clearTimeout(resizeTimeout)
    resizeTimeout = setTimeout(() => {
      if (window.innerWidth <= 768 && currentView === "table") {
        switchView("mobile")
      }
    }, 100)
  }

  // Initial setup
  if (window.innerWidth <= 768) {
    switchView("mobile")
  }

  window.addEventListener("resize", handleResize, { passive: true })
  updateMobileContent()
})
