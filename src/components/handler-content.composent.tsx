import React from "react"
import AProposContent from "../contents/autre/aProposContent"
import ContactContent from "../contents/contacts/contactsContent"
import DiplomeContent from "../contents/diplome/diplomeContent"
import HistoricContent from "../contents/historic/historicContent"
import HomeContent from "../contents/home/homeContent"
import CoursContent from "../contents/service/coursContent"
import CoutureArtisanalContent from "../contents/service/coutureArtisanalContent"
import CouturePersonaliseContent from "../contents/service/couturePesroContent"
import RetouchesContent from "../contents/service/retouchesContent"
import TransfoVetementsContent from "../contents/service/transfoContent"

type HandlerContentCompoProps = {
  isHome: boolean
  isContacts: boolean
  isDiplome: boolean
  isHistoric: boolean
  isTransfo: boolean
  isCours: boolean
  isCoutureArti: boolean
  isCouturePesro: boolean
  isRetouches: boolean
  isAPropos: boolean
}

const HandlerContentComposent: React.FC<HandlerContentCompoProps> = ({
  isHome,
  isContacts,
  isDiplome,
  isHistoric,
  isTransfo,
  isCours,
  isCoutureArti,
  isCouturePesro,
  isRetouches,
  isAPropos
}) => {

  return (
    <>
      {isHome && <HomeContent />}
      {isContacts && <ContactContent />}
      {isDiplome && <DiplomeContent />}
      {isHistoric && <HistoricContent />}
      {isTransfo && <TransfoVetementsContent />}
      {isCours && <CoursContent />}
      {isCoutureArti && <CoutureArtisanalContent />}
      {isCouturePesro && <CouturePersonaliseContent />}
      {isRetouches && <RetouchesContent />}
      {isAPropos && <AProposContent />}
    </>)
}

export default React.memo(HandlerContentComposent)
