import React from "react";
import Header from "./Header";
import Sneakers from "./Sneakers";
import Brands from "./Brands";
import Gallery from "./Gallery";
import News from "./News";
import CommentsBlock from "./CommentsBlock";
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

  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
                    showEnter={showEnter}
                    onShowEnter={onShowEnter}
                    scrollToElement={scrollToElement}
                  />
                  <main>
                      <SideBar
                        isShow={isShow}
                        onShow={onShow}
                        showEnterAuth={showEnterAuth}
                        onShowEnterAuth={onShowEnterAuth}
                        scrollToElement={scrollToElement}
                      />
                      <AccountSeller
                      
                      />
                      <SellerQuestionButton
                        showSellerChat={showSellerChat}
                        onShowSellerChat={onShowSellerChat}
                      />
                      <SellerChat
                        showSellerChat={showSellerChat}
                        onShowSellerChat={onShowSellerChat}
                      />
                  </main>
                  <Footer
                    scrollToElement={scrollToElement}
                  />
                </>
              }>   
              </Route>

              <Route path="/user" element={
                <>
                  <Header
                    scrollToElement={scrollToElement}
                    isShow={isShow}
                    onShow={onShow}
                    showEnter={showEnter}
                    onShowEnter={onShowEnter}
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
                      scrollToElement={scrollToElement}
                      />
                      <EnterAccount/>
                  </main>
                  <Footer
                    scrollToElement={scrollToElement}
                  />
                </>
              }>   
              </Route>

            <Route path="/cart" element={
              <>
                <Header
                  scrollToElement={scrollToElement}
                  isShow={isShow}
                  onShow={onShow}
                  showEnter={showEnter}
                  onShowEnter={onShowEnter}
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
                      scrollToElement={scrollToElement}
                    />
                    <ShopingCart/>
                </main>
                <Footer
                  scrollToElement={scrollToElement}
                />
              </>
            }>   
            </Route>

          </Route>

            <Route path="/" element={
              <>
                <Header
                  scrollToElement={scrollToElement}
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
                    <CommentsBlock/>
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
                      scrollToElement={scrollToElement}
                    />
                    <EnterAccount/>
                </main>
                <Footer
                  scrollToElement={scrollToElement}
                />
              </>
            }>   
            </Route>
 
            <Route path="/info" element={
              <>
                <Header
                  scrollToElement={scrollToElement}
                  showEnter={showEnter}
                  onShowEnter={onShowEnter}
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
                      scrollToElement={scrollToElement}
                    />
                </main>
                <Footer
                  scrollToElement={scrollToElement}
                />
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
