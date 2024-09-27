import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function UserCard({ name, email, id, username }) {
  return (
    <Card sx={{ width: "350px" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {`${id} - ${username} `}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          name: {name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          email: {email}
        </Typography>
      </CardContent>
    </Card>
  );
}
