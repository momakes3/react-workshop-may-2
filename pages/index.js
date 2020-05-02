import React from "react";

export default () => {
  let [value, setValue] = React.useState("");

  let profilePhoto = "https://api.there.pm/rest/twivatar/" + value;

  return (
    <>
      <img src={profilePhoto} />

      <br />
      <input onChange={(event) => setValue(event.target.value)} />
    </>
  );
};
