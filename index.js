import{a as m,S as h,i as c}from"./assets/vendor-BBsfN11L.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="https://pixabay.com/api/",y="49633160-4cce24fc01914cf63e9c1a790";function v(r){const a={key:y,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0};return m.get(g,{params:a}).then(o=>(console.log(o),o.data)).catch(o=>{throw o})}const u=document.querySelector(".gallery"),s=document.querySelector(".loader");console.dir(s);function L(r){return r.map(({webformatURL:a,largeImageURL:o,tags:l,likes:e,views:t,comments:i,downloads:p})=>`<li class="gallery-item">
            <a href="${o}" class="gallery-link">
                <img class="gallery-img" src="${a}" alt="${l}" />
            </a>
            <div class="info">
                <div class="info-colum">
                    <p class="info-title">Likes</p>
                    <p class="info-value">${e}</p>
                </div>
                <div class="info-colum">
                    <p class="info-title">Views</p>
                    <p class="info-value">${t}</p>
                </div>
                <div class="info-colum">
                    <p class="info-title">Comments</p>
                    <p class="info-value">${i}</p>
                </div>
                <div class="info-colum">
                    <p class="info-title">Downloads</p>
                    <p class="info-value">${p}</p>
                </div>
            </div>
        </li>`).join("")}function b(){u.innerHTML=""}function w(){s.style.display="block"}function d(){s.style.display="none"}const f=new URL("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20fill='none'%3e%3cg%20fill='%23FAFAFB'%20clip-path='url(%23a)'%3e%3cpath%20d='M6.81.219A.75.75%200%200%201%207.34%200h9.32a.75.75%200%200%201%20.53.219l6.591%206.591a.75.75%200%200%201%20.219.53v9.32a.75.75%200%200%201-.219.53l-6.591%206.591a.75.75%200%200%201-.53.219H7.34a.75.75%200%200%201-.53-.219L.219%2017.19A.75.75%200%200%201%200%2016.66V7.34a.75.75%200%200%201%20.219-.53L6.81.219ZM7.65%201.5%201.5%207.65v8.7l6.15%206.15h8.7l6.15-6.15v-8.7L16.35%201.5h-8.7Z'/%3e%3cpath%20d='M6.969%206.969a.75.75%200%200%201%201.062%200L12%2010.939l3.969-3.97a.75.75%200%201%201%201.062%201.062L13.061%2012l3.97%203.969a.752.752%200%200%201-1.062%201.062L12%2013.061l-3.969%203.97a.752.752%200%200%201-1.282-.531.751.751%200%200%201%20.22-.531L10.939%2012%206.97%208.031a.75.75%200%200%201%200-1.062Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='a'%3e%3cpath%20fill='%23fff'%20d='M0%200h24v24H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",import.meta.url).href,n=document.querySelector(".form");console.dir(n);const S=new h(".gallery a",{captionsData:"alt",captionDelay:250,enableKeyboard:!0});d();n.addEventListener("submit",x);function x(r){r.preventDefault();const a=n.elements["search-text"].value.trim();a&&(b(),w(),v(a).then(({hits:o})=>{if(o.length===0){c.info({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:" #ef4040",maxWidth:"434",messageColor:" #fafafb",iconColor:" #fafafb",iconUrl:f});return}u.innerHTML=L(o),S.refresh()}).catch(()=>{c.info({message:"Something went wrong!",backgroundColor:" #ef4040",maxWidth:"434",messageColor:" #fafafb",iconColor:" #fafafb",iconUrl:f})}).finally(()=>{d()}),n.reset())}
//# sourceMappingURL=index.js.map
