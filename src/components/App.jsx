import React from "react";
import Header from "./Header";
import Sneakers from "./Sneakers";
import Brands from "./Brands";
import Gallery from "./Gallery";
import News from "./News";
import Footer from "./Footer";
import Question from "./Question";
import Chat from "./Chat";
import AccountUsser from "./AccountUser";
import SneakersInfo from "./SneakersInfo";
import SideBar from "./SideBar";
import EnterAccount from "./EnterAccount";
import AccountSeller from "./AccountSeller";
import SellerQuestionButton from "./SellerQestionButton";
import SellerChat from "./SellerChat"
import ShopingCart from "./ShopingCart";
import Register from "./Register";
import LogIn from "./LogIn";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../utils/router/PrivateRoute";

function App() {

  const [isShow, onShow] = useState(false);
  const [showEnter, onShowEnter] = useState(false);
  const [showEnterAuth, onShowEnterAuth] = useState(false);
  const [showChat, onShowChat] = useState(false);
  const [showSellerChat, onShowSellerChat] = useState(false);

  return (

    
      
      <div className="App">
        <div className="page">
          <Routes>

            <Route element = {<PrivateRoute/>}>

              <Route path="/seller" element={
                <>
                  <Header
                    isShow={isShow}
                    onShow={onShow}
                  />
                  <main>
                      <SideBar
                        isShow={isShow}
                        onShow={onShow}
                        showEnterAuth={showEnterAuth}
                        onShowEnterAuth={onShowEnterAuth}
                      />
                      <AccountSeller/>
                      <SellerQuestionButton
                        showSellerChat={showSellerChat}
                        onShowSellerChat={onShowSellerChat}
                      />
                      <SellerChat
                        showSellerChat={showSellerChat}
                        onShowSellerChat={onShowSellerChat}
                      />
                  </main>
                  <Footer/>
                </>
              }>   
              </Route>

              <Route path="/usser" element={
                <>
                  <Header
                    isShow={isShow}
                    onShow={onShow}
                  />
                  <main>
                      <Question
                        showChat={showChat}
                        onShowChat={onShowChat}
                      />
                      <Chat
                        showChat={showChat}
                        onShowChat={onShowChat}
                      />
                      <AccountUsser/>
                      <SideBar
                      isShow={isShow}
                      onShow={onShow}
                      showEnterAuth={showEnterAuth}
                      onShowEnterAuth={onShowEnterAuth}
                      />
                      <EnterAccount/>
                  </main>
                  <Footer/>
                </>
              }>   
              </Route>

            <Route path="/cart" element={
              <>
                <Header
                  isShow={isShow}
                  onShow={onShow}
                />
                <main>
                    <Question
                      showChat={showChat}
                      onShowChat={onShowChat}
                    />
                    <Chat
                      showChat={showChat}
                      onShowChat={onShowChat}
                    />
                    <SideBar
                      isShow={isShow}
                      onShow={onShow}
                      showEnterAuth={showEnterAuth}
                      onShowEnterAuth={onShowEnterAuth}
                    />
                    <ShopingCart/>
                </main>
                <Footer/>
              </>
            }>   
            </Route>

          </Route>

            <Route path="/" element={
              <>
                <Header
                  isShow={isShow}
                  onShow={onShow}
                  showEnter={showEnter}
                  onShowEnter={onShowEnter}
                />
                <main>
                    <Sneakers/>
                    <Brands/>    
                    <Gallery/>
                    <News/>
                    <Question
                    showChat={showChat}
                    onShowChat={onShowChat}
                    />
                    <Chat
                      showChat={showChat}
                      onShowChat={onShowChat}
                    />
                    <EnterAccount
                      showEnter={showEnter}
                      onShowEnter={onShowEnter}
                    />
                    <SideBar
                      isShow={isShow}
                      onShow={onShow}
                      showEnterAuth={showEnterAuth}
                      onShowEnterAuth={onShowEnterAuth}
                    />
                    <EnterAccount/>
                </main>
                <Footer/>
              </>
            }>   
            </Route>
 
            <Route path="/info" element={
              <>
                <Header
                  isShow={isShow}
                  onShow={onShow}
                />
                <main>
                    <Question
                      showChat={showChat}
                      onShowChat={onShowChat}
                    />
                    <Chat
                      showChat={showChat}
                      onShowChat={onShowChat}
                    />
                    <SneakersInfo/>
                    <SideBar
                      isShow={isShow}
                      onShow={onShow}
                      showEnterAuth={showEnterAuth}
                      onShowEnterAuth={onShowEnterAuth}
                    />
                </main>
                <Footer/>
              </>
            }>   
            </Route>

            <Route path="/auth" element={
              <>
                <main>
                    <Register/>
                </main>
              </>
            }>   
            </Route>

            <Route path="/login" element={
              <>
                <main>
                    <LogIn/>
                </main>
              </>
            }>   
            </Route>

          </Routes>
        </div>
      </div>
    
  );
}

export default App;
