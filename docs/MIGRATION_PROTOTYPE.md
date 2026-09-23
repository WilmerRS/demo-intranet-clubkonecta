# Club Konecta — Guía de pantallas para prototipo de diseño

> Referencia para armar un prototipo React del nuevo diseño de Club Konecta.
> Foco: **qué pantallas existen, qué bloques/secciones tiene cada una y qué contenido muestran**.
> Fuera de alcance a propósito: colores/tipografías, autenticación real, estado global (Redux), Firebase, analytics — eso no aplica a un prototipo de diseño.

---

## 1. Estructura general

Dos plantillas de página (layouts):

- **Layout simple** — usado en pantallas de una sola tarjeta central: Login, Registro, Recuperar contraseña. Estructura: logo arriba + tarjeta de formulario a un lado + imagen ilustrativa al otro lado.
- **Layout de panel** — usado en todas las pantallas internas de la app: Header (con navegación) → contenido de la pantalla → Footer.

La Landing pública es una página aparte, de una sola pieza, con secciones apiladas (no usa ninguno de los dos layouts anteriores).

### Mapa de pantallas

```
Landing
Login | Registro | Recuperar contraseña
─── (panel) ───
Home
Beneficios (listado) → Beneficio (detalle)
Noticias (listado) → Noticia (detalle)
Programas (listado) → Programa (detalle)
Procesos → Reset de contraseña Windows
Perfil / Cuenta
404
```

---

## 2. Landing

Página comercial de una sola pieza, secciones en orden:
1. **Carrusel** de imágenes/banners.
2. **Quiénes somos** — imagen + bloque de texto.
3. **Noticias** (teaser) — texto + imagen ilustrativa, invita a ver noticias.
4. **Beneficios** (teaser) — grid de 4 tarjetas (imagen + título): Convenios corporativos, Asesorías, Licencias extendidas, Préstamos.
5. **Programas / Krece** (teaser) — logo + 3 tarjetas grandes (imagen + título) de categorías, ej. Ropa, Comida, Belleza.
6. **Testimonios** — un testimonio grande activo (foto, nombre, cargo, cita) + selector de otros 2 testimonios en miniatura.
7. **Footer** (copyright).

CTA de acceso (login/registro) visible en el header de la landing.

---

## 3. Login / Registro / Recuperar contraseña

Pantallas de una sola tarjeta centrada (Layout simple):
- **Login**: logo + botón único "Iniciar sesión" + estado de carga + mensaje de error opcional bajo el logo.
- **Registro**: formulario (a definir con el nuevo diseño).
- **Recuperar contraseña**: formulario (a definir con el nuevo diseño).

Para el prototipo, no hace falta lógica real de autenticación: alcanza con que el botón "Iniciar sesión" navegue directo a Home.

---

## 4. Header del panel (aparece en todas las pantallas internas)

Bloques:
- Logo (a la izquierda, click vuelve a Home).
- Navegación principal: **Inicio | Beneficios | Programas | Procesos**. "Beneficios" y "Procesos" despliegan un submenú con categorías en vez de navegar directo.
- Icono de notificaciones con contador.
- Avatar de usuario → menú desplegable: nombre, Perfil, Cerrar sesión.
- Segunda fila de navegación (submenú activo), visible salvo en pantallas de detalle y 404.

---

## 5. Home

Bloques apilados, cada uno con su propio "modo cargando" (skeleton) mientras no hay datos:
1. **Noticias** — últimas N noticias en formato tarjeta (imagen, categoría, título, fecha, comentarios, rating).
2. **Beneficios** — sección de accesos rápidos.
3. **Emprendimientos / Krece** — sección de accesos rápidos.
4. **Encuestas** — 2 encuestas destacadas.
5. **Procesos** — sección de accesos rápidos.

Modales de apoyo: aviso para activar notificaciones, aviso de nueva versión disponible.

---

## 6. Beneficios — Listado

- **Encabezado**: título + breadcrumb (Beneficios > categoría).
- **Tabs de categoría**: Beneficios de Ley / Beneficios Konecta / Convenios Corporativos (u otras según config).
- Barra de acciones: **Filtros** (multi-selección de subcategoría, en panel desplegable) y **Ordenar** (por valoración, por comentarios, alfabético A-Z / Z-A).
- **Grid de tarjetas de beneficio**: imagen, categoría, título, fecha, rating.
- Botón "Mostrar más" (carga de a 8 tarjetas).
- Estado vacío cuando el filtro no devuelve resultados.

## 7. Beneficio — Detalle

- **Breadcrumb**: Beneficios > categoría > título.
- Columna principal (≈60%): imagen/banner, contenido del beneficio, multimedia relacionada, links relacionados, control de valoración (1-5).
- Columna secundaria (≈40%): bloque de **comentarios**:
  - lista de comentarios con avatar, autor, fecha, texto, reacciones.
  - cada comentario admite una respuesta (hilo de 1 nivel).
  - caja para escribir un comentario nuevo.
