import React from "react";
import mainpic from '../assets/mainpic.jpg';

export default function Main() {
  return (
    <section>
      <div className="mt-5 pb-5 ">
        <div className="post-heading text-center">
          <h3 className="display-4 font-weight-bold">About Me</h3>
          <img src={mainpic} height="300px"  alt="about me pic"/>
          <hr className="w-50 mx-auto pb-2" />
        </div>
        <div className=" myInfo row d-flex flex-row">
          <div className="myInfo col-lg-6">
            <hr />
            <p>
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
