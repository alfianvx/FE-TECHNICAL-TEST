import React, { useState, useRef, useEffect } from "react";
import Input from "./input";
import Form from "./form";
import Button from "./button";
import { getUserById } from "../service/action";

export default function Dialog({ title, onSubmit, id, mode }) {
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(mode === "edit");
  const modalRef = useRef(null);
  const user = getUserById(id);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Button title={title} onClick={handleToggle} variant="secondary" />
      {open && (
        <div
          className="fixed inset-0 flex items-center justify-center dark:backdrop-filter backdrop-blur-sm"
          ref={modalRef}
        >
          <div
            className="p-5 bg-white border border-black w-80 dark:bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <Form
              title={isEdit ? "Edit User" : "Tambah User"}
              onSubmit={onSubmit}
            >
              <Input type="text" name="Nama" value={isEdit ? user.nama : ""} />
              <Input
                type="text"
                name="Alamat"
                value={isEdit ? user.alamat : ""}
              />
              <Input type="text" name="Role" value={isEdit ? user.role : ""} />
              <div className="flex justify-end gap-2">
                <Button title="Batal" onClick={handleToggle} />
                <Button title={isEdit ? "Edit" : "Tambah"} type="submit" />
              </div>
            </Form>
          </div>
        </div>
      )}
    </div>
  );
}
