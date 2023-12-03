import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

import React from "react";
import { Form } from "@remix-run/react";

interface AuthProps {
  mode: "login" | "register";
}

const Auth: React.FC<AuthProps> = ({ mode = "register" }) => {
  return (
    <div className="min-h-screen flex">
      {/* 左侧标语 */}
      <div className="hidden md:flex md:w-1/3 bg-gray-900 text-white p-12  flex-col justify-between">
        {/* 欢迎 */}
        <div className="flex items-center">
          <IconHouse className="text-white h-6 w-6" />
          <h1 className="text-2xl font-bold ml-2">欢迎加入</h1>
        </div>
        {/* 格言 */}
        <div>
          <blockquote>“在生活中探索，于代码中实践。”</blockquote>
          <cite className="block mt-4"> —— 码上人生，共创无限可能</cite>
        </div>
      </div>
      {/* 右侧登录界面 */}
      <div className="w-full md:w-2/3 p-12 flex flex-col justify-between">
        <div className="text-right flex-grow-0">
          {/* () */}
        </div>
        <div className="flex-auto flex justify-center items-center">
          <div className="max-w-md mt-10">
            <h2 className="text-2xl font-bold mb-2">码上人生</h2>
            <p className="mb-6 text-gray-500">每行代码，都是解决问题的钥匙</p>
            <Form method="POST">
              <div className="flex flex-col space-y-4 mb-4">
                <Input placeholder="邮箱" name="email" type="email" />
                <Input placeholder="密码" name="password" type="password" />
                {mode === "register" && (
                  <Input
                    placeholder="确认密码"
                    name="verifyPassword"
                    type="password"
                  />
                )}
                <Button className="bg-black text-white">登 录</Button>
              </div>
              <div className="flex items-center my-4">
                <div className="flex-grow border-t border-gray-300" />
                <span className="flex-shrink mx-4 text-gray-500">
                  第三方登录
                </span>
                <div className="flex-grow border-t border-gray-300" />
              </div>
              <div className="flex space-x-3">
                <Button className="flex-grow bg-gray-700 text-white">
                  <IconGithub className="text-white h-5 w-5 mr-2" />
                  Github
                </Button>
              </div>
            </Form>
            <p className="mt-6 text-gray-600 text-sm">
              点击继续即表示您同意我们的{" "}
              <a className="text-blue-600" href="#">
                服务条款
              </a>{" "}
              和{" "}
              <a className="text-blue-600" href="#">
                隐私政策
              </a>
              。{"\n                  "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

function IconGithub(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function IconHouse(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

export default Auth;
