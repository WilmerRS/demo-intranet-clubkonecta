# Especificación funcional — Prototipo Intranet Konecta
Consolidado a partir del Excel de seguimiento con estado y observaciones (post-reunión). Sirve como base para construir el prototipo web/mockup navegable.

**Leyenda de estado:**
- ✅ Confirmado → construir en el prototipo tal como se describe.
- 🕓 Pendiente de información → incluir como placeholder / "en definición", no desarrollar el detalle todavía.
- ⏸️ Aplazado a fase 2 → mostrar como acceso deshabilitado o "próximamente" (no funcional).
- ⚪ Sin estado marcado, pero con detalle funcional dado en la reunión → tratado como confirmado a nivel de diseño, validar el estado formal con el equipo.
- ❌ Desestimado → **no incluir** en el prototipo.

---

## 0. Estructura de menú (Information Architecture)

Menú lateral izquierdo, 7 secciones:

1. **Inicio**
2. **Mi Desarrollo**
3. **Mi Bienestar**
4. **Recursos**
5. **Vida Konecta**
6. **Comunicación**
7. **Mi Gestión**

Header superior (visible en todas las páginas): buscador global + ícono de notificaciones + selector de apps + perfil.

Módulos transversales que aparecen como **popups**, no como ítems del menú: chiste del día, video "¿Sabías que...?", eventos destacados.

---

## 1. Inicio (Home)

### 1.1 Header
- ✅ **Buscador global**: búsqueda por palabra clave en todas las secciones de la intranet (ej. "horarios", "beneficios"). No filtra por tipo (páginas/personas/secciones), es una sola caja de búsqueda global.
- ✅ **Perfil (dropdown)**: al hacer clic muestra información personal — datos personales, correo, cargo, superior directo, fecha de nacimiento.

### 1.2 Accesos rápidos
- ⏸️ **Mis vacaciones**: aplazado a fase 2 (depende de Meucci). En el prototipo: mostrar el ícono **deshabilitado / "Próximamente"**.
- 🕓 **Boletas**: pendiente de información (fuente de datos no confirmada). En el prototipo: mostrar como placeholder, sin funcionalidad real.
- ✅ **Vacantes**: enlaza a un formulario de Google. No incluye seguimiento del estado de postulación. Regla: no mostrar una vacante si ya pasó su fecha estimada de cierre.
- ✅ **Beneficios**: acceso directo a la sección de beneficios (Mi Bienestar).
- ✅ **Chatbot Konecta**: botón que redirige al chatbot de WhatsApp.

### 1.3 Bloques del home
- ✅ **Noticias importantes**: orden cronológico (más reciente primero); el admin puede **fijar una noticia** en el tope por un rango de fechas configurable.
- ✅ **Próximos eventos**: listado de eventos (carga y periodicidad a definir operativamente con Comunicaciones, sin bloquear el diseño del módulo).
- ✅ **Cumpleaños del mes**: lista de todos los cumpleañeros del mes; permite enviar un mensaje al cumpleañero; el cumpleañero ve una alerta para leer su(s) mensaje(s); animación de confeti al ingresar el día de su cumpleaños.
- ✅ **Aniversarios**: se maneja junto con cumpleaños, visible en el Home (mismo tratamiento visual, sin mensajería adicional distinta a la de cumpleaños salvo que se indique lo contrario).
- ✅ **Reconocimientos**: reconocimiento mensual; al presionar "Ver reconocimiento" se muestran los diseños/imágenes de los colaboradores reconocidos del mes.
- ✅ **Banner/carrusel "Refiere y suma futuro"**: flyer/carrusel que enlaza a un formulario de Google para el programa de referidos.
- ✅ **Banner "¿Sabías que...?"**: sección con los videos también visible en el Home (ver detalle en Recursos/Vida Konecta, punto 4.1).

### 1.4 Popup al ingresar
- ✅ **Chiste del día**: popup al ingresar a la intranet. Carga mensual (por fecha), administrado por Comunicaciones (carga vía Excel).
  - 🕓 Diseño de referencia: pendiente que el área envíe la referencia visual de la página de chistes.
- ✅ **Video "¿Sabías que...?"**: popup configurable por rango de fechas; si el usuario ya vio el video, no se le vuelve a mostrar.
- ✅ **Eventos destacados**: ciertos eventos (ej. hitos como "10 años de orgullo Konecta") también se muestran como popup.

---

## 2. Mi Desarrollo (Postulaciones / Promoción interna)

- ✅ **Vacantes**: se muestran como **cards** (imagen + requisitos + detalle de la convocatoria). Aplica a **todos los colaboradores**, no solo staff.
- ✅ **Formulario de postulación**: es un formulario de Google que alimenta un Drive (no requiere backend propio).
- ✅ **Documentos compartidos** (descargables o enlazados): Política de promoción interna, Programa de referidos, Canales de postulación, Reglamento interno.
- ❌ **"Proceso de Período de Referencia"** como sección aparte: descartado. Se maneja informativamente en el Home; no existe un "período" formal que mostrar.

---

## 3. Recursos

- ✅ **"¿Sabías que...?" (pastillas informativas)**: sección de video en Recursos/Vida Konecta y también destacada en el Home.
  - Duración máxima: **1 minuto**.
  - Peso: **30 MB a 150 MB**.
  - Formato: **horizontal**.
  - Calendario editorial: consolidar los temas anuales del área de Relaciones Laborales con la cadencia semanal de publicación.
- ✅ **Política Vacacional**: documento compartido (informativo).
- ✅ **Gradualidad de Sanciones**: documento compartido (informativo, dirigido a Mandos Medios).
- ✅ **"Solicitar una sanción"**: no es un formulario propio — es un **link al "Canal de denuncias"** ya existente.
- ✅ **Protocolos de emergencia y manuales**: documentos compartidos (owner: SSOMA).

