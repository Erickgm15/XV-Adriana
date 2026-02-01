const familias = [
  { nombre: "Delmy Ajuatz", pases: 2 },
  { nombre: "Jimena Aérevalo", pases: 2 },
  { nombre: "Nahomy Vásquez", pases: 2 },
  { nombre: "Julian Ayala", pases: 2},
  { nombre: "Juan Diego Escobar", pases: 2 },
  { nombre: "Kamila Esperanza", pases: 2 },
  { nombre: "Kantyí Martínez", pases: 2 },
  { nombre: "Keneth Benavídes", pases: 2 },
  { nombre: "Marvin Flores", pases: 2 },
  { nombre: "Sofia Martinez", pases: 2 },
  { nombre: "Ximena Mollinedo", pases: 2 },
  { nombre: "Isabela Jiatas", pases: 2 },
  { nombre: "Familia Garía Rivas", pases: 2 },
  { nombre: "Javier García", pases: 2 },
  { nombre: "Jorge Rival", pases: 2 },
  { nombre: "Luis Rivas", pases: 4 },
  { nombre: "Oscar Rivas", pases: 4 },
  { nombre: "Byron Escobar", pases: 3 },
  { nombre: "Luis Zabala", pases: 3 },
  { nombre: "Familia Vásquez", pases: 4 },
  { nombre: "Familia Vásquez Kihn", pases: 3 },
  { nombre: "Familia Mendez Vásquez", pases: 3 },
  { nombre: "Hugo Vásquez", pases: 1},
  { nombre: "Oswaldo Vásquez", pases: 2 },
  { nombre: "Edwin Tejeda", pases: 1},
  { nombre: "Jorge Benavente", pases: 1 },
  { nombre: "Javier Figueroa", pases: 1 },
  { nombre: "Andre Barraza", pases: 1 },
  { nombre: "Familia Toc Lopez", pases: 3 },
  { nombre: "Nidia Morales", pases: 4 },
  { nombre: "Familia Boch Sanchez", pases: 3 },
  { nombre: "Vinicio Irias", pases: 1 },
  { nombre: "Victor Manuel Moran", pases: 1 },
  { nombre: "Emerson Noriega", pases: 2 },





];

// 📲 Número de WhatsApp (Guatemala)
const numeroWhatsApp = "50230398945";

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
    resultado.innerHTML = "❌ Familia no encontrada";
    return;
  }

  const mensaje = encodeURIComponent(
    `Hola 😊\nSomos la ${familia.nombre.toUpperCase()}.\nConfirmamos ${familia.pases} pases para los XV.\n¡Gracias! 💖`
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
