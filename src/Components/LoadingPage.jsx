import React, { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate } from "react-router";

const LoadingPage = () => {
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  function haha() {}
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/TodoApp");
    }, 4000);
  }, []);
  return (
    <div className="loader ">
      <ClipLoader
        size={300}
        margin={200}
        color={"#123abc"}
        loading={loading}
        speedMultiplier={1.5}
        aria-label="DotLoader"
        data-testid="DotLoader"
      />
    </div>
  );
};

export default LoadingPage;
