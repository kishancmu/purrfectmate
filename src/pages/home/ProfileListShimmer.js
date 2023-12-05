import { Divider, Form, Radio, Skeleton, Space, Switch } from "antd";

const ProfileListShimmer = () => {
  return (
    <>
      {Array(5)
        .fill("")
        .map((item, index) => (
          <div
            key={index}
            className="shadow-lg rounded-md flex p-2 mb-5 border border-solid border-gray-200"
          >
            <Skeleton.Image active="true" className="h-24 w-24" />
            <div className="flex flex-col ml-3 justify-center">
              <Skeleton.Button
                active="true"
                size="large"
                shape="square"
                className="h-6"
              />
              <div className="flex mt-3">
                <Skeleton.Button
                  active="true"
                  size="medium"
                  shape="square"
                  className="h-6"
                />
                <Skeleton.Button
                  active="true"
                  size="medium"
                  shape="square"
                  className="ml-2 h-6"
                />
                <Skeleton.Button
                  active="true"
                  size="medium"
                  shape="square"
                  className="ml-2 h-6"
                />
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default ProfileListShimmer;
