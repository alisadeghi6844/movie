import React from "react";
import Typography from "../../components/typography/Typography";
import FeatureLoading from "../../components/loading/FeatureLoading";

const LoadingPage = (props) => {
  const { text = "درحال بارگذاری ..." } = props;
  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-col">
      <FeatureLoading size="xxl" />
      <Typography className="mt-6 text-primary-500 text-xl">
        {text && text}
      </Typography>
    </div>
  );
};

export default LoadingPage;
