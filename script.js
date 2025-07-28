document.addEventListener("DOMContentLoaded", () => {
  console.log("📄 Horario cargado y listo para usar.")

  // Schedule data for mobile view
  const scheduleData = {
    lunes: [
      {
        clave: "Clave 3-4",
        time: "9:35 - 10:45",
        class: {
          name: "Taller De BD",
          type: "Cátedra",
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
          icon: "fas fa-cogs",
          className: "software",
        },
      },
      {
        clave: "Clave 7-8",
        time: "12:20 - 13:30",
        class: {
          name: "Optimización",
          type: "Cátedra",
          icon: "fas fa-chart-line",
          className: "optimizacion",
        },
      },
      {
        clave: "Clave 9-10",
        time: "14:30 - 15:40",
        class: {
          name: "Inglés 3",
          type: "Ayudantía Taller",
          icon: "fas fa-language",
          className: "ingles",
        },
      },
      {
        clave: "Clave 11-12",
        time: "15:50 - 17:00",
        class: {
          name: "Inglés 3",
          type: "Cátedra",
          icon: "fas fa-language",
          className: "ingles",
        },
      },
    ],
    martes: [
      {
        clave: "Clave 3-4",
        time: "9:35 - 10:45",
        class: {
          name: "Álgebra Lineal",
          type: "Cátedra",
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
          icon: "fas fa-calculator",
          className: "algebra",
        },
      },
      {
        clave: "Clave 7-8",
        time: "12:20 - 13:30",
        class: {
          name: "Legislación",
          type: "Cátedra",
          icon: "fas fa-gavel",
          className: "legislacion",
        },
      },
      {
        clave: "Clave 11-12",
        time: "15:50 - 17:00",
        class: {
          name: "Ing. Web y Móvil",
          type: "Taller/Ayudantía",
          icon: "fas fa-code",
          className: "web",
        },
      },
    ],
    miercoles: [
      {
        clave: "Clave 3-4",
        time: "9:35 - 10:45",
        class: {
          name: "Taller De BD",
          type: "Taller",
          icon: "fas fa-database",
          className: "db",
        },
      },
      {
        clave: "Clave 5-6",
        time: "11:00 - 12:10",
        conflict: [
          {
            name: "Ing. Soft",
            type: "Cátedra",
            icon: "fas fa-cogs",
            className: "software",
          },
          {
            name: "Ing. Web",
            type: "Cátedra",
            icon: "fas fa-code",
            className: "web",
          },
        ],
      },
      {
        clave: "Clave 11-12",
        time: "15:50 - 17:00",
        class: {
          name: "Ing. de Software",
          type: "Taller/Ayudantía",
          icon: "fas fa-cogs",
          className: "software",
        },
      },
    ],
    jueves: [
      {
        clave: "Clave 1-2",
        time: "8:15 - 9:25",
        class: {
          name: "Legislación",
          type: "Cátedra",
          icon: "fas fa-gavel",
          className: "legislacion",
        },
      },
      {
        clave: "Clave 3-4",
        time: "9:35 - 10:45",
        class: {
          name: "Álgebra Lineal",
          type: "Cátedra",
          icon: "fas fa-calculator",
          className: "algebra",
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
          icon: "fas fa-code",
          className: "web",
        },
      },
      {
        clave: "Clave 5-6",
        time: "11:00 - 12:10",
        class: {
          name: "Optimización",
          type: "Ayudantía",
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
          icon: "fas fa-chart-line",
          className: "optimizacion",
        },
      },
      {
        clave: "Clave 11-12",
        time: "15:50 - 17:00",
        class: {
          name: "Inglés 3",
          type: "Cátedra",
          icon: "fas fa-language",
          className: "ingles",
        },
      },
    ],
  }

  // Elements
  const tableViewBtn = document.getElementById("table-view")
  const mobileViewBtn = document.getElementById("mobile-view")
  const daySelector = document.getElementById("day-selector")
  const mobileContent = document.getElementById("mobile-content")
  const body = document.body

  let currentView = "table"
  let currentDay = "lunes"

  // View toggle functionality
  function switchView(view) {
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

  // Day selection functionality
  function selectDay(day) {
    currentDay = day

    // Update day buttons
    document.querySelectorAll(".day-btn").forEach((btn) => {
      btn.classList.remove("active")
    })
    document.querySelector(`[data-day="${day}"]`).classList.add("active")

    updateMobileContent()
  }

  // Update mobile content
  function updateMobileContent() {
    const dayData = scheduleData[currentDay] || []

    if (dayData.length === 0) {
      mobileContent.innerHTML = `
                <div class="no-class">
                    <i class="fas fa-calendar-times"></i>
                    <p>No hay clases programadas para este día</p>
                </div>
            `
      return
    }

    mobileContent.innerHTML = dayData
      .map((slot) => {
        if (slot.conflict) {
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
                        ${slot.conflict
                          .map(
                            (cls) => `
                            <div class="mobile-class-cell ${cls.className}" style="margin-bottom: 0.5rem;">
                                <div class="class-name">
                                    <i class="${cls.icon}"></i>
                                    ${cls.name}
                                </div>
                                <div class="class-type">${cls.type}</div>
                            </div>
                        `,
                          )
                          .join("")}
                    </div>
                `
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
                        </div>
                    </div>
                `
        }
      })
      .join("")
  }

  // Event listeners
  tableViewBtn.addEventListener("click", () => switchView("table"))
  mobileViewBtn.addEventListener("click", () => switchView("mobile"))

  document.querySelectorAll(".day-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      selectDay(e.target.dataset.day)
    })
  })

  // Auto-detect mobile and switch view
  function checkMobileView() {
    if (window.innerWidth <= 768 && currentView === "table") {
      switchView("mobile")
    }
  }

  // Initial setup
  checkMobileView()
  window.addEventListener("resize", checkMobileView)

  // Initialize mobile content
  updateMobileContent()
})
