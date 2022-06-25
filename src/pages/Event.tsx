import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";
import { VideoFree } from "../components/VideoFree";

export function Event() {
  const { slug } = useParams<{ slug: string }>()

  console.log(slug)

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug
          ? <Video lessonSlug={slug} />
          : <VideoFree />
        }
        <Sidebar />
      </main>
    </div>
  )
}