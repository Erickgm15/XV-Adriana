const familias = [
      { nombre: "Delmy Ajuatz", pases: 2 },
      { nombre: "Jimena Arevalo", pases: 2 },
      { nombre: "Julian Ayala", pases: 2 },
      { nombre: "Dylan Surque", pases: 2 },
      { nombre: "Kamila Esperanza", pases: 2 },
      { nombre: "Kantyí Martínez", pases: 2 },
      { nombre: "Keneth Benavídes", pases: 2 },
      { nombre: "Marvin Flores", pases: 2 },
      { nombre: "Sofia Martinez", pases: 2 },
      { nombre: "Ximena Mollinedo", pases: 2 },
      { nombre: "Isabela Jiatas", pases: 2 },
      { nombre: "Sebastian Jiatas", pases: 2 },
      { nombre: "Madely Cosajay", pases: 2 },
      { nombre: "Nadira Hernandez", pases: 2 },
      { nombre: "Adriana Castañeda", pases: 2 },  
       { nombre: "Allison Sicay ", pases: 2 }, 
      { nombre: "Familia García Rivas", pases: 2 },
      { nombre: "Javier García", pases: 2 },
      { nombre: "Jorge Rivas", pases: 2 },
      { nombre: "Luis Rivas", pases: 4 },
      { nombre: "Oscar Rivas", pases: 4 },
      { nombre: "Byron Escobar", pases: 3 },
      { nombre: "Luis Zavala", pases: 3 },
        { nombre: "Andres Alvardo", pases: 4},
      { nombre: "Marian Vásquez", pases: 2},
       { nombre: "Omar Vásquez", pases: 2},
      { nombre: "Familia Vásquez Kihn", pases: 3 },
      { nombre: "Familia Mendez Vásquez", pases: 3 },
      { nombre: "Hugo Vásquez", pases: 2 },
      { nombre: "Oswaldo Vásquez", pases: 6 },
      { nombre: "Edwin Tejeda", pases: 1 },
      { nombre: "Jorge Benavente", pases: 1 },
      { nombre: "Javier Figueroa", pases: 1 },
      { nombre: "Andre Barraza", pases: 1 },
      { nombre: "Familia Toc Lopez", pases: 3 },
      { nombre: "Nidia Morales", pases: 6 },
      { nombre: "Familia Boch Sánchez", pases: 4 },
      { nombre: "Vinicio Irias", pases: 1 },
      { nombre: "Victor Manuel Moran", pases: 2 },
      { nombre: "Emerson Noriega", pases: 2 },
      { nombre: "Familia Álvarez González", pases: 2 },
      { nombre: "Familia Álvarez Vásquez", pases: 4 },
      { nombre: "Anabella Moran", pases: 3 },
      { nombre: "Marisol Tello", pases: 3 },
      { nombre: "Keyla", pases: 4 },
      { nombre: "Vicky Rivas", pases: 2 },
      { nombre: "Cindy Estrada", pases: 5 },
    ];

    // 📲 Número de WhatsApp (Guatemala)
    const numeroWhatsApp = "50230398945";

    // Cambios

    function normalizarTexto(texto) {
      return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
    }

    function buscarFamilia() {
      const inputOriginal = document.getElementById("busqueda").value;
      const input = normalizarTexto(inputOriginal);

      const resultado = document.getElementById("resultado");

      const familia = familias.find(f =>
        normalizarTexto(f.nombre) === input
      );

      if (!familia) {
        resultado.innerHTML = `
          ❌ <strong>Nombre no encontrado</strong><br>
          Este nombre no está en la lista de invitados.
        `;
        return;
      }

      const esFamilia = normalizarTexto(familia.nombre).startsWith("familia");

      const textoConfirmacion = esFamilia
        ? `Somos la ${familia.nombre}`
        : `${familia.nombre}`;

      const mensaje = encodeURIComponent(
        `${textoConfirmacion} confirmamos ${familia.pases} pases `
      );

      const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;

      resultado.innerHTML = `
        ✨ <strong>${familia.nombre.toUpperCase()}</strong><br>
        Pases admitidos: <strong>${familia.pases}</strong><br><br>

        <a href="${linkWhatsApp}" target="_blank" class="btn-whatsapp">
          💬 Confirmar por WhatsApp
        </a>
      `;
    }