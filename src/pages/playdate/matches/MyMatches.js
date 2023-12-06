import { Avatar, Typography, Divider, Tag } from "antd";
import { useState, useEffect } from "react";
import { IoChevronForward } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import MyMatchesShimmer from "./MyMatchesShimmer";

const { Title } = Typography;

const MyMatches = () => {
  const navigate = useNavigate();
  const [showComponent, setShowComponent] = useState(false);
  const [matchesList, setMatchesList] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowComponent(true);
      setMatchesList(JSON.parse(localStorage.getItem("myMatchesProfileList")));
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  return !showComponent ? (
    <MyMatchesShimmer />
  ) : (
    <div className="h-full w-full flex flex-col overflow-y-auto">
      {matchesList.map((matchItem, index) => (
        <div key={index}>
          <div
            className="flex items-center"
            onClick={() => navigate("profile/" + matchItem.id)}
          >
            <div>
              <Avatar
                size={84}
                src={matchItem.pet_details?.image}
                shape="square"
              />
            </div>
            <Title level={4} className="m-0 ml-3 text-gray-900">
              {matchItem.pet_details?.name}
            </Title>
            {matchItem.past_playdates.length === 0 && (
              <Tag className="ml-2" color="#ff9800">
                New Match
              </Tag>
            )}
            <div className="h-full flex ml-auto items-center">
              <IoChevronForward className="text-2xl text-gray-700" />
            </div>
          </div>
          <Divider className="my-2" />
        </div>
      ))}
    </div>
  );
};

export default MyMatches;
