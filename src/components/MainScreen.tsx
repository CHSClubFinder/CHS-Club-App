import ClubComponent from "./ClubComponent";
import "./MainScreen.css";
import clubs from "./Clubs.json"
import { useState } from "react";
const MainScreen = () => {
    const [searchInput, setSearchInput] = useState("")
    const [search, setSearch] = useState("")

    /** Returns each value in an array of strings separated by commas */
    function printArray(arr:string[]) {
        var arrStr = "";
        for (let i = 0; i < arr.length; i++) {
            if (i == 0) {
                arrStr += arr[i];
            } else {
                arrStr += ", " + arr[i];
            }
        }
        return arrStr;
    }

    /** Returns true if the search bar has the same characters as a club title, or no characters at all */
    function searchBool(title:string) {
        return searchInput.toLowerCase() == title.substring(0, searchInput.length).toLowerCase() || searchInput == ""
    }

    return (
        <div className="MainScreen">
            <input onKeyDown={(e) => {
                if (e.key === "Enter") {
                    setSearchInput(search)
                }
            }} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search..." className="SearchBar"/>
            <div style={{height: "1vw"}}/>
            <div className="MainFlex">
                {  
                    clubs.filter((element) => searchBool(element.title)).map((clubs,i) => (
                        <div key={i}>
                            <ClubComponent 
                                title={clubs.title} 
                                description={clubs.description} 
                                subjects={printArray(clubs.subjects)} 
                                advisor = {clubs.advisor} 
                                meetingTime={printArray(clubs.meetingTime)} 
                                calendar={clubs.calendar} image={clubs.image}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
 
export default MainScreen;