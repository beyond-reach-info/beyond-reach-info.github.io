const memberModal=document.getElementById("member-modal");
const memberImage=document.getElementById("member-modal-image");
const memberCaption=document.getElementById("member-modal-caption");

document.querySelector(".members-grid").addEventListener("click",e=>{
  const button=e.target.closest("button[data-src]");
  if(!button)return;
  memberImage.src=button.dataset.src;
  memberImage.alt=button.querySelector("img").alt;
  memberCaption.textContent=button.closest("figure").querySelector("figcaption").textContent;
  memberModal.showModal();
});

memberModal.querySelector("button").addEventListener("click",()=>memberModal.close());
memberModal.addEventListener("click",e=>{
  if(e.target!==memberModal)return;
  const bounds=memberModal.getBoundingClientRect();
  if(e.clientX<bounds.left||e.clientX>bounds.right||e.clientY<bounds.top||e.clientY>bounds.bottom){
    memberModal.close();
  }
});
