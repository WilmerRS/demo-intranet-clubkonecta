import { Plus, Send, X } from 'lucide-react'
import { useState } from 'react'
import ProductCard from '../components/cards/ProductCard'
import Modal from '../components/feedback/Modal'
import ChatMessageItem from '../components/marketplace/ChatMessageItem'
import {
  PRODUCT_IMAGES,
  initialMessages,
  initialProducts,
} from '../mocks/marketplace'
import { currentUser } from '../mocks/user'

let nextId = 100

export default function MercadoKonecta() {
  const [products, setProducts] = useState(initialProducts)
  const [messages, setMessages] = useState(initialMessages)
  const [modalOpen, setModalOpen] = useState(false)
  const [draft, setDraft] = useState('')
  const [replyingTo, setReplyingTo] = useState(null)
  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    location: '',
  })

  function handlePublish(e) {
    e.preventDefault()
    if (!form.name.trim()) return

    const id = `p${nextId++}`
    const imageUrl = PRODUCT_IMAGES[products.length % PRODUCT_IMAGES.length]
    const newProduct = {
      id,
      name: form.name,
      price: Number(form.price) || 0,
      seller: currentUser.name,
      location: form.location || 'Perú',
      imageUrl,
    }

    setProducts((prev) => [newProduct, ...prev])
    setMessages((prev) => [
      ...prev,
      {
        id: `m${nextId++}`,
        author: currentUser.name,
        text: form.description || `Publiqué un nuevo producto: ${form.name}`,
        productId: id,
      },
    ])
    setForm({ name: '', description: '', price: '', location: '' })
    setModalOpen(false)
  }

  function handleSend(e) {
    e.preventDefault()
    if (!draft.trim()) return
    setMessages((prev) => [
      ...prev,
      {
        id: `m${nextId++}`,
        author: currentUser.name,
        text: draft,
        replyTo: replyingTo
          ? { author: replyingTo.author, text: replyingTo.text }
          : undefined,
      },
    ])
    setDraft('')
    setReplyingTo(null)
  }

  return (
    <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-6">
      <div className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start">
        <div className="flex min-w-0 flex-col gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-foreground">
              Mercado Konecta
            </h1>
            <p className="text-muted-foreground">
              Descubre, comenta y publica los emprendimientos de tus
              compañeros.
            </p>
          </div>

          <section className="rounded-2xl bg-background p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-foreground">
                Productos y emprendimientos
              </h2>
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
              >
                <Plus className="h-4 w-4" />
                Publicar producto
              </button>
            </div>

            <div className="flex flex-wrap gap-4">
              {products.map((p) => (
                <ProductCard key={p.id} {...p} />
              ))}
            </div>
          </section>
        </div>

        <aside className="lg:sticky lg:top-20">
          <section className="flex h-[calc(100vh-8rem)] min-h-[360px] flex-col overflow-hidden rounded-2xl bg-background shadow-sm">
            <div className="border-b border-border p-4">
              <h2 className="text-base font-semibold text-foreground">
                Chat
              </h2>
              <p className="text-xs text-muted-foreground">
                Escribe, comenta o comparte lo que quieras vender.
              </p>
            </div>

            <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto p-4">
              {messages.map((m) => (
                <ChatMessageItem
                  key={m.id}
                  message={m}
                  product={products.find((p) => p.id === m.productId)}
                  onReply={setReplyingTo}
                />
              ))}
            </div>

            {replyingTo && (
              <div className="flex items-center gap-2 border-t border-border bg-secondary px-4 py-2">
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold text-foreground">
                    Respondiendo a {replyingTo.author}
                  </p>
                  <p className="line-clamp-1 break-words text-xs text-muted-foreground">
                    {replyingTo.text}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setReplyingTo(null)}
                  aria-label="Cancelar respuesta"
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-muted-foreground hover:bg-border hover:text-foreground"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
            )}

            <form
              onSubmit={handleSend}
              className="flex items-center gap-2 border-t border-border p-3"
            >
              <input
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="Escribe un mensaje..."
                className="flex-1 rounded-full bg-secondary px-4 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <button
                type="submit"
                aria-label="Enviar"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground hover:opacity-90"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </section>
        </aside>
      </div>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Publicar tu emprendimiento"
      >
        <form onSubmit={handlePublish} className="flex flex-col gap-3">
          <label className="flex flex-col gap-1.5 text-sm font-medium text-foreground">
            Nombre del producto
            <input
              value={form.name}
              onChange={(e) =>
                setForm((f) => ({ ...f, name: e.target.value }))
              }
              className="rounded-lg border border-input bg-secondary px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              placeholder="Ej. Brownies caseros"
            />
          </label>
          <label className="flex flex-col gap-1.5 text-sm font-medium text-foreground">
            Descripción
            <textarea
              value={form.description}
              onChange={(e) =>
                setForm((f) => ({ ...f, description: e.target.value }))
              }
              rows={2}
              className="resize-none rounded-lg border border-input bg-secondary px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              placeholder="Cuéntales a tus compañeros de qué se trata"
            />
          </label>
          <label className="flex flex-col gap-1.5 text-sm font-medium text-foreground">
            Precio (S/)
            <input
              type="number"
              min="0"
              value={form.price}
              onChange={(e) =>
                setForm((f) => ({ ...f, price: e.target.value }))
              }
              className="rounded-lg border border-input bg-secondary px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              placeholder="0"
            />
          </label>
          <label className="flex flex-col gap-1.5 text-sm font-medium text-foreground">
            Ubicación
            <input
              value={form.location}
              onChange={(e) =>
                setForm((f) => ({ ...f, location: e.target.value }))
              }
              className="rounded-lg border border-input bg-secondary px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              placeholder="Ej. La Victoria, Chiclayo"
            />
          </label>
          <button
            type="submit"
            className="mt-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
          >
            Publicar en el mercado y el chat
          </button>
        </form>
      </Modal>
    </div>
  )
}
