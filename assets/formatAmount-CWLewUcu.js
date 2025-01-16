function o(n=0){const r=n.toString().split(".");let t=r[0];const e=r[1]||"";return t=t.replace(/\B(?=(\d{3})+(?!\d))/g,","),e?t+"."+e:t}export{o as f};
