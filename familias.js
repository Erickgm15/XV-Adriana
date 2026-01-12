const familias = [
  { nombre: "familia garcia", pases: 5 },
  { nombre: "familia lopez", pases: 4 },
  { nombre: "familia martinez", pases: 3 }
];

// 📲 Número de WhatsApp (Guatemala)
const numeroWhatsApp = "50230398945";

function buscarFamilia() {
  const input = document.getElementById("busqueda").value
    .toLowerCase()
    .trim();

  const resultado = document.getElementById("resultado");
  const familia = familias.find(f => f.nombre === input);

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
    Pases admitidos: <strong>${familia.pases}</strong><br>

    <a href="${linkWhatsApp}" target="_blank" class="btn-whatsapp">
      💬 Confirmar por WhatsApp
    </a>
  `;
}
