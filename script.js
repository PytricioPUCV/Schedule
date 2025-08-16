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
      {
        clave: "Clave 11-12",
        time: "15:50 - 17:00",
        class: {
          name: "Optimización",
          type: "Cátedra",
          code: "INF3136-2",
          room: "SIB 3-1",
          icon: "fas fa-chart-line",
          className: "optimizacion",
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
        clave: "Clave 7-8",
        time: "12:20 - 13:30",
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
      {
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
    ],
  }

  // Cache DOM elements
  const tableViewBtn = document.getElementById("table-view")
  const mobileViewBtn = document.getElementById("mobile-view")
  const calendarViewBtn = document.getElementById("calendar-view")
  const mobileContent = document.getElementById("mobile-content")
  const calendarGrid = document.getElementById("calendar-grid")
  const calendarMonthYear = document.getElementById("calendar-month-year")
  const prevMonthBtn = document.getElementById("prev-month-btn")
  const nextMonthBtn = document.getElementById("next-month-btn")
  const body = document.body
  const eventsListContent = document.getElementById("events-list-content")

  let currentView = "table"
  let currentDay = "lunes"

  // Calendar state
  let displayedDate = new Date(2025, 7, 1) // August 2025 (month is 0-indexed)
  const events = {
  // --- Agosto ---
  "2025-8-18": {
    description: "Quiz problema de las n-reinas",
    subject: "Optimización",
  },
  "2025-8-24": {
    description: "Control 2",
    subject: "Ingeniería Web y Móvil",
  },
  "2025-8-25": {
    description: "Quiz problema packing squares",
    subject: "Optimización",
  },
  "2025-8-26": {
    description: "Control 1",
    subject: "Álgebra",
  },

  // --- Septiembre ---
  "2025-9-1": {
    description: "Control 1",
    subject: "Ingenieria de software",
  },
  "2025-9-4": {
    description: "Prueba 1",
    subject: "Álgebra",
  },
  "2025-9-5": {
    description: "Tarea 1",
    subject: "Optimización",
  },
  "2025-9-7": {
    description: "Control 3",
    subject: "Ingeniería Web y Móvil",
  },
  "2025-9-8": {
    description: "Certamen 1",
    subject: "Ingenieria de software",
  },
  "2025-9-10": {
    description: "Certamen 1 (RA1 y RA2)",
    subject: "Legislación y Ética en TI",
  },
  "2025-9-12": {
    description: "Certamen 1",
    subject: "Ingeniería Web y Móvil",
  },
  "2025-9-22": {
    description: "Certamen 1",
    subject: "Optimización",
  },
  "2025-9-28": {
    description: "Control 4 y Entrega Parcial 1",
    subject: "Ingeniería Web y Móvil",
  },
  "2025-9-30": {
    description: "Control 2",
    subject: "Álgebra",
  },
  
  // --- Octubre ---
  "2025-10-13": {
    description: "Control 2",
    subject: "Ingenieria de software",
  },
  "2025-10-15": {
    description: "Entrega 1 - Avance I",
    subject: "Legislación y Ética en TI",
  },
  "2025-10-16": {
    description: "Prueba 2 (Álgebra) y Entrega 1 (Legislación)",
    subject: "Múltiples Asignaturas",
  },
  "2025-10-20": {
    description: "Certamen 2",
    subject: "Ingenieria de software",
  },
  "2025-10-24": {
    description: "Certamen 2",
    subject: "Ingeniería Web y Móvil",
  },
  "2025-10-26": {
    description: "Entrega Parcial 2",
    subject: "Ingeniería Web y Móvil",
  },

  // --- Noviembre ---
  "2025-11-6": {
    description: "Recuperativa",
    subject: "Álgebra",
  },
    "2025-11-9": {
    description: "Control 5",
    subject: "Ingeniería Web y Móvil",
  },
  "2025-11-12": {
    description: "Certamen Recuperativo",
    subject: "Ingenieria de software",
  },
  "2025-11-14": {
    description: "Presentación Proyecto Final",
    subject: "Ingeniería Web y Móvil",
  },
  "2025-11-17": {
    description: "Certamen 2 (Optimización) y Proyecto Final (Software)",
    subject: "Múltiples Asignaturas",
  },
  "2025-11-19": {
    description: "Entrega 2 - Debate",
    subject: "Legislación y Ética en TI",
  },
  "2025-11-20": {
    description: "Entrega 2 - Debate",
    subject: "Legislación y Ética en TI",
  },
  "2025-11-21": {
    description: "Tarea 2",
    subject: "Optimización",
  },
  "2025-11-25": {
    description: "Prueba 3",
    subject: "Álgebra",
  },
  "2025-11-26": { 
    description: "Debate (Legislación) y Recup. (Ing. Web)",
    subject: "Múltiples Asignaturas",
  },
  "2025-11-27": {
    description: "Ev. Pendiente (Álgebra) y Debate (Legislación)",
    subject: "Múltiples Asignaturas",
  },

  // --- Diciembre ---
  "2025-12-3": {
    description: "Casos Excepcionales",
    subject: "Álgebra",
  },
  "2025-12-9": {
    description: "Examen",
    subject: "Álgebra",
  },
  "2025-12-10": {
    description: "Examen",
    subject: "Ingeniería Web y Móvil",
  },
}; // Format: "2025-8-22": true

  const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ]

  const dayNames = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"]

  // Optimized view toggle
  function switchView(view) {
    if (currentView === view) return // Avoid unnecessary work

    currentView = view

    // Remove all view classes
    body.classList.remove("mobile-view-active", "calendar-view-active", "desktop-calendar-layout")

    // Remove active class from all buttons
    tableViewBtn.classList.remove("active")
    mobileViewBtn.classList.remove("active")
    calendarViewBtn.classList.remove("active")

    if (view === "mobile") {
      body.classList.add("mobile-view-active")
      mobileViewBtn.classList.add("active")
      updateMobileContent()
    } else if (view === "calendar") {
      if (window.innerWidth > 768) {
        body.classList.add("desktop-calendar-layout")
      } else {
        body.classList.add("calendar-view-active")
      }
      calendarViewBtn.classList.add("active")
      renderCalendar(displayedDate.getFullYear(), displayedDate.getMonth())
      renderEventsList()
    } else {
      tableViewBtn.classList.add("active")
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

  // Calendar functions
  function renderCalendar(year, month) {
    // Update header
    calendarMonthYear.textContent = `${monthNames[month]} ${year}`

    // Update navigation buttons
    const minDate = new Date(2025, 7, 1) // August 2025
    const maxDate = new Date(2025, 11, 31) // December 2025
    const currentDate = new Date(year, month, 1)

    prevMonthBtn.disabled = currentDate <= minDate
    nextMonthBtn.disabled = currentDate >= maxDate

    // Clear calendar grid
    calendarGrid.innerHTML = ""

    // Add day headers
    dayNames.forEach((dayName) => {
      const dayHeader = document.createElement("div")
      dayHeader.className = "calendar-day-header"
      dayHeader.style.cssText = `
        background: var(--primary-color);
        color: var(--text-primary);
        padding: 0.5rem;
        text-align: center;
        font-weight: 600;
        font-size: 0.8rem;
      `
      dayHeader.textContent = dayName
      calendarGrid.appendChild(dayHeader)
    })

    // Get first day of month and number of days
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    // Get today's date
    const today = new Date()
    const isCurrentMonth = today.getFullYear() === year && today.getMonth() === month
    const todayDate = today.getDate()

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      const emptyDay = document.createElement("div")
      emptyDay.className = "calendar-day other-month"
      const prevMonthLastDay = new Date(year, month, 0).getDate()
      const dayNumber = prevMonthLastDay - startingDayOfWeek + i + 1
      emptyDay.textContent = dayNumber
      calendarGrid.appendChild(emptyDay)
    }

    // Add days of the current month
    for (let day = 1; day <= daysInMonth; day++) {
      const dayElement = document.createElement("div")
      dayElement.className = "calendar-day"
      dayElement.textContent = day

      // Check if this is today
      if (isCurrentMonth && day === todayDate) {
        dayElement.classList.add("today")
      }

      // Check if this day has an event
      const eventKey = `${year}-${month + 1}-${day}`
      if (events[eventKey]) {
        const eventMarker = document.createElement("div")
        eventMarker.className = "event-marker"
        dayElement.appendChild(eventMarker)
      }

      calendarGrid.appendChild(dayElement)
    }

    // Add empty cells for days after the last day of the month
    const totalCells = calendarGrid.children.length - 7 // Subtract day headers
    const remainingCells = 42 - totalCells // 6 rows * 7 days = 42 total cells
    for (let i = 1; i <= remainingCells; i++) {
      const emptyDay = document.createElement("div")
      emptyDay.className = "calendar-day other-month"
      emptyDay.textContent = i
      calendarGrid.appendChild(emptyDay)
    }
  }

  function navigateMonth(direction) {
    const newMonth = displayedDate.getMonth() + direction
    const newYear = displayedDate.getFullYear()

    // Check bounds
    const newDate = new Date(newYear, newMonth, 1)
    const minDate = new Date(2025, 7, 1) // August 2025
    const maxDate = new Date(2025, 11, 1) // December 2025

    if (newDate >= minDate && newDate <= maxDate) {
      displayedDate = newDate
      renderCalendar(displayedDate.getFullYear(), displayedDate.getMonth())
      renderEventsList()
    }
  }

  function toggleEvent(day) {
    const year = displayedDate.getFullYear()
    const month = displayedDate.getMonth() + 1
    const eventKey = `${year}-${month}-${day}`

    if (events[eventKey]) {
      delete events[eventKey]
    } else {
      // For now, create a generic event. Later you can enhance this to ask for details
      events[eventKey] = {
        description: "Evento personalizado",
        subject: "Sin especificar",
      }
    }

    // Re-render calendar and events list
    renderCalendar(displayedDate.getFullYear(), displayedDate.getMonth())
    renderEventsList()
  }

  function renderEventsList() {
    const sortedEvents = Object.entries(events)
      .map(([dateKey, eventData]) => {
        const [year, month, day] = dateKey.split("-").map(Number)
        const date = new Date(year, month - 1, day)
        return {
          date,
          dateKey,
          ...eventData,
        }
      })
      .sort((a, b) => a.date - b.date)

    if (sortedEvents.length === 0) {
      eventsListContent.innerHTML = `
        <div class="no-events">
          <i class="fas fa-calendar-times"></i>
          <p>No hay eventos programados</p>
        </div>`
      return
    }

    const html = sortedEvents
      .map((event) => {
        const dateStr = event.date.toLocaleDateString("es-ES", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })

        return `
        <div class="event-item">
          <div class="event-info">
            <div class="event-date">${dateStr}</div>
            <div class="event-description">${event.description}</div>
            <div class="event-subject">${event.subject}</div>
          </div>
          <div class="event-marker"></div>
        </div>`
      })
      .join("")

    eventsListContent.innerHTML = html
  }

  function addEvent(dateKey, description, subject) {
    events[dateKey] = {
      description: description,
      subject: subject,
    }

    // Re-render if currently in calendar view
    if (currentView === "calendar") {
      renderCalendar(displayedDate.getFullYear(), displayedDate.getMonth())
      renderEventsList()
    }
  }

  window.addEvent = addEvent

  // Event listeners with passive option for better performance
  tableViewBtn.addEventListener("click", () => switchView("table"), { passive: true })
  mobileViewBtn.addEventListener("click", () => switchView("mobile"), { passive: true })
  calendarViewBtn.addEventListener("click", () => switchView("calendar"), { passive: true })

  // Calendar navigation
  prevMonthBtn.addEventListener("click", () => navigateMonth(-1), { passive: true })
  nextMonthBtn.addEventListener("click", () => navigateMonth(1), { passive: true })

  // Calendar day click handler
  calendarGrid.addEventListener(
    "click",
    (e) => {
      if (e.target.classList.contains("calendar-day") && !e.target.classList.contains("other-month")) {
        const day = Number.parseInt(e.target.textContent)
        toggleEvent(day)
      }
    },
    { passive: true },
  )

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
  renderEventsList()
})