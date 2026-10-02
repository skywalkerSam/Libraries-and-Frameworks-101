"use client";

import { useActionState, startTransition } from "react";
import { getUsers } from "~/actions/server-actions";

export default function FetchUsers() {
  const [users, fetchAction, isPending] = useActionState(getUsers, []);

  return (
    <div className="p-6 max-w-lg mx-auto text-center">
      <h2 className="text-3xl font-semibold mb-12">Fetch Some Data...</h2>
      <button
        // onClick={fetchAction}

        // Always wrap the action in a startTransition()
        onClick={() => startTransition(() => fetchAction())}
        disabled={isPending}
        className="px-4 py-2 cursor-pointer bg-green-500 text-foreground rounded-lg hover:bg-green-600 disabled:bg-gray-400 font-bold"
      >
        {isPending ? "Fetching Users..." : "Fetch Users"}
      </button>

      <ul className="mt-8 space-y-2">
        {users.map((user) => (
          <li key={user.id} className="rounded-2xl border-2 m-4 p-8">
            <p className="text-xl">{user.name}</p>
            <p className="text-gray-600">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
