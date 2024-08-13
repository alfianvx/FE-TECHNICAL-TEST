import { useEffect, useState } from "react";
import Dropdown from "../components/dropdown";
import { getProfile } from "../service/action";
import { Link } from "react-router-dom";
import ThemeToggle from "../components/theme";

export default function Header() {
  const [nama, setNama] = useState("");
  const profile = getProfile();

  useEffect(() => {
    setNama(profile.username);
  }, [profile]);

  return (
    <header className="flex justify-between py-5 w-h-full">
      <Link
        to="/dashboard"
        className="text-2xl font-medium dark:text-stone-100"
      >
        Dashboard
      </Link>
      <nav className="flex items-center gap-3">
        <ThemeToggle />
        <Dropdown title={`Halo, ${nama}`} options={["profile", "Log out"]} />
      </nav>
    </header>
  );
}
