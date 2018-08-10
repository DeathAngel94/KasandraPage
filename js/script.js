/* (function(d){
 let tabs = Array.prototype.slice.apply(d.querySelectorAll('.tabs-item'));
 let panels = Array.prototype.slice.apply(d.querySelectorAll('.panels-item'));
  d.getElementById("tabs").addEventListener('Click', e => {
   if(e.target.ClassList.contains('tabs-item')){
     let i = tabs.indexOf(e.target);
     tabs.map(tab => tab.ClassList.remove('active'));
     tabs[i].ClassList.add('active');
     panels.map(panel => panel.ClassList.remove('active'));
     panels[i].ClassList.add('active');
     }
   });
}(document)); */
(function (d) {
  let tabs = Array.prototype.slice.apply(document.querySelectorAll(".tabs-item"));
  let panels = Array.prototype.slice.apply(document.querySelectorAll(".panels-item"));
  document.getElementById("tabs").addEventListener("click", e => {
    if (e.target.classList.contains('tabs-item')) {
      let i = tabs.indexOf(e.target);
      tabs.map(tab => tab.classList.remove("active"));
      tabs[i].classList.add("active");
      panels.map(panel => panel.classList.remove("active"));
      panels[i].classList.add("active");
    }
  });
  let tabs1 = Array.prototype.slice.apply(document.querySelectorAll(".tabs-item1"));
  let panels1 = Array.prototype.slice.apply(document.querySelectorAll(".panels-item1"));
  document.getElementById("tabs1").addEventListener("click", e => {
    if (e.target.classList.contains('tabs-item1')) {
      let i = tabs1.indexOf(e.target);
      tabs1.map(tab1 => tab1.classList.remove("active"));
      tabs1[i].classList.add("active");
      panels1.map(panel1 => panel1.classList.remove("active"));
      panels1[i].classList.add("active");
    }
  });
  let tabs2 = Array.prototype.slice.apply(document.querySelectorAll(".tabs-item2"));
  let panels2 = Array.prototype.slice.apply(document.querySelectorAll(".panels-item2"));
  document.getElementById("tabs2").addEventListener("click", e => {
    if (e.target.classList.contains('tabs-item2')) {
      let i = tabs2.indexOf(e.target);
      tabs2.map(tab2 => tab2.classList.remove("active"));
      tabs2[i].classList.add("active");
      panels2.map(panel2 => panel2.classList.remove("active"));
      panels2[i].classList.add("active");
    }
  });
})(document);