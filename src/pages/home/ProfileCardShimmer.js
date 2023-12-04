import { Divider, Form, Radio, Skeleton, Space, Switch } from "antd";
const ProfileCardShimmer = () => {
  return (
    <div className="h-full w-full flex flex-col bg-white shadow-md rounded-lg p-3 border border-solid border-gray-200">
      <div className="h-2/3 relative">
        <Skeleton.Image active="true" className="h-full w-full" />
      </div>
      <div className="flex my-4 items-center">
        <Skeleton.Image active="true" className="w-16 h-16" />
        <Skeleton.Button
          active="true"
          size="large"
          shape="square"
          className="ml-2 h-6"
        />
        <div className="ml-auto">
          <Skeleton.Button active="true" size="large" shape="square" />
        </div>
      </div>
      <div className="flex justify-center gap-3 mt-auto">
        <Skeleton.Button
          active="true"
          size="large"
          shape="square"
          block="true"
        />
        <Skeleton.Button
          active="true"
          size="large"
          shape="square"
          block="true"
          className="flex-grow"
        />
      </div>
    </div>
  );
};

export default ProfileCardShimmer;
