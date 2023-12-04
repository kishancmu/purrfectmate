import { Divider, Skeleton } from "antd";

const UpcomingPlayDateListShimmer = () => {
  return (
    <div className="h-full w-full flex flex-col overflow-y-auto">
      {Array(4)
        .fill("")
        .map((_, index) => (
          <div key={index}>
            <div className="flex items-center">
              <div>
                <Skeleton.Avatar
                  active="true"
                  className="h-full w-full"
                  size={84}
                  shape="square"
                />
              </div>
              <div className="flex flex-col ml-3">
                <Skeleton.Button
                  active="true"
                  size="large"
                  shape="square"
                  block="true"
                  className="h-4 w-1/2"
                />
                <div className="flex items-center mt-2">
                  <Skeleton.Button
                    active="true"
                    size="large"
                    shape="square"
                    block="true"
                    className="h-4 w-1/2"
                  />
                </div>
                <div className="flex items-center mt-2">
                  <Skeleton.Button
                    active="true"
                    size="large"
                    shape="square"
                    block="true"
                    className="h-4"
                  />
                  <Skeleton.Button
                    active="true"
                    size="large"
                    shape="square"
                    block="true"
                    className="h-4 ml-2"
                  />
                </div>
              </div>
            </div>
            <Divider className="my-2" />
          </div>
        ))}
    </div>
  );
};

export default UpcomingPlayDateListShimmer;
