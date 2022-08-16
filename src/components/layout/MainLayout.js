import React from "react";
// import SideBar from "./SideBar";
import RoutesSection from "./RoutesSection";
import Layout from "./Layout";

const MainLayout = () => {
  return (
    <Layout>
      <section className="container-fluid">
        <div className="row">
          {/* <div className="col-2 pl-2 ">
            <SideBar />
          </div> */}
          <div className="col-12 pl-2 ">
            <div>
              <RoutesSection />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MainLayout;