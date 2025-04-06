import{a as m,S as p,i as a}from"./assets/vendor-BjRz3xa9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const y="https://pixabay.com/api/",g="49633160-4cce24fc01914cf63e9c1a790";async function h(r){const o={key:g,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await m.get(y,{params:o})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),v=new p(".gallery a",{captionsData:"alt",captionDelay:250});function L(r){const o=r.map(i=>{const{webformatURL:s,largeImageURL:e,tags:t,likes:n,views:u,comments:f,downloads:d}=i;return`<li class="gallery-item">
        <a href="${e}">
            <img src="${s}" alt="${t}" />
        </a>
            <div class="info">
                <div class="info-colum">
                    <p class="info-title">likes</p>
                    <p class="info-value">${n}</p>
                </div>
                <div class="info-colum">
                    <p class="info-title">Views</p>
                    <p class="info-value">${u}</p>
                </div>
                <div class="info-colum">
                    <p class="info-title">Comments</p>
                    <p class="info-value">${f}</p>
                </div>
                <div class="info-colum">
                    <p class="info-title">Downloads</p>
                    <p class="info-value">${d}</p>
                </div>
            </div>
        </li>`}).join("");c.insertAdjacentHTML("beforeend",o),v.refresh()}function b(){c.innerHTML=""}function w(){l.classList.remove("hidden")}function S(){l.classList.add("hidden")}const q=document.querySelector(".form");q.addEventListener("submit",r=>{r.preventDefault();const i=r.currentTarget.elements["search-text"].value.trim();i&&(b(),w(),h(i).then(function(s){if(!s.hits||s.hits.length===0){a.info({message:"Sorry, there are no images matching your search query. Please try again!"});return}L(s.hits)}).catch(function(){a.info({message:"Sorry, there are no images matching your search query. Please try again!"})}).finally(function(){S()}))});
//# sourceMappingURL=index.js.map
