import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";
import Button from "../components/Button.jsx";
import { Badge } from "../components/Badge.jsx";
import Photo from "../components/Photo.jsx";
import { formatDate } from "../utils/formatters.js";
import { newsArticles } from "../data/news.js";
import NotFound from "./NotFound.jsx";

export default function NewsArticle() {
  const { slug } = useParams();
  const article = newsArticles.find((a) => a.slug === slug);

  if (!article) return <NotFound />;

  return (
    <>
      <PageHeader eyebrow="News & Media" title={article.title} />
      <section className="mx-auto max-w-2xl px-4 py-14 sm:px-6">
        <div className="mb-4 flex items-center gap-3">
          <Badge tone="brand">{article.category}</Badge>
          <time dateTime={article.date} className="text-sm text-ink-400">{formatDate(article.date)}</time>
        </div>
        <div className="relative mb-6 aspect-[16/9] overflow-hidden rounded-2xl bg-ink-100">
          <Photo
            src={article.cover}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <p className="text-lg text-ink-700">{article.body}</p>
        <Button to="/news" variant="outline" className="mt-10">Back to all news</Button>
      </section>
    </>
  );
}
