import QuestionItem from "~/components/QuestionItem";

const question = () => (
  <>
    <QuestionItem
      className="w-6/12 mx-auto mt-10"
      brief={
        "According to the official website(opens in a new tab), PostgresJS is the fastest fully featured PostgreSQL client for Node.js and Deno.Drizzle ORM natively supports postgresjs driver with drizzle-orm/postgres-js package."
      }
      authorName={"游戏人生"}
      avatarSrc={"https://github.com/shadcn.png"}
      timeAgo={"2 分钟前"}
      views={"1500"}
      likes={"1500"}
      comments={"3500"}
      onAuthorClick={function (): void {
        throw new Error("Function not implemented.");
      }}
      onLike={function (): void {
        throw new Error("Function not implemented.");
      }}
      onComment={function (): void {
        throw new Error("Function not implemented.");
      }}
      tags={["PostgreSQL", "PostgresJS", "Drizzle ORM"]}
    />
  </>
);
export default question;
