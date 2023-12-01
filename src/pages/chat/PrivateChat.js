import SecondaryTopbar from "../../components/secondary-topbar/SecondaryTopbar";

function PrivateChat() {
  return (
    <div className="h-full w-full flex flex-col">
      <SecondaryTopbar title={"Jake"} showBackButton={true} />
      <div className="flex-grow min-h-0"></div>
    </div>
  );
}

export default PrivateChat;
