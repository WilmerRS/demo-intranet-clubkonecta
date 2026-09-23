# Plan maestro — Prototipo Intranet Konecta

> Documento guía única para construir el prototipo navegable (demo, sin backend real).
> Fuentes: [`Especificacion_Prototipo_Intranet_Konecta.md`](./Especificacion_Prototipo_Intranet_Konecta.md) define **qué construir** (contenido, IA, estados). [`MIGRATION_PROTOTYPE.md`](./MIGRATION_PROTOTYPE.md) aporta **patrones de layout/componentes reutilizables** (no su IA vieja, que queda reemplazada). Paleta y tipografía tomadas de `app-ckadmin-nextjs`.

---

## 1. Alcance y reglas del prototipo

- Sin backend, sin auth real, sin Redux/Firebase. Datos mock (arrays JS) por módulo.
- Login: botón único que navega directo a Home (sin validar credenciales).
- Módulos que dependen de Meucci/Jarvis/firma digital: se simulan como **mensaje + link de salida**, nunca como módulo con datos en vivo.
- Respetar estados del Excel: ✅ construir completo · 🕓 placeholder "en definición" · ⏸️ deshabilitado "Próximamente" · ❌ no incluir.
- Formularios externos (Google Forms) → representar como botón/link que abriría en nueva pestaña (mock href `#`, sin submit real).

---

## 2. Design system (tomado de `app-ckadmin-nextjs`)

### 2.1 Colores

| Token | Valor | Uso |
|---|---|---|
| `--primary` | `#2a01cd` | marca, botones principales, links activos, sidebar activo |
| `--primary-foreground` | `#fafafa` | texto sobre primary |
| `--secondary` | `#f5f5f5` | fondos secundarios, botones outline |
| `--secondary-foreground` | `#171717` | texto sobre secondary |
| `--accent` | `#eefdfb` | fondos de resaltado (chips, hover, banners) |
| `--accent-foreground` | `#0f766e` | texto/ícono sobre accent (teal) |
| `--background` | `#ffffff` | fondo general |
| `--foreground` | `#171717` | texto principal |
| `--muted` | `#f5f5f5` | fondos deshabilitados/placeholder |
| `--muted-foreground` | `#8a8a8a` | texto secundario, placeholders, "Próximamente" |
| `--destructive` | `#dc2626` | errores, alertas |
| `--border` / `--input` | `#e5e5e5` | bordes, inputs |
| `--ring` | `#b5b5b5` | focus ring |
| `--radius` | `0.625rem` (10px) | base de radios; `sm=radius-4px`, `md=radius-2px`, `lg=radius`, `xl=radius+4px` |

Dark mode no es prioridad para el demo (queda documentado pero no se implementa en esta fase).

### 2.2 Tipografía

- Familia: **Poppins** (Google Fonts, pesos 300–700), fallback `system-ui, 'Segoe UI', Roboto, sans-serif`.
- Mono (código/valores): fallback del sistema, no crítico para este prototipo.

### 2.3 Decisión técnica de estilos

**Definido: Tailwind CSS v4** (CSS-first, sin `tailwind.config.js`), definiendo los tokens de la tabla 2.1 como `@theme` en `src/styles/tokens.css` — mismo enfoque que `app-ckadmin-nextjs`, máxima fidelidad visual.

---

## 3. Stack y estructura de carpetas

Base actual: Vite + React 19 (JS, no TS), oxlint. Se añade:

- `react-router-dom` — ruteo entre pantallas.
- `tailwindcss` v4 + `@tailwindcss/vite`.

