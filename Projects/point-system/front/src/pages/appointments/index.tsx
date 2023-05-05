import React from "react";

import Table from "../../shared/components/Table";
import Footer from "../../shared/components/Footer";
import Container from "../../shared/components/Container";

const Appointments = () => {
  const headers = ["Colaborador", "Data", "Entrada", "Intervalo", "Fim intervalo", "Ações"];
  const rows = [{}];

  return (
    <Container nameIcon="MdDashboard" titleComponent="Marcações">
      <Table data={{ headers, rows }} />
      <Footer />
    </Container>
  );
};

export default Appointments;
