import React from "react";

import AccessProfileItem from "./AccessProfileItem";

const AccessProfile = ({ values }: { values: string[] }) => {
  return (
    <>
      {values.map((value) => (
        <AccessProfileItem value={value} key={value} />
      ))}
    </>
  );
};

export default AccessProfile;
