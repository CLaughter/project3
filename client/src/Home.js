import React, { useState, useContext } from "react";
import { UserContext } from "./utils/UserContext";
import axios from "axios";

const Home = () => {
  const { dbUser, setDbUser } = useContext(UserContext);
  const [giftName, setGiftName] = useState("");
  const [giftDescription, setGiftDescription] = useState("");
  const [giftLink, setGiftLink] = useState("");
  const [giftCost, setGiftCost] = useState("");

  const handleChange = e => {
    if (e.target.name === "name") {
      setGiftName(e.target.value);
    } else if (e.target.name === "description") {
      setGiftDescription(e.target.value);
    } else if (e.target.name === "link") {
      setGiftLink(e.target.value);
    } else if (e.target.name === "cost") {
      setGiftCost(e.target.value);
  };

  const enterGiftItem = e => {
    e.preventDefault();
    let allGift = dbUser.lists.filter(el => el.name === "All Gifts");
    let allGiftId = allGift[0]._id;
    console.log(allGiftId);
    let gift = {
      name: giftName,
      description: giftDescription,
      link: giftLink,
      cost: giftCost
    };
    console.log(gift);

    axios.post("/api/gift/" + allGiftId, gift).then(res => {
      console.log(res);
    });
  };

  return (
    <>
      <div className="sub-page-body">
        <div className="sub-section">
          <h1 className="sub-page-header">Add To List</h1>
        </div>
      </div>

      <div className="sub-page-body">
        <div className="sub-section">
          <h6>Enter a name of the gift</h6>
          <form>
            <input
              className="form-input2"
              id="name"
              name="name"
              value={giftName}
              onChange={e => handleChange(e)}
            ></input>

            <h6>
              Copy and paste the link (address bar) of the gift you want to add
            </h6>
            <input
              className="form-input2"
              id="link"
              name="link"
              value={giftLink}
              onChange={e => handleChange(e)}
            ></input>

            <h6>Paste a description if desired</h6>
            <input
              className="form-input2"
              id="description"
              name="description"
              value={giftDescription}
              onChange={e => handleChange(e)}
            ></input>

            <h6>Cost of item</h6>
            <input
              className="form-input2"
              id="cost"
              name="cost"
              value={giftCost}
              onChange={e => handleChange(e)}
            ></input>
            <button onClick={e => enterGiftItem(e)}>Submit</button>
          </form>
        </div>
      </div>

      <div className="sub-page-body">
        <div className="sub-section">
          <h5 className="sub-header">Gift List</h5>
          <div className="sub-container"></div>
        </div>
      </div>
      <div className="uToken">
        {dbUser && dbUser._id}
        {dbUser &&
          dbUser.lists.gifts &&
          dbUser.lists.map(list =>
            list.gifts.map(gift => <h1>{gift.name} q</h1>)
          )}
      </div>
    </>
  );
};

export default Home;
