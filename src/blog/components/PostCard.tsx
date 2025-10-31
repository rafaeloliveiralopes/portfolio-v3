import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import type { Post } from "../utils/content";

interface PostCardProps {
  post: Post;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const formattedDate = new Date(post.date).toLocaleDateString(post.lang, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link to={post.url} className="block h-full">
      <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
        {post.cover && (
          <div className="overflow-hidden rounded-t-lg">
            <img
              src={post.cover}
              alt={post.title}
              className="w-full h-48 object-cover transition-transform hover:scale-105"
              loading="lazy"
            />
          </div>
        )}
        <CardHeader>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <Calendar className="h-4 w-4" />
            <time dateTime={post.date}>{formattedDate}</time>
            {post.readingTime && (
              <>
                <span>•</span>
                <Clock className="h-4 w-4" />
                <span>{`${post.readingTime} min`}</span>
              </>
            )}
          </div>
          <CardTitle className="text-2xl font-bold hover:text-primary transition-colors">
            {post.title}
          </CardTitle>
          <CardDescription className="mt-2 line-clamp-2">
            {post.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
};
