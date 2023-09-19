import React from "react";
import { Card, CardBody, CardFooter, CardHeader } from "reactstrap";

function CustomCard({ title, content }) {
  return (
    <div className="custom-card">
      <Card>
        <CardHeader>{title}</CardHeader>
        <CardBody>{content}</CardBody>
      </Card>
    </div>
  );
}

export default CustomCard;