```
src/
  app/
    App.jsx              # router raíz + shell (popups globales)
    routes.jsx
  layouts/
    PanelLayout.jsx       # Header + Sidebar + <Outlet/>
    SimpleLayout.jsx      # logo + card + imagen (Login)
  components/
    layout/               # Header, Sidebar, Breadcrumb
    cards/                # SummaryCard, QuickAccessCard, BirthdayCard
    feedback/             # Toast, Skeleton, EmptyState, Modal, Popup
    docs/                 # DocumentLink, InfoContactBlock
  pages/
    Login.jsx
    Home.jsx
    MiDesarrollo.jsx
    MiBienestar.jsx
    Recursos.jsx
    VidaKonecta.jsx
    Comunicacion.jsx
    MiGestion.jsx
    NotFound.jsx
  mocks/
    news.js  events.js  birthdays.js  recognitions.js
    vacancies.js  documents.js  user.js
  styles/
    tokens.css  global.css
```

---

## 4. Arquitectura de información (menú)

Sidebar izquierdo, 7 secciones (reemplaza la IA vieja de `MIGRATION_PROTOTYPE.md`):

```
Header superior: [Buscador] [Nav central: Inicio | Noticias | Mercado Konecta | Beneficios | Vacantes] [Apps] [Notificaciones] [Perfil ▾]
Sidebar:
  1. Inicio
  2. Mi Desarrollo
  3. Mi Bienestar
  4. Recursos
  5. Vida Konecta
  6. Comunicación
  7. Mi Gestión
```

Popups globales (no son rutas, se montan en el shell de `PanelLayout`): Chiste del día, Video "¿Sabías que...?", Eventos destacados.

---

## 5. Mapa de pantallas y contenido por módulo

Leyenda: ✅ completo · 🕓 placeholder · ⏸️ disabled "Próximamente" · ⚪ tratar como ✅ (validar estado formal después).

### 5.1 Login (Layout simple)
✅ Logo + botón "Iniciar sesión" → navega a `/inicio`. Sin formulario real.

### 5.2 Inicio (`/inicio`)
- **Header**: ✅ buscador global (input, sin filtrar por tipo) · ✅ nav central estilo Facebook con accesos directos a Inicio, Noticias, Mercado Konecta, Beneficios (Mi Bienestar) y Vacantes · ✅ perfil dropdown (datos personales, correo, cargo, superior directo, fecha de nacimiento).
- **Accesos rápidos**: ⏸️ Mis vacaciones (icono disabled) · 🕓 Boletas (placeholder) · ✅ Vacantes (link a Google Form; ocultar si `fechaCierre < hoy`) · ✅ Beneficios (link a Mi Bienestar) · ✅ Chatbot Konecta (link a WhatsApp).
- **Bloques** (cada uno con skeleton propio):
  - ✅ Noticias importantes — orden cronológico desc; una noticia puede fijarse arriba por rango de fechas (mock: campo `pinnedUntil`).
  - ✅ Próximos eventos — listado simple.
  - ✅ Cumpleaños del mes — lista de cumpleañeros, botón "Enviar mensaje", alerta al cumpleañero si tiene mensajes sin leer, confeti si `hoy === fechaNacimiento`.
  - ✅ Aniversarios — mismo tratamiento visual que cumpleaños, sin mensajería propia.
  - ✅ Reconocimientos — reconocimiento mensual + botón "Ver reconocimiento" → modal con diseños de colaboradores reconocidos.
  - ✅ Banner/carrusel "Refiere y suma futuro" → link a Google Form.
  - ✅ Banner "¿Sabías que...?" (mismo video que en Recursos/Vida Konecta).
- **Popups al ingresar**: ✅ Chiste del día (mensual) · ✅ Video "¿Sabías que...?" (por rango de fechas, no repetir si `visto=true` en mock/localStorage) · ✅ Eventos destacados (hitos puntuales).

### 5.3 Mi Desarrollo (`/mi-desarrollo`)
- ✅ Vacantes en cards (imagen + requisitos + detalle), visibles para todos los colaboradores.
- ✅ Botón de postulación → link a Google Form.
- ✅ Documentos compartidos: Política de promoción interna, Programa de referidos, Canales de postulación, Reglamento interno.
- ❌ No incluir "Proceso de Período de Referencia" como sección.

