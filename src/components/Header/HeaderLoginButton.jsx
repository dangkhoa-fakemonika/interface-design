import {PersonIcon} from "@radix-ui/react-icons";

function HeaderLoginButton(){
    return (
      <div className={"group flex flex-row gap-2 text-background-pop opacity-60 hover:opacity-100 hover:translate-x-0 transition-all duration-300 translate-x-13"}>
          <PersonIcon width={"24"} height={"24"} className={"text-background-pop transition-opacity duration-300"}/>
          <div className={"group-hover:opacity-100 opacity-0 transition-all duration-300"}>
              Log in
          </div>
      </div>
    );
}

export default HeaderLoginButton;