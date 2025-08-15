import {useNavigate} from "react-router";

function Sidebar() {
    const navigate = useNavigate();

    return (
        <div className={"w-full flex flex-col gap-2 p-4 *:text-main-accent *:hover:text-secondary-accent *:transition-colors *:duration-100 *:cursor-pointer"}>
            <div className="text-label py-2 font-bold">Quick Access</div>
            <div className="text-section-title" onClick={() => navigate("/personalized-page")}>What's for me?</div>
            <div className="text-section-title">My Collection</div>
            <div className="text-section-title">Filters</div>
            <div className="text-label py-2 font-bold">Browse</div>
            <div className="text-section-title">Games</div>
            <div className="text-section-title">Genres</div>
            <div className="text-section-title">Publishers</div>
            <div className="text-section-title">Tags</div>
            <div className="text-section-title">Sales</div>
            <div className="text-label py-2 font-bold">Misc</div>
            <div className="text-section-title">How to Use</div>
            <div className="text-section-title">Terms and Conditions</div>
            <div className="text-section-title">Support Us</div>
        </div>
    );
}

export default Sidebar;