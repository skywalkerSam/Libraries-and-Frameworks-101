"use client";

import { useActionState } from "react";
import { submitForm } from "~/actions/server-actions";

export default function Greeter() {
  const [state, submit, isPending] = useActionState(submitForm, {
    message: "",
  });

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <form
        action={submit}
        className="p-6 rounded-2xl shadow-md w-full max-w-md"
      >
        <h2 className="text-3xl text-center font-semibold mb-12">
          Greet Someone...
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <button
          type="submit"
          disabled={isPending}
          className="cursor-pointer w-full mt-4 p-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 disabled:bg-gray-400 transition-all"
        >
          {isPending ? "Greeting..." : "Greet"}
        </button>

        {state.message && (
          <p className="mt-10 text-center font-semibold text-xl">
            {state.message}!
          </p>
        )}
      </form>
    </div>
  );
}
