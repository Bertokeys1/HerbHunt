import React from "react";
import mainpic from "../assets/mainpic.jpg";

export default function Main() {
  return (
    <section>
      {/* about me container */}
      <div className="mt-3 p-5" id="About">
        {/* picture on about me picture and line break */}
        <div className="post-heading text-center justify-content-center mainPic">
          <h3 className="display-4 font-weight-bold">About Me</h3>
        </div>
        <div className="d-flex justify-content-center" >
          <img src={mainpic}  height="400px" width="300px" alt="about me pic" />
        </div>
        <hr className="w-50 mx-auto" />

        <div className=" myInfo col-lg-6 row d-flex flex-row">
          <div className="myInfo">
            {/* info on main page */}
            <p className="mainInfo">
              Since learning to sail at the age of 12 my love of the water has
              continued to grow to being my career focus. My on the water
              experiences are many as Port Captain of S/S Virginia V, Director
              of Advanced Training for Freedom Boat Company and Lead Designer of
              several vessels. I have insightful knowledge and appreciation of
              this industry. I believe my understanding and skills would enable
              me to become part of any team that deeply cares and responds with
              appropriate action.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
