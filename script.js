const fmt = d => new Date(d+'T12:00:00').toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'});
const list=document.getElementById('post-list');
list.innerHTML=window.POSTS.map((p,i)=>`<a class="post" href="post/${p.slug}.html"><span class="num">${String(i+1).padStart(2,'0')}</span><div class="post-main"><span class="tag">${p.topic}</span><h3>${p.title}</h3><p>${p.excerpt}</p><span class="date">${fmt(p.date)}</span></div><span class="arrow">↗</span></a>`).join('');
document.getElementById('year').textContent=new Date().getFullYear();