---

## 4. Vida Konecta

- ✅ **Banco de Talento**: se presenta como una "escuela" para acceder al Banco de Talento. Formato: flyer (igual estilo que "Refiere y suma futuro") con link a un formulario para inscribirse. Público objetivo: Asesores, BO, Validadores (se puede segmentar visibilidad por rol/campaña).
- ⚪ **Eventos y Actividades**: **lista de eventos** (no calendario) visible en el Home y listada completa en Vida Konecta. Al presionar un evento, redirige al álbum de fotos en Google. *(Detalle funcional definido en la reunión; falta marcar el estado formal en el Excel.)*
- ❌ **Testimonios / voluntariado a colegios**: descartado — no hay volumen suficiente de voluntariados para justificar una sección.
- ✅ **Video "¿Sabías que...?"**: también visible aquí (ver punto 3).

---

## 5. Comunicación

- ✅ **"Konecta te escucha"**: botón/link a un formulario externo (no se construye un formulario nativo).
- 🕓 **Encuestas Pulso**: pendiente de información — es una encuesta de satisfacción; falta definir si se integra en esta fase o solo se referencia.
- ❌ **Canal de staff**: descartado — no se define integración por ahora.

---

## 6. Mi Gestión

> ⚠️ La mayoría de los módulos de esta sección dependen de Meucci/Jarvis (fuera de alcance de datos actual). Para el prototipo se muestran como **enlaces o mensajes simples**, no como módulos con datos reales en vivo.

- ✅ **Absentismo/tardanzas**: no hay integración de datos en vivo; se muestra un **mensaje tipo "Revisa mis tardanzas aquí"** con link de salida (a Jarvis).
- 🕓 **Constancia de trabajo**: pendiente confirmar si el botón simplemente redirige a Jarvis (sin firma digital ni datos de Meucci en esta fase).
- ❌ **Saldo de vacaciones en tiempo real**: descartado para esta fase (depende de Meucci).
- ✅ **Vida Ley**: módulo **informativo**, con mensaje tipo *"Si deseas [más información / afiliarte], comunícate con [correo]"* — sin descarga de planilla ni legalización en línea por ahora.
- ✅ **EsSalud + Vida**: mismo tratamiento que Vida Ley — informativo, con mensaje y correo de contacto.
- ❌ **Pago Bono Bienvenida / Pago Reintegros**: descartado para esta fase.
- 🕓 **Reintegros y Constancias (posible duplicidad con el mockup)**: pendiente — se debe consultar directamente con el área antes de definir el diseño final.
- ❌ **Dashboard de Vacaciones y Rotación**: descartado para esta fase (depende de Meucci/reportería interna).

---

## 7. Mi Bienestar (Plan de Beneficios "Conectamos Contigo")

- ⚪ **Beneficios y convenios**: en vez de un módulo de trazabilidad de clics, se simplifica a un **botón que redirige a un documento** con el listado de beneficios y convenios disponibles para el colaborador. *(Detalle funcional definido en la reunión; falta marcar el estado formal en el Excel.)*
- (Los demás sub-módulos de Mi Bienestar mencionados en el requerimiento original — Emprendedores/Mercado Konecta, campañas SSOMA — no tuvieron una fila de seguimiento con estado en esta ronda; se recomienda validarlos antes de incluirlos en el prototipo.)

---

## 8. Puntos transversales (gobierno del contenido)

- ✅ **Integraciones bloqueantes**: se confirmó que **todas** las integraciones listadas (Meucci, Jarvis, firma digital, canal de staff) son bloqueantes para el lanzamiento completo — no bloquean, sin embargo, la construcción del prototipo/mockup, que las simula como enlaces o mensajes estáticos.
- 🕓 **Fuentes de datos disponibles para el MVP**: sigue sin marcarse el listado oficial y cerrado; se mantiene el criterio ya usado (correo, datos personales, número, correo personal, fecha de nacimiento, sector de trabajo) hasta que se confirme lo contrario.
- ❌ **Calendario editorial único**, ❌ **modelo de permisos de admin**, ❌ **límite de coexistencia de popups**, ❌ **cambio de naming de las 7 secciones**: descartados — se mantiene el esquema actual sin ajustes adicionales en esta fase.

---

## 9. Resumen para el prototipo (qué construir vs. qué simular)

| Construir con detalle funcional completo | Mostrar como placeholder / deshabilitado | No incluir |
|---|---|---|
| Buscador global, Perfil, Noticias, Próximos eventos, Cumpleaños/Aniversarios, Reconocimientos, Refiere y suma futuro, Vacantes (Mi Desarrollo y Home), Documentos compartidos (Recursos), "¿Sabías que...?" (video + popup), Chiste del día (popup), Banco de Talento, Eventos y Actividades (lista + álbum de fotos), Konecta te escucha, Absentismo (mensaje/link), Vida Ley y EsSalud+Vida (informativo + correo), Beneficios y convenios (botón a documento), Canal de denuncias (link) | Mis vacaciones, Boletas, Constancia de trabajo, Reintegros/Constancias, Encuestas Pulso | Período de Referencia, Testimonios/voluntariado, Canal de staff, Saldo de vacaciones en tiempo real, Bono Bienvenida/Reintegros, Dashboard de Vacaciones y Rotación |

---

**Nota:** Los puntos marcados con ⚪ o 🕓 conviene confirmarlos formalmente (marcar el Estado en el Excel) antes de congelar el diseño final del prototipo, aunque ya cuentan con suficiente detalle funcional para maquetarlos.