### 5.4 Mi Bienestar (`/mi-bienestar`)
- ⚪ Beneficios y convenios: botón único → "documento" (mock: enlace/descarga simulada), sin trazabilidad de clics.
- Nota: campañas SSOMA mencionadas en el requerimiento original quedan **fuera del prototipo** hasta validación.

### 5.4bis Mercado Konecta (`/mercado-konecta`)
⚪ Marketplace estilo Facebook para que los colaboradores publiquen/vendan productos o servicios propios. Acceso directo desde el nav central del header (§4). Antes listado como "Emprendedores/Mercado Konecta" sin estado formal; el usuario pidió incluirlo explícitamente en el prototipo, con dos bloques:
- **Vitrina de productos**: grid horizontal de tarjetas (imagen, precio, nombre, vendedor) + botón "Publicar producto" (modal con nombre/descripción/precio).
- **Chat global**: un solo feed público (no mensajería privada) donde cualquier colaborador escribe mensajes; al publicar un producto, se agrega automáticamente un mensaje al chat mostrando ese producto embebido.
Falta definir con el área: moderación, categorías, persistencia real (hoy vive solo en estado de React, se pierde al recargar).

### 5.5 Recursos (`/recursos`)
- ✅ "¿Sabías que...?": video destacado (spec: máx 1 min, 30–150MB, horizontal — en el mock usar un placeholder de video/imagen).
- ✅ Política Vacacional (documento).
- ✅ Gradualidad de Sanciones (documento, dirigido a Mandos Medios).
- ✅ "Solicitar una sanción" → link al Canal de denuncias (no es formulario propio).
- ✅ Protocolos de emergencia y manuales (documentos, owner SSOMA).

### 5.6 Vida Konecta (`/vida-konecta`)
- ✅ Banco de Talento: flyer (mismo estilo que "Refiere y suma futuro") + link a formulario de inscripción; segmentable por rol/campaña (en el mock, mostrar a todos).
- ⚪ Eventos y Actividades: **lista** de eventos (no calendario); click en un evento → link a álbum de fotos (Google, mock href).
- ✅ Video "¿Sabías que...?" (mismo componente que en Recursos/Home).
- ❌ No incluir testimonios/voluntariado a colegios.

### 5.7 Comunicación (`/comunicacion`)
- ✅ "Konecta te escucha" → botón/link a formulario externo.
- 🕓 Encuestas Pulso → placeholder "en definición".
- ❌ No incluir Canal de staff.

### 5.8 Mi Gestión (`/mi-gestion`)
Mayoría de módulos dependen de Meucci/Jarvis → mostrar como enlace/mensaje, no como dato en vivo.
- ✅ Absentismo/tardanzas → mensaje "Revisa mis tardanzas aquí" + link de salida a Jarvis.
- 🕓 Constancia de trabajo → placeholder (pendiente confirmar si solo redirige a Jarvis).
- ✅ Vida Ley → informativo: "Si deseas más información/afiliarte, comunícate con [correo]".
- ✅ EsSalud + Vida → mismo tratamiento informativo que Vida Ley.
- 🕓 Reintegros y Constancias → placeholder (posible duplicidad, pendiente de validar con el área).
- ❌ No incluir: saldo de vacaciones en tiempo real, Bono Bienvenida/Pago Reintegros, Dashboard de Vacaciones y Rotación.

### 5.9 Perfil (dropdown del header, no es página propia)
✅ Al hacer click sobre el avatar: panel con datos personales, correo, cargo, superior directo, fecha de nacimiento (solo lectura). **Definido: no se construye** el wizard de edición de datos de contacto de `MIGRATION_PROTOTYPE.md` en esta fase — solo el dropdown informativo. El patrón de wizard queda documentado en el catálogo de componentes (§6) como reutilizable a futuro si el área lo pide.

### 5.10 404
✅ Pantalla simple dentro del `PanelLayout`.

---

## 6. Catálogo de componentes reutilizables

