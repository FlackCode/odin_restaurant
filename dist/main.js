(()=>{let e=document.querySelectorAll(".navLinks"),t=document.getElementById("content"),n=document.createElement("div"),o=document.createElement("div"),a=document.createElement("h1"),d=document.createElement("p");a.textContent="Welcome to our page!",d.textContent="This is a brand new restaurant. We hope you will enjoy your stay and your meal.",n.classList.add("landing"),o.classList.add("dim"),t.appendChild(n),n.appendChild(o),o.appendChild(a),o.appendChild(d);let r=document.createElement("div"),u=document.createElement("div");r.classList.add("belowContent"),u.classList.add("dim2"),r.appendChild(u),e.forEach(((e,t)=>{e.addEventListener("click",(()=>{var e;0===(e=t)?(a.textContent="Welcome to our page!",d.textContent="This is a brand new restaurant. We hope you will enjoy your stay and your meal.",r.style.background="url('images/restaurant2.jpg')",document.body.removeChild(r)):1===e?(a.textContent="Menu",d.textContent="Check out our delicious menu options!",document.body.appendChild(r),r.style.background="url('images/menu.jpg')",r.style.backgroundRepeat="no-repeat",r.style.backgroundSize="cover",r.style.backgroundPosition="center"):2===e?(a.textContent="Delivery",d.textContent="Check out our delivery options and choose the best one for you!",document.body.appendChild(r),r.style.background="url('images/delivery.jpg')",r.style.backgroundRepeat="no-repeat",r.style.backgroundSize="cover",r.style.backgroundPosition="center"):3===e?(a.textContent="Contacts",d.textContent="Check out our contact information!",document.body.appendChild(r),r.style.background="url('images/restaurant2.jpg')",r.style.backgroundRepeat="no-repeat",r.style.backgroundSize="cover",r.style.backgroundPosition="center"):4===e&&(a.textContent="About Us",d.textContent="Learn more about our restaurant and our team.",document.body.appendChild(r),r.style.background="url('images/restaurant2.jpg')",r.style.backgroundRepeat="no-repeat",r.style.backgroundSize="cover",r.style.backgroundPosition="center")}))}))})();