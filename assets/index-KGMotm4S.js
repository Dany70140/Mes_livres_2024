(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const u=(n,r,t,o)=>{const e={titre:n,auteur:r,resume:t,estLu:o,id:crypto.randomUUID(),createdAt:new Date().toDateString()};JSON.stringify(e);const s=localStorage.getItem("livres"),i=s?JSON.parse(s):[];i.push(e),localStorage.setItem("livres",JSON.stringify(i))},m=()=>{const n=localStorage.getItem("livres");return n?JSON.parse(n):[]},g=n=>{const r=localStorage.getItem("livres"),o=(r?JSON.parse(r):[]).filter(e=>e.id!==n);localStorage.setItem("livres",JSON.stringify(o))},f=n=>{const r=localStorage.getItem("livres"),o=(r?JSON.parse(r):[]).filter(e=>e.estLu===!estLu);localStorage.setItem("livres",JSON.stringify(o))},c=()=>{const n=document.querySelector("#booksList"),r=m();n.innerHTML=r.map(t=>{const o=new Date(t.createdAt).toLocaleDateString("fr-FR");return`<div class="col-md-6 col-lg-4" id="book-${t.id}">
     <div class="card h-100">
        <div class="card-body">
            <div class="d-flex justify-content-between align-items-start mb-2">
                <h5 class="card-title mb-0">${t.titre}</h5>
                <span class="badge ${t.estLu?"bg-success":"bg-secondary"} toggle-read-btn data-id="${t.id}" 
                        style="cursor: pointer;" >
                    ${t.estLu?'<i class="bi bi-check-circle me-1"></i>Lu':'<i class="bi bi-circle me-1"></i>Non lu'}
                </span>
                </div>
                <h6 class="card-subtitle mb-2">
                <i class="bi bi-person me-1"></i>${t.auteur}
                </h6>
                <p class="card-text small">${t.resume}</p>
                <div class="d-flex justify-content-between align-items-center mt-3">
                <small class="text-muted">
                    <i class="bi bi-calendar3 me-1"></i>${o}
                </small>
                <button class="btn btn-outline-danger btn-sm delete-btn" data-id="${t.id}">
                    <i class="bi bi-trash me-1"></i>Supprimer
                </button>
            </div>
        </div>
    </div>
</div>`}).join("")},v=()=>{const n=document.querySelector("#toggleFormBtn"),r=document.querySelector("#formSection"),t=document.querySelector("#bookForm"),o=new bootstrap.Collapse(r,{toggle:!1});n.addEventListener("click",()=>{o.toggle()}),r.addEventListener("hidden.bs.collapse",()=>{t.reset()}),t.addEventListener("submit",s=>{s.preventDefault();const i=t.title.value,l=t.author.value,a=t.summary.value,d=t.isRead.checked;u(i,l,a,d),o.hide(),c()}),document.querySelector("#booksList").addEventListener("click",s=>{const i=s.target.closest(".delete-btn, .toggle-read-btn");if(i===null)return null;{const l=i.dataset.id;i.dataset.estLu,i.classList.contains("delete-btn")?(g(l),c()):i.classList.contains("toggle-read-btn")&&(f(),c())}})};v();c();
