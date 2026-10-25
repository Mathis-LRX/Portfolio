(()=>{
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const reduce=matchMedia("(prefers-reduced-motion:reduce)").matches;
const MAIL="designlrx@gmail.com";
const ENDPOINT=""; // Optionnel : lien Formspree (https://formspree.io/f/xxxx) pour recevoir les messages sans messagerie
const D={"helice-1":[1400,790],"helice-2":[1400,1130],"helice-3":[1400,788],"helice-4":[1400,788],"heritage-1":[1400,790],"heritage-2":[1214,946],"heritage-3":[1400,788],"heritage-4":[1400,636],"maquettes-1":[933,1400],"maquettes-2":[1190,900],"maquettes-3":[1400,933],"maquettes-4":[1125,668],"maquettes-5":[1055,930],"mue-aerial":[1400,948],"mue-axo":[1600,1240],"mue-coupes":[1800,676],"mue-disco":[1267,976],"mue-drone":[1400,939],"mue-facade":[1400,828],"mue-halle-int":[1400,924],"mue-halle-soir":[1400,959],"mue-longere-int":[1272,986],"mue-longere":[1400,1051],"mue-maquette":[1400,937],"mue-motifs":[1800,625],"mue-multi":[1400,1171],"mue-patio":[1400,959],"mue-plan":[1800,881],"mue-porte":[1400,759],"mue-sanitaires":[1400,806],"reflet-1":[1400,790],"reflet-2":[1400,788],"reflet-3":[1400,788],"reflet-4":[1400,751],"reflet-5":[1400,1108],"portrait-cut":[716,623]};

/* ===== Projets de formation ===== */
const OLD=[
{n:"02",t:"Le Reflet",s:"Concours hôtel du groupe Accor, 2024",h:"Entre vitraux et moucharabieh, le luxe à la française à Rabat.",
 f:[["Lieu","Kasbah des Oudayas, Rabat (Maroc)"],["Surface","550 m²"],["Durée","4 mois"],["Projet","Concours collectif, 4 étudiants"],["Outils","SketchUp"]],
 d:["Repenser les espaces communs d’un hôtel Sofitel à Rabat, pour les 60 ans de la marque. L’enjeu : allier culture marocaine et exigence française, sans que l’une écrase l’autre.","L’ensemble de l’hôtel s’organise autour d’une sculpture de roseaux en verre. Surdimensionnée, elle prend racine dans la mer et traverse l’hôtel de bas en haut, unissant hall, restaurant, bar et verrière dans un même geste architectural."],
 g:[["reflet-1","Vue d’ensemble"],["reflet-5","Coupe du projet"],["reflet-2","Bar. Un socle en fer forgé façonné en moucharabieh, dont la trame se répète en miroir au plafond."],["reflet-3","Restaurant. Des alcôves en moucharabieh créent des espaces intimistes au sein d’un grand volume."],["reflet-4","Riadh. Une réinterprétation du patio marocain, ouvert sur le ciel, où l’eau et la lumière rythment l’atmosphère."]]},
{n:"03",t:"Héritage",s:"Rénovation d’une maison de maître, 2022",h:"Repenser la cuisine, la salle à manger et la partie nuit d’une maison de maître.",
 f:[["Lieu","Maine-et-Loire (49)"],["Surface","150 m²"],["Durée","4 semaines"],["Projet","Projet court en équipe, 3 étudiants"],["Outils","SketchUp, Enscape"]],
 d:["Réhabilitation d’une maison de maître dans une démarche de valorisation de l’existant. L’intervention préserve les qualités patrimoniales du lieu tout en adaptant les espaces aux usages contemporains.","Restructuration intérieure, mise en lumière et choix de matériaux créent un dialogue entre héritage et modernité."],
 g:[["heritage-1","Cuisine et salle à manger"],["heritage-2","Plan du rez-de-chaussée"],["heritage-4","Plan du R+1"],["heritage-3","Suite parentale. Le carrelage de la pièce humide empiète sur la chambre : un sol qui unit les espaces."]]},
{n:"04",t:"Hélice",s:"École d’ingénieur ESTACA, 2024",h:"Une forme identifiable, déclinée du mobilier au plafond.",
 f:[["Lieu","Laval (Mayenne)"],["Surface","420 m²"],["Durée","4 mois"],["Projet","Travail d’équipe, 3 étudiants"],["Outils","Revit, SketchUp, Enscape"]],
 d:["Requalifier les espaces d’accueil, de circulation et les espaces communs de l’ESTACA Laval, autour d’une identité visuelle forte qui reflète l’innovation, la technologie et le dynamisme de l’école.","Une forme inspirée de l’hélice, emblème de l’aéronautique, est déclinée en mobilier et en panneaux acoustiques au plafond. Elle guide les circulations et structure les espaces."],
 g:[["helice-1","Espaces d’accueil"],["helice-2","Plan du projet"],["helice-3","BDE. Le plafond hélicoïdal intègre les besoins acoustiques et d’éclairage."],["helice-4","Couloir. Un sol Gerflor en plastique recyclé, d’aspect terrazzo, pensé pour durer."]]},
{n:"05",t:"Maquettes",s:"Maquettes et créations",h:"Penser avec les mains, de l’étude à l’objet fabriqué.",f:[],
 d:["Maquettes d’étude et objets fabriqués à l’atelier, de la halle commune du PFE au luminaire Lucéa. Une approche par la matière, avec des objets conçus à partir de matériaux récupérés."],
 g:[["maquettes-2","La halle commune"],["maquettes-1","L’hexagone parfait"],["maquettes-3","Faguo, Nantes"],["maquettes-4","Lucéa"],["maquettes-5","Création"]]}
];

/* ===== MUE, projet de fin d’études ===== */
const MUE={n:"",t:"MUE",s:"Réhabilitation d’une friche rurale en halle commune",
 f:[["Lieu","Villainville (76), à 7 km d’Étretat"],["Partenaires","Commune de Villainville, Le Havre Seine Métropole"],["Durée","Trois années de recherche, projet toujours en cours"],["Le site","Friche communale de 5 200 m², aire de camping-cars de 7 800 m² ouverte à l’été 2026"],["Programme","Sanitaires 37 m², espace multi-usages 31 m², halle 76 m²"],["Calendrier","Porte des Falaises au printemps 2027, Entre-deux à l’été 2027, halle commune à l’été 2028"]],
 d:["À Villainville, village de 303 habitants situé à sept kilomètres d’Étretat, une ancienne discothèque est abandonnée depuis 2014. Acquise par la commune en 2024, cette friche se situe entre territoire rural et destination touristique. L’ouverture d’une aire de camping-cars à l’été 2026 est l’occasion de la réactiver.",
 "Et si la friche n’était pas un vide à combler, mais une ressource à révéler ? À travers une démarche de design centrée sur les usages et des ateliers participatifs, le projet retrace l’histoire du lieu et identifie un besoin : un espace de rencontre ouvert toute l’année, partagé entre habitants et camping-caristes.",
 "La réponse se construit progressivement. Les anciennes cages de danse sont réemployées en bornes d’information. L’occupation temporaire du patio permet ensuite d’expérimenter de nouveaux usages, avant leur pérennisation dans la longère en brique et silex, dernier témoin du passé agricole du site, réhabilitée en halle commune.",
 "Un volume contemporain en acier corten s’insère dans la ruine en préservant ses murs anciens. Le motif de l’appareillage en brique et silex est réinterprété dans des panneaux ajourés en acier, mobiles et repliables en accordéon : la halle peut se fermer, filtrer la lumière ou s’ouvrir sur la place du village."],
 g:[["mue-aerial","Vue drone de l’ancienne discothèque de Villainville. © Kevin Leconte"],["mue-drone","L’ancienne discothèque et la longère vues du ciel. © Kevin Leconte"],["mue-longere","La longère en brique et silex avant travaux, dernier témoignage du paysage agricole"],["mue-disco","Intérieur de la discothèque, abandonnée depuis 2014"],["mue-porte","1. La Porte des Falaises, printemps 2027 : les anciennes cages de danse réemployées en bornes d’information"],["mue-patio","2. L’Entre-deux, été 2027 : le patio investi temporairement pour expérimenter de nouveaux usages"],["mue-halle-soir","3. La halle commune, été 2028 : la longère réhabilitée pour pérenniser les usages"],["mue-motifs","Du motif brique et silex au panneau corten en accordéon"],["mue-facade","Façade de la halle en acier corten"],["mue-maquette","Maquette de la halle"],["mue-sanitaires","Sanitaires, 37 m² : un premier lien entre habitants et camping-caristes"],["mue-multi","Espace multi-usages, 31 m² : ventes saisonnières autour d’un comptoir sur mesure"],["mue-halle-int","Halle communale, 76 m² : marchés, repas communaux et événements"],["mue-plan","Plan du rez-de-chaussée avec trois configurations : marché (9 étals), repas (48 places), événements (66 places)"],["mue-coupes","Coupes transversales et détails constructifs : chéneau contre les coulures de rouille, surélévation de 10 cm pour ventiler"],["mue-axo","Axonométrie : habillage corten, structure en acier galvanisé, murs en briques et silex existants"]]};
const H=["Entre vitraux et moucharabieh, le luxe à la française à Rabat.","Repenser la cuisine, la salle à manger et la partie nuit d’une maison de maître.","Une forme identifiable, déclinée du mobilier au plafond.","Penser avec les mains, de l’étude à l’objet fabriqué."];
const P=[MUE,...OLD.map((p,i)=>({...p,n:"0"+(i+1)}))];
const img=(n,alt,lazy)=>{const d=D[n]||[0,0];return `<img src="images/${n}.webp" width="${d[0]}" height="${d[1]}" alt="${alt}"${lazy?' loading="lazy"':""} decoding="async">`};

/* ===== Navigation : un écran à la fois, on clique pour passer de l’un à l’autre ===== */
const VUES=["accueil","projets","experience","contact"];
function route(){let h=location.hash.slice(1);if(!VUES.includes(h))h="accueil";
 VUES.forEach(v=>{$("#"+v).hidden=v!==h});
 document.body.classList.toggle("home",h==="accueil");
 $$(".top a[href^='#']").forEach(a=>a.toggleAttribute("aria-current",a.getAttribute("href")==="#"+h));
 scrollTo(0,0)}
addEventListener("hashchange",route);route();

/* ===== Accueil : image abstraite de mon parcours, différente à chaque ouverture ===== */
const art=$("#art"),hbox=$(".hbox");
const seed=(Math.random()*4294967296)>>>0;
const rng=a=>()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296};
const f1=n=>n.toFixed(1);
function drawArt(){
 const W=hbox.clientWidth,H=hbox.clientHeight;if(!W||!H)return;
 const R=rng(seed),wide=W/H>1.1;
 /* courbes de niveau : le territoire */
 const ring=(cx,cy,r,ph)=>{let d="";for(let k=0;k<=96;k++){const t=k/96*Math.PI*2,rr=r*(1+.07*Math.sin(2*t+ph[0])+.045*Math.sin(3*t+ph[1])+.025*Math.sin(5*t+ph[2]));d+=(k?"L":"M")+f1(cx+rr*Math.cos(t)*1.28)+" "+f1(cy+rr*Math.sin(t))}return d+"Z"};
 const topo=(cx,cy,n,r0,st)=>{const ph=[R()*6.28,R()*6.28,R()*6.28];let o="";for(let i=0;i<n;i++)o+=`<path class="${i%4===0?"c2":"c1"}" d="${ring(cx,cy,r0+i*st,[ph[0]+i*.1,ph[1]-i*.08,ph[2]+i*.05])}"/>`;return o};
 let o=`<g class="topo">`+topo(W*(.66+R()*.14),H*(.26+R()*.12),15,H*.05,H*.056)+topo(W*(.06+R()*.1),H*(.62+R()*.1),7,H*.05,H*.06)+`</g>`;
 /* briques et silex : le patrimoine, en bandes inclinées */
 const bw=48,bh=17,g=3,cols=Math.ceil(W*.5/(bw+g)),rows=Math.ceil(H*.46/(bh+g));let br="";
 for(let r=0;r<rows;r++)for(let c=0;c<cols;c++){const x=c*(bw+g)+(r%2)*(bw/2),y=r*(bh+g),q=R(),fade=1-c/cols;
  if(q<.15)br+=`<ellipse class="bk" cx="${x+bw/2}" cy="${y+bh/2}" rx="${f1(10+R()*7)}" ry="${f1(5+R()*3)}" fill-opacity="${f1(.08+.2*fade)}"/>`;
  else if(q<.64)br+=`<rect class="bk" x="${x}" y="${y}" width="${bw}" height="${bh}" fill-opacity="${(.04+.2*R()*fade).toFixed(2)}"/>`}
 o+=`<g transform="translate(${f1(H*.2)} ${f1(H*.07)}) skewX(-14)">${br}</g>`;
 /* le parcours : un tracé doré, des étapes à échelles croissantes */
 const N=(wide?[[.1,.36],[.3,.21],[.52,.33],[.77,.19]]:[[.2,.15],[.74,.23],[.27,.32],[.7,.41]]).map(p=>[p[0]*W,p[1]*H]);
 const L=[
  ["2018",["Stage en maîtrise d’œuvre"],["Stage en maîtrise","d’œuvre"]],
  ["2021 – 2024",["Architecture d’intérieur"],["Architecture","d’intérieur"]],
  ["2024 – 2026",["Design territorial","Alternance en architecture"],["Design territorial","Alternance en","architecture"]],
  ["La suite",[],[]]];
 const pts=[[-40,N[0][1]+30],...N,[W+40,N[3][1]-34]];
 let d=`M${f1(pts[0][0])} ${f1(pts[0][1])}`;
 for(let i=0;i<pts.length-1;i++){const p0=pts[i-1]||pts[i],p1=pts[i],p2=pts[i+1],p3=pts[i+2]||p2;
  d+=`C${f1(p1[0]+(p2[0]-p0[0])/6)} ${f1(p1[1]+(p2[1]-p0[1])/6)} ${f1(p2[0]-(p3[0]-p1[0])/6)} ${f1(p2[1]-(p3[1]-p1[1])/6)} ${f1(p2[0])} ${f1(p2[1])}`}
 o+=`<path class="rt" pathLength="1" d="${d}"/>`;
 N.forEach((p,i)=>{const [x,y]=p,r=(i+1)*7,above=i===1,last=i===3;
  const anc=x<W*.22?"start":x>W*.72?"end":"middle",lx=anc==="start"?x-r:anc==="end"?x+r:x;
  const ls=wide?L[i][1]:L[i][2],n0=ls.length+(last?1:0),yy=above?y-r-14-(n0-1)*17-24:y+r+24,ly=above?yy+22:yy+20;
  let n=`<g class="nd" style="--n:${i}">`;
  if(last){n+=`<a href="#contact" aria-label="La suite : me contacter"><circle cx="${f1(x)}" cy="${f1(y)}" r="40" fill="transparent"/>`;n+=`<circle class="pulse" cx="${f1(x)}" cy="${f1(y)}" r="${r+6}"/>`}
  for(let k=0;k<=i;k++)n+=`<circle class="rg" cx="${f1(x)}" cy="${f1(y)}" r="${(k+1)*7}"/>`;
  n+=`<circle class="dt" cx="${f1(x)}" cy="${f1(y)}" r="${last?6.5:4.5}"/>`;
  n+=`<text class="yr" x="${f1(lx)}" y="${f1(yy)}" text-anchor="${anc}">${L[i][0]}</text>`;
  ls.forEach((t,k)=>{n+=`<text class="tx" x="${f1(lx)}" y="${f1(ly+k*17)}" text-anchor="${anc}">${t}</text>`});
  if(last)n+=`<text class="lk" x="${f1(lx)}" y="${f1(ly+ls.length*17)}" text-anchor="${anc}">Me contacter →</text></a>`;
  if(last)n+=`<image href="images/portrait-cut.webp" x="${f1(x-48)}" y="${f1(y-r-86)}" width="96" height="84" preserveAspectRatio="xMidYMax meet" style="pointer-events:none"/>`;
  o+=n+`</g>`});
 art.setAttribute("viewBox",`0 0 ${W} ${H}`);art.innerHTML=o}
drawArt();let rz=0;addEventListener("resize",()=>{clearTimeout(rz);rz=setTimeout(drawArt,150)});

/* ===== Projets : grille et fiches ===== */
const dlg=$("#dlg");let cur=0;
$("#pg").innerHTML=P.slice(1).map((p,i)=>`<button class="pn" data-i="${i+1}" aria-label="Ouvrir le projet ${p.t}">${img(p.g[0][0],"",1)}<b><em>${p.n}</em>${p.t}</b><small>${H[i]}</small></button>`).join("");
function openP(i){cur=i;const p=P[i];
$("#dt").innerHTML=(p.n?`<em>${p.n}</em>`:"")+p.t;
$("#da").innerHTML=`<p class="sub">${p.s}</p>${p.d.map(t=>`<p>${t}</p>`).join("")}${p.f.length?`<dl class="fiche">${p.f.map(x=>`<div><dt>${x[0]}</dt><dd>${x[1]}</dd></div>`).join("")}</dl>`:""}`;
$("#dg").innerHTML=p.g.map(x=>`<figure>${img(x[0],p.t+", "+x[1].replace(/"/g,""),1)}<figcaption>${x[1]}</figcaption></figure>`).join("");
dlg.scrollTop=0;if(!dlg.open)dlg.showModal()}
document.addEventListener("click",e=>{const b=e.target.closest("[data-i]");if(b)openP(+b.dataset.i)});
$("#cl").onclick=()=>dlg.close();
$("#nx").onclick=()=>openP((cur+1)%P.length);

/* ===== Formulaire ===== */
const f=$("#f"),st=$("#st");
f.onsubmit=async e=>{e.preventDefault();const d=Object.fromEntries(new FormData(f));
if(ENDPOINT){try{const r=await fetch(ENDPOINT,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(d)});
if(!r.ok)throw 0;f.reset();st.textContent="Message envoyé. Je vous réponds rapidement.";}
catch{st.textContent="L’envoi a échoué. Écrivez-moi directement à "+MAIL+".";}return}
location.href=`mailto:${MAIL}?subject=${encodeURIComponent(d.objet+" – "+d.nom)}&body=${encodeURIComponent(d.message+"\n\n"+d.nom+"\n"+d.email)}`;
st.textContent="Votre messagerie s’ouvre avec le message prêt à envoyer."};
$("#y").textContent=new Date().getFullYear();
})();
