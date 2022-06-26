import { DefaultUi, Player, Youtube } from "@vime/react";
import { CaretRight, DiscordLogo, FileArrowDown, Image, Lightning } from "phosphor-react";

import '@vime/core/themes/default.css'
import { useGetLessonBySlugQuery } from "../graphql/generated";

interface VideoProps {
  lessonSlug: string
}

export function Video({ lessonSlug }: VideoProps) {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: lessonSlug
    }
  })

  if (!data || !data.lesson) {
    return (
      <div className="flex-1">
        <p>Carregando...</p>
      </div>
    )
  }

  return (
    <div className="flex-1">
      <div className="bg-gray-500 flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId} key={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl text-gray-800">
              {data.lesson.title}
            </h1>
            <p className="text-md text-gray-700 mt-4 leading-relaxed">
              {data.lesson.description}
            </p>

            {data.lesson.teacher && (
              <div className="flex items-center gap-4 mt-6">
                <img
                  className="h-16 rounded-full border-2 border-purple-500"
                  src={data.lesson.teacher.avatarURL}
                  alt="Foto do professor"
                />

                <div className="flex flex-col gap-1 leading-relaxed">
                  <strong className="text-gray-800 tracking-wide text-xl block font-medium">
                    {data.lesson.teacher.name}
                  </strong>

                  <span className="text-gray-600 text-sm block">
                    {data.lesson.teacher.bio}
                  </span>
                </div>
              </div>
            )}

          </div>

          <div className="flex flex-col gap-4">
            <a href="#" className="p-4 text-sm text-gray-800 bg-green-500 flex items-center rounded font-nunito font-bold uppercase gap-2 justify-center hover:bg-green-400 transition-colors">
              <DiscordLogo size={20} />
              Comunidade do Discord
            </a>

            <a href="#" className="p-4 text-sm text-purple-700 border border-purple-700 flex items-center rounded font-nunito font-bold uppercase gap-2 justify-center hover:bg-purple-100 transition-colors">
              <Lightning size={20} />
              Acesse o Desafio
            </a>
          </div>
        </div>

        <div className="gap-8 mt-20 grid grid-cols-2" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))' }}>
          <a
            className="group bg-gray-100 rounded overflow-hidden flex items-stretch gap-6 drop-shadow-xl hover:drop-shadow-md transition-all"
            href="#"
          >
            <div
              className="bg-purple-800 h-full p-6 flex items-center text-gray-100"
            >
              <FileArrowDown size={32} />
            </div>
            <div
              className="py-6 leading-relaxed flex-1"
            >
              <strong className="text-xl font-medium">
                Material Complementar
              </strong>

              <p className="text-sm text-gray-600 mt-2">
                Acesse o material complementar para acelerar o seu desenvolvimento
              </p>
            </div>
            <div
              className="h-full p-6 flex items-center justify-center text-purple-500 group-hover:text-purple-800 transition-colors"
            >
              <CaretRight size={24} />
            </div>
          </a>

          <a
            className="group bg-gray-100 rounded overflow-hidden flex items-stretch gap-6 drop-shadow-xl hover:drop-shadow-md transition-all"
            href="#"
          >
            <div
              className="bg-purple-800 h-full p-6 flex items-center text-gray-100"
            >
              <Image size={32} />
            </div>
            <div
              className="py-6 leading-relaxed flex-1"
            >
              <strong className="text-xl font-medium">
                Wallpapers exclusivos
              </strong>

              <p className="text-sm text-gray-600 mt-2">
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
              </p>
            </div>
            <div
              className="h-full p-6 flex items-center justify-center text-purple-500 group-hover:text-purple-800 transition-colors"
            >
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}