import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { CheckCircle, Lock } from 'phosphor-react'
import { Link, useParams } from 'react-router-dom'

interface LessonProps {
  title: string
  slugProp: string
  availableAt: Date
  type: 'live' | 'class'
}

export function LessonsCard({ title, slugProp, availableAt, type }: LessonProps) {
  const { slug } = useParams<{ slug: string }>()

  const isLessonAvailable = isPast(availableAt)
  const availableDateFormatted = format(availableAt, "EEEE' • ' d ' de ' MMMM ' • ' k'h'mm", {
    locale: ptBR
  })

  const isActiveLesson = slug === slugProp

  return (
    <Link to={`/event/lesson/${slugProp}`} className='group'>
      <span className="text-gray-600 text-sm">
        {availableDateFormatted}
      </span>

      <div
        className={`rounded border ${isActiveLesson && 'bg-green-500 '} border-gray-300 p-4 mt-2 group-hover:border-green-500 transition-all`}
      >
        <header className="flex items-center justify-between">
          {isLessonAvailable
            ? (
              <span className={`text-sm ${isActiveLesson && 'text-gray-200 '}  text-purple-700 flex align-center gap-1`}>
                <CheckCircle size={20} weight="light" />
                Conteúdo liberado
              </span>

            )
            : (
              <span className="text-sm text-orange-600 flex align-center gap-1">
                <Lock size={20} weight="light" />
                Em breve
              </span>
            )
          }
          <span className={`text-xs ${isActiveLesson && 'text-gray-200 border-gray-200'} ${type === 'live' ? 'text-blue-500 rounded border border-blue-500 py-[2px]' : 'text-green-600 rounded border border-green-600 py-[2px]'} px-2`}>
            {type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>

        <strong className={`text-gray-700 mt-4 block tracking-wide ${isActiveLesson && 'text-gray-200 '}`}>
          {title}
        </strong>
      </div>
    </Link>
  )
}