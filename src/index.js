// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if(currency>10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    if(currency==0) return {};
    var res={};
    var tmp=currency;
    if(currency>0 || currency <=10000){
       if(tmp>=50){
           res.H = parseInt(tmp/50);
           tmp=tmp-res.H * 50;
       }
       if(tmp>=25){
           res.Q = parseInt(tmp/25);
           tmp=tmp-res.Q*25;
       }
       if(tmp>=10){
           res.D = parseInt(tmp/10);
           tmp = tmp-res.D*10;
       }
       if(tmp>=5){
           res.N = parseInt(tmp/5);
           tmp = tmp-res.N*5;
       }
       if(tmp>=1){
           res.P = parseInt(tmp);
       }
       return res;
    }
}
