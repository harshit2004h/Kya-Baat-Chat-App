export { default } from "next-auth/middleware";

export const config = {
  //Setting Private Routes
  matcher: ["/dashboard"],
};
