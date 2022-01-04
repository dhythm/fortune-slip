import { Button, Card, CardContent, Typography } from "@mui/material";
import React, { FC, useState } from "react";
import "./App.css";

const lucks = ["大吉", "吉", "中吉", "小吉", "末吉", "凶", "大凶"];

const App: FC = () => {
  const [idx, setIdx] = useState<number | null>(null);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Button
          variant="contained"
          onClick={() => {
            setIdx(Math.round(Math.random() * (lucks.length - 1)));
          }}
        >
          {idx === null ? "占う" : "もう一度占う"}
        </Button>
        {idx !== null && <Typography fontSize={24}>{lucks[idx]}</Typography>}
      </CardContent>
    </Card>
  );
};

export default App;
