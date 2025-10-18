import { Stack } from "@mui/material";
import React from "react";

const TopAgentCard = () => {
  return (
    <Stack>
      <div className="top-agent-card">
        <img src="/img/banner/types/villa.webp" alt="atyped" />
        <strong style={{ color: "bleck" }}>Mary Jane</strong>
        <span>Agent</span>
      </div>
    </Stack>
  );
};

export default TopAgentCard;
