// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Hola, ¿qué tal? ¿Cómo tú estás?", time: 10 },
  { text: "No quisiera molestarte,", time: 11 },
  { text: "pero tuve que llamarte", time: 16 },
  { text: "Sé que quizás no lo esperabas", time: 20 },  
  { text: "Pero tengo que confesarte", time: 22 },
  { text: "que me muero por besarte", time: 24 },
  { text: "Me tienes loco y no lo puedo negar", time: 30 },
  { text: "Y cuando me miras,", time: 32 },
  { text: "no sé cómo reaccionar", time: 34 },     
  { text: "Cambiaste todo, no puedo ni pensar", time: 40 },
  { text: "Me tuve que desahogar,", time: 43 },
  { text: "no vayas a cambiar", time: 46 },
  { text: "Me enamoré", time: 48 }, ///     
  { text: "Sí, me enamoré", time: 50 }, ////
  { text: "Entre tantos corazones", time: 54 },
  { text: "En el tuyo me quedé", time: 57 }, // Ajuste CORRECTO
  { text: "Y me enamoré", time: 61 },
  { text: "Sí, me enamoré", time: 63 },
  { text: "Y no pude evitarlo", time: 65 }, 
  { text: "Por más que lo intenté", time: 68 },
  { text: "Me enamoré, me enamoré", time: 74 }, 
  { text: "Yey, ey", time: 78 },
  { text: "Me enamoré, me enamoré", time: 82 },
  { text: "Aah, aah", time: 87 },
  { text: "Sé que te cuesta confiar", time: 90 }, //
  { text: "Culpas tu pasado", time: 94 },
  { text: "No quieres volver a empezar", time: 96 },
  { text: "Por todo lo que has llorado", time: 98 },
  { text: "Pensando que todos son igual", time: 100 },
  { text: "No quieres perder tu tiempo", time: 104 },
  { text: "No sé si me vas a ignorar", time: 108 },
  { text: "Por decirte lo que siento", time: 114 },  // Ajuste de tiempo final
  { text: "Ya no voy a callar, no", time: 118 },
  { text: "Si me permites, contigo me quedo", time: 122 },
  { text: "Tengo que aceptarlo", time: 126 },
  { text: "Trato de no pensarte, pero ya no puedo", time: 130 },
  { text: "Me enamoré Sí, me enamoré", time: 134 },
  { text: "Entre tantos corazones", time: 138 },
  { text: "En el tuyo me quedé", time: 140 },
  { text: "Y me enamoré", time: 142 },
  { text: "Sí, me enamoré", time: 144 },
  { text: "Y no pude evitarlo", time: 148 },
  { text: "Por más que lo intenté", time: 150 },
  { text: "Imaginando que te tengo aquí", time: 154 },
  { text: "Quisiera que digas que sí", time: 158 },
  { text: "Qué puedo hacer", time: 160 },
  { text: "Si siempre te extraño", time: 164 },
  { text: "No sé en lo que me convertí", time: 168 },
  { text: "Pero cuando te vi", time: 170 },
  { text: "Siento que todo cambió", time: 174 },
  { text: "Estoy", time: 178 },
  { text: "Enamorado y no lo niego", time: 178 },
  { text: "Yeh,", time: 180 },
  { text: "si tú no estás, me siento ciego", time: 184 },
  //{ text: "me siento ciego", time: 188 },
  { text: "Olvidarte, yo no puedo", time: 192 },
  { text: "Tú tienes todo lo que quiero", time: 196 },
  { text: "Me enamoré", time: 200 },
  { text: "Sí, me enamoré", time: 204 },
  { text: "(Yeh-yeh)", time: 208 },
  { text: "(Ey-eh)", time: 210 },
  { text: "Me enamoré", time: 214 },
  { text: "Sí, me enamoré", time: 218 },
  { text: "Y no pude evitarlo", time: 220 },
  { text: "Por más que lo intenté", time: 224 },
  { text: "(Ey-eh, yeh-yeh; nah)", time: 228 },
];

// Animar las letras
function updateLyrics() {
  var currentTime = audio.currentTime;
  var currentLine = lyricsData.find(
    (line) => currentTime >= line.time && currentTime < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos (más suave)
    var opacity = Math.min(1, (currentTime - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }

  // Llamar a la próxima actualización de animación
  requestAnimationFrame(updateLyrics);
}

// Iniciar la animación cuando el audio comience a reproducirse
audio.addEventListener("play", () => {
  requestAnimationFrame(updateLyrics);
});

// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; // Duración y función de temporización de la desaparición
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
