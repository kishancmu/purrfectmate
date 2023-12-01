import SecondaryTopbar from "../../components/secondary-topbar/SecondaryTopbar";

function PackChat() {
  return (
    <div className="h-full w-full flex flex-col">
      <SecondaryTopbar title={"SunnyVale Pack"} showBackButton={true} />
      <div className="flex-grow min-h-0"></div>
    </div>
  );
}

export default PackChat;
