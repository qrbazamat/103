function a(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")}let r=Intl.NumberFormat("en",{notation:"compact",maximumFractionDigits:1});export{r as a,a as f};
