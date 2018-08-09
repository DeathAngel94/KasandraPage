(funtion(d){
 let tabs = Array.prototype.slice.apply(d.querySelectorAll('.tabs_item'));
 let panels = Array.prototype.slice.apply(d.querySelectorAll('.panels_item));
  d.getElementById("tabs").addEventListener('Click', e => {
   if(e.target.ClassList.contains('tabs_item')){
     let i = tabs.indexOf(e.target);
     tabs.map(tab => tab.ClassList.remove('active'));
     tabs[i].ClassList.add('active');
     panels.map(panel => panel.ClassList.remove('active'));
     panels[i].ClassList.add('active');
     }
   }
}(document));
