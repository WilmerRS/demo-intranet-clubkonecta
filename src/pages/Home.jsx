import { Award, PartyPopper, Trophy, Users } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BenefitCard from '../components/cards/BenefitCard'
import ChannelCard from '../components/cards/ChannelCard'
import EventCard from '../components/cards/EventCard'
import SummaryCard from '../components/cards/SummaryCard'
import VideoCard from '../components/cards/VideoCard'
import ChatbotFab from '../components/common/ChatbotFab'
import FlyerCarousel from '../components/common/FlyerCarousel'
import ScrollCarousel from '../components/common/ScrollCarousel'
import Avatar from '../components/layout/Avatar'
import Modal from '../components/feedback/Modal'
import { benefits } from '../mocks/benefits'
import { channels } from '../mocks/channels'
import { events } from '../mocks/events'
import { flyers } from '../mocks/flyers'
import { news } from '../mocks/news'
import { anniversaries, birthdays } from '../mocks/people'
import { recognitionOfTheMonth } from '../mocks/recognition'
import { survey } from '../mocks/survey'
import { videos } from '../mocks/videos'

const TODAY = new Date('2026-09-22')
const NEWS_CARD_WIDTH = 256
const NEWS_CARD_GAP = 16

function isBirthdayToday(dateStr) {
  const d = new Date(dateStr)
  return d.getDate() === TODAY.getDate() && d.getMonth() === TODAY.getMonth()
}

