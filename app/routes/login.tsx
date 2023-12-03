import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import Auth from "~/components/Auth";
import { authenticator } from "~/services/auth.server";

const auth = () => (
  <>
    <Auth mode="login" />
  </>
);
export default auth;

export async function action({ request }: ActionFunctionArgs) {
  return await authenticator.authenticate("user-pass", request, {
    successRedirect: "/",
    failureRedirect: "/login",
  });
}

export async function loader({ request }: LoaderFunctionArgs) {
  return await authenticator.isAuthenticated(request, {
    successRedirect: "/",
  });
}
