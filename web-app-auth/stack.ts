import { StackClientApp } from "@stackframe/react";
import { useNavigate } from "react-router-dom";

export const stackClientApp = new StackClientApp({
  // You should store these in environment variables based on your project setup
  projectId: "1b75b67f-dd3c-4ec9-a484-e4dee6bbaf7f",
  publishableClientKey: "pck_4n2gqkgkv8qjz3mtrcwebf5vj197qcy7g5akc698mm5f8",
  tokenStore: "cookie",
  redirectMethod: {
    useNavigate,
  },
});
