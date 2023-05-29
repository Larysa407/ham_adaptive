import {Modal, ModalCreateCard, ModalEditCard} from "./modules/modal.js";
import {VisitCardiologist, VisitDentist, VisitTherapist } from "./modules/visit.js";
import {LOGIN} from "./modules/login.js";
import {sendCard,getAllCards,delCard, editCard} from "./modules/requests.js"
import { EditCardFormDentist, EditCardFormCardiologist, EditCardFormTherapist } from "./modules/editCard.js";
import { Filter } from "./modules/filter.js";


let token = "e18de9a2-a852-495b-afd1-e9370a5f5b41"
const API = 'https://ajax.test-danit.com/api/v2/cards'
let allVisits = []

LOGIN();
getAllCards(API,token);
document.addEventListener('click', async (e) => {
    
    if (e.target.id === 'create-btn') {
        let createModal = new ModalCreateCard();
        createModal.render();
    } else if(e.target.id === 'confirm-btn'){
            sendCard()
    } 
        // else if(e.target.classList.contains("status-close")){
        //     console.log("HI")
        // }
        
        // else if(e.target.classList.contains("status")){
        //     const status = document.querySelector(".status")
        //     console.log(status.checked)
        //     if(!status.checked){
        //         const visitDone = document.querySelector(".visitDone")
        //         visitDone.classList.remove("d-none")
        //         const labelVisit = document.querySelector(".checkbox")
        //         labelVisit.classList.add("d-none")
        //     }


        // }


        if (e.target.classList.contains('modal')|| e.target.classList.contains('btn-close') || e.target.classList.contains('btn-secondary')) {
            const modalFormCreate = document.querySelector("#create-form-modal");
            const editCardFormDentist = document.querySelector("#editCardFormDentist");
            const editCardFormCardiologist = document.querySelector("#editCardFormCardiologist");
            const editCardFormTherapist= document.querySelector("#editCardFormTherapist");
            const modalBackDrop = document.querySelector('.modal-backdrop');

            if(modalFormCreate){
                modalFormCreate.remove()
            } else if (editCardFormDentist){
                editCardFormDentist.remove()
            } else if (editCardFormCardiologist){
                editCardFormCardiologist.remove()
            } else if (editCardFormTherapist){
                editCardFormTherapist.remove()
            } 
        
            modalBackDrop.remove();
        }
        
})


  
  const checkbox = document.querySelector(".header-card")
  console.log(checkbox);



