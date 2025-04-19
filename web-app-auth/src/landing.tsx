import { useUser } from "@stackframe/react";
import { useState } from "react";

export default function Landing() {
  const user = useUser();
  const [copied, setCopied] = useState(false);

  return (
    <div>
      {user?.id && (
        <div className="flex flex-col justify-center items-center bg-gray-900 text-white h-screen">
          <p className="text-2xl text-center">
            Paste your user ID into the app
          </p>
          <span className="mt-2 text-center">User ID: {user.id}</span>
          <button
            onClick={async () => {
              await navigator.clipboard.writeText(user.id);
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
            className="mt-2 ml-2 px-2 py-1 text-sm bg-gray-700 hover:bg-gray-600 text-white rounded"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      )}
    </div>
  );
}
