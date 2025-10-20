import { Stack } from "@mui/material";
import React from "react";

const TopAgentCard = () => {
  return (
    <Stack>
      <div className="top-agent-card">
        <img src="/img/profile/girl.svg" alt="atyped" />
        <strong style={{ color: "bleck" }}>Mary Jane</strong>
        <span>Agent</span>
      </div>
    </Stack>
  );
};

export default TopAgentCard;
