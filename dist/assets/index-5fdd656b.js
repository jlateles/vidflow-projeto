(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(e){if(e.ep)return;e.ep=!0;const i=t(e);fetch(e.href,i)}})();const a=document.querySelector(".videos__container");async function n(){try{(await(await fetch("https://gist.githubusercontent.com/jlateles/d4fb59e4341cf11f040cfc282c652eab/raw/63c7fafc70bd5790e12e3509d02a32202b10bbc4/vidflow.txt")).json()).forEach(t=>{if(t.categoria=="")throw new Error("Vídeo não tem categoria");a.innerHTML+=`
                <li class="videos__item">
                    <iframe src="${t.url}" title="${t.titulo}" frameborder="0" allowfullscreen></iframe>
                    <div class="descricao-video">
                        <img class="img-canal" src="${t.imagem} alt="Logo do Canal">
                        <h3 class="titulo-video">${t.titulo}</h3>
                        <p class="titulo-canal">${t.descricao}</p>
                        <p class="categoria" hidden>${t.categoria}</p>
                    </div>
                </li>
                `})}catch(r){a.innerHTML=`<p> Houve um erro ao carregar os vídeos: ${r}</p>`}}n();const l=document.querySelector(".pesquisar__input");l.addEventListener("input",u);function u(){const r=document.querySelectorAll(".videos__item");if(l.value!="")for(let o of r){let t=o.querySelector(".titulo-video").textContent.toLowerCase(),s=l.value.toLowerCase();t.includes(s)?o.style.display="block":o.style.display="none"}else for(let o of r)o.style.display="block"}const d=document.querySelectorAll(".superior__item");d.forEach(r=>{let o=r.getAttribute("name");r.addEventListener("click",()=>f(o))});function f(r){const o=document.querySelectorAll(".videos__item");for(let t of o){let s=t.querySelector(".categoria").textContent.toLowerCase(),e=r.toLowerCase();!s.includes(e)&&e!="tudo"?t.style.display="none":t.style.display="block"}}
