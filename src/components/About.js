import mainPic from "../assets/mainpic.jpg"


export default function Projects() {
  return (
    <div id="About">
      <div className="" >
      <div className="post-heading text-center justify-content-center mainPic">
          <h3 className="display-4 font-weight-bold">About Me</h3>
        </div>
        <hr className="w-50 mx-auto" />
        <div className="justify-content-center" >
        <div className="myInfo">
          <img src={mainPic}  height="400px" width="300px" alt="about me pic" />
            {/* info on main page */}
            <p className="aboutContent">
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
        

        <div className="  col-6 d-flex flex-row">
          
        </div>
        </div>
        </div>
  );
}