import React, { useState } from "react";
import { Input } from "reactstrap";
// import closeIcon from "../../../icons/close.png";
import searchIcon from "../../../icons/Search.png";
import LandingSearchModal from "../landingComponents/LandingSearchModal"


function LandingSearch() {
  const [searchPlace, setSearchPlace] = useState("")
  const [placeList, setPlaceList] = useState(localStorage.getItem("places".split + ","))
  const [modalOpen, setModalOpen] = useState(false)
  
  const modalToggle = () => {
    if(modalOpen === true) {
      setModalOpen(false)
    } else if (modalOpen === false){
       setModalOpen(true)
    }
  };

  const addToLocalStorage = () => {
    const currentLocalStorage = [...placeList, searchPlace]
    setPlaceList(currentLocalStorage(localStorage.getItem("placelist").split(",")));
    localStorage.setItem("placeList", JSON.stringify(currentLocalStorage))
  }

    return (
      <div className="search-container">
        <div className="searchRow">
          <div>
            <img src={searchIcon} className="searchIcon" alt="searchIcon" onClick={() => 
              {modalToggle(); addToLocalStorage()}} />
          </div>
          <div className={"search-input-text"}>
            <Input
              id="searchInput"
              type="text"
              placeholder="ex. wifi cafe near me"
              value={searchPlace}
              onChange={(e) => {setSearchPlace(e.target.value); addToLocalStorage(searchPlace)}} />
          </div>
          {/* <div>
            <img src={closeIcon} id="closeIcon" alt="closeIcon" />
          </div> */}
        </div>
        {modalOpen && <LandingSearchModal modal={modalOpen} modalToggle={modalToggle}/>}
      </div>
    );

  // filterSearch = event => {
  //   let places = this.state.filteredPlaces;
  //   places = places.filter(place => {
  //     return (
  //       place.toLowerCase().search(event.target.value.toLowerCase()) !== -1
  //     );
  //   });
  //   this.setState({ places: places });
  // };

  // componentWillMount = () => {
  //   this.setState({
  //     filteredPlaces: this.props.searchContent,
  //     places: this.props.searchContent
  //   });
  // };
  }

export default LandingSearch;





