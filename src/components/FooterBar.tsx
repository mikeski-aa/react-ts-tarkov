import "../styles/footerBar.css";
import Character from "../assets/icons/character.svg?react";
import Flea from "../assets/icons/flea.svg?react";
import Handbook from "../assets/icons/handbook.svg?react";
import Hideout from "../assets/icons/hideout.svg?react";
import Mainmenu from "../assets/icons/mainmenu.svg?react";
import Messages from "../assets/icons/messages.svg?react";
import Presets from "../assets/icons/presets.svg?react";
import Settings from "../assets/icons/settings.svg?react";
import Survey from "../assets/icons/survey.svg?react";
import Traders from "../assets/icons/traders.svg?react";

function FooterBar() {
  return (
    <div className="tarkovFooter">
      <div className="leftFooterHolder">
        <button className="footerBtn">
          <Mainmenu className="footerIcon" />
          MAIN MENU
        </button>
        <button className="footerBtn">
          <Hideout className="footerIcon" />
          HIDEOUT
        </button>
        <div className="footerParty">
          <button className="partyBtn player">P</button>
          <button className="partyBtn">+</button>
          <button className="partyBtn">+</button>
          <button className="partyBtn">+</button>
          <button className="partyBtn">+</button>
        </div>
      </div>
      <div className="rightFooterHolder">
        <button className="footerBtn">
          <Character className="footerIcon" />
          CHARACTER
        </button>
        <button className="footerBtn">
          <Traders className="footerIcon" />
          TRADERS
        </button>
        <button className="footerBtn">
          <Flea className="footerIcon" />
          FLEA MARKET
        </button>
        <button className="footerBtn">
          <Presets className="footerIcon" />
          PRESETS
        </button>
        <button className="footerBtn">
          <Handbook className="footerIcon" />
          HANDBOOK
        </button>
        <button className="footerBtn">
          <Messages className="footerIcon" />
          MESSAGES
        </button>
        <button className="footerBtn">
          <Survey className="footerIcon" />
          SURVEY
        </button>
      </div>
    </div>
  );
}

export default FooterBar;
