import React, { useEffect, useState } from "react";
import { deleteUser, editUser, getUsers } from "../service/action";
import Button from "./button";
import Dialog from "./dialog";

export default function Table() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const fetchData = async () => {
    const users = await getUsers();
    setData(users);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteItem = (id) => {
    deleteUser(id);
    fetchData();
  };

  const handleEditButton = (e, id) => {
    e.preventDefault();
    const { nama, alamat, role } = e.target;
    const updatedData = {
      nama: nama.value,
      alamat: alamat.value,
      role: role.value,
    };
    editUser(id, updatedData);
    setTimeout(() => {
      fetchData();
    }, 500);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div>
      <table className="min-w-full dark:bg-white">
        <thead>
          <tr className="text-left">
            <th className="p-2 border border-black">Nama</th>
            <th className="p-2 border border-black">Alamat</th>
            <th className="p-2 border border-black">Role</th>
            <th className="p-2 text-center border border-black">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.length === 0 ? (
            <tr>
              <td colSpan="4" className="p-4 text-center border border-black">
                Belum ada data user.
              </td>
            </tr>
          ) : (
            currentItems.map((user) => (
              <tr key={user.id}>
                <td className="p-2 border border-black">{user.nama}</td>
                <td className="p-2 border border-black">{user.alamat}</td>
                <td className="p-2 border border-black">{user.role}</td>
                <td className="p-2 border border-black ">
                  <div className="flex justify-center gap-3">
                    <Dialog
                      title="Edit"
                      onSubmit={(e) => handleEditButton(e, user.id)}
                      id={user.id}
                      isOpen={open}
                      mode="edit"
                    />
                    <Button title="Hapus" onClick={() => deleteItem(user.id)} />
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 mx-1 border ${
              currentPage === index + 1 ? "bg-stone-900 text-white" : "bg-white"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
