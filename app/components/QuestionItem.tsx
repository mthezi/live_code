import { CardHeader, CardFooter, Card } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Avatar, AvatarFallback } from "~/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

interface QuestionItemProps {
  className?: string;
  brief: string;
  authorName: string;
  avatarSrc: string;
  timeAgo: string;
  views: string;
  likes: string;
  comments: string;
  onAuthorClick: () => void;
  onLike: () => void;
  onComment: () => void;
  tags: string[];
}

const QuestionItem: React.FC<QuestionItemProps> = ({
  className,
  brief,
  authorName,
  avatarSrc,
  timeAgo,
  views,
  likes,
  comments,
  onAuthorClick,
  onLike,
  onComment,
  tags,
}) => {
  return (
    <Card
      className={`dark:bg-gray-800 bg-white px-4 rounded-lg ${className}`}
    >
      <CardHeader>
        <h2 className="dark:text-white text-gray-900 text-lg font-semibold">
          {brief}
        </h2>
      </CardHeader>
      <div className="mb-6 px-6">
        <div className="flex flex-wrap gap-2">
          {tags.map((badge, index) => (
            <Badge key={index} variant="outline">
              {badge}
            </Badge>
          ))}
        </div>
      </div>
      <CardFooter className="flex items-center justify-between">
        {/* 作者 */}
        <div className="flex items-center">
          <Avatar className="w-8 h-8 mr-2" onClick={onAuthorClick}>
            <AvatarImage src={avatarSrc} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <span className="dark:text-gray-300 text-gray-700">
            {authorName} · {timeAgo}
          </span>
        </div>
        {/* 分析信息 */}
        <div className="flex items-center">
          <IconEye className="dark:text-gray-300 text-gray-700 w-5 h-5 mr-1" />
          <span className="dark:text-gray-300 text-gray-700 mr-4">
            {views} 浏览
          </span>
          <IconThumbsup
            className="dark:text-gray-300 text-gray-700 w-5 h-5 mr-1"
            onClick={onLike}
          />
          <span className="dark:text-gray-300 text-gray-700 mr-4">
            {likes} 赞同
          </span>
          <IconMessagecircle
            className="dark:text-gray-300 text-gray-700 w-5 h-5 mr-1"
            onClick={onComment}
          />
          <span className="dark:text-gray-300 text-gray-700">
            {comments} 评论
          </span>
        </div>
      </CardFooter>
    </Card>
  );
};

function IconEye(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function IconMessagecircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
    </svg>
  );
}

function IconThumbsup(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  );
}

export default QuestionItem;
