function Tags(props){
    return (
        <div className={"bg-main-accent w-fit h-fit text-center"}>
            <div className={"text-black opacity-60 mx-2 my-1"}>
                {props.text}
            </div>
        </div>
    )
}

export default Tags;