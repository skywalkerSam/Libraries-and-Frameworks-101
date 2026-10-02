"use server";

export async function submitForm(_, formData) {
  const name = formData.get("name");

  const hour = new Date().getHours();
  let greeting;

  if (hour < 12) {
    greeting = "Good morning";
  } else if (hour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  return { message: `${greeting}, ${name}` };
}

export async function getUsers() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users?_start=0&_limit=5/"
  );
  return await res.json();
}