import { Divider, Skeleton } from "antd";

const NotificationShimmer = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="flex-grow min-h-0 p-3">
        <div className="h-full overflow-y-auto">
          {Array(5)
            .fill("")
            .map((item, index) => (
              <div key={index}>
                <div className="flex items-center p-2 rounded-md ">
                  <div>
                    <Skeleton.Avatar
                      active="true"
                      size="default"
                      shape="circle"
                    />
                  </div>
                  <div className="flex flex-col ml-4 w-full">
                    <Skeleton.Button
                      active="true"
                      size="large"
                      shape="square"
                      block="true"
                      className="h-4 w-1/2"
                    />
                    <Skeleton.Button
                      active="true"
                      size="large"
                      shape="square"
                      block="true"
                      className="mt-2 h-4"
                    />
                    <Skeleton.Button
                      active="true"
                      size="large"
                      shape="square"
                      block="true"
                      className="mt-2 h-4"
                    />
                  </div>
                </div>
                <Divider className="my-2" />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationShimmer;
