import PageHeader from "../components/PageHeader.jsx";
import NewsCard from "../components/NewsCard.jsx";
import { newsArticles } from "../data/news.js";

export default function NewsList() {
  return (
    <>
      <PageHeader eyebrow="News & Media" title="Latest News" description="Dated, sourced updates from across the party." />
      <section className="mx-auto max-w-[1920px] px-4 py-14 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {newsArticles.map((article) => (
            <NewsCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </>
  );
}
