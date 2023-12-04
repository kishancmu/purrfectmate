import React from "react";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="h-full w-full flex items-center justify-center">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" onClick={() => navigate("/main/home")}>
            Back Home
          </Button>
        }
      />
    </div>
  );
};

export default Error;