- Confirmaciones tipo toast al comentar / reaccionar / valorar; alerta de error genérica.

---

## 8. Noticias — Listado

- **Breadcrumb** + botón "Regresar" a Home.
- Bloque **"Noticias Destacadas"**: grid de tarjetas (recientes + más comentadas).
- Bloque **"Noticias"**: grid con el resto.
- Cada tarjeta: imagen, categoría "Noticia", título, fecha, comentarios, rating.

## 9. Noticia — Detalle

Mismo patrón que Beneficio — Detalle: panel principal de contenido + columna de comentarios/reacciones/valoración + breadcrumb.

---

## 10. Programas / Krece — Listado

- **Breadcrumb**.
- **Tabs de categoría** (ordenadas por cantidad de programas en cada una).
- Barra de "Ordenar" (A-Z / Z-A).
- **Grid de tarjetas de programa**: imagen, categoría, título, fecha de publicación.
- Estado vacío si la categoría no tiene programas.

## 11. Programa — Detalle

Panel de detalle (mismo tipo de estructura que Beneficio/Noticia detalle, con fondo de dos tonos como recurso visual particular de esta pantalla).

---

## 12. Procesos

- **Breadcrumb**.
- **Tabs**: "Gestión de Contraseña" y "Canales de Denuncias".
- Grid de **tarjetas de acción**, cada una con: tipo, imagen, título, descripción, botón de acción (ej. "Resetear", "Enviar correo").
- Modal de aviso cuando falta completar datos de contacto antes de continuar (redirige a Perfil).

## 13. Reset de contraseña Windows

Sub-pantalla de proceso guiado (mismo patrón de wizard por pasos que Perfil, ver punto 14).

---

## 14. Perfil / Cuenta

- **Breadcrumb**.
- **Tabs**: "Datos Personales" y "Cambio de contraseña".
- Tarjeta de foto de perfil (a la izquierda) + tarjeta de datos (a la derecha):
  - Nombre y apellido (solo lectura).
  - Lista de datos de contacto con su estado (verificado / sin información), cada uno navega a un mini-wizard:
    1. **Paso 1**: lista de datos de contacto.
    2. **Paso 2**: edición del valor (ej. formulario de dirección con departamento/provincia/distrito).
    3. **Paso 3**: verificación por código OTP (6 dígitos) + checkbox de aceptación de política.
    4. **Paso 4**: confirmación de éxito.
- "Cambio de contraseña" es un formulario aparte (nueva contraseña + confirmación).

## 15. 404

Pantalla de error simple, dentro del layout de panel.

---

## 16. Catálogo de componentes reutilizables (para armar el prototipo)

| Componente | Dónde se usa | Contenido que maneja |
|---|---|---|
| **Tarjeta de resumen** (beneficio / noticia / programa) | Listados y Home | imagen, categoría, título, fecha, comentarios, rating |
| **Panel de detalle** | Beneficio / Noticia / Programa detalle | imagen/banner, título, contenido, multimedia, links, rating |
| **Bloque de comentarios** | Detalles | lista de comentarios + respuestas + reacciones + caja de nuevo comentario |
| **Breadcrumb** | Todas las pantallas internas | título de sección + ruta de navegación |
| **Tabs de categoría** | Beneficios, Programas, Procesos, Perfil | lista de categorías/opciones |
| **Panel de Filtros/Ordenar** | Beneficios, Programas | checkboxes o radios en popover |
| **Modal genérico** | Home, Login, Procesos | imagen + título + texto + botón de acción |
| **Toast/alerta de confirmación** | Detalles de beneficio/noticia | mensaje de éxito o error |
| **Botón de acción con loading** | Formularios (Login, Perfil) | estado normal / cargando / deshabilitado |
| **Skeleton de carga** | Cada listado y Home | versión "placeholder" de cada bloque anterior |
| **Estado vacío** | Listados filtrados | mensaje + ilustración |
| **Wizard por pasos** | Perfil, Reset contraseña Windows | navegación entre 3-4 pasos con botón "Regresar"/"Continuar" |

---

## 17. Checklist para el prototipo

1. Definir los 2 layouts (simple / panel) con el nuevo diseño.
2. Landing como página única con sus 6-7 secciones.
3. Login/Registro/Recuperar como pantallas de formulario simple (sin lógica real).
4. Home con sus 5 bloques + skeletons.
5. Los 3 pares listado/detalle (Beneficios, Noticias, Programas) reutilizando: tarjeta de resumen, tabs, filtros/orden, panel de detalle, bloque de comentarios.
6. Procesos con sus tarjetas de acción y su modal de aviso.
7. Perfil con el wizard de pasos reutilizable.
8. 404.
9. Usar **datos mock/estáticos** (arrays de ejemplo) para poblar cada pantalla — no se necesita conectar a ningún backend, Redux ni Firebase para este prototipo.
