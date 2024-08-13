import React, { useEffect, useState } from "react";
import Dialog from "../components/dialog";
import Table from "../components/table";
import { addUser, getProfile } from "../service/action";
import Header from "../layout/header";
import Search from "../components/search";

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const profile = getProfile();
    if (!profile) {
      window.location.href = "/login";
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    const form = new FormData(event.target);
    const data = Object.fromEntries(form.entries());
    const newUser = {
      id: new Date().getTime(),
      nama: data.nama,
      alamat: data.alamat,
      role: data.role,
    };
    addUser(newUser);
    setIsLoading(false);
  };

  return (
    <div className="h-screen px-4 bg-white dark:bg-stone-900">
      <section className="max-w-6xl py-4 mx-auto">
        <Header />
        <div className="flex items-center justify-between">
          <Search />
          <Dialog
            title="Tambah User"
            isLoading={isLoading}
            onSubmit={handleSubmit}
          />
        </div>
        <Table />
      </section>
    </div>
  );
}
