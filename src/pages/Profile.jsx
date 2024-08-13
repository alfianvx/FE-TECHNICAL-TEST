import { useEffect, useState } from "react";
import Button from "../components/button";
import Form from "../components/form";
import Input from "../components/input";
import Header from "../layout/header";
import { getProfile, updateProfile } from "../service/action";

export default function Profile() {
  const [nama, setNama] = useState("");

  useEffect(() => {
    const profile = getProfile();
    if (!profile) {
      window.location.href = "/login";
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = Object.fromEntries(form.entries());
    updateProfile(data);
  };

  return (
    <div className="h-screen px-4 bg-white dark:bg-stone-900">
      <section className="max-w-6xl py-4 mx-auto space-y-5">
        <Header />
        <Form title="Update Profile" onSubmit={handleSubmit}>
          <Input name="Username" type="text" />
          {/* <Input name="Password" type="password" /> */}
          <Button title="Update" type="submit" />
        </Form>
      </section>
    </div>
  );
}
