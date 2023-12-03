import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "码上人生" },
    { name: "description", content: "欢迎来到码上人生，一个专属于程序员的高质量AI驱动的问答社区！" },
  ];
};

export default function Index() {
  return (
    <>
      欢迎来到码上人生，一个专属于程序员的高质量AI驱动的问答社区！
    </>
  );
}