| Componente | Dónde se usa | Contenido / props clave |
|---|---|---|
| `PanelLayout` | Todas las pantallas internas | Header + Sidebar + contenido |
| `SimpleLayout` | Login | logo + card + imagen |
| `Header` | PanelLayout | buscador global, notificaciones (badge), selector de apps, perfil dropdown |
| `Sidebar` | PanelLayout | 7 secciones, ítem activo, ⏸️ ítems deshabilitados si aplica |
| `SummaryCard` | Noticias, eventos, vacantes | imagen, categoría, título, fecha |
| `QuickAccessCard` | Accesos rápidos (Home) | icono, label, estado: activo / disabled ("Próximamente") / placeholder |
| `BirthdayCard` / `AnniversaryCard` | Home | avatar, nombre, cargo, botón "Enviar mensaje" (solo cumpleaños), confeti |
| `RecognitionModal` | Home | galería de imágenes/diseños de reconocidos del mes |
| `PopupGeneric` | Chiste del día, Video ¿Sabías qué?, Evento destacado | imagen/video + título + texto + botón cerrar/acción |
| `DocumentLink` | Mi Desarrollo, Recursos | ícono de archivo, título, acción (descargar/enlazar) |
| `InfoContactBlock` | Vida Ley, EsSalud+Vida | texto informativo + correo de contacto + botón "Escribir" |
| `PlaceholderBadge` | Boletas, Constancia, Encuestas Pulso, etc. | etiqueta "En definición" / "Próximamente" |
| `Toast` | Envío de mensaje de cumpleaños, confirmaciones | éxito / error |
| `Skeleton` | Cada bloque de Home y listados | placeholder de carga |
| `EmptyState` | Listados sin resultados | mensaje + ilustración |
| `Breadcrumb` | Vacantes, listados internos si aplica | sección + ruta |
| `WizardSteps` *(reservado, no usar en esta fase)* | Futuro: edición de datos de Perfil | pasos 1-4, navegación Regresar/Continuar |

---

## 7. Orden de construcción (página por página)

1. **Base**: tokens de diseño (§2.1–2.2), `PanelLayout`, `SimpleLayout`, `Header`, `Sidebar`, ruteo (`react-router-dom`).
2. **Login** (valida el `SimpleLayout` y la navegación).
3. **Inicio** — la más compleja: fija los patrones de `SummaryCard`, `QuickAccessCard`, popups, skeletons. Se reutiliza en todo lo demás.
4. **Mi Desarrollo**
5. **Mi Bienestar**
6. **Recursos**
7. **Vida Konecta**
8. **Comunicación**
9. **Mi Gestión**
10. **Perfil (dropdown) + 404**
11. **Pulido**: wiring de popups globales, responsive, estados vacíos/placeholder consistentes.

---

## 8. Datos mock necesarios por módulo

- `news.js` — noticias (título, categoría, fecha, imagen, `pinnedUntil?`).
- `events.js` — próximos eventos + eventos destacados (flag `isFeatured`) + eventos de Vida Konecta (con `albumUrl`).
- `birthdays.js` — colaboradores con `fechaNacimiento`, mensajes recibidos.
- `anniversaries.js` — colaboradores con fecha de ingreso.
- `recognitions.js` — reconocidos del mes + imágenes.
- `vacancies.js` — vacantes (imagen, requisitos, `fechaCierreEstimada`, `formUrl`).
- `documents.js` — documentos compartidos por módulo (Mi Desarrollo, Recursos).
- `user.js` — usuario mock para Perfil (nombre, correo, cargo, superior directo, fecha de nacimiento).
- `jokes.js` — chiste del mes.

---

## 9. Pendientes a confirmar con el equipo (no bloquean el prototipo)

- Diseño de referencia de la página de chistes.
- Fuente/periodicidad real de "Próximos eventos".
- Estado formal de: Eventos y Actividades, Beneficios y convenios (marcados ⚪).
- Si "Constancia de trabajo" solo redirige a Jarvis.
- Duplicidad "Reintegros y Constancias" con otro mockup existente.
