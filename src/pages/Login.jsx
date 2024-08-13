import React from "react";
import Button from "../components/button";
import Form from "../components/form";
import Input from "../components/input";
import { SignIn } from "../service/auth";

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = Object.fromEntries(form.entries());
    SignIn(data);
  };

  return (
    <div className="flex items-center justify-center w-full h-screen px-4 bg-white dark:bg-stone-600">
      <Form onSubmit={handleSubmit} title="Log in to Dashboard">
        <Input name="Username" type="text" />
        <Input name="Password" type="password" />
        <Button title="Log in" type="submit" />
      </Form>
    </div>
  );
}
