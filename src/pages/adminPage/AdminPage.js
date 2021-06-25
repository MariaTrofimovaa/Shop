import React from "react";
import AdvForms from "../../Components/admin/AdvForm";

const AdminPage = ({ data }) => {
  return (
    <>
      <h2>AdminPage</h2>
      <AdvForms {...data} />;
    </>
  );
};

export default AdminPage;
