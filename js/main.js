
const routes={
line:["Возможности линии","Category Scan","Market Intelligence","Innovation Radar","Opportunity Map","Consumer Validation","3–5 продуктовых направлений для существующего оборудования"],
launch:["Market & Category","Consumer Need","Concept","Product 360°","Consumer Test","Launch Blueprint","Приоритетная концепция и маршрут запуска"],
growth:["Market Pulse","Category Navigator","Competitive Intelligence","Opportunity Map","Growth Blueprint","Приоритетные направления роста"],
sales:["Product 360°","Price & Shelf","Consumer Intelligence","Competitive Analysis","Decision Map","Причины стагнации и приоритетные действия"],
idea:["Concept Screen","Consumer Intelligence","Competitive Context","Economics","Go / Refine / Stop","Понимание, стоит ли инвестировать в следующую итерацию"],
world:["Future Signals","Innovation Radar","Ingredients","Technology & Patents","Opportunity Map","Сигналы, применимые к вашему бизнесу"]
};
function render(k){const a=routes[k];document.getElementById("route").innerHTML='<div class="eyebrow">Ваш маршрут</div><div class="steps">'+a.slice(0,-1).map((x,i)=>'<b>'+String(i+1).padStart(2,"0")+'</b> '+x).join('<br>')+'</div><hr><h3>Результат</h3><p>'+a[a.length-1]+'</p><a class="btn dark" href="#contact">Обсудить задачу →</a>'}
render("line");document.querySelectorAll(".choices button").forEach(b=>b.onclick=()=>{document.querySelectorAll(".choices button").forEach(x=>x.classList.remove("sel"));b.classList.add("sel");render(b.dataset.key)})