export default function Home() {
  const navigate = useNavigate()
  const [greetingPerson, setGreetingPerson] = useState(null)
  const [message, setMessage] = useState('')

  function handleSendGreeting() {
    setGreetingPerson(null)
    setMessage('')
  }

  const sortedNews = [...news].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  )

  return (
    <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-8">
      <div className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start">
        <div className="flex min-w-0 flex-col gap-4">
          <section>
            <FlyerCarousel slides={flyers} />
          </section>

          <section>
            <div className="mb-2 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-foreground">
                Noticias importantes
              </h2>
              <button
                type="button"
                className="text-sm font-medium text-primary hover:underline"
              >
                Ver todos
              </button>
            </div>
            <ScrollCarousel
              step={NEWS_CARD_WIDTH + NEWS_CARD_GAP}
              gap="gap-4"
            >
              {sortedNews.map((n) => (
                <div
                  key={n.id}
                  className="shrink-0"
                  style={{ width: NEWS_CARD_WIDTH }}
                >
                  <SummaryCard
                    imageUrl={n.imageUrl}
                    title={n.title}
                    date={n.date}
                    badge={n.badge}
                    comments={n.comments}
                    rating={n.rating}
                  />
                </div>
              ))}
            </ScrollCarousel>
          </section>

          <section>
            <div className="mb-2 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-foreground">
                Próximos eventos
              </h2>
              <button
                type="button"
                className="text-sm font-medium text-primary hover:underline"
              >
                Ver todos
              </button>
            </div>
            <ScrollCarousel gap="gap-4">
              {events.map((e) => (
                <EventCard key={e.id} {...e} />
              ))}
            </ScrollCarousel>
          </section>

          <section>
            <div className="mb-2 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-foreground">
                ¿Sabías que...?
              </h2>
              <button
                type="button"
                className="text-sm font-medium text-primary hover:underline"
              >
                Ver todos
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {videos.map((v) => (
                <VideoCard key={v.id} {...v} />
              ))}
            </div>
          </section>

          <section>
            <div className="mb-2 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-foreground">
                Beneficios
              </h2>
              <button
                type="button"
                className="text-sm font-medium text-primary hover:underline"
              >
                Ver todos
              </button>
            </div>
            <ScrollCarousel
              step={NEWS_CARD_WIDTH + NEWS_CARD_GAP}
              gap="gap-4"
            >
              {benefits.map((b) => (
                <div
                  key={b.id}
                  className="shrink-0"
                  style={{ width: NEWS_CARD_WIDTH }}
                >
                  <BenefitCard {...b} />
                </div>
              ))}
            </ScrollCarousel>
          </section>

          <section>
            <div className="mb-2 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-foreground">
                Kuéntanos
              </h2>
              <button
                type="button"
                onClick={() => navigate('/encuestas')}
                className="text-sm font-medium text-primary hover:underline"
              >
                Ver todos
              </button>
            </div>
            <button
              type="button"
              onClick={() => navigate('/encuestas')}
              className="block w-full cursor-pointer overflow-hidden rounded-2xl shadow-sm"
            >
              <img
                src={survey.imageUrl}
                alt={survey.title}
                className="mx-auto h-auto max-w-full"
              />
            </button>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-foreground">
              Canales legales
            </h2>
            <ScrollCarousel gap="gap-4">
              {channels.map((c) => (
                <ChannelCard key={c.id} {...c} />
              ))}
            </ScrollCarousel>
          </section>
        </div>

        <aside className="lg:sticky lg:top-20">
          <div className="flex flex-col gap-4 lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto lg:pr-1">
          <section className="relative shrink-0 overflow-hidden rounded-2xl bg-gradient-to-br from-[#0a1330] to-[#13285c] p-6 text-white">
            <div className="pointer-events-none absolute -right-8 -top-10 h-36 w-36 rounded-full bg-sky-400/20 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-14 -left-8 h-32 w-32 rounded-full bg-primary/30 blur-2xl" />

            <div className="relative flex items-start justify-between gap-3">
              <div>
                <h2 className="text-xl font-bold leading-snug">
                  ¡Refiere y
                  <br />
                  <span className="text-sky-300">suma tu futuro!</span>
                </h2>
                <p className="mt-2 text-xs text-white/70">
                  Invita a más personas a ser parte de Konecta y construyamos
                  juntos un gran equipo.
                </p>
                <button
                  type="button"
                  className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500"
                >
                  Conoce más
                </button>
              </div>

              <div className="flex h-24 w-16 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white/60">
                <Users className="h-7 w-7" />
              </div>
            </div>
          </section>

          <section className="shrink-0 rounded-xl bg-background p-4 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <PartyPopper className="h-5 w-5 text-primary" />
                <h2 className="text-base font-semibold text-foreground">
                  Cumpleaños del mes
                </h2>
              </div>
              <button
                type="button"
                className="text-sm font-medium text-primary hover:underline"
              >
                Ver todos
              </button>
            </div>

            <ScrollCarousel>
              {birthdays.map((b) => {
                const today = isBirthdayToday(b.date)
                return (
                  <div
                    key={b.id}
                    className={`flex w-20 shrink-0 flex-col items-center rounded-xl p-1.5 text-center ${
                      today ? 'bg-accent' : ''
                    }`}
                  >
                    <span
                      className={`rounded-full ${
                        today ? 'ring-2 ring-primary ring-offset-2' : ''
                      }`}
                    >
                      <Avatar user={b} size="h-11 w-11" textSize="text-sm" />
                    </span>
                    <p className="mt-1.5 w-full truncate text-[11px] font-semibold text-foreground">
                      {b.name}
                    </p>
                    <p className="text-[10px] text-muted-foreground">
                      {new Date(b.date).toLocaleDateString('es-PE', {
                        day: '2-digit',
                        month: 'short',
                      })}
                    </p>
                    {today && (
                      <button
                        type="button"
                        onClick={() => setGreetingPerson(b)}
                        className="mt-1.5 rounded-full bg-primary px-2 py-0.5 text-[11px] font-semibold text-primary-foreground hover:opacity-90"
                      >
                        Saludar
                      </button>
                    )}
                  </div>
                )
              })}
            </ScrollCarousel>
          </section>

          <section className="shrink-0 rounded-xl bg-background p-4 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              <h2 className="text-base font-semibold text-foreground">
                Aniversarios
              </h2>
            </div>
            <ScrollCarousel>
              {anniversaries.map((a) => (
                <div
                  key={a.id}
                  className="flex w-20 shrink-0 flex-col items-center text-center"
                >
                  <Avatar user={a} size="h-11 w-11" textSize="text-sm" />
                  <p className="mt-1.5 w-full truncate text-[11px] font-semibold text-foreground">
                    {a.name}
                  </p>
                  <p className="text-[10px] text-muted-foreground">
                    {a.years} años
                  </p>
                  <button
                    type="button"
                    onClick={() => setGreetingPerson(a)}
                    className="mt-1.5 rounded-full bg-primary px-2 py-0.5 text-[11px] font-semibold text-primary-foreground hover:opacity-90"
                  >
                    Felicitar
                  </button>
                </div>
              ))}
            </ScrollCarousel>
          </section>

          <section className="shrink-0 rounded-xl bg-background p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-primary" />
                <h2 className="text-base font-semibold text-foreground">
                  Reconocimientos
                </h2>
              </div>
              <button
                type="button"
                className="text-sm font-medium text-primary hover:underline"
              >
                Ver todos
              </button>
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-accent p-4">
              <Avatar
                user={recognitionOfTheMonth}
                size="h-14 w-14"
                textSize="text-base"
              />
              <div className="flex-1">
                <p className="text-sm font-semibold text-foreground">
                  ¡Felicidades, {recognitionOfTheMonth.name.split(' ')[0]}!
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {recognitionOfTheMonth.message}
                </p>
              </div>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Award className="h-5 w-5" />
              </span>
            </div>
          </section>
        </div>
        </aside>
      </div>

      <Modal
        open={!!greetingPerson}
        onClose={() => setGreetingPerson(null)}
        title={`Enviar mensaje a ${greetingPerson?.name ?? ''}`}
      >
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            {greetingPerson && (
              <Avatar user={greetingPerson} size="h-10 w-10" />
            )}
            <div>
              <p className="text-sm font-semibold text-foreground">
                {greetingPerson?.name}
              </p>
              <p className="text-xs text-muted-foreground">
                {greetingPerson?.role}
              </p>
            </div>
          </div>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            placeholder="Escribe tu mensaje de cumpleaños..."
            className="w-full resize-none rounded-lg border border-input bg-secondary px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
          <button
            type="button"
            onClick={handleSendGreeting}
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
          >
            Enviar mensaje
          </button>
        </div>
      </Modal>

      <ChatbotFab />
    </div>
  )
}
