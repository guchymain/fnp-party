import { Link } from "react-router-dom";
import { formatDate } from "../utils/formatters.js";
import Card from "./Card.jsx";
import { Badge } from "./Badge.jsx";

export default function NewsCard({ article }) {
  return (
    <Card as="article" className="flex h-full flex-col gap-3">
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
    </Card>
  );
}
