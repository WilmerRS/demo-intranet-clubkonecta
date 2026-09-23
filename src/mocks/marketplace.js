const IMG_PORTADA =
  'https://clubkonecta.s3.us-east-2.amazonaws.com/noticias/Selecci%C3%B3n+Interna/00+PORTADAS+2025/PORTADA.jpg'
const IMG_JUGUETE =
  'https://clubkonecta.s3.us-east-2.amazonaws.com/noticias/MI+JUGUETE+FAVORITO/MI+JUGUETE+FAVORITO-02.jpg'
const IMG_DIVERTIDOS =
  'https://clubkonecta.s3.us-east-2.amazonaws.com/noticias/D%C3%8DAS+DIVERTIDOS/19-12/D%C3%8DAS+DIVERTIDOS+2+CK-03.jpg'
const IMG_ORGULLO =
  'https://clubkonecta.s3.us-east-2.amazonaws.com/noticias/ORGULLO+K/MARCIA/28-11/Orgullo+Konecta+CK-03.jpg'

export const PRODUCT_IMAGES = [
  IMG_PORTADA,
  IMG_JUGUETE,
  IMG_DIVERTIDOS,
  IMG_ORGULLO,
]

export const initialProducts = [
  {
    id: 'p1',
    name: 'Brownies caseros',
    price: 12,
    seller: 'Lucía Fernández',
    location: 'La Victoria, Chiclayo',
    imageUrl: IMG_JUGUETE,
  },
  {
    id: 'p2',
    name: 'Pulseras artesanales',
    price: 8,
    seller: 'Martín Flores',
    location: 'Miraflores, Lima',
    imageUrl: IMG_DIVERTIDOS,
  },
  {
    id: 'p3',
    name: 'Clases de repostería',
    price: 25,
    seller: 'Camila Rojas',
    location: 'José Leonardo Ortiz, Chiclayo',
    imageUrl: IMG_PORTADA,
  },
]

export const initialMessages = [
  {
    id: 'm1',
    author: 'Diego Vargas',
    text: '¡Bienvenidos al chat de Mercado Konecta! Comenten o publiquen lo que quieran vender 👋',
  },
  {
    id: 'm2',
    author: 'Lucía Fernández',
    text: 'Acabo de publicar mis brownies caseros, ¡pedidos por este chat!',
    productId: 'p1',
  },
  {
    id: 'm3',
    author: 'Sofía Medina',
    text: 'Se ven riquísimos, ¿haces entregas en sede norte?',
  },
]
