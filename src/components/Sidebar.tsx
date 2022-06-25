import { useGetLessonsQuery } from "../graphql/generated";

import { LessonsCard } from "./LessonCard";

export function Sidebar() {
  const { data } = useGetLessonsQuery()

  return (
    <aside className="w-[348px] bg-gray-100 p-6 drop-shadow-md">
      <span className="font-nunito font-bold text-gray-700 text-2xl pb-6 mb-6 border-b border-gray-300 block tracking-wide">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map(lesson => (
          <LessonsCard
            key={lesson.id}
            title={lesson.title}
            slugProp={lesson.slug}
            availableAt={new Date(lesson.availableAt)}
            type={lesson.lessonType}
          />
        ))}

      </div>
    </aside>
  )
}