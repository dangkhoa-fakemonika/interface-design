function Tags(props){
    let {text, variant = "base"} = props;

    return (
        <div className={"w-fit h-fit text-center " + (variant === "base" ? "bg-main-accent" : variant === "disabled" ? "bg-gray-300" : "bg-background-contrast")}>
            <div className={"text-normal-text text-black opacity-60 mx-2 my-1"}>
                {text}
            </div>
        </div>
    )
}

export default Tags;