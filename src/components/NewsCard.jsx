import { Link } from "react-router-dom";
import { formatDate } from "../utils/formatters.js";
import Card from "./Card.jsx";
import { Badge } from "./Badge.jsx";
import Photo from "./Photo.jsx";

export default function NewsCard({ article }) {
  return (
    <Card as="article" flush className="group flex h-full flex-col gap-0 overflow-hidden">
      <div className="relative aspect-[16/9] overflow-hidden bg-ink-100">
        <Photo
          src={article.cover}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <Badge tone="brand">{article.category}</Badge>
        <h3 className="font-display text-lg font-bold text-ink-900">
          <Link to={`/news/${article.slug}`} className="hover:text-brand-600">
            {article.title}
          </Link>
        </h3>
        <p className="text-sm text-ink-600">{article.excerpt}</p>
        <div className="mt-auto flex items-center justify-between pt-2">
          <time dateTime={article.date} className="text-xs text-ink-400">
            {formatDate(article.date)}
          </time>
          <Link to={`/news/${article.slug}`} className="text-sm font-semibold text-brand-500 hover:underline">
            Read more →
          </Link>
        </div>
      </div>
    </Card>
  );
}