//Pagina / creemos /acordeon//
  
 document.addEventListener("DOMContentLoaded", () => {
      function initAccordion(columnId) {
        const column = document.getElementById(columnId);
        const items = column.querySelectorAll(".accordion-item.clickable");

        // Abrir el primer item por defecto
        const firstItem = items[0];
        if (firstItem) {
          const firstContent = firstItem.querySelector(".accordion-content");
          const firstIcon = firstItem.querySelector(".accordion-icon");
          firstContent.classList.add("show");
          firstIcon.classList.add("rotate");
        }

        // Configurar comportamiento de apertura/cierre
        items.forEach(item => {
          const header = item.querySelector(".accordion-header");
          const content = item.querySelector(".accordion-content");
          const icon = item.querySelector(".accordion-icon");

          header.addEventListener("click", () => {
            const isOpen = content.classList.contains("show");

            // Cerrar todos los elementos de la columna
            column.querySelectorAll(".accordion-item").forEach(other => {
              const otherContent = other.querySelector(".accordion-content");
              const otherIcon = other.querySelector(".accordion-icon");
              otherContent.classList.remove("show");
              otherIcon.classList.remove("rotate");
            });

            // Si el clickeado no estaba abierto, abrirlo
            if (!isOpen) {
              content.classList.add("show");
              icon.classList.add("rotate");
            }
          });
        });
      }

      initAccordion("column1");
      initAccordion("column2");
    });